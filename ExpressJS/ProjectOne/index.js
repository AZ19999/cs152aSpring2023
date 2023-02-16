const express = require("express");
const app = express();
const bookController = require("./controllers/bookController.js")

app.use((request, response, next) => {

    console.log(request.url);
    next();
});


app.use("/contact", (request, response, next) => {

    console.log("middleware function");
    next();
});

app.use(express.urlencoded());
app.use(express.json());
/*

answer for a mastery app question and use this for CPA4
const contentType = {
    html: {"content-type": "text/html"},
    css: {"content-type": "text/css"},
    images: {"content-type": "image/png"},
    javascript: {"content-type": "application/javascript"}
  };
  module.exports = contentType;
  const contentType = require('./contentType.js');
  */

app.get("/books", bookController.bookController); //using the controller that was created seperately

app.get("/", (request, response) => {
    response.send("first express response");

});

//http://localhost:8080/books/234
//gets the id through the url
app.get("/books/:id", (request, response) => {
    //console.log(request.url);
    response.send(`the book id is ${request.params.id}`);

});

//http://localhost:8080/news/234
//gets the id through the url, also with middleware, deosn't work?
app.get("/news/:id", (request, response, next) => {

    console.log(request.url);
    next();
    },
    (response, request) => {
        response.send(`the news id is ${request.params.id}`);

});

//http://localhost:8080/book?name=Node.js&price=20
//grabs more stuff through url
app.get("/book", (request, response) => {
    console.log(request.query.price);
    response.send();
});


app.post("/contact", (request, response) => {
    response.send(request.body);
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");

});

//curl --data "username=alex&password=seceret" http://localhost:8080/ can be used to send data/post it manually form console


/**
 * const express = require("express");

const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.send();
})

app.listen(8080,() => {
  console.log("server is running in port 8080")
});
 * 
 * 
 */