const express = require('express');
const router = express.Router();
const Produto = require('../models/Complaint');

// Criar uma nova reclamação
router.post('/', async (req, res) => {
    const { title, message } = req.body;
    const newProduto = new Complaint({ title, message });
    await newProduto.save();
    res.json(newProdutos);
});

// Listar todas as reclamações
router.get('/', async (req, res) => {
    const produtos = await Complaint.find();
    res.json(produtos);
});

// Atualizar uma reclamação
router.put('/:id', async (req, res) => {
    const { title, message } = req.body;
    const updatedProduto = await Produto.findByIdAndUpdate(req.params.id, { title, message }, { new: true });
    res.json(updatedProduto);
});

// Deletar uma reclamação
router.delete('/:id', async (req, res) => {
    await Produto.findByIdAndDelete(req.params.id);
    res.json({ message: 'Reclamação deletada com sucesso!' });
});

module.exports = router;
