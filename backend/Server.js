const express = require('express');
const app = express();
const mongoose = require('mongoose');
const states = require('./Routes/States');
const cities = require('./Routes/Cities');
const crimes = require('./Routes/Crimes');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB'))

mongoose.set('useCreateIndex', true);


app.use(express.json());
app.use('/State', states);
app.use('/City', cities);
app.use('/Crime', crimes)

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
