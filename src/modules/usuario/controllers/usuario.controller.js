const { where } = require("sequelize");
const Usuario = require('../models/usuario.model');
const bcrypt = require('bcryptjs');

class UsuarioController{
    static async cadastrar(req, res){
        try {
            const {nome, email, senha} = req.body;
            if(!nome, !email, !senha){
                return res.status(400).json({msg: "Todos os campos devem serem preenchidos!"});
            }
            const senhaCriptografada = await bcrypt.hash(senha, 15);
            await Usuario.create({nome, email, senha: senhaCriptografada});
            res.status(200).json({msg: "Usuario criado com sucesso"});
        } catch (error) {
            res.status(500).json({msg: "Erro do servidor. Tente novamente mais tarde!"})
        }
    }
     static async listarUsuarios(req, res){
        try {
          const usuarios = await UsuarioModel.findAll()
          if(usuarios.length === 0){
            return res.status(400).json({ msg:"Não há usuarios no sistema"})
          }
          res.status(200).json(usuarios)
        } catch (error) {
          res.status(500).json({ msg: "Erro do servidor. Tente novamente mais tarde!" });
        }
      }
}

module.exports = UsuarioController