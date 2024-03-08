// const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://arkaprabha31:Password1234!@todolist.vp7s3ci.mongodb.net/User');
// // Define schemas

// const UserSchema = new mongoose.Schema({
//     // Schema definition here
//     username: String,
//     password: String
// });

// const User = mongoose.model('User', UserSchema);

// module.exports = {
//     User
// }

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

const mongoose = require('mongoose');
const mongo = async()=>{
    // await mongoose.connect('mongodb+srv://ArkaprabhaDas:Password1234!@todolist.tgdq33b.mongodb.net/TodoList')
    await mongoose.connect('mongodb+srv://dravid1001:mongoDB%7B%7B789@cluster0.csyl9nc.mongodb.net/')
    console.log("connection established")
}

const TodoSchema = new mongoose.Schema({task: String})
const Todo = mongoose.model('Todo', TodoSchema);


app.get('/signup', async(req,res)=>{
    try{
        const todos = await Todo.find();
        res.send(todos);
    }catch(err){
        res.send(err);
    }
})

app.post('/signup', async(req,res)=>{
    try{

        await mongo()
        await new Todo({
            task: req.body.task
        }).save();
        const todos = await Todo.find();
        res.send(todos);
    }catch(error){
        res.error({
            message: "error"
        })
    }
})

app.listen(3000,async ()=>{
    console.log('Server running on PORT 3000')
})



