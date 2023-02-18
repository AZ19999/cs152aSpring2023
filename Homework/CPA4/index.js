const http = require("http");
const port = 8080;
const contentType = require('./contentType.js');
const router = require("./router.js");
const files = require("./util.js");
const statusCodes = require("http-status-codes");

const server = http.createServer(router.handle).listen(port);


router.get("/", (request, response) => {
    response.writeHead(200, contentType.htmlType);
    files.customReadFile("./views/index.html", response);
  
  });
  
  router.post("/", (request, response) => {
    response.writeHead(200, contentType.htmlType);
    response.end("Posted!");
  
  });

  router.get("/index.html", (request, response) => {
    response.writeHead(200, contentType.htmlType);
    files.customReadFile("./views/index.html", response);
  
  });
  
  router.get("/contact.html", (request, response) => {
    response.writeHead(200, contentType.htmlType);
    files.customReadFile("./views/contact.html", response);
  
  });
  
  router.get("/events.html", (request, response) => {
    response.writeHead(200, contentType.htmlType);
    files.customReadFile("./views/events.html", response);
  
  });

  router.get("/about.html", (request, response) => {
    response.writeHead(200, contentType.htmlType);
    files.customReadFile("./views/about.html", response);
  
  });

    router.get("/jobs.html", (request, response) => {
    response.writeHead(200, contentType.htmlType);
    files.customReadFile("./views/jobs.html", response);
  
  });
  
  router.get("/style.css", (request, response) => {
    response.writeHead(200, contentType.cssType);
    files.customReadFile("./public/css/style.css", response);
  
  });

  router.get("/BrandeisLogo.png", (request, response) => {
    response.writeHead(200, contentType.pngType);
    files.customReadFile("./public/images/BrandeisLogo.png", response);
  
  });


  console.log("The server is started");