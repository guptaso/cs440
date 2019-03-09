const express = require('express');
const router = express.Router();
const CrimeSchema = require('../CrimeModel');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// http://localhost:4000/City/StateName/CityName
router.get('/:state/:city', async(req, res) => {
    var State = await CrimeSchema.aggregate([
        {$match: { $and: [            
            {State: { $eq: req.params.state }},
            {City: { $eq: req.params.city }}]

        }}]);

    var string = JSON.stringify(State);
    string = string.replace("\"TotalCrime\":", "\x22" + req.params.crime+ "\x22" + ":");
    State = JSON.parse(string);

    if(!State) res.status(404)
    .send('The given state did not return any data!')
    res.send(State);
});

// http://localhost:4000/City/StateName/CityName/CrimeName
router.get('/:state/:city/:crime',async(req, res) => {
    var State = await CrimeSchema.aggregate(
    [
        {
            $match: { 
                $and: [            
                    {State: { $eq: req.params.state }},
                    {City: { $eq: req.params.city }}
            ]}
        },
        {
            $project: {        
               Crime: { $substr:["$" + req.params.crime,0,20] }
            }
        }
    ]);

    var string = JSON.stringify(State);
    string = string.replace("\"Crime\":", "\x22" + req.params.crime+ "\x22" + ":");
    State = JSON.parse(string);

    if(!State) res.status(404)
    .send('The given state did not return any data!')
    res.send(State);
});

module.exports = router;