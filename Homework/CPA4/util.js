const fs = require("fs");
const statusCodes = require("http-status-codes");
const router = require("./router.js")
const contentType = require("./contentType.js")

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

  const readFile = (path, response) => {
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

  router.get("/style.css", (request, response) => {
    response.writeHead(200, contentType.cssType);
    readFile("./public/css/style.css", response);
  
  });

  router.get("/BrandeisLogo.png", (request, response) => {
    response.writeHead(200, contentType.pngType);
    readFile("./public/images/BrandeisLogo.png", response);
  
  });

  router.get("/facebookLogo.png", (request, response) => {
    response.writeHead(200, contentType.pngType);
    readFile("./public/images/facebookLogo.png", response);
  
  });

  router.get("/instagramLogo.png", (request, response) => {
    response.writeHead(200, contentType.pngType);
    readFile("./public/images/instagramLogo.png", response);
  
  });

  router.get("/linkedLogo.png", (request, response) => {
    response.writeHead(200, contentType.pngType);
    readFile("./public/images/linkedLogo.png", response);
  
  });

  router.get("/youtubeLogo.png", (request, response) => {
    response.writeHead(200, contentType.pngType);
    readFile("./public/images/youtubeLogo.png", response);
  
  });

  router.get("/twitterLogo.png", (request, response) => {
    response.writeHead(200, contentType.pngType);
    readFile("./public/images/twitterLogo.png", response);
  
  });