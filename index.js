const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const util = require("./util.js");

exports.helloWorld = onRequest({timeoutSeconds: 15, cors: true, maxInstances: 10},async (request, response) =>{
    logger.info("Hello logs!", {structuredData: true});
    let res = await util();
    response.send(res);
});