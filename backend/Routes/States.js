const express = require('express');
const router = express.Router();
const CrimeSchema = require('../CrimeModel');


router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// http://localhost:4000/State/
router.get('/', async (req, res) => {
    const crime = await CrimeSchema.aggregate([
    { $group: { _id: "$State", 
    ViolentCrime: { $sum: "$ViolentCrime" },
    MurderManslaughter: {$sum: "$MurderManslaughter"},
    Rape: {$sum: "$Rape"},
    Robbery: {$sum: "$Robbery"},
    Assault: {$sum: "$Assault"},
    PropertyCrime: {$sum: "$PropertyCrime"},
    Burglary: {$sum: "$Burglary"},
    Theft: {$sum: "$Theft"},
    MotorTheft: {$sum: "$MotorTheft"},
    Arson: {$sum: "$Arson"}
    }}]) 

    if(!crime) res.status(404)
    .send('ERROR, check if MongoDB is not started.')
    res.send(crime);
});


// http://localhost:4000/State/NameOfState
router.get('/:state', async(req, res) => {
    const state = await CrimeSchema.aggregate([
        { $match: { State: { $eq: req.params.state
        }}},    
        { $group: { _id: "$State", 
        ViolentCrime: { $sum: "$ViolentCrime" },
        MurderManslaughter: {$sum: "$MurderManslaughter"},
        Rape: {$sum: "$Rape"},
        Robbery: {$sum: "$Robbery"},
        Assault: {$sum: "$Assault"},
        PropertyCrime: {$sum: "$PropertyCrime"},
        Burglary: {$sum: "$Burglary"},
        Theft: {$sum: "$Theft"},
        MotorTheft: {$sum: "$MotorTheft"},
        Arson: {$sum: "$Arson"}
        }}]) 

    if(!state) res.status(404)
    .send('The given state did not return any data!')
    res.send(state);
    });

// http://localhost:4000/State/NameOfState/NameOfCrime
router.get('/:state/:crime', async(req, res) => {
    var State = await CrimeSchema.aggregate([
        { $match: { State: { $eq: req.params.state
        }}},    
        { $group: { _id: "$State", 
        TotalCrime: { $sum: "$" + req.params.crime }
        }}]) 

    var string = JSON.stringify(State);
    string = string.replace("\"TotalCrime\":", "\x22" + req.params.crime+ "\x22" + ":");
    State = JSON.parse(string);

    if(!State) res.status(404)
    .send('The given state and crime did not return any data!')
    res.send(State);
});



 module.exports = router;