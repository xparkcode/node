const UsuarioCtrl = {};
const Usuario = require('../models/Usuario.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

UsuarioCtrl.createUsuario = async(req, res) => {
    const { nome, email, senha } = req.body
    const novoUsuario = new Usuario({ nome, email, senha })
        //verificar se o usuario já existe
    const emailusuario = await Usuario.findOne({ email: email })
    if (emailusuario) {
        res.json({
            mensagem: 'Este email já existe...'
        })
    } else {
        novoUsuario.senha = await bcrypt.hash(senha, 10)
        const token = jwt.sign({ _id: novoUsuario._id }, 'secreta')
        await novoUsuario.save()
        res.json({
            mensagem: 'Bem Vindo',
            id: novousuario._id,
            nome: novousuario.nome,
            token
        })
    }
}

UsuarioCtrl.login = async(req, res) => {
    const { email, senha } = req.body
    const usuario = await Usuario.findOne({ email: email })
    if (!usuario) {
        return res.json({
            mensagem: 'Email incorreto'
        })
    }

    const match = await bcrypt.compare(senha, usuario.senha)
    if (match) {
        const token = jwt.sign({ _id: usuario._id }, 'secreta')
        res.json({
            mensagem: 'Ben Vindo',
            id: usuario._id,
            nome: usuario.nome,
            token
        })
    } else {
        res.json({
            mensagem: 'Senha incorreta'
        })
    }
}

UsuarioCtrl.listar = async(req, res) => {
    const resposta = await Usuario.find({}, { senha: 0 })
    res.json(resposta)
}

module.exports = UsuarioCtrl