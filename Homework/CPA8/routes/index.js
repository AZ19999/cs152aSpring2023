const router = require("express").Router();
const userRoutes = require("./userRoutes"),
  subscriberRoutes = require("./subscriberRoutes"),
  errorRoutes = require("./errorRoutes"),
  homeRoutes = require("./homeRoutes");
const apiRoutes = require("./apiRoutes");

router.use("/users", userRoutes);
router.use("/subscribers", subscriberRoutes);
router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/", errorRoutes);

module.exports = router;
