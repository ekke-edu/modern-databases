const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swaggerOptions');
const iphoneRoutes = require('./routes/iphoneRoutes');
require('dotenv').config();

const app = express();

// Middleware a JSON adatok kezeléséhez
app.use(express.json());

// --- Swagger Dokumentáció Beállítása ---
// Elérhető lesz: http://localhost:3000/api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// --- API Útvonalak regisztrálása ---
app.use('/api/iphones', iphoneRoutes);

// Alapértelmezett kezdőoldal (opcionális)
app.get('/', (req, res) => {
    res.send('<h1>iPhone Sales API fut!</h1><p>Dokumentáció: <a href="/api-docs">/api-docs</a></p>');
});

// --- MongoDB Csatlakozás ---
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/j1aqxp_iphone_db';

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('✅ MongoDB csatlakozva!');
        
        // Szerver indítása (csak ha a DB kapcsolat sikerült)
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`🚀 A szerver fut a következő címen: http://localhost:${PORT}`);
            console.log(`📖 Swagger UI: http://localhost:${PORT}/api-docs`);
        });
    })
    .catch(err => {
        console.error('❌ Hiba a MongoDB csatlakozásnál:', err);
    });