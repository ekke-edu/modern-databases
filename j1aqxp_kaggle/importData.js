const fs = require('fs');
const csv = require('csv-parser');
const mongoose = require('mongoose');
const Iphone = require('./models/iphone');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/j1aqxp_iphone_db';

async function runImport() {
    console.log('--- Import folyamat elindult ---');
    
    try {
        await mongoose.connect(MONGO_URI);
        console.log('✅ MongoDB kapcsolat rendben.');
    } catch (err) {
        console.error('❌ MongoDB hiba:', err);
        return;
    }

    const results = [];

    // Ellenőrizzük, létezik-e a fájl
    if (!fs.existsSync('iphone_sales_dataset.csv')) {
        console.error('❌ HIBA: A "iphone_sales_dataset.csv" fájl nem található a mappában!');
        process.exit();
    }

    fs.createReadStream('iphone_sales_dataset.csv')
        .pipe(csv())
        .on('headers', (headers) => {
            console.log('Found CSV headers:', headers); // Itt látni fogjuk, mik az oszlopnevek
        })
        .on('data', (data) => {
            // Logoljuk az első sort, hogy lássuk, mi jön be
            if (results.length === 0) console.log('Első sor adatai:', data);

            results.push({
                orderId: parseInt(data['Order_ID']),
                customerName: data['Customer_Name'],
                country: data['Country'],
                iphoneModel: data['iPhone_Model'],
                storage: data['Storage'],
                color: data['Color'],
                quantity: parseInt(data['Quantity']),
                price: parseFloat(data['Price']),
                saleDate: new Date(data['Sale_Date']),
                paymentMethod: data['Payment_Method']
            });
        })
        .on('end', async () => {
            console.log(`Beolvasás kész. ${results.length} sort találtam.`);
            if (results.length > 0) {
                try {
                    await Iphone.deleteMany({});
                    await Iphone.insertMany(results);
                    console.log('✅ Sikeres mentés az adatbázisba!');
                } catch (err) {
                    console.error('❌ Hiba a mentésnél:', err);
                }
            } else {
                console.warn('⚠️ Nem találtam adatot a CSV-ben (üres vagy rossz formátum).');
            }
            mongoose.connection.close();
            console.log('--- Folyamat vége ---');
        })
        .on('error', (err) => {
            console.error('❌ Stream hiba:', err);
        });
}

runImport();