const myapp = require('../controllers/myapp');
const express = require('express');

const router = express.Router();


router.get('/',myapp.getdo);



module.exports = router;