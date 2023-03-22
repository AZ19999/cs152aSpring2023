const httpStatus = require("http-status-codes");

//error for page not found
exports.pageNotFoundError = (req, res) => {
  let errorCode = httpStatus.NOT_FOUND;
  res.status(errorCode);
  res.render("404error");

};

//error for internal server
exports.internalServerError = (error, req, res, next) => {
  let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
  console.log(`ERROR occurred: ${error.stack}`);
  res.status(errorCode);
  res.render("505error");
  
};

