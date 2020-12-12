const { Router } = require('express')
const router = Router()
const UsuarioCtrl = require('../controllers/usuario.controller')

router.post('/criar', UsuarioCtrl.createUsuario)
router.post('/login', UsuarioCtrl.login)
router.get('/listar', UsuarioCtrl.listar)

module.exports = router