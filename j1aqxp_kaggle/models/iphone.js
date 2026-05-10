const mongoose = require('mongoose');

const iphoneSchema = new mongoose.Schema({
    orderId: { type: Number, required: true },
    customerName: String,
    country: String,
    iphoneModel: String,
    storage: String,
    color: String,
    quantity: Number,
    price: Number,
    saleDate: Date,
    paymentMethod: String
});

module.exports = mongoose.model('Iphone', iphoneSchema);