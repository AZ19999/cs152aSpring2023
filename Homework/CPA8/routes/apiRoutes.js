const router = require("express").Router(),
  eventsController = require("../controllers/eventsController");
const jobsController = require("../controllers/jobsController");
const usersController = require("../controllers/usersController");

router.use(usersController.verifyToken);

router.get("/events", eventsController.index, eventsController.respondJSON);
router.get(
  "/events/:id/join",
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
