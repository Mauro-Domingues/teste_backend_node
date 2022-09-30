const express = require("express")
const router = express.Router()

router.get("/", (req, res, next) => {
  try{
    res.status(200).send(`<h2 style="text-align: center; margin-top: 40px;">Conexão com o Banco de Dados estabelecida</h2>`)
  }catch(error){
    res.status(400).send({
      message: error.message
    })
  }next()
})

module.exports = router