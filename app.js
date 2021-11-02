const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

// Register the location for handlebars partials here:
hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/beers', (req, res) => {
  punkAPI
  .getBeers()
  .then(beersFromApi => {
    res.render('beers', {
      beers: beersFromApi,
    });
})
  .catch(error => console.log(error));
});

app.get('/random-beer', (req, res) => {
  punkAPI
  .getRandom()
  .then(responseFromAPI => {
    // your magic happens here
    console.log(responseFromAPI);
    res.render('random-beer', {
      randomBeer: responseFromAPI[0],
    });
  })
  .catch(error => console.log(error));
});

app.listen(4400, () => console.log('🏃‍ on port 4400'));
