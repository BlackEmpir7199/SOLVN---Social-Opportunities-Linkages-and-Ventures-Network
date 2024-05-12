import axios from "axios";
import { getAllIdAndAppName } from "../../utils/getAllIdAndAppName.mjs"
import { verifyThisUnknownApp } from "../../utils/verifyApp.mjs";

const getProjects = async (req, res, next) => {
    try {
        const { invAppName, invAppid } = req.body;
        if(invAppName === undefined || invAppid === undefined){
            return res.status(400).send(
                {
                    status: 400,
                    message: 'Bad request!, Missing required field!',
                    error: null
                }
            );
        }
        const isThisGuysgen = await verifyThisUnknownApp({invAppName: invAppName, id: invAppid}, 1)
        if(!isThisGuysgen) {
            return res.status(400).send(
                {
                    staus: 400,
                    message: "Invalid APP",
                    error: null
                }
            )
        }
        const projectAppList = await getAllIdAndAppName(2);
        let dataFetchedFromProjectApps = [];
        let failCount = 0;
        projectAppList.forEach(async (projectApp) => {
            const myRes = await axios.get(projectApp.getInvestorPost);
            if(myRes.ok){
                myRes.data.projectList.forEach(r => dataFetchedFromProjectApps.push(r));
            }else{
                failCount++;
            }
        });
        return res.status(200).send(
            {
                status: 200,
                message: 'Success!',
                data: dataFetchedFromProjectApps
            }
        )
    } catch (error) {
        return res.status(500).send(
            {
                status: 500,
                message: 'Something went wrong!!',
                error: error
            }
        )
    }
};

export {
    getProjects
}