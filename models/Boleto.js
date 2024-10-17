const mongoose = require('mongoose');

const boletoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    date: {
        type: String, 
        required: true
    },
    destino: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    medioPago: {
        type: String, // Puede ser 'Tarjeta', 'Efectivo', etc.
        required: true
    },
    acciones: {
        type: String, // Este campo puede ser descriptivo o usado para registrar acciones específicas
        required: false
    }
});

const Boleto = mongoose.model('Boleto', boletoSchema);
module.exports = Boleto;
