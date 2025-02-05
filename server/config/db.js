const mongoose = require('mongoose');
require('dotenv').config()

async function connectDB () {
    try {
        await mongoose.connect(process.env.mongoDB_URI);
        console.log('Connected to mongoDB')
    } catch (error) {
        console.log(`Failed to connect to MongoDB ${error}`)
    }
}

module.exports = connectDB;