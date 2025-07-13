const express = require('express');
const AutenticacaoController = require('../controllers/autenticacao.controller');

const router = express.Router()

//Rota para login
router.post('/login', AutenticacaoController.login);

module.exports = router