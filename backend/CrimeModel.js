const mongoose = require('mongoose');


const CrimeSchema = mongoose.model('Crime', new mongoose.Schema(
    {strict:false },
    { collection: 'crimes'}
  ));


module.exports = CrimeSchema;
