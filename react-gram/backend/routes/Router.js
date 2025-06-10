const express = require('express');
const router = express.Router();

router.use("/api/users", require("./UserRoutes"))
//test route
router.post("/", (req, res) => {
    res.get("Welcome to the React Gram API");
})
module.exports = router;
