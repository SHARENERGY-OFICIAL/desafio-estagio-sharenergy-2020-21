const {check} = require('express-validator/check');
const User = require('../models/users');

exports.validateUser = [
    check('numeroCliente')
    .isNumeric().withMessage('Apenas números')
    .trim(),
    check('nomeCliente')
    .isLength({ min: 5 }).withMessage('Nome com mínimo de 5 caracteres')
    .trim(),
    check('emailCliente')
    .isEmail().withMessage('Insira um e-mail válido')
    .normalizeEmail()
    .trim(),
    check('cpfCliente')
    .isLength({ min: 11 }).withMessage('CPF possui 11 caracteres')
    .trim(),
    check('telefoneCliente')
    .isLength({ min: 11 }).withMessage('Telefone possui 11 caracteres')
    .trim(),
];