const http = require("http"); //http is globally installed
const port = 3000;
const statusCodes = require("http-status-codes");

const server = http.createServer((request, response) => {
    console.log("An incoming request recieved!");
    response.writeHead(statusCodes.OK, {"content-type":"text/html"});
    let responseMessage = "<h1>Hello Universe!</h1>";
    response.write(responseMessage);
    response.end();
    console.log(`A response with content ${responseMessage} was sent`); //used a tilde to keep the funny string

}).listen(port); //better than having separate function

/**
function requestListener(request, response) {
    console.log("An incoming request recieved!");
    response.writeHead(statusCodes.OK, {"content-type":"text/html"});
    let responseMessage = "<h1>Hello Universe!</h1>";
    response.write(responseMessage);
    response.end();
    console.log(`A response with content ${responseMessage} was sent`); //used a tilde to keep the funny string

}
*/
console.log("The server is started");