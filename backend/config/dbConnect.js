const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL

const dbConnect = () => {
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((conn) => {
        console.log("Database connection successfully");
        console.log(`Database connected to ${conn.connection.host}`);
    })
    .catch((error) => {
        console.log("Database connection failed");
        console.log(`Error: ${error}`);
        process.exit(1);
    })
};

module.exports = dbConnect;