const User = require('../models/users');
const { validationResult } = require('express-validator');
const errorHandler = require('../util/errorHandler');
const {tempo, tensao, corrente, potencia, temperatura, receitaTotal, potenciaTotal} = require('../util/functions');

exports.showHomePage = (req, res, next) => {

    res.render('index', {
        path: '/',
        title: 'Home',
        tempo: tempo,
        tensao: tensao,
        corrente: corrente,
        potencia: potencia,
        temperatura: temperatura,
        receitaTotal: receitaTotal,
        potenciaTotal: potenciaTotal
    });
}

exports.showUsers = async (req, res, next) => {
    const users = await User.find();
    if(!users){
        return next(new Error('Nenhum usuário encontrado'));
    }
    res.render('users', {
        path: '/users',
        title: 'Usuários',
        users: users
    })
    
}

exports.getEditUser = async (req, res, next) => {
    const id = req.params.id;
    const user = await User.findById(id);
    if(!user){
        return next(new Error('Nenhum usuário encontrado'));
    }
    res.render('edit-user', {
        path: '/edit-user',
        title: 'Editar Usuário',
        user:user,
        errorMessage: null,
        oldInput: {
            numeroCliente: req.body.numeroCliente,
            nomeCliente: '',
            emailCliente: '',
            cpfCliente: '',
            telefoneCliente: ''
        },
        validationErrors: [],
    })
}

exports.postEditUser = async (req, res, next) => {
    const id = req.body.id;
    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        console.log(errors.array());
        return res.status(422).render('edit-user', {
            path: '/edit-user',
            title: 'Editar Usuário',
            errorMessage: errors.array()[0].msg,
            oldInput: {
                numeroCliente: req.body.numeroCliente,
                nomeCliente: req.body.nomeCliente,
                emailCliente: req.body.emailCliente,
                cpfCliente: req.body.cpfCliente,
                telefoneCliente: req.body.telefoneCliente
            },
            validationErrors: errors.array()
        })
    }
    const user = await User.findById(id);
    if(!user){
        return next(new Error('Nenhum usuário encontrado'));
    }
    user.update({
        numeroCliente: req.body.numeroCliente,
        nomeCliente: req.body.nomeCliente,
        emailCliente: req.body.emailCliente,
        cpfCliente: req.body.cpfCliente,
        telefoneCliente: req.body.telefoneCliente
    })
    .then(() => {
        user.save();
        res.redirect('/users');
    })
    .catch(errorHandler(next));
}

exports.deleteUser = (req, res, next) => {
    const id = req.body.id;
    User.findByIdAndDelete(id)
    .then(() => {
        console.log("Usuario removido.");
        res.redirect('/users');
    })
    .catch(errorHandler(next));
}

exports.getNewUser = (req, res, next) => {
    res.render('new-user', {
        path: '/new-user',
        title: 'Novo Usuário',
        errorMessage: null,
        oldInput: {
            numeroCliente: '',
            nomeCliente: '',
            emailCliente: '',
            cpfCliente: '',
            telefoneCliente: ''
        },
        validationErrors: [],
    });
}

exports.postNewUser = async (req, res, next) => {
    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        console.log(errors.array());
        return res.status(422).render('new-user', {
            path: '/new-user',
            title: 'Novo Usuário',
            errorMessage: errors.array()[0].msg,
            oldInput: {
                numeroCliente: req.body.numeroCliente,
                nomeCliente: req.body.nomeCliente,
                emailCliente: req.body.emailCliente,
                cpfCliente: req.body.cpfCliente,
                telefoneCliente: req.body.telefoneCliente
            },
            validationErrors: errors.array()
        })
    }

    const user = await new User({
        numeroCliente: req.body.numeroCliente,
        nomeCliente: req.body.nomeCliente,
        emailCliente: req.body.emailCliente,
        cpfCliente: req.body.cpfCliente,
        telefoneCliente: req.body.telefoneCliente
    });
    user.save()
    .then(() => {
        res.redirect('/users');
    })
    .catch(errorHandler(next));
}

exports.getUserDetails = async (req, res, next) => {
    const id = req.params.id;
    const user = await User.findById(id);
    if(!user){
        return next(new Error('Nenhum usuário encontrado'));
    }
    res.render('user-details', {
        path: '/user',
        title: 'Detalhes do Usuário',
        user: user,
        receitaTotal: receitaTotal
    })
}

