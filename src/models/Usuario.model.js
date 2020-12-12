const mongoose = require('mongoose')
const { Schema } = mongoose

const UsuarioSchema = new Schema({
    nome: String,
    email: String,
    senha: String
}, {
    timestamps: true
})

module.exports = mongoose.model('usuario', UsuarioSchema)