const express = require('express');
const router = express.Router();

router.use("/users", require("./UserRoutes"))

module.exports = router;
