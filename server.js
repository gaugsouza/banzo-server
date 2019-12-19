 
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const servidor = express()
const controller = require('./banzoController')
const PORT = process.env.PORT || 8001


servidor.use(cors())
servidor.use(bodyParser.json())

servidor.get('/',(request, response)=>{
    response.send("fogo nos racistas")

})


servidor.listen(PORT)
console.info(`Rodando na porta ${PORT}`)