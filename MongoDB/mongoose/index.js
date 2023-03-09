const mongoose = require("mongoose");
const Subscriber = require("./models/subscriber");
const subscribersControllers = require("./controllers/subscibersController");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost:27017/recipe_db");
const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to mongodb!");
});

app.get("/subscribers", subscribersControllers.getAllSubscribers);
app.get("/subscribe", subscribersControllers.getSubscriptionPage);
app.post("/subscribe", subscribersControllers.saveSubscriber);
app.listen(3000, () => {
  console.log("The server is running on port 3000");
});
