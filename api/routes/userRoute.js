const express = require('express');
const router = express.Router();

const {createClient, updateClient, retrieveAll, retrieveByParams, deleteClient} = require ('../controllers/userController');

router.put('/createClient', createClient);
router.put('/updateClient', updateClient);
router.get('/retrieveAll', retrieveAll);
router.get('/retrieveByParams', retrieveByParams);
router.put('/deleteClient', deleteClient);

module.exports = router;