const AssinaturaModel = require('../models/assinatura.model');

class AssinaturaController{
    static async cadastrarAssinatura(req, res){
        try {
            const { assinante_nome, email, revista_nome, data_inicio, data_fim, status } = req.body
            if( !assinante_nome || !email || !revista_nome || !data_inicio || !data_fim || !status ){
                return res.status(400).json({msg: 'Todos os campos devem ser preenchidos'})
            }
            const assinatura = await AssinaturaModel.create({ assinante_nome, email, revista_nome, data_inicio, data_fim, status })
            res.status(200).json(assinatura)
        } catch (error) {
            res.status(500).json({ msg: "Erro no sistema. Tente novamente mais tarde!" })
        }
    }
    static async editarAssinatura(req, res){
        try {
            const { id } = req.params;
            const assinatura = await AssinaturaModel.findByPk(id)
            if(!assinatura) { 
                return res.status(400).json({ msg: 'Assinatura não encontrada no sistema' })
            }
            const { assinante_nome, email, revista_nome, data_fim, status } = req.body
            if( !assinante_nome || !email || !revista_nome || !data_fim || !status ){
                return res.status(400).json({msg: 'Todos os campos devem ser preenchidos'})
            }
            const updateAssinatura = await AssinaturaModel.update({assinante_nome, email, revista_nome, data_fim, status})
            res.status(200).json(updateAssinatura)
        } catch (error) {
            res.status(500).json({ msg: "Erro no sistema. Tente novamente mais tarde!" })
        }
    }
    static async listarAssinaturas(req, res){
        try {
            const assinatura = await AssinaturaModel.findAll()
            if(assinatura.length === 0){
                return res.status(400).json({ msg: 'Não há assinaturas cadastradas no sistema'})
            }
            res.status(200).json(assinatura)
        } catch (error) {
            res.status(500).json({ msg: "Erro no sistema. Tente novamente mais tarde!" })
        }
    }
    static async listarAssinatura(req, res){
        try {
            const assinatura = await AssinaturaModel.findByPk(req.params.id)
            if(!assinatura){
                res.status(400).json({ msg:'Assinatura não encontrada no sistema'})
            }
            res.status(200).json(assinatura)
        } catch (error) {
            res.status(500).json({ msg: "Erro no sistema. Tente novamente mais tarde!" })
        }
    }
    static async deletarAssinatura(req, res){
        try {
            const { id } = req.params;
            const assinatura = await AssinaturaModel.findByPk(id)
            if(!assinatura){
                return res.status(400).json({ msg:'Assinatura não encontrada no sistema' })
            }
            await AssinaturaModel.destroy(id)
            res.status(200).json({ msg:'Assinatura excluída com sucesso'})
        } catch (error) {
            res.status(500).json({ msg: "Erro no sistema. Tente novamente mais tarde!" })
        }
    }
}

module.exports = AssinaturaController