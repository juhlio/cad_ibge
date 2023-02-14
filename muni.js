const Sequelize = require('sequelize');
const database = require('./db');

const allexoequipvar = database.define('municipios', {
    id: {
        type: Sequelize.INTEGER,
        //autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ufId: Sequelize.INTEGER,
    ufNome: Sequelize.STRING,
    ufSigla: Sequelize.STRING
})

module.exports = allexoequipvar;