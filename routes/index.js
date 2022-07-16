const express = require('express');
const router = express.Router();
const mainRoutes = require('./mainPage');

router.use(mainRoutes);

module.exports = router;
