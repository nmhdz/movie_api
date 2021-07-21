const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const morgan = require('morgan');

const app = express();

//Log to terminal
app.use(morgan('common'));
app.use(bodyParser.json());

//Routes request for static file to public folder
app.use(express.static('public'));
app.get('/documentation', (req, res) => {
  res.sendFile('public/documentation.html', {
    root: __dirname
  });
});

//Top 10 movies -- in memory
const movies = [
  {
    title: "This Is Where I Leave You",
    director: "Shawn Levy",
    genre: "Drama"
  },
  {
    title: "The Judge",
    director: "David Dobkin",
    genre: "Drama"
  },
  {
    title: "Riding in Cars With Boys",
    director: "Penny Marshall",
    genre: "Drama"
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    genre: "Crime"
  },
  {
    title: "Tempation: Confessions of a Marriage Counselor",
    director: "Tyler Perry",
    genre: "Drama"
  },
  {
    title: "Just Married",
    director: "Shawn Levy",
    genre: "Romance"
  },
  {
    title: "Pineapple Express",
    director: "David Gordon Green",
    genre: "Comedy"
  },
  {
    title: "The Count of Monte Cristo",
    director: "Kevin Reynolds",
    genre: "Adventure"
  },
  {
    title: "Step Brothers",
    director: "Adam McKay",
    genre: "Comedy"
  },
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    genre: "Drama"
  }
];

//Returns a Welcome message at the endpoint "/"
app.get('/', (req, res) => {
  res.send('Welcome to my movie API!');
});

//Returns data about ALL movies
app.get('/movies', (req, res) => {
  res.json(movies);
});

//Returns data about a movie by title
app.get('/movies/:title', (req, res) => {
  res.json(movies.find((movie) => {
    return movie.title === req.params.title
  }));
});

//Returns data about a genre by name
app.get('/movies/genres/:name', (req, res) => {
  res.send('Successful GET request returning data about a genre by name');
});

//Returns data about a director by name
app.get('/movies/directors/:name', (req, res) => {
  res.send('Successful GET request returning data about a director by name');
});

//Allows new users to register
app.post('/users', (req, res) => {
  let newUser = req.body;

  if (!newUser.Username) {
    const message = 'Missing username in request body';
    res.status(400).send(message);
  } else {
    newUser.id = uuid.v4();
    users.push(newUser);
    res.status(201).send(newUser);
  }
});

//Allow users to update user info
app.put('/users/:username', (req, res) => {
  res.send('Successful PUT request allowing users to update user information');
});

//Allow users to add a movie to their list of favorites
app.post('/users/:username/movies/:movieID', (req, res) => {
  res.send('Successful POST request allowing users to add a movie to favorites list');
});

//Allow users to remove a movie from their list of favorites
app.delete('/users/:username/movies/:movieID', (req, res) => {
  res.send('Successful DELETE request allowing users to remove a movie from their list of favorites');
});

//Allow existing users to deregister
app.delete('/users/:username', (req, res) => {
  res.send('Successful DELETE request allowing users to deregister');
});


//Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Oops, something broke!');
});

//Listen on port 8080
app.listen(8080, () => {
  console.log('My app is listening on port 8080.');
});
