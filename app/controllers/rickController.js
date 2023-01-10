const { Rick } = require('../models/users');

// I want to find all the users in the Rick and Morty database
function findAllUsers(req, res) {
  Rick.find({}, (err, data) => {
    if (!err) {
      res.send(data);
      console.log(data);
    } else {
      console.log(err);
    }
  });
}

// i want to create one user into the Rick and Morty database
function createOneUser(req, res) {
  const rick = new Rick({
    firstname: req.body.firstName,
    lastname: req.body.lastName,
    age: req.body.age,
  });
  rick.save((err, data) => {
    res.status(200).json({
      code: 200,
      message: 'New Rick and Morty Users added',
      addRickUser: data,
    });
  });
}

// i want to update one user's values into the Rick and Morty database found with its id
function updateOneUser(req, res) {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to update cannot be empty',
    });
  }

  const id = req.params.id;
  Rick.findByIdAndUpdate(id, req.body, {
    useFindAndMofidy: false,
  })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update user with ${id}`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error Update user information',
      });
    });
}

// i want to delete one user into the Rick and Morty database found with its id
function deleteUser(req, res) {
  const id = req.params.id;
  Rick.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete user with id ${id}`,
        });
      } else {
        res.send({
          message: `User with id ${id} has been deleted`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Cannot delete user with id ${id}`,
      });
    });
}

module.exports = {
  findAllUsers,
  createOneUser,
  updateOneUser,
  deleteUser,
};
