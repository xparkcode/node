const mongoose = require('mongoose')
const { Schema } = mongoose

const EmpregadoSchema = new Schema({
    nome: String,
    apellido: String,
    identificação: String,
    posto: String,
    contrato: String,
    usuario: String
}, {
    timestamps: true
})

module.exports = mongoose.model('empregado', EmpregadoSchema)