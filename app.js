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

//app.get('/random-beer', (request, response, next) => response.sendFile(__dirname + '/'));

// Add the route handlers here:

app.get('/', (req, res) => {
    const data = {};
    res.render('index', data);
});

app.get('/beers', (request, response, next) => {
    // recuperer les bieres
    punkAPI.getBeers()
        .then(function(beersFromApi) {
            console.log(beersFromApi)
            response.render('beers', { allBeers: beersFromApi }) // tableau d'objets
        }) // une promesse

});

app.get('/random-beer', (request, response, next) => {
        const randomBeer = punkAPI.getRandom()
            // selectionner une bierre aléatoire
        punkAPI.getRandom()
        randomBeer.then(beer => {
                console.log(beer)
                    //console.log(beer[0].name)
                response.render('random-beer', {
                    randomBeer: beer[0]
                })
            })
            //response.render('random-beer', { allBeers: beersFromApi }) // tableau d'objets
    }) // une promesse
;

/*
const randomBeer = PunkAPI.getRandom()

randomBeer.then(beer => {
  alert(beer[0].name)
})
*/

//app.get()

app.listen(3000, () => console.log('🏃‍ on port 3000'));