const router = require("express").Router();
const jobsController = require("../controllers/jobsController");
router.get("/", jobsController.index, jobsController.indexView);
module.exports = router;
