const express = require('express');
  morgan = require('morgan');

const app = express();

//Top 10 movies
const topMovies = [
  {
    title: "This Is Where I Leave You",
    director: "Shawn Levy",
    genre: "Drama/Comedy"
  },
  {
    title: "The Judge",
    director: "David Dobkin",
    genre: "Drama/Comedy"
  },
  {
    title: "Riding in Cars With Boys",
    director: "Penny Marshall",
    genre: "Drama/Comedy"
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    genre: "Crime/Comedy"
  },
  {
    title: "Tempation: Confessions of a Marriage Counselor",
    director: "Tyler Perry",
    genre: "Drama/Romance"
  },
  {
    title: "Just Married",
    director: "Shawn Levy",
    genre: "Romance"
  },
  {
    title: "Pineapple Express",
    director: "David Gordon Green",
    genre: "Comedy/Action"
  },
  {
    title: "The Count of Monte Cristo",
    director: "Kevin Reynolds",
    genre: "Adventure/Romance"
  },
  {
    title: "Step Brothers",
    director: "Adam McKay",
    genre: "Comedy"
  },
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    genre: "Drama/Crime"
  }
];

app.use(express.static('public'));
app.use(morgan('common'));

app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.get('/', (req, res) => {
  res.send('Welcome to my movie API!');
});

app.get('/documentation', (req, res) => {
  res.sendFile('public/documentation.html', { root: __movie_api });
});

// error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Oops, something broke!');
});

//listen on port 8080
app.listen(8080, () => {
  console.log('My app is listening on port 8080.');
});
