const express = require("express");
const router = express.Router();

router.use("/users", require("./UserRoutes"));
router.use("/photos", require("./PhotoRoutes"));

module.exports = router;