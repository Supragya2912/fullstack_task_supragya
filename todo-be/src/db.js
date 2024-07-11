const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;

const connectToDb = () => {

    mongoose.connect(uri, {
        useUnifiedTopology: true
    });

    mongoose.connection.on('connected', () => {
         console.log('Connected to MongoDB');
    });

    mongoose.connection.on('error', (error) => {
        console.log('Error connecting to MongoDB', error);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Disconnected from MongoDB');
    });

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('Closing MongoDB connection');
            process.exit(0);
        });
    });

}

module.exports = connectToDb;