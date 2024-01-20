const express = require('express');
const router = express.Router();

const { createRecord, retrieveAll, retrieveCount, retrieveByParams, deleteRecord } = require('../controllers/recordsController');

router.put('/createRecord', createRecord);
router.get('/retrieveAll', retrieveAll);
router.get('/retrieveCount', retrieveCount);
router.get('/retrieveByParams', retrieveByParams);
router.post('/deleteRecord', deleteRecord);


module.exports = router;