const Auth = {};
const jwt = require('jsonwebtoken');

Auth.verificartoken = (req, res, next) => {
    if (!req.headers.autorizar) {
        return res.json({
            mensagem: 'Não está autorizado'
        })
    }
    const token = req.headers.autorizar
    if (token === 'null') {
        return res.json({
            mensagem: 'Não está Autorizado'
        })
    }
    jwt.verify(token, 'secreta', (error, resultado) => {
        if (error) return res.json({
            mansagem: 'Não está Autorizado... '
        })
        next()
    })
}
module.exports = Auth