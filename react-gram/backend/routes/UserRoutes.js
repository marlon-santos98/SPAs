const express = require("express")
const router = express.Router()

//Controller
const {register, login, getCurrentUser, update, getUserById} = require("../controllers/UserController")

//middlewares
const validate = require('../middleware/handleValidation')
const {userCreateValidation, loginValidation, userUpdateValidation} = require("../middleware/userValidations")
const authGuard = require("../middleware/authGuard")
const { imageUpload } = require("../middleware/imageUpload") // <-- Adicione esta linha


//Routes
router.post("/register", userCreateValidation(), validate, register)
router.post("/login", loginValidation(), validate, login)
router.get("/profile", authGuard, getCurrentUser)
router.put("/", authGuard, userUpdateValidation(), validate, imageUpload.single("profileImage"), update)

router.get("/:id", getUserById)


module.exports = router
