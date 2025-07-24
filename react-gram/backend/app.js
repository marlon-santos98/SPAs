require('dotenv').config()

const express = require('express')
const path = require('path')
const cors = require('cors')

const port = process.env.PORT || 5000
const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    credentials: true, 
    origin: process.env.FRONTEND_URL || "http://localhost:3000"
}))

// Diretório de uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

// Conexão com o banco de dados
require('./config/db.js')

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});


// Rotas
const router = require('./routes/Router.js')
app.use("/api", router)


// Tratamento de erros
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({ errors: ["Erro interno do servidor"] })
})

// Rota não encontrada
app.use((req, res) => {
    res.status(404).json({ errors: ["Rota não encontrada"] })
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})