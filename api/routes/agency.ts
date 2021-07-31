export {};

const express = require('express');
const router = express.Router();

const agencyCtrl = require('../controllers/agency');

router.post('/', agencyCtrl.createAgency);
router.get('/:id', agencyCtrl.getOneAgency);
router.get('/', agencyCtrl.getAllAgencies);
router.delete('/:id', agencyCtrl.deleteAgency);
router.put('/:id', agencyCtrl.updateAgency);

module.exports = router;
