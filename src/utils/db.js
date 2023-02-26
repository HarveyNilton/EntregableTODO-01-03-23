const { Sequelize } = require("sequelize");

const dbTodo = new Sequelize({
    database: "dbtodo",
    port: 5432,
    username: "postgres",
    password: "root",
    dialect: "postgres"
})


module.exports = dbTodo