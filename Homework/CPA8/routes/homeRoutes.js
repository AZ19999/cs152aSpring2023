const router = require("express").Router();
const homeController = require("../controllers/homeController");
const userRoutes = require("./userRoutes"),
  subscriberRoutes = require("./subscriberRoutes"),
  errorRoutes = require("./errorRoutes"),
  eventRoutes = require("./eventRoutes"),
  jobRoutes = require("./jobRoutes"),
  homeRoutes = require("./homeRoutes"),
  contactRoutes = require("./contactRoutes");
const apiRoutes = require("./apiRoutes");

router.use("/users", userRoutes);
router.use("/subscribers", subscriberRoutes);
router.use("/", homeRoutes);
router.use("/events", eventRoutes);
router.use("/contact", contactRoutes);
router.use("/jobs", jobRoutes)
router.use("/api", apiRoutes);
router.use("/", errorRoutes);
router.get("/chat", homeController.chat);

module.exports = router;
