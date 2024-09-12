// Load the express module
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of express
const app = express();
const PORT = process.env.PORT || 3002;
// Use bodyParser middleware to parse JSON bodies
app.use(bodyParser.json());

// Sample array of movie names
let movies = [
  'The Shawshank Redemption',
  'The Godfather',
  'The Dark Knight',
  'Pulp Fiction',
  'The Lord of the Rings: The Return of the King'
];

// Define a route for GET requests to retrieve movie names
app.get('/movies', (req, res) => {
  res.json(movies);
});

// Define a route for POST requests to add a new movie
app.post('/movies', (req, res) => {
  const newMovie = req.body.movie;
  
  if (!newMovie) {
    return res.status(400).json({ message: 'Movie name is required!' });
  }
  
  movies.push(newMovie);
  res.status(201).json({
    message: 'Movie added successfully!',
    movies: movies
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

