const Sequelize = require('sequelize')
const config = require('./config.json')

const database = new Sequelize(
    config.mysql.database,
    config.mysql.username,
    config.mysql.password,
    {
        host: config.mysql.host,
        dialect: 'mariadb',
    },
)

module.exports.members = database.define('members', {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
    },
    discord: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },
    username: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    accessToken: {
        type: Sequelize.INTEGER,
    },
    refreshToken: {
        type: Sequelize.INTEGER,
    },
    password: {
        type: Sequelize.STRING,
    },
})
