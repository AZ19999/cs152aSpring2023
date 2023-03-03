const express = require("express");
const homeController = require("./controllers/homeController");
const layouts = require("express-ejs-layouts");

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(layouts);
app.set("port", process.env.PORT || 3000);

app.get("/", (request, response) => {
    //response.send("Welcome to to the kitchen!");
    response.render("index.ejs");

});

app.get("/courses", homeController.showCourses());
app.get("/contact", homeController.showContacts());
app.post("/contact", homeController.postContactForm());


app.listen(app.get("port"), () => {
    console.log(`Server is running at http://localhost:${app.get("port")}`);

});