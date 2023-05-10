
const router = require("express").Router();
router.get("/", function (req, res, next) {
    res.render("contacts/contact");
  
  });
  
  router.post("/contactSuccess", function(req, res, next) {
    res.render("contacts/contactsuccess", {name: req.body.name});
    
  });

module.exports = router;