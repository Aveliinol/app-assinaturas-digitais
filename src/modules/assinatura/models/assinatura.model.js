const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/configDB');

const Assinatura =  sequelize.define(
    "Assinatura",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        assinante_nome: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'O nome é obrigatório.'
                },
                len: {
                    args: [2, 100],
                    msg: 'O nome deve ter entre 2 e 100 caracteres.'
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: { msg: "Email inválido" },
            },
        },
        revista_nome: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'O nome é obrigatório.'
                },
                len: {
                    args: [2, 100],
                    msg: 'O nome deve ter entre 2 e 100 caracteres.'
                }
            }
        },
        data_inicio: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                isDate: true
            }
        },
        data_fim:{
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                isDate: true,
                isAfterDataInicio(value){
                    const inicio = new Date(this.data_inicio);
                    const fim = new Date(value);

                    if(fim < inicio){
                        throw new Error('A data de fim deve ser posterior à data de início')
                    }
                }
            }
        },
        status: {
            type: DataTypes.ENUM('ativa', 'cancelada', 'expirada'),
            allowNull: false,
            defaultValue: 'ativa',
            validate: {
                isIn: {
                    args: [['ativa', 'cancelada', 'expirada']],
                    msg: 'Status deve ser ativa, cancelada ou expirada'
                }
            }
        }
    },
    {
        tableName: "assinatura",
        createdAt: "criado_em",
        updatedAt: "atualizado_em",
    }
)

module.exports = Assinatura;
