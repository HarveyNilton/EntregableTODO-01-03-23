
const { DataTypes } = require("sequelize");
const dbTodo = require("../utils/db");

const Todo = dbTodo.define('todos',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:DataTypes.STRING(30),
        allowNull:false
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    completed:{ 
        type:DataTypes.BOOLEAN(false),
        
    }

})

module.exports = Todo