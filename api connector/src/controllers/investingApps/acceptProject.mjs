import axios from "axios";
import { verifyThisUnknownApp } from "../../utils/verifyApp.mjs";
import { connectToDatabase } from "../../db/db.mjs";
import { projectAppModel } from "../../models/projectApp.mjs";

const acceptProject = async (req, res, next) => {
    const {invAppId, invAppName, invUserId, invName, projectId, projectAppId, projectAppName} = req.body;
    if(invAppId === undefined || invAppName === undefined || invUserId === undefined || invName === undefined || projectId === undefined || projectAppId === undefined || projectAppName === undefined) {
        return res.status(400).send(
            {
                status: 400,
                message: 'Bad request!, missing parameters!',
                error: null
            }
        );
    }
    const isThisInvAppValid = await verifyThisUnknownApp({invAppName: invAppName, id: invAppId}, 1);
    const isThisProjAppValid = await verifyThisUnknownApp({projAppName: proAppName, id: projectAppId}, 2);
    if(!isThisInvAppValid && !isThisProjAppValid) {
        return res.status(403).send(
            {
                status: 403,
                message: 'Authorization error!',
                error: null
            }
        )
    }
    await connectToDatabase();
    const projApp = projectAppModel.findOne({id: projectAppId});
    if(projApp){
        const sendToProjectApp = await axios.post(projApp.reciveAckApi, {
            projectAppId: projectAppId,
            projectAppName: projectAppName,
            invAppId: invAppId,
            invUserId: invUserId,
            invName: invName,
        })
        if(sendToProjectApp.ok) return res.status(200).send({
            status: 200,
            message: 'Success!',
            error: null
        })
    }
    return res.status(501).send({
        status: 501,
        message: 'Internal server error!',
        error: null
    })
}

export {
    acceptProject
}