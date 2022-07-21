const express = require('express');
const router = express.Router();
const { readDefaultSearchList } = require('../controllers/search');

router.get('/search', readDefaultSearchList);

module.exports = router;
