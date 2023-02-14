const Sequelize = require('sequelize');
const database = require('./db');

const allexoequipvar = database.define('uf', {
    id: {
        type: Sequelize.INTEGER,
        //autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    sigla: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    nome: {
        type: Sequelize.STRING,
    },
    idRegiao: Sequelize.INTEGER,
    siglaRegiao: Sequelize.STRING,
    nomeRegiao: Sequelize.STRING,
})

module.exports = allexoequipvar;