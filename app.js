const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:

hbs.registerPartials(path.join(__dirname, '/views/partials'));


// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('index');
});

// Iteration 3
app.get('/beers', (req, res) => {
  punkAPI
  .getBeers()
  .then(beersFromApi => {
    res.render('beers', {beersFromApi});
  })
  .catch(error => console.log(error));
});

// Iteration 4
app.get('/random-beer', (req, res) => {
  punkAPI
  .getRandom()
  .then(responseFromApi => {
    res.render('random-beer', {responseFromApi});
  })
  .catch(error => console.log(error));
});

// Iteration 6
app.get('/beers/:id', (req, res) => {
  
  const id = req.params.id;
  punkAPI
  .getBeer(id)
  .then(beersFromApi => {
    res.render('infos',{beersFromApi})
  })
  .catch(error => console.log(error));
});

app.listen(3000, () => console.log('🏃‍ on port 3000'));
