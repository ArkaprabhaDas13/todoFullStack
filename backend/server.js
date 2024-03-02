const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();

const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let todos = [];

app.get('/todos',(req,res)=>{
    res.json(todos);
})

app.post('/todos',(req,res)=>{
    const value = req.body;
    const newTodo = {
        id:todos.length+1,
        message:value.message               // remember to give the text variable name as "message"
    }
    todos.push(newTodo);
    res.status(201).json(newTodo);
})

app.delete('/todos/:id', (req,res)=>{
    const {id} = req.params;
    console.log(id);
    todos = todos.filter(todo=>todo.id != id);
    res.json({message:'successfully deleted'})
})

app.put('/todos/:id', (req,res)=>{
    const {id} = req.params;
    const updatedTodo = req.body
    todos = todos.map(todo=>(todo.id==id?updatedTodo:todo))
    res.json(updatedTodo)
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})

