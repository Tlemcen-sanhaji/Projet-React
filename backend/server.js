const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/products', productRoutes);

app.listen(3000, () => {
    console.log('Serveur API sur port 3000');
});