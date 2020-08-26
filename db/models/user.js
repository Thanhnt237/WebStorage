var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: {
        type: String,
        default: 'admin'
    },
    password: {
        type: Password,
        default: 'admin'
    }
});

module.exports = mongoose.model('user', userSchema, 'user');
