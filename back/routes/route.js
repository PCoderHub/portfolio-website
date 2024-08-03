const express = require('express');

const router = express.Router();
const { createData } = require('../controllers/contactController');

router.post('/contact', createData);

module.exports = router;