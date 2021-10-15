const Sequelize = require('sequelize');
const connection = new Sequelize('guiaperguntas', 'root', 'Kiba8509',{
    host: 'localhost',
    dialect: 'mysql'
});
module.exports = connection;