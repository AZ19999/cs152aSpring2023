const http = require("http"); //http is globally installed
const port = 3000;
const statusCodes = require("http-status-codes");
const fs = require("fs"); //file system
const router = require("./router");
const htmlType = {"content-type": "text/html"};
const textType = {"content-type": "text/plaintext"};
const cssType = {"content-type": "text/css"};

//doing all the routing in the main file is inefficient, stuff is moved to a router file

const server = http.createServer(router.handle).listen(port); 

//all are calling methods from our router file

router.get("/", (request, response) => {
  response.writeHead(200, htmlType);
  customReadFile("./views/ad.html", response);

});

router.post("/", (request, response) => {
  response.writeHead(200, htmlType);
  response.end("Posted!");

});

router.get("/forms.html", (request, response) => {
  response.writeHead(200, htmlType);
  customReadFile("./views/forms.html", response);

});

router.get("/test.html", (request, response) => {
  response.writeHead(200, htmlType);
  customReadFile("./views/test.html", response);

});

router.get("/adStyle.css", (request, response) => {
  response.writeHead(200, cssType);
  customReadFile("./public/css/adStyle.css", response);

});


const customReadFile = (path, response) => {
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

const sendErrorResponse = (response) => {
  response.writeHead(404, {"content-type":"text/html"});
  response.write("File not found");
  response.end();

}
console.log("The server is started");
