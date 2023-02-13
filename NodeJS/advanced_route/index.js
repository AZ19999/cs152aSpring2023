const http = require("http"); //http is globally installed
const port = 3000;
const statusCodes = require("http-status-codes");
const fs = require("fs"); //file system

const routeResponseMap = {
    "/":"./views/ad.html",
    "/forms.html":"./views/forms.html",
    "/test.html":"./views/test.html"
};

const server = http.createServer((request, response) => {
    let url = request.url;
    if(url.indexOf(".html")) {
      response.writeHead(200, {"content-type": "text/html"});
      customReadFile(`./views${url}`, response);
    }
    else if(url.indexOf(".css")) {
      response.writeHead(200, {"content-type": "text/css"});
      customReadFile(`./public/css${url}`, response);
    }

  }).listen(port); 


customReadFile = (path, response) => {
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

sendErrorResponse = (response) => {
  response.writeHead(404, {"content-type":"text/html"});
  response.write("File not found");
  response.end();

}
console.log("The server is started");
