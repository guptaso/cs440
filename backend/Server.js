const express = require('express');
const app = express();
const mongoose = require('mongoose');
const crime = require('./Crime');


mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB'))

mongoose.set('useCreateIndex', true);


app.use(express.json());
app.use('/', crime);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
