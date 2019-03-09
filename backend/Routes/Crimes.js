const express = require('express');
const router = express.Router();
const CrimeSchema = require('../CrimeModel');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// http://localhost:4000/Crime
router.get('/', async (req, res) =>{
    var State = await CrimeSchema.aggregate([{
        $group: 
        { 
            _id: null, 
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
        }
    }]);

    if(!State) res.status(404)
    .send('ERROR, check if MongoDB is not started.')
    res.send(State);
})

// http://localhost:4000/Crime/StateName/CityName
router.get('/:crime', async(req, res) => {
    var State = await CrimeSchema.aggregate([{
        $group: 
        { 
            _id: req.params.crime, 
            TotalCrime: {$sum: "$" + req.params.crime}
            
        }

}]);

    var string = JSON.stringify(State);
    string = string.replace("\"TotalCrime\":", "\x22" + "Total" + req.params.crime+ "\x22" + ":");
    State = JSON.parse(string);

    if(!State) res.status(404)
    .send('The given crime did not return any data!')
    res.send(State);
});


module.exports = router;