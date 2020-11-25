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
        type: String
    },
    cpfCliente: {
        type: Number,
        unique: false
    },
    telefoneCliente: {
        type: Number
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