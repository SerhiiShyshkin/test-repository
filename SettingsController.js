
const Settings = require('./Settings.js');

class SettingsController {
  async getOne(req, res) {
    
    try {
      const settings = await Settings.findOne();
      res.json(settings);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = new SettingsController();


