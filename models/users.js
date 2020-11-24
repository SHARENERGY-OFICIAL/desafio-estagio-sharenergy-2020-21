const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    numeroCliente: {
        type: Number,
        unique: true,
        required: true
    },
    nomeCliente: {
        type: String,
        required: true
    },
    emailCliente: {
        type: String,
        required: true
    },
    cpfCliente: {
        type: Number,
        unique: true,
        required: true
    },
    telefoneCliente: {
        type: Number,
        required: true
    },
    usinas:
        [
            {
                numeroUsina: Number,
                percentualUsina: Number
            }
        ]
})

module.exports = mongoose.model('User', userSchema);