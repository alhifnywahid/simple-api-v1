// db.js
const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://mydbberkah:cLfoTiJXPoqiCiG6@berkah-teknik.lh3bw8q.mongodb.net/?retryWrites=true&w=majority&appName=berkah-teknik";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error("ERROR : ", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
