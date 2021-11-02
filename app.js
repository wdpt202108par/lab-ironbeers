const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:

//app.get('/', (request, response, next) => );
//app.get('/beers', (request, response, next) => response.sendFile(__dirname + '/'));
//app.get('/random-beer', (request, response, next) => response.sendFile(__dirname + '/'));

// Add the route handlers here:

app.get('/', (req, res) => {
    const data = {};
    res.render('index', data);
});

//app.get()

app.listen(3000, () => console.log('🏃‍ on port 3000'));