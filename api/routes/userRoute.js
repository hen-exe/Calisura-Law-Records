const express = require('express');
const router = express.Router();

const {createClient, updateClient, updateClientSpecific, retrieveAll, retrieveClientDetails, retrieveByParams, deleteClient} = require ('../controllers/userController');

router.put('/createClient', createClient);
router.put('/updateClient', updateClient);
router.get('/retrieveAll', retrieveAll);
router.get('/retrieveClientDetails', retrieveClientDetails);
router.put('/updateClientSpecific', updateClientSpecific);
router.get('/retrieveByParams', retrieveByParams);
router.put('/deleteClient', deleteClient);

module.exports = router;