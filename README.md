# Gestion de Produits - Projet React Native & Node.js

Ce projet est une application complète de gestion de stock (CRUD) comprenant une API Backend et une Application Mobile.

## 📋 Prérequis

*   **Node.js** installé.
*   **XAMPP** (ou MAMP) pour le serveur MySQL.
*   **Expo Go** (sur mobile) ou un **Simulateur iOS/Android**.

---

## 🚀 Installation et Lancement

Suivez ces étapes dans l'ordre précis pour lancer le projet.

### Étape 1 : Base de Données (MySQL)

1.  Lancez **XAMPP** et démarrez le service **MySQL Database**.
2.  Allez sur [http://localhost/phpmyadmin](http://localhost/phpmyadmin).
3.  Exécutez le script SQL suivant pour créer la base et les données initiales :

```sql
CREATE DATABASE IF NOT EXISTS gestion_produits;
USE gestion_produits;

CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT
);
INSERT INTO products (name, price, description) VALUES 
('MacBook Pro', 2500.00, 'Ordinateur portable'),
('Souris', 25.00, 'Souris sans fil');
```
### Étape 2 : Backend (API)
1. Ouvrez un terminal.
2. Allez dans le dossier backend :
```
cd backend
```
3. Installez les dépendances :
```
npm install
```
4. Configurez la connexion BDD :
- Vérifiez le fichier backend/db.js.
- Si vous êtes sur XAMPP Mac par défaut : user: 'root', password: '' (vide).
5. Lancez le serveur :
```
node server.js
```
Le terminal doit afficher : "Serveur API sur port 3000" et "Connecté à la base de données".

### Étape 3 : Frontend (Application Mobile)
1. Ouvrez un nouveau terminal.
2. Allez dans le dossier ```mobile-app``` :
```
cd mobile-app
```
3. Installez les dépendances :
```
npm install
```
4. Configurez l'IP de l'API dans ```App.js``` :
Simulateur iOS (Mac) : ```const API_URL = 'http://localhost:3000/products';```
Android / Téléphone réel : Utilisez votre IP locale (ex: ```192.168.1.15```).

5. Lancez l'application :
```
npx expo start
```
Appuyez sur la touche ```i``` pour lancer le simulateur iOS.

Appuyez sur la touche ```a``` pour lancer le simulateur Android 