const express = require("express")
const router = express.Router()

router.get("/", (req, res, next) => {
  try{
    res.status(200).send("Conexão com o Banco de Dados estabelecida")
  }catch(error){
    res.status(400).send({
      message: error.message
    })
  }next()
})

module.exports = router