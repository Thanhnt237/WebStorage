var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    ID: {
        type: String,
        default: 'NULL'
    },
    name: {
        type: String,
        default: 'NULL'
    },
    type: {
        type: String,
        default: 'NULL'
    },
    number:{
        type: String,
        default: 'NULL'
    },
    date: {
        type: String,
        default: 'NULL'
    }

});

module.exports = mongoose.model('product', productSchema, 'product');
