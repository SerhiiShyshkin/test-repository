//import Router from 'express';
const Router = require('express');
//import SettingsController from './SettingsController.js'
const SettingsController = require('./SettingsController.js');

const router = new Router();

router.get('/settings', SettingsController.getOne);

module.exports = router;
