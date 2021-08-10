const mongoose = require('mongoose');

let movieShema = mongoose.Schema({
  Title: {type: String, required: true},
  Description: {type: String, required: true},
  Genre: {
    Name: String,
    Description: String
  },
  Director: {
    Name: String,
    Description: String
  },
  Actors: [String],
  ImagePath: String,
  Featured: Boolean
});

let usersSchema = mongoose.Schema({
  Username: {type: String, required: true},
  Password: {type: String, required: true},
  Email: {type: String, required: true},
  Birthday: Date,
  FavoriteMovies: [{ type: mongoose.Schema.Types.ObjectID, ref: 'Movie'
}]
});

let Movie = mongoose.model('Movie', movieSchema);
let User = mongoose.model('user', userSchema);

module.exports.Movie = Movie;
module.exports.User = User;
