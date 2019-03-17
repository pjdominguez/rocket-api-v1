module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    var location = "";
    var locationid;
    var cloudiness;
    var windspeed;
    location = req.body.location;

    if (req.query.name || (req.body)) {
        switch(location) {
            case 'Melbourne':
                locationid= '7839805';
                cloudiness ='50';
                windspeed ='20';
            break;
            case 'Darwin':
                locationid= '2073124';
                cloudiness ='40';
                windspeed ='15';
            break;
            case 'Hobart':
                locationid= '2163355';
                cloudiness ='60';
                windspeed ='10';
            break;        
            case 'Perth':
                locationid= '2063523';
                cloudiness ='30';
                windspeed ='5';
            break;
            default: 
                locationid = 'Invalid'; 
                cloudiness ='0';
                windspeed ='0';      
        }
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: '{ "locationid":"'+ locationid + '"'+ ",\n"+'"cloudthreshold":'+ cloudiness + ",\n"+'"windthreshold":' + windspeed + "\n}"
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};