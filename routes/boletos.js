const express = require('express');
const router = express.Router();
const Boleto = require('../models/Boleto');

// Manejar POST para crear un nuevo boleto
router.post('/', async (req, res) => {
    try {
        const nuevoBoleto = new Boleto(req.body);
        await nuevoBoleto.save();
        res.status(201).json(nuevoBoleto);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obtener todos los boletos
router.get('/', async (req, res) => {
    try {
        const boletos = await Boleto.find();
        res.status(200).json(boletos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Actualizar Boleto
router.put('/:id', async (req, res) => {
    try {
        const boleto = await Boleto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!boleto) {
            return res.status(404).json({ message: 'Boleto no encontrado' });
        }
        res.status(200).json(boleto);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Eliminar Boleto
router.delete('/:id', async (req, res) => {
    try {
        const boleto = await Boleto.findByIdAndDelete(req.params.id);
        if (!boleto) {
            return res.status(404).json({ message: 'Boleto no encontrado' });
        }
        res.status(200).json({ message: 'Boleto eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
