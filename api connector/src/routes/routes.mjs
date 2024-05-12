import express from "express";
import { homeRoute } from "../controllers/homeRoute.mjs";
import { sendMail } from "../services/mailService.mjs";
import { registerNewInvestingApp } from "../controllers/investingApps/investAppRegister.mjs";
import { registerNewProjectApp } from "../controllers/projectApps/projectAppRegister.mjs";
import { publishToAllInvestingApps } from "../controllers/projectApps/projectAppPost.mjs";
import { investAppPost } from "../controllers/investingApps/investAppPost.mjs";
import { getProjects } from "../controllers/projectApps/getProjects.mjs";
import { investAppPatchRequest } from "../controllers/investingApps/investAppPatchRequest.mjs";
import { projectAppUpdate } from "../controllers/projectApps/projectAppUpdate.mjs";
import { deleteProject } from "../controllers/projectApps/deleteProject.mjs";
import { socialImpactScore } from "../controllers/projectApps/socialImpactScore.mjs";
import { sendChat } from "../controllers/chat/sendChat.mjs";
import { investorProjectDelete } from "../controllers/investingApps/investorProjectDelete.mjs";
import { investAppROI } from "../controllers/investingApps/investAppROI.mjs";
import { acceptProject } from "../controllers/investingApps/acceptProject.mjs";

const router = express.Router();

// Get requests
router.get('/', homeRoute);


// For Investing APPs
router.post('/invest/register', registerNewInvestingApp); 
router.post('/invest/new', investAppPost);

router.get('/invest/getProjects', getProjects);

router.patch('/invest/update', investAppPatchRequest);

router.delete('/invest/projectDelete', investorProjectDelete)
router.post('/invest/roi', investAppROI);

router.post('/invest/ack', acceptProject);

// For Project Apps
router.post('/project/register', registerNewProjectApp);
router.post('/project/new', publishToAllInvestingApps);

router.patch('/project/update', projectAppUpdate);
router.delete('/project/delete', deleteProject);
router.post('/project/soc', socialImpactScore);

// Chat
router.post('/chat', sendChat);

// Send requests
router.post('/mail', sendMail);

export default router;