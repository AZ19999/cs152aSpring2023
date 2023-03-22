var express = require("express");
var router = express.Router();

// home page to all has get and post methods
router.get("/", function (req, res, next) {
  res.render("index");

});

router.get("/index", function (req, res, next) {
  res.render("index");

});

router.get("/about", function (req, res, next) {
  res.render("about");

});

router.get("/jobs", function (req, res, next) {
  res.render("jobs");

});

router.get("/events", function (req, res, next) {
  res.render("events");

});

router.get("/contact", function (req, res, next) {
  res.render("contact");

});

router.post("/contactSuccess", function(req, res, next) {
  res.render("contactsuccess", {name: req.body.name});
  
});

module.exports = router;
