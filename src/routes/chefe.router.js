const { Router } = require('express');
const router = Router();
const ChefeCTRL = require('../controllers/chefe.controller');

router.post('/criar', ChefeCTRL.createChefe)
router.post('/login', ChefeCTRL.login)

module.exports = router;