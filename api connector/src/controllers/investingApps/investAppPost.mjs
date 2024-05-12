import axios from "axios";
import { getAllIdAndAppName } from "../../utils/getAllIdAndAppName.mjs";
import { verifyThisUnknownApp } from "../../utils/verifyApp.mjs";

const investAppPost = async (req, res, next) => {
    try {
        const {investAppId, investAppName, investorName, investorContactInfo, investorProjectDetail, investorProjectFund, investorProjectTitle} = req.body;
        if(investAppId === undefined || investAppName === undefined || investorName === undefined || investorContactInfo === undefined || investorProjectDetail === undefined || investorProjectFund === undefined || investorProjectTitle === undefined){
            return res.status(400).send({
                status: 400,
                message: "Bad request!, Missing required fields",
                error: null
            });
        }
        const data = await verifyThisUnknownApp({invAppName: investAppName, id: investAppId}, 1);
        if(data){
            const allProjectsApp = await getAllIdAndAppName(1);
            let sendedApps = [];
            let failCount = 0;
            allProjectsApp.forEach(async (projectApp) => {
                const res = await axios.post(projectApp.getInvestorPost,{
                    postDetails: {
                        'investAppId': investAppId,
                        'investAppName': investAppName, 
                        'investorName': investorName,
                        'investorContactInfo': investorContactInfo, 'investorProjectDetail': investorProjectDetail,
                        'investorProjectFund': investorProjectFund, 'investorProjectTitle': investorProjectTitle
                    }
                });
                if(res.ok) {
                    sendedApps.push(projectApp.invAppName);
                }else{
                    failCount++;
                }
                sendedApps.push(projectApp.projAppName);
            });
            return res.status(200).send({
                status: 200,
                message: "Message had been boradcasted to all registered apps!",
                failcount: failCount,
                error: null
            })
        }
        return res.status(400).send({
            status: 400,
            message: 'Unauthorised App',
            error: 'Missing id or appname'
        })
    } catch (error) {
        return res.status(500).send(
            {
                status: 500,
                message: 'Something went wrong!!',
                error: error
            }
        )
    }
}

export {
    investAppPost
}