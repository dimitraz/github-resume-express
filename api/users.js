var express = require('express');
var router = express.Router();
var User = require('../models/user');

function handleError(res, err) {
  return res.status(500).json(err);
}

// Get a list of users
router.get('/', function (req, res) {
  User.find({}, function (err, users) {
    if (err) {
      return handleError(res, { error: 'Error fetching users: ' + err });
    }
    res.json(users);
  });
});

// Get a user by ID
router.get('/:id', function (req, res) {
  User.findOne({
    _id: req.params.id
  }, function (err, user) {
    if (err) {
      return handleError(res, { error: 'Error fetching user: ' + err });
    }

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    res.json(user);
  });
});

// Create a new user
router.post('/', function (req, res) {
  User.create(req.body, function (err, user) {
    if (err) {
      return handleError(res, { error: 'Error creating user: ' + err });
    }

    return res.status(201).json(user);
  });
});

// Update an existing user
router.patch('/:id', function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (err) {
      return handleError(res, { error: 'Error fetching user: ' + err });
    }

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    user.name = req.body.name;
    user.login = req.body.login;

    user.save(function (err) {
      if (err) {
        return handleError(res, { error: 'Error updating user: ' + err });
      }
      return res.status(200).json(user);
    });
  });
});

// Partially update an existing user
router.patch('/:id', function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (err) {
      return handleError(res, { error: 'Error fetching user: ' + err });
    }

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    if (req.body.name) { user.name = req.body.name }
    if (req.body.address) { user.address = req.body.address }
    // user.phone_number = req.body.phone_number

    user.save(function (err) {
      if (err) {
        return handleError(res, { error: 'Error updating user: ' + err });
      }
      return res.status(200).json(user);
    });
  });
});

// Delete a user
router.delete('/:id', function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (err) {
      return handleError(res, { error: 'Error fetching user: ' + err });
    }

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    user.remove(function (err) {
      if (err) {
        return handleError(res, { error: 'Error deleting user: ' + err });
      }
      return res.status(200).end();
    });
  });
});

module.exports = router;