const mongoose = require("mongoose");
const express = require("express");
const Subscriber = require("./models/subscriber");
const usersController = require("./controllers/usersController");
const methodOverride = require("method-override");
const layouts = require("express-ejs-layouts");
const connectFlash = require("connect-flash");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");

const router = express.Router();
const subscribersController = require("./controllers/subscribersController");
mongoose.connect("mongodb://localhost:27017/recipe_db");

const app = express();
app.use(layouts);
router.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })

);

router.use(cookieParser("secret-pascode"));
router.use(
  expressSession({
    secret: "secret_passcode",
    cookie: {
      maxAge: 40000,
    },
    resave: false,
    saveUninitialized: false,
  })
  
);

router.use(connectFlash());

app.use(express.json());
app.use(express.urlencoded());
app.set("view engine", "ejs");
const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to mongodb!");

});

router.use((req, res, next) => {
  res.locals.flashMessages = req.flash();
  next();

});

app.use("/", router);
app.get("/subscribers", subscribersController.getAllSubscribers);
app.get("/subscribe", subscribersController.getSubscriberPage);
app.post("/subscribe", subscribersController.saveSubscription);

app.get("/users", usersController.index, usersController.indexView);
router.get("/users/new", usersController.new);
router.post(
  "/users/create",
  usersController.create,
  usersController.redirectView

);

router.get("/users/:id", usersController.show, usersController.showView);
router.get("/users/:id/edit", usersController.edit);

router.put(
  "/users/:id/update",
  usersController.update,
  usersController.redirectView

);

router.delete(
  "/users/:id/delete",
  usersController.delete,
  usersController.redirectView

);

app.listen(3000, () => {
  console.log("application is running");

});
