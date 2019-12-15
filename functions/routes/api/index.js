const express = require('express');
const router = express.Router();
const bank = require('./bank');
const insurer = require('./insure');

router.use('/bank', bank);
router.use('/insurer', insurer);

module.exports = router;