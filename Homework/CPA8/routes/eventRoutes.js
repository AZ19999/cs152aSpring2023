const router = require("express").Router();
const eventsController = require("../controllers/eventsController");
router.get("/", eventsController.index, eventsController.indexView);
module.exports = router;
