const mongoose = require("mongoose");
const subscriber = require("../models/subscriber");
const Subscriber = require("../models/subscriber");

exports.getAllSubscribers = (req, res, next) => {
  Subscriber.find({})
    .then((subscribers) => {
      //res.send(subscribers);
      res.render("subscribers", { subscribers: subscribers });
    })
    .catch((errr) => {
      console.log(errr);
    });
};

exports.getSubscriptionPage = (req, res) => {
  res.render("subscribe");
};

exports.saveSubscriber = (req, res) => {
  Subscriber.create({
    name: req.body.name,
    email: req.body.email,
    zipCode: req.body.zipCode,
  })
    .then((data) => {
      res.render("thanks");
    })
    .catch((error) => {
      res.render("error");
    });
};
