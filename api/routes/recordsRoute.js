const express = require('express');
const router = express.Router();

const { createRecord, retrieveAll, retrieveCount, retrieveRecordDetails, retrieveByParams, updateRecord, updateRecordSpecific, deleteRecord } = require('../controllers/recordsController');

router.put('/createRecord', createRecord);
router.get('/retrieveAll', retrieveAll);
router.get('/retrieveCount', retrieveCount);
router.get('/retrieveRecordDetails', retrieveRecordDetails);
router.get('/retrieveByParams', retrieveByParams);
router.put('/updateRecord', updateRecord);
router.put('/updateRecordSpecific', updateRecordSpecific);
router.post('/deleteRecord', deleteRecord);


module.exports = router;