const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send("first express response");

}).listen(8080, () => {
    console.log("Server is running on port 8080");

});

app.get("/about.html", (request, response) => {
    response.send("first express response");

}).listen(8080, () => {
    console.log("Server is running on port 8080");

});


