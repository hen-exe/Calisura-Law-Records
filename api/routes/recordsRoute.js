const express = require('express');
const router = express.Router();

const { createRecord, retrieveAll, retrieveCount, deleteRecord } = require('../controllers/recordsController');

router.put('/createRecord', createRecord);
router.get('/retrieveAll', retrieveAll);
router.get('/retrieveCount', retrieveCount);
router.post('/deleteRecord', deleteRecord);


module.exports = router;