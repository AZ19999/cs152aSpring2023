const httpStatus = require("http-status-codes");

exports.pageNotFoundError = (request, response) => {
  let errorCode = httpStatus.NOT_FOUND;
  response.status(errorCode);
  response.render("error");

};

exports.internalServerError = (error, request, response, next) => {
  let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
  console.log(`ERROR occurred: ${error.stack}`);
  response.status(errorCode);
  response.send(`${errorCode} | Sorry, our application is taking a nap!`);
  
};
