module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    var final ;
    var objLaunchWindows = req.body;
    objLaunchWindows.launchWindows[0].sort(function (a, b) { return a.Score-b.Score; });
    objLaunchWindows = objLaunchWindows.launchWindows[0].slice(0,5);
    objLaunchWindows.launchWindows = objLaunchWindows;
    final = {"launchWindows" : objLaunchWindows.launchWindows}
    
    
    


    if (req.query.name || (req.body)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: final
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a request body"
        };
    }
};