const mongoose = require('mongoose');
const { Schema } = mongoose;

const ChefeSchema = new Schema({
    nome: String,
    email: String,
    senha: String
});

module.exports = mongoose.model('Chefe', ChefeSchema);