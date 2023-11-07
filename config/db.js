const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/test");
        console.log("Connection successfully")
    } catch (error) {
        console.log("Connection faild")
    }
}
module.exports = connectDB;