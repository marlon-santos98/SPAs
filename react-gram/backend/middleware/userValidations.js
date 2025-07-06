const {body} = require('express-validator')

const userCreateValidation = () => {
    return[
        body("name").isString().withMessage("O nome é obrigatório").isLength({min: 3}).withMessage("O nome precisa ter no minimo 3 caracteres"),
        body("email").isString().withMessage("O email é obrigatorio").isEmail("Insira um email válido"),
        body("password").isString().withMessage("A senha é obrigatória").isLength({min: 5}).withMessage("A senha precisa ter no minimo 5 caracteres"),
        body("confirmpassword").isString().withMessage("A confirmação de senha é obrigatoria").custom((value, {req}) => {
            if(value != req.body.password) {
                throw new Error("As senhas nao sao iguais")
            }
            return true
        })
    ]
}

const loginValidation = () => {
    return[
        body("email")
            .isString()
            .withMessage("O email é obrigatorio")
            .isEmail()
            .withMessage("Insira um email valido"),
        body("Password")
            .isString().withMessage("A senha é obrigatoria")
    ]
}

const userUpdateValidation = () => {
    return[
        body("name")
            .optional()
            .isLength({min: 3})
            .withMessage("O nome precisa de pelo menos 3 caracteres"),
        body("password")
            .optional()
            .isLength({min: 5})
            .withMessage("A senha precisa ter no minimo 5 caracteres")

    ]
}

module.exports = {
    userCreateValidation,
    loginValidation,
    userUpdateValidation
}   