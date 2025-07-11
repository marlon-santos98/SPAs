const express = require('express');
const router = express.Router();


//middlewares
const {photoInsertValidation, photoUpdateValidation, commentValidation} = require("../middleware/photoValidation")
const authGuard = require("../middleware/authGuard")
const validate = require("../middleware/handleValidation")
const {imageUpload} = require("../middleware/imageUpload")

//controller
const {insertPhoto, deletePhoto, getAllPhotos, getUserPhotos, getPhotoById, updatePhoto, likePhoto, commentPhoto, searchPhotos} = require("../controllers/PhotoController")

// Rotas de fotos (adicione depois)
router.get('/', (req, res) => {
    res.send('Rota de fotos funcionando!');
});

//Routes
router.post("/", authGuard, imageUpload.single("image"), photoInsertValidation(), validate,insertPhoto)


router.delete("/:id", authGuard, deletePhoto)
router.get("/", authGuard, getAllPhotos)
router.get("/user/:id", authGuard, getUserPhotos)
router.get("/search", authGuard, searchPhotos)
router.get("/:id", authGuard, getPhotoById)
router.put("/:id", authGuard, photoUpdateValidation(), validate, updatePhoto)
router.put("/like:id", authGuard, likePhoto)
router.put("/comment:id", authGuard, commentValidation(), validate, commentPhoto)

module.exports = router;