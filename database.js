const mongoose = require('mongoose');
const db = mongoose.connect(process.env.DB_ADDRESS, {
    useMongoClient: true
}, (error) => {
    if (error) {
        console.log('Database Error:', error.message)
    } else {
        console.log('Connected to MongoDB Database remotely via M-Lab')
    }

});

mongoose.Promise = Promise;

module.exports = { mongoose, db };
