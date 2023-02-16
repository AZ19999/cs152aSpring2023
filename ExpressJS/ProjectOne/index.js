const express = require("express");
const app = express();

const contentType = {
    html: {"content-type": "text/html"},
    css: {"content-type": "text/css"},
    images: {"content-type": "image/png"},
    javascript: {"content-type": "application/javascript"}
  };
  module.exports = contentType;
  const contentType = require('./contentType.js');

app.get("/", (request, response) => {
    response.send("first express response");

}).listen(8080, () => {
    console.log("Server is running on port 8080");

});