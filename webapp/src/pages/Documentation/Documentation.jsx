import React from "react";

import './Documentation.css';

export default function Documentation() {
    return(
        <div className="document-page">
            <h1>Documentation</h1>
            {/* One */}
            <div className="code-heading">
                <h4>Investor Registration API</h4>
                <div className="code-req">POST /invest/register</div>
                <div className="code-des">Register a new investor app to the system.</div>
                <div className="code-body">Required:</div>
                <div className="code-ans">
                    <span>
                        invAppName (string): Name of the investor app.
                    </span>
                    <span>
                        invAppOwner (string): Owner of the investor app.
                    </span>
                    <span>
                        invAppLink (string): Link to the investor app.
                    </span>
                    <span>
                        invAppSubscription (string): Subscription details of the investor app.
                    </span>
                    <span>
                        investorGetProjectsApi (string): API endpoint for getting projects.
                    </span>
                    <span>
                        investorProposedDetailsApi (string): API endpoint for proposed project details.
                    </span>
                    <span>
                        proposedProjectApi (string): API endpoint for proposed projects.
                    </span>
                </div>
            </div>

            <div className="code-heading">
                <h4>Project Validation API</h4>
                <div className="code-req">POST /evaluate_social_impact</div>
                <div className="code-des">The provided API serves to evaluate the social impact and feasibility of technological projects based on various criteria including text documentation, prototype images, and associated details. It employs a combination of rule-based algorithms and machine learning to generate a social impact score and provide comprehensive feedback on the project's strengths and areas for improvement.</div>
                <div className="code-body">Required:</div>
                <div className="code-ans">
                    <span>
                    processed_str: Text description/documentation of the project.
                    </span>
                    <span>
                    image_urls: URLs of prototype images associated with the project.
                    </span>
                    <span>
                    social_impact_score: Pre-calculated social impact score of the project.
                    </span>
                    <span>
                    projectName: Name of the project.
                    </span>
                    <span>
                    projectRevenueModel: Revenue model of the project.
                    </span>
                    <span>
                    projectContactInfo: Contact information for the project team
                    </span>
                    <span>
                    projectOwner: Owner of the project.
                    </span>
                </div>
                <div className="code-body">Response</div>
                <div className="code-ans">
                projectAppId: ID of the project application.
                projectAppName: Name of the project application.
                projectContactInfo: Contact information for the project team.
                projectEstimate: Estimated cost of the project.
                projectName: Name of the project.
                projectOwner: Owner of the project.
                projectRevenueModel: Revenue model of the project.
                socialImpactScore: Social impact score of the project.
                socialImpactText: Explanation of the social impact of the project.
                socialImpactImprovement: Recommendations for improving the social impact of the project.
                socialEstimateCheck: Validation of the estimated revenue claim.
                riskFactor: Risk factor associated with investing in the project.
                </div>
            </div>

            <div className="code-heading">
                <h4>Get Projects API</h4>
                <div className="code-req">GET /invest/getProjects</div>
                <div className="code-des">Retrieve all projects broadcasted across different investor apps.
            </div>
                <div className="code-body">Required:</div>
                <div className="code-ans">
                    <span>
                    invAppName (string, optional): Name of the investor app.
                    </span>
                    <span>
                    invAppId (string, optional): ID of the investor app.
                    </span>
                </div>
                <div className="code-body">Response</div>
                <div className="code-ans">
                    status (integer): HTTP status code. <br />
                    message (string): Response message. <br />
                    data (array, optional): Data fetched from the investor apps. <br />
                    error (string, optional): Error message if an error occurs.
                </div>
            </div>

            
            <div className="code-heading">
                <h4>Update Investor Information API</h4>
                <div className="code-req">PATCH /invest/update</div>
                <div className="code-des">Update investor personal information.
            </div>
                <div className="code-body">Required:</div>
                <div className="code-ans">
                    <span>
                    investorAppId (string): ID of the investor app.
                    </span>
                    <span>
                    investorAppName (string): Name of the investor app.
                    </span>
                    <span>
                    investorId (string): ID of the investor.
                    </span>
                    <span>
                    dataToBeChanged (object): Data to be updated.
                    </span>
                    <span>investorPostId (string, optional): ID of the investor post.</span>
                </div>
                <div className="code-body">Response</div>
                <div className="code-ans">
                    status (integer): HTTP status code. <br />
                    message (string): Response message. <br />
                    data (object, optional): Updated data or list of available apps. <br />
                    error (string, optional): Error message if an error occurs.
                </div>
            </div>
            <div className="code-heading">
                <h4>Project Deletion API</h4>
                <div className="code-req">DELETE /invest/projectDelete</div>
                <div className="code-des">Delete a project.
            </div>
                <div className="code-body">Required:</div>
                <div className="code-ans">
                <span>
                investorAppId (string): ID of the investor app.
                </span>
                <span>
                investorAppName (string): Name of the investor app.
                </span>
                <span>
                    investorId (string): ID of the investor.
                </span>
                <span>
                    investorProposalId (string): ID of the project to be deleted.

                </span>
                </div>
                <div className="code-body">Response</div>
                <div className="code-ans">
                status (integer): HTTP status code. <br />
message (string): Response message. <br />
data (object, optional): List of available apps. <br />
error (string, optional): Error message if an error occurs. <br />
                </div>
            </div>

            <div className="code-heading">
                <h4>ROI Calculation API</h4>
                <div className="code-req">POST /invest/roi</div>
                <div className="code-des">Calculate return on investment (ROI) for a project.

            </div>
                <div className="code-body">Required:</div>
                <div className="code-ans">
                    <span>
                        projectAppId (string): ID of the project application.
                    </span>
                    <span>
                        projectAppName (string): Name of the project application.
                    </span>
                    <span>
                        projectName (string): Name of the project.
                    </span>
                    <span>
                investorAppId (string): ID of the investor app.
                    </span>
                    <span>
                investorAppName (string): Name of the investor app.
                    </span>
                    <span>
                ProjectId (string): ID of the project.
                    </span>
                    <span>
                projectDetails (string): Details of the project.
                    </span>
                    <span>
                projectBusinessModel (string): Business model of the project.
                    </span>
                    <span>
                projectStage (string): Stage of the project.
                    </span>
                    <span>
                ProjectRevenue (string): Project revenue.
                    </span>
                    <span>
                projectEstimate (string): Estimated project cost.
                    </span>
                    <span>
                investorAmountInvest (string): Amount invested by the investor.
                    </span>
                </div>
                <div className="code-body">Response</div>
                <div className="code-ans">
                status (integer): HTTP status code. <br />
message (string): Response message. <br />
data (object): Data sent including project and investor details. <br />
error (string, optional): Error message if an error occurs. <br />
                </div>
            </div>

            <div className="code-heading">
                <h4>ROI Calculation API</h4>
                <div className="code-req">POST /invest/roi</div>
                <div className="code-des">Calculate return on investment (ROI) for a project.

            </div>
                <div className="code-body">Required:</div>
                <div className="code-ans">
                    <span>
                        projectAppId (string): ID of the project application.
                    </span>
                    <span>
                        projectAppName (string): Name of the project application.
                    </span>
                    <span>
                        projectName (string): Name of the project.
                    </span>
                    <span>
                investorAppId (string): ID of the investor app.
                    </span>
                    <span>
                investorAppName (string): Name of the investor app.
                    </span>
                    <span>
                ProjectId (string): ID of the project.
                    </span>
                    <span>
                projectDetails (string): Details of the project.
                    </span>
                    <span>
                projectBusinessModel (string): Business model of the project.
                    </span>
                    <span>
                projectStage (string): Stage of the project.
                    </span>
                    <span>
                ProjectRevenue (string): Project revenue.
                    </span>
                    <span>
                projectEstimate (string): Estimated project cost.
                    </span>
                    <span>
                investorAmountInvest (string): Amount invested by the investor.
                    </span>
                </div>
                <div className="code-body">Response</div>
                <div className="code-ans">
                status (integer): HTTP status code. <br />
message (string): Response message. <br />
data (object): Data sent including project and investor details. <br />
error (string, optional): Error message if an error occurs. <br />
                </div>
            </div>

            <div className="code-heading">
                <h4>Boradcast Investor Idea</h4>
                <div className="code-req">POST /invest/broadcast_project_like</div>
                <div className="code-des">Broadcast project likes and funding decisions.

            </div>
                <div className="code-body">Required:</div>
                <div className="code-ans">
                    <span>
                invAppId (string): ID of the investor app.
                    </span>
                    <span>
                invAppName (string): Name of the investor app.
                    </span>
                    <span>
                invUserId (string): ID of the user.
                    </span>
                    <span>
                invName (string): Name of the investor.
                    </span>
                    <span>
                projectId (string): ID of the project.
                    </span>
                    <span>
                projectAppId (string): ID of the project application.
                    </span>
                    <span>
                projectAppName (string): Name of the project application.
                    </span>
                </div>
                <div className="code-body">Response</div>
                <div className="code-ans">
                status (integer): HTTP status code. <br />
message (string): Response message. <br />
error (string, optional): Error message if an error occurs.
                </div>
            </div>

            <div className="code-heading">
                <h4>Create New Project App API</h4>
                <div className="code-req">POST /invest/create_project_app</div>
                <div className="code-des">Create a new project app.

            </div>
                <div className="code-body">Required:</div>
                <div className="code-ans">
                    <span>
                        projAppName (string): Name of the project app.
                    </span>
                    <span>
                        projAppOwner (string): Owner of the project app.
                    </span>
                    <span>
projAppLink (string): Link to the project app.
                    </span>
                    <span>
projAppSubscription (string): Subscription details of the project app.
                    </span>
                    <span>
getInvestorPostApi (string): API endpoint for getting investor posts.
                    </span>
                    <span>
sendProjectDetailsApi (string): API endpoint for sending project details.

                    </span>
                </div>
                <div className="code-body">Response</div>
                <div className="code-ans">
                status (integer): HTTP status code. <br />
message (string): Response message. <br />
appProjId (string, optional): ID of the newly created project app. <br />
error (string, optional): Error message if an error occurs" <br />
                </div>
            </div>

            <div className="code-heading">
                <h4>Publish New Project API</h4>
                <div className="code-req">POST /project/new</div>
                <div className="code-des">Publish a new project to all registered investing apps.
            </div>
                <div className="code-body">Required:</div>
                <div className="code-ans">
                    <span>
                projectAppId (string): ID of the project application.
                    </span>
                    <span>
                projectAppName (string): Name of the project application.
                    </span>
                    <span>
                projectName (string): Name of the project.
                    </span>
                    <span>
                projectOwner (string): Owner of the project.
                    </span>
                    <span>
                projectTeam (string): Team working on the project.
                    </span>
                    <span>
                projectEstimate (string): Estimated project cost.
                    </span>
                    <span>
                projectRevenueModel (string): Revenue model of the project
                    </span>
                    <span>
                projectContactInfo (string): Contact information for the project.
                    </span>
                    <span>
                projectDomain (string): Domain of the project.
                    </span>
                    <span>
                projectDescription (string): Description of the project.
                    </span>
                </div>
                <div className="code-body">Response</div>
                <div className="code-ans">
                status (integer): HTTP status code. <br />
message (string): Response message. <br />
appProjId (string, optional): ID of the newly created project app. <br />
error (string, optional): Error message if an error occurs" <br />
                </div>
            </div>
        </div>
    )
}