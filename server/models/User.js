const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true, minlength: 4},
    password: {type: String, required: true, minlength: 4},
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;