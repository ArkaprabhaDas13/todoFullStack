// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const {User} = require('./db');
// const PORT = 3000;

// // Middleware for parsing request bodies
// app.use(bodyParser.json());

// app.post('/signup', (req, res) => {
//     // Implement user signup logic
//     new User({
//         username: req.body.username,
//         password: req.body.password
//     }).save();
//     res.json({
//         message: 'User created successfully'
//     })
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const {Todo} = require('./db');
// const PORT = 3000;

// app.get('/signup', async (req,res)=>{
//     const todos = Todo.find();
//     res.send(todos);
// })

// app.listen(PORT, ()=>{
//     console.log("Server running onn port 3000")
// })