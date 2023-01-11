require('dotenv').config();
const { mongoose, Schema } = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`);