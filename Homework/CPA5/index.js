const express = require("express");
const layouts = require("express-ejs-layouts");
const errorController = require("./controllers/errorController");
const homeController = require("./controllers/homeController");

const app = express();

// view engine setup
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(layouts);
app.use(express.urlencoded());
app.set("port", process.env.PORT || 8080);
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// routes
app.use("/", homeController);
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

// listen on provided port, on all network interfaces

app.listen(app.get("port"), () => {
  console.log(`Server is running at http://localhost:${app.get("port")}`);
});
