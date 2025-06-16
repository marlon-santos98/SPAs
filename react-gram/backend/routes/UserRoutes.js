const express = require("express")
const router = express.Router()

//Controller
const {register} = require("../controllers/UserController")

//middlewares
const validate = require('../middleware/handleValidation')
const {userCreateValidation} = require("../middleware/userValidations")

//Routes
router.post("/register", userCreateValidation(), validate, register)

module.exports = router
