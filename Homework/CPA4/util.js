const fs = require("fs");
const statusCodes = require("http-status-codes");

exports.customReadFile = (path, response) => {
    if(fs.existsSync(path)) {
      fs.readFile(path, (error, data) => {
        if(error) {
          console.log(error);
          sendErrorResponse(response);
          return;
        }
      response.end(data);
      })
    }
    else {
      sendErrorResponse(response);
    }
  };