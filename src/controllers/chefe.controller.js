const ChefeCTRL = {};
const Chefe = require('../models/Chefe.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

ChefeCTRL.createChefe = async(req, res) => {
    const { nome, email, senha } = req.body
    const NovoChefe = new Chefe({
        nome,
        email,
        senha
    })

    const emailchefe = await Chefe.findOne({ email: email })
    if (emailchefe) {
        res.json({
            mensagem: 'O email já cadastrado'
        })
    } else {
        NovoChefe.senha = await bcrypt.hash(senha, 10)
        const token = jwt.sign({ _id: NovoChefe._id }, 'secreta')
        await NovoChefe.save()
        res.json({
            mensagem: 'Bem Vindo',
            id: NovoChefe._id,
            nome: novoChefe.nome,
            token
        })
    }
}

ChefeCTRL.login = async(req, res) => {
    const { email, senha } = req.body
    const chefe = await Chefe.findOne({ email: email })
    if (!chefe) {
        return res.json({
            mensagem: 'email incorreto'
        })
    }
    const match = await bcrypt.compare(senha, chefe.senha)
    if (match) {
        const token = jwt.sign({ _id: chefe }, 'secreta')
        res.json({
            mensagem: 'Bem Vindo Amor',
            id: chefe._id,
            nome: chefe.nome,
            token
        })
    } else {
        res.json({
            mensagem: 'Senha Incorreta'
        })
    }
}

module.exports = ChefeCTRL