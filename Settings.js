const mongoose = require('mongoose');

const Settings = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
 // backgroundImageUrl: { type: String },
  //hamburgerButtonUrl: { type: String },
  //closeButtonUrl: { type: String },
});

module.exports = mongoose.model('Settings', Settings);
