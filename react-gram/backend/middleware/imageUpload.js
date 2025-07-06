const multer = require("multer")
const path = require("path")

//destination to store image
const imageStore = multer.diskStorage({
    destination: function(req, file, cb) {
            let folder = ""

            if(req.baseUrl.includes("users")){
                folder: "users"
            } else if(req.baseUrl.includes("photos")){
                folder: "photos"
            }

            cb(null, `uploads/${folder}/`)
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const imageUpload = multer({
    storage: imageStore,
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(png|jpg)$/)){
            //upload only png and jpg formats
            return cd(new Error("Por favor envie apenas png ou jpg"))
        }
        cb(undefined, true)
    }
})

module.exports = {imageUpload}