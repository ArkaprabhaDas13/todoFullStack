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
mongoose.connect('mongodb+srv://arkaprabha31:Password1234!@mernstack2024.zghjkgu.mongodb.net/TodoList')

const TodoSchema = new mongoose.Schema({task: String})
const Todo = mongoose.model('Todo', TodoSchema);

    const UserSchema = new mongoose.Schema({
        text:String
    });
    const User = mongoose.model('User', UserSchema);


app.get('/signup', async(req,res)=>{
    try{
        const todos = await Todo.find();
        res.send(todos);
    }catch(err){
        res.send(err);
    }
})

app.post('/signup', async(req,res)=>{
    new User({
                message: req.body.message
            }).save();
            res.send({
                        message: req.body
                    })
})

app.listen(3000,()=>{
    console.log('Server running on PORT 3000')
})



