const express = require('express');
const UsuarioController = require('../controllers/usuario.controller');
const AutenticacaoMiddleware = require('../../../middleware/usuario.middleware');
const router = express.Router();

// rota de cadastro
router.post('/cadastrar', UsuarioController.cadastrar)

// rota de listar
router.get('/listar', AutenticacaoMiddleware.autenticarToken, UsuarioController.listarUsuarios)

module.exports = router