const express = require('express');
const router = express.Router();

const { createRecord, retrieveAll, deleteRecord } = require('../controllers/recordsController');

router.put('/createRecord', createRecord);
router.get('/retrieveAll', retrieveAll);
router.post('/deleteRecord', deleteRecord);


module.exports = router;