const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    identificacion: String,
    name: String,
    lastname: String,
    telephone: String,
    email: {
        type: String,
        unique: [true, "Éste email ya se encuentra registrado."],
    },
    status: { type: String, default: "Activo" },
    password: String
})

module.exports = mongoose.model('users', UserSchema)