const { Router } = require('express');
const router = Router();
const EmpregadoCTRL = require('../controllers/empregado.controller');
const Auth = require('../helper/Auth');

router.post('/criar', Auth.verificartoken, EmpregadoCTRL.createEmpregado)
router.get('/listar', Auth.verificartoken, EmpregadoCTRL.listar)
router.get('/listar/:id', Auth.verificartoken, EmpregadoCTRL.listarid)
router.get('/listarempregadoporchefe/:id', Auth.verificartoken, EmpregadoCTRL.empregadoPorChefe)
router.get('/deletar/:id', Auth.verificartoken, EmpregadoCTRL.eliminar)
router.get('/atualizar/:id', Auth.verificartoken, EmpregadoCTRL.atualizar)
router.get('/buscar/:nome', Auth.verificartoken, EmpregadoCTRL.buscarempregado)




module.exports = router;