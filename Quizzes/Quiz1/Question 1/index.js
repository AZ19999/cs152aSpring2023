const express = require("express");
const homeController = require("./controllers/homeController");
const layouts = require("express-ejs-layouts");
const port = 3000;
const app = express();

app.set('view engine', 'ejs'); //telling the app to expect a file with .ejs extension
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(layouts);

//routes
app.get("/", (request, response) => {
    response.render("login.ejs");
  
  });
app.get('/name/:myName', homeController.responseWithName);
app.get('/form', homeController.displayForm);
app.post('/', homeController.respondWithForm);

app.listen(port, () => {
    console.log("The server is running on port 3000");
});