import { connectToDatabase } from "../../db/db.mjs";
import { projectAppModel } from "../../models/projectApp.mjs";
import { genNewID } from "../../utils/idGenerator.mjs";
import { verifyThisUnknownApp } from "../../utils/verifyApp.mjs";

/*
Project APPS Can
1 - Register:
        1. On registering they get a unique id through which they can contact in future
            Fields required:
                API END POINTS:
                    1. To POST data from investor app:
                        Type: POST
                        dataThatwill be sent:
                            investorAPPName
                            investorAPPOwner
                            investorAppLink
                            investorAppPost (JSON)
                                structure of each
                                    postTitle
                                    postImpactArea
                                    postOwner
                                    postImages
                                    postDocuments
                                    postFundDetails
                                    postContactDetails
                    2. To retrive Project Details
                        TYPE: GET
                        fields need to be sent:
                            projectAppName
                            projectAppOwner
                            projectAppLink
                            projectData (JSON)
                                structure of each
                                    projectTitle
                                    projectImpactArea
                                    projectOwner
                                    projectImages
                                    projectDocuments
                                    projectFundRequired
                                    projectContactDetails
                    
2. Requests:
        1. Post new project:
            POST
            fields:
                projAppName     -   Required
                projAppOwner    -   Required 
                projAppLink     -   Required
                projAppSubscription
*/

const registerNewProjectApp = async (req, res, next) => {
    try {
        const { projAppName, projAppOwner, projAppLink, projAppSubscription, getInvestorPostApi, sendProjectDetailsApi } = req.body;
        if(projAppName === undefined || projAppOwner === undefined || projAppLink === undefined || projAppSubscription === undefined || getInvestorPostApi === undefined || sendProjectDetailsApi === undefined){
            return res.status(400).send(
                {
                    status: 400,
                    message: "Bad Request!, Missing required details!"
                }
            )
        }
        await connectToDatabase();
        const thisGuyId = genNewID(projAppName, projAppLink);
        const checkIfAlreadyExist = await verifyThisUnknownApp({projAppName: projAppName});
        if(checkIfAlreadyExist){
           return res.status(200).send(
            {
                status: 200,
                message: 'This app has been already registered with our service!',
                error: null
            }
           ) 
        }
        const newProjectApp = new projectAppModel({
            projAppName,
            projAppOwner,
            projAppSubscription,
            id: thisGuyId,
            getInvestorPost: getInvestorPostApi,
            sendProjectDetails: sendProjectDetailsApi
        })
    
        await newProjectApp.save();
        return res.status(200).send(
            {
                staus: 200,
                message: "Project app created successfully!",
                appProjId: thisGuyId
            }
        );
    } catch (error) {
        return res.status(500).send(
            {
                status: 500,
                message: 'Internal server error!',
                error: error
            }
        )
    }
}

export {
    registerNewProjectApp
}