const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://arkaprabha31:Password1234!@todolist.vp7s3ci.mongodb.net/User');
// Define schemas

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const User = mongoose.model('User', UserSchema);

module.exports = {
    User
}