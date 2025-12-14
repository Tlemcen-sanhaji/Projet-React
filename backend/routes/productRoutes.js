const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

// GET : Liste des produits
router.get('/', (req, res) => {
    Product.getAll((err, results) => {
        if (err) res.status(500).json(err);
        else res.json(results);
    });
});

// POST : Ajouter un produit
router.post('/', (req, res) => {
    Product.create(req.body, (err, results) => {
        if (err) res.status(500).json(err);
        else res.json({ id: results.insertId, ...req.body });
    });
});

// --- NOUVEAU : Modifier un produit ---
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;
    
    Product.update(id, data, (err, results) => {
        if (err) res.status(500).json(err);
        else res.json({ message: 'Produit modifié avec succès' });
    });
});
// -------------------------------------

// DELETE : Supprimer un produit
router.delete('/:id', (req, res) => {
    Product.delete(req.params.id, (err, results) => {
        if (err) res.status(500).json(err);
        else res.json({ message: 'Produit supprimé' });
    });
});

module.exports = router;