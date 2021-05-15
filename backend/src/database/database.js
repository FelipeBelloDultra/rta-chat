const sequelize = require('sequelize');
const banco = new sequelize('postgres://user:localhost:4965/RTA');

module.exports = {
    banco
};