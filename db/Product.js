const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    category: String,
    userId: String,
    company: String,
    imagelink: String,
    discription: String,
    comment: [{
        comment: String
    }]

});

module.exports = mongoose.model("products", productSchema);