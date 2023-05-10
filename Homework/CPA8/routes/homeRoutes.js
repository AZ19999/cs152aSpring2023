const router = require("express").Router();
const homeController = require("../controllers/homeController");
const userRoutes = require("./userRoutes"),
  subscriberRoutes = require("./subscriberRoutes"),
  errorRoutes = require("./errorRoutes"),
  eventRoutes = require("./eventRoutes"),
  jobRoutes = require("./jobRoutes"),
  contactRoutes = require("./contactRoutes");
const apiRoutes = require("./apiRoutes");

//actual routes for the home page
router.get("/", homeController.index);
router.get("/index", homeController.index);
router.get("/about", homeController.about);
router.get("/chat", homeController.chat);

router.use("/users", userRoutes);
router.use("/subscribers", subscriberRoutes);
router.use("/events", eventRoutes);
router.use("/contact", contactRoutes);
router.use("/jobs", jobRoutes)
router.use("/api", apiRoutes);
router.use("/", errorRoutes);


module.exports = router;
