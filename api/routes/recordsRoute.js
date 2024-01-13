const express = require('express');
const router = express.Router();

const { retrieveAll } = require('../controllers/recordsController');

router.get('/retrieveAll', retrieveAll);


module.exports = router;