const mongoose = require('mongoose');

//connection
const dbUser = process.env.DB_USER;
const dbPassword = encodeURIComponent(process.env.DB_PASS);

const conn = async() => {
    try {
        const dbConn = await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPassword}@cluster0.4nhkbre.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
        );
        console.log("MongoDB connected successfully")
        return  dbConn;
    } catch (error) {
        console.error(error);
    }
}

conn()

module.exports = conn;