import { connectToDatabase } from "../../db/db.mjs";
import { investingAppModel } from "../../models/investingApp.mjs";
import { genNewID } from "../../utils/idGenerator.mjs";
import { verifyThisUnknownApp } from "../../utils/verifyApp.mjs";

/*
Investor APP can
1. Register:
    Data required for that:
        1. investorAppName
        2. investorAppOwner
        3. investorAppSubscription
        4. investorAPis's ( he needed to implement):
            - investorGetProjects
            - investerPostDetails,
            - postProjects
            
            1. To get project details
                type: GET
                field that will be sent along:
                    projectAppName
                    projectAppOwner
                    projectAppLink
                    projectDetails (list of JSON)
                        structure:
                                projectTitle
                                projectImpactArea
                                projectOwner
                                projectImages
                                projectDocuments
                                projectFundRequired
                                projectContactDetails

            2. To Post something to Project App
                type: POST
                field that need to be sent:
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
            
            3. To get broadcasted projectdetails
                type: POST
                field that will be sent
                    projectAppName
                    projectAppOwner
                    projectAppLink
                    projectDetails (list of JSON)
                        structure:
                                projectTitle
                                projectImpactArea
                                projectOwner
                                projectImages
                                projectDocuments
                                projectFundRequired
                                projectContactDetails
*/

const registerNewInvestingApp = async (req, res, next) => {
    try {
        const { invAppName, invAppOwner, invAppLink, invAppSubscription, investorGetProjectsApi, investorPostDetailsApi, postProjectsApi,  } = req.body;
        if(invAppName === undefined || invAppOwner === undefined || invAppLink === undefined || invAppSubscription === undefined || investorGetProjectsApi === undefined || investorPostDetailsApi === undefined || postProjectsApi === undefined){
            return res.status(400).send(
                {
                    status: 400,
                    message: "Bad Request!, Missing required details!",
                    error: null
                }
            )
        }
        await connectToDatabase();
        const thisGuyId = genNewID(invAppName, invAppLink);
        const isThisGuysPresent = await verifyThisUnknownApp({invAppName: invAppName}, 1);
    
        if(isThisGuysPresent) {
            return res.status(200).send(
                {
                    status: 200,
                    message: "This app has been already registered as an Investor",
                    error: null
                }
            )
        }
    
        const newInvestorApp = new investingAppModel({
            invAppName,
            invAppOwner,
            invAppSubscription,
            invAppLink,
            investorGetProjects: investorGetProjectsApi,
            investerPostDetails: investorPostDetailsApi,
            investerPostProjects: postProjectsApi,
            id: thisGuyId
        })
    
        await newInvestorApp.save();
    
        return res.status(200).send(
            {
                stauts: 200,
                message: "App investor created successfully!",
                appInvId: thisGuyId
            }
        )
    } catch (error) {
        return res.status(500).send(
            {
                status: 500,
                message: 'SOMETHING WENT WRONG!',
                error: error
            }
        )
    }
}

export {
    registerNewInvestingApp
}