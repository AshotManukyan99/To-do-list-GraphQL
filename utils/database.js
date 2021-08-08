const Sequelize = require('sequelize')
const keys = require('../keys/keys')


const sequelize = new Sequelize(keys.DN_NAME, keys.USER_NAME, keys.PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize

