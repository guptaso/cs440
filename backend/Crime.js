const express = require('express');
const router = express.Router();
const CrimeSchema = require('./CrimeModel');



router.get('/', async (req, res) => {
    const crime = await CrimeSchema.find();
    res.send(crime);
});

 module.exports = router;