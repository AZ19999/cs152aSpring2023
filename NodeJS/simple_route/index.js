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
    response.writeHead(statusCodes.OK, {"content-type":"text/html"});
    if(routeResponseMap[request.url]) {
        fs.readFile(routeResponseMap[request.url], (err, data) => {
            response.write(data);
            response.end();
        });
    }
    else {
        response.end("data not found");
    }

}
).listen(port);  //put function in here or use a server.on thing like below

//better the use response to handle incoming data from request

console.log("The server is started");




/**
 * const http = require('http');

const server = http.createServer(function (req, res) {
  if (req.url === '/resume.html') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p>This is my resume.</p></body></html>');
    res.end();
  } else if (req.url === '/jobs.html') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p>List of available jobs.</p></body></html>');
    res.end();
  } 
 * 
 */