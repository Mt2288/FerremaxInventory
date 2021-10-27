const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    identificacion: String,
    name: String,
    lastname: String,
    telephone: String,
    email: {
        type: String,
        unique: true,
    },
    status: String,
    password: String
})

module.exports = mongoose.model('users', UserSchema)