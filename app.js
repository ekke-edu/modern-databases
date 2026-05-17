const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger'); 
const pokemonRoutes = require('./routes/PokemonRoutes');
const mongoose = require('mongoose'); 
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/pokemon', pokemonRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB: Poké-adatbázis elérhető');
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Szerver fut: http://localhost:${PORT}`);
            console.log(`Dokumentáció: http://localhost:${PORT}/api-docs`);
        });
    })
    .catch(err => console.error(' MongoDB hiba:', err));