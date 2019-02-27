const express = require('express');
const router = express.Router();
const CrimeSchema = require('./CrimeModel');



router.get('/', async (req, res) => {
    const crime = await CrimeSchema.aggregate([
    { $group: { _id: "$State", 
    Violentcrime: { $sum: "$ViolentCrime" },
    Totalmurderandmanslaughter: {$sum: "$MurderManslaughter"},
    Totalrape: {$sum: "$Rape"},
    TotalRobbery: {$sum: "$Robbery"},
    TotalAssault: {$sum: "$Assault"},
    TotalPropertyCrime: {$sum: "$PropertyCrime"},
    TotalBurglary: {$sum: "$Burglary"},
    TotalTheft: {$sum: "$Theft"},
    TotalMotorTheft: {$sum: "$MotorTheft"},
    TotalArson: {$sum: "$Arson"}
    }}]) 

    if(!crime) res.status(404)
    .send('The given state did not return any data!')
    res.send(crime);
});

router.get('/:state', async(req, res) => {
    const state = await CrimeSchema.aggregate([
        { $match: { State: { $eq: req.params.state
        }}},    
        { $group: { _id: "$State", 
        Violentcrime: { $sum: "$ViolentCrime" },
        Totalmurderandmanslaughter: {$sum: "$MurderManslaughter"},
        Totalrape: {$sum: "$Rape"},
        TotalRobbery: {$sum: "$Robbery"},
        TotalAssault: {$sum: "$Assault"},
        TotalPropertyCrime: {$sum: "$PropertyCrime"},
        TotalBurglary: {$sum: "$Burglary"},
        TotalTheft: {$sum: "$Theft"},
        TotalMotorTheft: {$sum: "$MotorTheft"},
        TotalArson: {$sum: "$Arson"}
        }}]) 

    if(!state) res.status(404)
    .send('The given state did not return any data!')
    res.send(state);
    });

router.get('/:state/:crime', async(req, res) => {
    console.log(req.params.crime);

    const State = await CrimeSchema.aggregate([
        { $match: { State: { $eq: req.params.state
        }}},    
        { $group: { _id: "$State", 
        TotalCrime: { $sum: "$" + req.params.crime }
        }}]) 

    if(!State) res.status(404)
    .send('The given state did not return any data!')
    res.send(State);
});



 module.exports = router;