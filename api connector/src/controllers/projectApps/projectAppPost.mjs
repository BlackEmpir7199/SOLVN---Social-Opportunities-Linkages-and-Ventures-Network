import axios from "axios";
import { getAllIdAndAppName } from "../../utils/getAllIdAndAppName.mjs";
import { verifyThisUnknownApp } from "../../utils/verifyApp.mjs";


const publishToAllInvestingApps = async (req, res, next) => {
    try {
        const {projectAppId, projectAppName, projectName, projectOwner, projectTeam, projectEstimate, projectRevenueModel, projectContactInfo, projectDomain, projectDescription} = req.body;
        if(projectAppId === undefined || projectAppName === undefined || projectName === undefined || projectOwner === undefined || projectTeam === undefined || projectEstimate === undefined ||  projectRevenueModel === undefined || projectContactInfo === undefined ||projectDomain === undefined || projectDescription === undefined){
            return res.status(400).send(
                {
                    status: 400,
                    message: "Bad Request!, Missing required fields",
                    error: null
                }
            )
        }
        const data = await verifyThisUnknownApp({projAppName: projectAppName, id: projectAppId});
        if(data){
            // Need to boradcast data to all these apps
            const allInvestingApps = await getAllIdAndAppName(1);
            let sendedApps = [];
            let failCount = 0;
            allInvestingApps.forEach(async (investorApp) => {
                const res = await axios.post(investorApp.investerPostProjects,{
                    projectDetail: {
                        'projectAppId': projectAppId,
                        'projectAppName': projectAppName,
                        'projectName': projectName,
                        'projectOwner': projectOwner,
                        'projectTeam': projectTeam,
                        'projectEstimate': projectEstimate,
                        'projectRevenueModel': projectRevenueModel,
                        'projectContactInfo': projectContactInfo,
                        'projectDescription': projectDescription
                    }
                });
                if(res.ok) {
                    sendedApps.push(investorApp.invAppName);
                }else{
                    failCount++;
                }
                sendedApps.push(investorApp.invAppName);
            });
            return res.status(200).send({
                status: 200,
                message: "Message had been boradcasted to all registered apps!",
                failcount: failCount,
                error: null
            })
        }
        return res.status(400).send(
            {
                staus: 400,
                message: 'Unauthorised App',
                error: 'Missing id or appname'
            }
        )
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
    publishToAllInvestingApps
}