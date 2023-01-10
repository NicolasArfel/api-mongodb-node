const mongoose = require('mongoose');

//Model for the RickAndMorty Database
const Rick = mongoose.model('users', {
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    default: 'Nd',
    required: true,
  },
  age: {
    type: String,
    default: 'Nd',
    required: true,
  },
});

module.exports = { Rick };
