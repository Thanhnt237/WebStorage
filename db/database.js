let mongoose = require('mongoose');

const mongodb_url = 'mongodb+srv://Thanhdeptrai:phanh114@ttpreschool.bauqc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        mongoose.connect(mongodb_url, {useNewUrlParser: true, useUnifiedTopology: true})
            .then(() => {
                console.log("Database connection successfully!");
            })
            .catch(err => {
                console.log("Database connection error!");
            })
    }
}

module.exports = new Database();
