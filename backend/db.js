// db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',  // <-- Mot de passe vide, c'est le standard pour XAMPP
    database: 'gestion_produits'
});

db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err);
        return;
    }
    console.log('Connecté à la base de données MySQL via XAMPP');
});

module.exports = db;