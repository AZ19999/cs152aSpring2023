const router = require("express").Router(),
  eventsController = require("../controllers/eventsController");
  jobsController = require("../controllers/jobsController");
router.get("/events", eventsController.index, eventsController.respondJSON);
router.get(
  "/courses/:id/join",
  eventsController.join,
  eventsController.respondJSON
);
router.get("/jobs", jobsController.index, jobsController.respondJSON);
router.get(
  "/jobs/:id/join",
  jobsController.join,
  jobsController.respondJSON
);
router.use(eventsController.errorJSON);
router.use(jobsController.errorJSON);
module.exports = router;
