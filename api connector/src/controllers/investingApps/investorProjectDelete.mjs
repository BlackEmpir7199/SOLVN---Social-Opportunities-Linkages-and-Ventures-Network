const investorProjectDelete = async (req, res, next) => {
    const { investorAppId, investorAppName, investorId, investorProposalId } = req.body;
    if(investorAppId === undefined || investorAppName === undefined || investorId === undefined || investorProposalId === undefined) {
        return res.status(400).send(
            {
                status: 200,
                message: 'Bad Request!, Missing required parameters!',
                error: null
            }
        )
    }
    const isThisGuyValid = await verifyThisUnknownApp({invAppName: investorAppName, id: investorAppId}, 1);
    if(!isThisGuyValid){
        return res.status(401).send(
            {
                status: 401,
                message: 'Invalid Auhtorization, App not registered with our network!',
                error: null
            }
        )
    };
    const allRegisteredProjectApps = await getAllIdAndAppName();
    let failCount = 0;
    let sendedAppList = [];
    allRegisteredProjectApps.forEach( async (projectApp) => {
        const res = await axios.delete(projectApp.investorProjectDeleteApi, {
            'investorAppid': investorAppId,
            'investorAppName': investorAppName,
            'investorId': investorId,
            'investorPostId': investorProposalId
        })
        if(res.ok){
            sendedAppList.push(projectApp.projAppName);
        }else {
            failCount++;
        }
        failCount++;
    });
    return res.status(200).send(
        {
            status: 200,
            message: 'The data had been deleted',
            data: sendedAppList,
            error: null
        }
    )
}

export {
    investorProjectDelete
}