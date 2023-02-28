
const express = require('express')
const cors = require('cors')
const todosRouter = require('./routes/todos.routes')
const dbTodo = require('./utils/db')

const PORT = 3010
const app = express()
app.use(cors())
app.use(express.json())
app.use(todosRouter)



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

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
})