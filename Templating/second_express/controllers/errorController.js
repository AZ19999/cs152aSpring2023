const statusCodes = require("http-status-codes");

exports.respondSourceNotFound = (request, response) => {
    let errorCode = statusCodes.NOT_FOUND;
    response.status(errorCode);
    //response.send(`${errorCode} | Source not found!`);
    response.sendFile(`/public/${errorCode}.html`, {root: "."}); //looks for the error page starting in the project file

};

exports.respondInternalError = (error, request, response, next) => {
    let errorCode = statusCodes.INTERNAL_SERVER_ERROR;
    console.log(error);
    response.status(errorCode);
    //response.send(`${errorCode} | Sorry, our server is taking a nap!`) not needed when we make custom error pages
    response.sendFile(`/public/${errorCode}.html`, {root: "."});

};

exports.logError = (error, request, response, next) => {
    console.log(error.stack); //shows the entire error
    next(error); //passes to the automatic error handler, overrides our error handlers

};