const mongoose = require('mongoose');

const Rick = mongoose.model('users', {
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
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
