const Sequelize = require('sequelize');

let bdName = 'nomebd'
let bdUser = 'user'
let bdPass = 'pass'


const sequelize = new Sequelize(bdName, bdUser, bdPass, {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;