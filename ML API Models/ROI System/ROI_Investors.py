# these are the details sent by the API hosted for everyone, direct service -  identify the ROI and summarize the entire project
# idea and allow the investor to identify the potential flaws of the idea, allowing them to work on it properly
# risk factor, identifying the risk tolerance levels of the projects etc.,

from langchain_core.output_parsers import JsonOutputParser
from langchain_core.pydantic_v1 import BaseModel, Field
from langchain_core.prompts import PromptTemplate
from langchain_google_genai import GoogleGenerativeAI
from flask import Flask, request, jsonify
from dotenv import load_dotenv
import os

app = Flask(__name__)

# Loading the environment Variable of Google Gemini API for model text inputs
project_dir = os.path.dirname(os.path.abspath(__file__))
load_dotenv(os.path.join(project_dir, '..', 'test.env'))
google_api_key = os.getenv("GOOGLE_API_KEY")


# investorAppId, investorAppName, projectAppId, projectAppName, projectName, projectEstimate, projectId,
# projectDetails, projectBuissnessModel, projectStage, projectRevenue, projectROI, teamStrength - use point based system to validate if tech stack can meet the project needs
# competitiveAdvantage, competitive disasvantages, financialProjection in a year, targetMarket, amount investor might invest -- user made to enter that details.
class RoiInvestment(BaseModel):
    projectAppId: str = Field(description="The ID of the user")
    projectAppName: str = Field(description="App name of provider")
    projectName: str = Field(description="Name of the project")
    projectEstimate: str = Field(description="Cost taken by the project to build it from scratch in INR")
    projectRevenue: str = Field(description="The revenue the project which it is generating in INR")
    investorAppId: str = Field(description="ID of the investor app from which the request is being sent")
    investorAppName: str = Field(description="App name of the investing app from which the request is being sent")
    projectId: str = Field(description="The ID of the project to be validated for ROI,...")
    projectStage: str = Field(description="The stage at which the project is in. Stage 1: Ideation, Stage 2: Development, Stage 3: Deployed and running")
    projectRoi: int = Field(description="The percentage of ROI of the project which is identified by the AI given an investment amount")
    teamStrength: int = Field(description="The score provided to identify if the tech stack of the team is enough to finish the project or not")
    competitiveAdvantage: str = Field(description="The competitive edge that the project has over other projects/company in the market")
    competitiveDisadvantage: str = Field(description="The competitive flaw that the project may have over other projects of company in the market")
    financialProject: str = Field(description="The amount in INR which is projected for the project to reach in a year if considering ideal conditions of developement, and deployment")
    targetMarket: str = Field(description="The target audience of the project")


# Parser to parse the LLM model in
parser = JsonOutputParser(pydantic_object=RoiInvestment)

# Given inputs - investorAppId, investorAppName, projectAppId, projectAppName, projectName, projectEstimate,
# projectId, projectDetails, projectBussinessModel, projectStage, projectRevenue
prompt = PromptTemplate(
    template='''The owner of the project has shared their project details which is as follows\n{projectDetails}. 
    They have also sugggested a business model of {projectBusinessModel} and has a revenue of {projectRevenue}
    and is in the {projectStage} stage. Identify whether the team or person has good enough skills to validate that idea
    and rate their team on a scale of 1 to 10 considering 1 to be low and 10 being the highest, consider things such as \n
    --Tech Stack, Team composition, Team skills. Calculate the returns the investor might be getting back just in case he invests
    in the project, considering that the investor wants to invest about {investorAmountInvest} rupees in INR. Next you need to identify the competitive advantage of the product 
    with respect to its market and also identify the market disadvantages it might face from competitors. Then you need
    to identify the target audience the project is intented towards from the {projectDetails} and {projectBusinessModel}.
    After that give a financial projection after 1 year considering the market currently, do make sure to give it a assumption value
    based on the current need of that product in the market, and the other booming factors in the field of technology. Save it in the according variables.
    Consider that the projectAppId = {projectAppId}, projectAppName = {projectAppName}, projectName = {projectName},
    projectEstimate = {projectEstimate}, projectRevenue = {projectRevenue}, projectId = {projectId}, investorAppId = {investorAppId},
    investorAppName = {investorAppName}.\n{format_instructions}\n''',

    input_variables=[
        "projectAppId",
        "projectAppName",
        "projectName",
        "projectEstimate",
        "projectRevenue",
        "projectId",
        "projectDetails",
        "projectBusinessModel",
        "projectStage",
        "investorAppId",
        "investorAppName",
        "investorAmountInvest"
    ],
    partial_variables={"format_instructions": parser.get_format_instructions()},
)

llm = GoogleGenerativeAI(model="gemini-pro", google_api_key=google_api_key)
chain = prompt | llm | parser


@app.route('/roi_project_analysis', methods=['POST'])
def roi_project_analysis():
    project_data = request.json
    results = chain.invoke({
        "projectAppId": project_data.get('projectAppId'),
        "projectAppName": project_data.get('projectAppName'),
        "projectName": project_data.get('projectName'),
        "projectEstimate": project_data.get('projectEstimate'),
        "projectRevenue": project_data.get('projectRevenue'),
        "projectId": project_data.get('projectId'),
        "projectDetails": project_data.get('projectDetails'),
        "projectBusinessModel": project_data.get('projectBusinessModel'),
        "projectStage": project_data.get('projectStage'),
        "investorAppId": project_data.get('investorAppId'),
        "investorAppName": project_data.get('investorAppName'),
        "investorAmountInvest": project_data.get('investorAmountInvest'),
})
    json_data = {"data": results}
    return json_data


if __name__ == '__main__':
    app.run(debug=True, port=8000, host='0.0.0.0')