const db = require('../db');

const Product = {
    // Récupérer tous les produits
    getAll: (cb) => {
        db.query('SELECT * FROM products', cb);
    },

    // Créer un produit
    create: (data, cb) => {
        db.query(
            'INSERT INTO products (name, price, description) VALUES (?, ?, ?)', 
            [data.name, data.price, data.description], 
            cb
        );
    },

    // --- NOUVEAU : Modifier un produit ---
    update: (id, data, cb) => {
        db.query(
            'UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?', 
            [data.name, data.price, data.description, id], 
            cb
        );
    },
    // -------------------------------------

    // Supprimer un produit
    delete: (id, cb) => {
        db.query('DELETE FROM products WHERE id = ?', [id], cb);
    }
};

module.exports = Product;