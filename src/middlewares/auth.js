const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try{
        const userToken = req.headers.authorization
        const authToken = jwt.verify(userToken, 'Segredo')
        req.auth = authToken
        next()
    } catch(error){
        return res.status(401).send({message: "Você precisa autenticar primeiro"})
    }
}