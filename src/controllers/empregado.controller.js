const EmpregadoCTRL = {};
const Empregado = require('../models/Empregado.model');

EmpregadoCTRL.createEmpregado = async(req, res) => {
    const { nome, apelido, identificação, posto, contrato, chefe } = req.body
    const novoEmpregado = new Empregado({
        nome,
        apelido,
        identificação,
        posto,
        contrato,
        chefe
    })

    const resposta = await novoEmpregado.save()
    res.json({
        mensagem: 'Empregado Cadastrado',
        resposta
    })
}

EmpregadoCTRL.listar = async(req, res) => {
    const resposta = await Empregado.find()
    res.json(resposta)
}
EmpregadoCTRL.listarid = async(req, res) => {
    const id = req.params.id
    const resposta = await Empregado.findByid({ _id: id })
    res.json(resposta)
}
EmpregadoCTRL.empregadoPorChefe = async(req, res) => {
    const id = req.params.id
    const resposta = await Empregado({ chefe: id })
    res.json(resposta)
}

EmpregadoCTRL.eliminar = async(req, res) => {
    const id = req.params.id
    await Empregado.findAndRemove({ _id: id })
    res.json({
        mensagem: 'Empregado Eliminado',
    })
}

EmpregadoCTRL.atualizar = async(req, res) => {
    const id = req.params.id
    const dadosnovos = { nome, apellido, identificação, posto, contrato, usuario } = req.body
    await Empregado.findByIdAndUpdate({ _id: id }, dadosnovos)
    res.json({
        mensagem: 'Empregado Atualizado'
    })
}

EmpregadoCTRL.buscarempregado = async(req, res) => {
    const { nome, id } = req.params
    const resposta = await Empregado.find({ nome: { $regex: '.*' + nome + '.*' }, });
    res.json(resposta)
}

module.exports = EmpregadoCTRL