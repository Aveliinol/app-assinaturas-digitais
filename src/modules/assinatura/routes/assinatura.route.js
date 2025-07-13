const express = require('express');
const AssinaturaController = require('../controllers/assinatura.controller.js');
const AutenticacaoMiddleware = require('../middleware/assinatura.middleware.js');

const router = express.Router();

//Rota de cadastro
router.post('/cadastrar', AutenticacaoMiddleware.autenticarToken, AssinaturaController.cadastrarAssinatura);

// Rota de editar
router.put('/editar/:id', AutenticacaoMiddleware.autenticarToken, AssinaturaController.editarAssinatura);

//Rota de listar todos
router.get('/listar', AutenticacaoMiddleware.autenticarToken, AssinaturaController.listarAssinaturas);

//Rota de listar por id
router.get('/listar/:id', AutenticacaoMiddleware.autenticarToken, AssinaturaController.listarAssinatura);

//Rota de excluir 
router.delete('/deletar/:id', AutenticacaoMiddleware.autenticarToken, AssinaturaController.deletarAssinatura);

module.exports = router;
