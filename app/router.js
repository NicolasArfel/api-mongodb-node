require('dotenv').config();
const express = require('express');

const {
  findAllUsers,
  createOneUser,
  updateOneUser,
  deleteUser,
} = require('./controllers/rickController');

const router = express.Router();

const { Rick } = require('./models/users');

//routes
router.get('/rick', findAllUsers);

router.post('/rick/add', createOneUser);

router.put('/rick/:id', updateOneUser);

router.delete('/rick/:id', deleteUser);

module.exports = router;
