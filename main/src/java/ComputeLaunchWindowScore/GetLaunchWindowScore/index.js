module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    var score =0;
    score = Math.abs(20-req.body.temp) + req.body.windspeed + Math.abs(220- req.body.winddirection);
    //ABS(20-Temperature) + Windspeed + ABS(220 - Wind Direction) x 0.1

    if (req.query.name || (req.body)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: score 
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a request body"
        };
    }
};