
const express = require('express')

const Todo =  require('./models/todo.models')
const todosRouter = require('./routes/todos.routes')
const dbTodo = require('./utils/db')

const PORT = 3010
const app = express()

app.use(express.json())
app.use(todosRouter)


Todo

dbTodo.authenticate()
    .then(() => console.log('Conexion exitosa'))
    .catch((error) => {
        console.log(error);
    })


dbTodo.sync()
    .then(() => {
        console.log('db Sincronizado');
    })
    .catch((error)=>{
        console.log(error);
    })



app.get('/', (req, res) => {
    res.send('TODO')
})




app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
})