export {};

const express = require('express');
const router = express.Router();

const agencyCtrl = require('../controllers/agency');

router.post('/', agencyCtrl.createAgency);

module.exports = router;
