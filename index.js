const express = require('express');
const mongoose = require('mongoose');
const router = require('./router.js');

//import cors from 'cors';

const PORT = 5000;
const DB_URL = `mongodb+srv://serhii:serhii@feedbackdb.tcemquq.mongodb.net/?retryWrites=true&w=majority`;

const app = express();

//app.use(cors());
app.use(express.json());
app.use('/api/', router);
app.use('/static', express.static('public'));

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp();

module.exports = app;
