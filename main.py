from langchain_text_splitters import CharacterTextSplitter
from langchain_community.document_loaders import PyPDFLoader
from langchain_core.output_parsers import JsonOutputParser
from langchain_core.pydantic_v1 import BaseModel, Field
from langchain_core.prompts import PromptTemplate
from langchain_google_genai import GoogleGenerativeAI
import nltk

from social_impact import social_impact_keywords
from image_analyzer import open_image_from_url
from PIL import Image
from dotenv import load_dotenv
import os

###Loading environement variables api keys
load_dotenv("ML API Models/test.env")

google_api_key = os.getenv("GOOGLE_API_KEY")
#print(google_api_key)


###Structured output format for Claude, OpenAI
class OutputSocialScore(BaseModel):
    projectAppId: str = Field(description="The ID of the user")
    projectAppName: str = Field(description="App name of provider")
    projectName: str = Field(description="Name of the project")
    projectOwner: str = Field(description="Owner of the project")
    projectEstimate: str = Field(description="Overall estimate for the project")
    projectRevenueModel: str = Field(description="Buissness model of revenue")
    projectContactInfo: str = Field(description="Contact info for the team")
    socialImpactScore: str = Field(description="Social Impact score of the project from the POV of the investor")
    socialImpactText: str = Field(description="Social Impact explanation of the project")
    socialImpactImprovement: str = Field(description="How can the idea score more social impact score")
    socialEstimateCheck: str = Field(description="Identifies if the revenue claim of the project is true or not")


####Splitting texts on 200 chars, for faster tokenizing
loader = PyPDFLoader("sodapdf-converted.pdf", extract_images=False)
pages = loader.load_and_split()

text_splitter = CharacterTextSplitter.from_tiktoken_encoder(
    chunk_size=200, chunk_overlap=0
)

documents = loader.load()
#print(documents)


##Details need to be collected via Flask
projectAppId = "ABCD"
projectAppName = "Cleaning neighbourhood park"
projectName = "Test Project"
projectOwner = "Shanthosh"
projectEstimate = "2000"
projectRevenueModel = "Subscription Based"
projectContactInfo = "7871252414"


processed_str = ""
social_impact_score = 0
for i in range(len(pages)):
    texts = text_splitter.split_text(pages[i].page_content)
    processed_str = " ".join(texts)
    tokens = nltk.word_tokenize(processed_str.lower())
    for keyword in social_impact_keywords:
        if keyword in tokens and social_impact_score < 10:
            social_impact_score += 0.5
#print(social_impact_score)

document_str = ""
processed_str = ""
social_impact_score = 0
texts = text_splitter.split_text(document_str)
tokens = nltk.word_tokenize(processed_str.lower())
for keyword in social_impact_keywords:
    if keyword in tokens and social_impact_score < 10:
        social_impact_score += 0.5
#print(social_impact_score)


###Image data retrival and analysis
image_data = []
image_urls = [
    "https://firebasestorage.googleapis.com/v0/b/gdsc-bxkqqg.appspot.com/o/users%2FiHeoDWXMYIbTzsJBaw1o0D25jYP2%2Fuploads%2F1708897372419000.jpeg?alt=media&token=628da5ca-885a-48fb-84b4-a517bdd2e3ff",
]
for image_url in image_urls:
    output_img = open_image_from_url(image_url)
    if isinstance(output_img, Image.Image):
        im = output_img
        image_data.append(im)
    else:
        print("Error loading image:", output_img)  # Error Handling
        exit(0)


##parser instruction for json output
parser = JsonOutputParser(pydantic_object=OutputSocialScore)

prompt = PromptTemplate(
    template='''Identify if the text description/documentation of a technological project aimed for social impact contains 
    the social impact keywords such as {social_impact_keywords}(Note that you can use other words other than the given words also to identify the reliability)
    . Analyze the image of the prototype (downloaded and saved as img/test.jpg) and the details 
    of the project given the description is {processed_str}. The rule-based algorithm has provided a score of {social_impact_score} by checking if the 
    keywords {social_impact_keywords} are present in the given text. So be fair and judge the project given its documentation and image based on the 
    following criteria such as:
    - Breadth of Impact –--> A measurement of how many people the project impacts.
    - Changing Paradigms –--> The degree to which the project encouraged mindset and behavior changes.
    - Wellbeing --–> The degree to which a person experiences improved quality of life.
    - Empowerment –--> The degree to which a person or community is empowered to do what they wish to do.
    - Depth of Impact –--> The degree to which a project provides lasting, positive changes in a person’s life.
    - Quality of Project Implementation –--> A measure of how well the project was implemented.
    A few images stored in {image_data} so use those to identify if the image corresponds to their project or not. If it doesn't then, 
    don't give any social impact credit for it. Give a maximum of 3 points for each criterion where 0 being the lowest and 3 being the highest 
    (Be very strict when marking these since these can attract potential investors, so think of rating on each criterion from the point of view of the 
    investor who might be investing in this idea). Hence calculate the social score on a scale of 0 to 10 using the provided points before. 
    Note that the project should be technical like some app or software or something else and not like an organizing event. If it is, 
    then give a social impact score of 3 and reason with them that investors need something new in technological advents to invest and hence there is very 
    low social impact score was given. Note that the field of socialImpactImprovement is required and keep it within 20 words.You need to use these values 
    to fill up the other values which are given below. Also, do a check on whether the estimated revenue can be made based on the project idea. Make sure you 
    judge the same projects idea in the same way. If yes, then state it as true, else state it as false.\nThe projectAppId = {projectAppId}, 
    projectAppName = {projectAppName}, projectName = {projectName}, projectOwner = {projectOwner}, projectEstimate = {projectEstimate}, projectRevenueModel = {projectRevenueModel}, 
    projectContactInfo = {projectContactInfo}.\n{format_instructions}\n''',

    input_variables=[
        "social_impact_keywords",
        "processed_str",
        "image_data",
        "social_impact_score",
        "projectAppId",
        "projectAppName",
        "projectName",
        "projectEstimate",
        "projectRevenueModel",
        "projectContactInfo",
        "projectOwner",
    ],
    partial_variables={"format_instructions": parser.get_format_instructions()},
)

llm = GoogleGenerativeAI(model="gemini-pro", google_api_key=google_api_key)
chain = prompt | llm | parser
results = chain.invoke(
    {
        "social_impact_keywords": social_impact_keywords,
        "processed_str": processed_str,
        "image_data": image_data,
        "social_impact_score": social_impact_score,
        "projectAppId": projectAppId,
        "projectAppName": projectAppName,
        "projectName": projectName,
        "projectEstimate": projectEstimate,
        "projectRevenueModel": projectRevenueModel,
        "projectContactInfo": projectContactInfo,
        "projectOwner": projectOwner,
    }
)
print(results)

