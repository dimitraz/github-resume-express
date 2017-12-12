var express = require('express');
var _ = require('lodash');
var router = express.Router();
var User = require('../models/user');
var authorise = require('../auth/authorise');

// handle errors
function handleError(res, err) {
  return res.status(500).json(err);
}

// Get a list of users
router.get('/', function (req, res) {
  User.find({}, function (err, users) {
    if (err) {
      return handleError(res, { error: 'Error fetching users: ' + err });
    }
    return res.json(users);
  });
});

// Get a user by ID
router.get('/:id([a-z0-9_.-]+)', function (req, res) {
  User.findOne({
    _id: req.params.id
  }, function (err, user) {
    if (err) {
      return handleError(res, { error: 'Error fetching user: ' + err });
    }

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    return res.json(user);
  });
});

// Create a new user
router.post('/', authorise, function (req, res) {
  User.create(req.body, function (err, user) {
    if (err) {
      return handleError(res, { error: 'Error creating user: ' + err });
    }

    return res.status(201).json(user);
  });
});

// Update an existing user
router.put('/:id', authorise, function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (err) {
      return handleError(res, { error: 'Error fetching user: ' + err });
    }

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    user.name = req.body.name;
    user.bio = req.body.bio || user.bio;
    user.location = req.body.location || user.location;
    user.blog = req.body.blog || user.blog;
    user.email = req.body.email || user.email;
    user.company = req.body.company || user.company;
    user.avatar_url = req.body.avatar_url || user.avatar_url;

    user.save(function (err, user) {
      if (err) {
        return handleError(res, { error: 'Error updating user: ' + err });
      }
      return res.status(200).json(user);
    });
  });
});

// Delete a user
router.delete('/:id', authorise, function (req, res) {
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

// Get all interests
router.get('/:id/interests', function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (err) {
      return handleError(res, { error: 'Error fetching user: ' + err });
    }

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    return res.status(200).json(user.interests);
  });
});

// Get interest by id
router.get('/:id/interests/:interest_id', function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (err) {
      return handleError(res, { error: 'Error fetching user: ' + err });
    }

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    // get the interest and update
    var index = _.findIndex(user.interests,
      function (interest) {
        return interest._id == req.params.interest_id;
      });
    if (index != -1) {
      return res.status(200).json(user.interests[index]);
    } else {
      return handleError(res, { error: 'Bad interest id' });
    }
  });
});

// Create a new interest
router.post('/:id/interests', authorise, function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (err) {
      return handleError(res, { error: 'Error fetching user: ' + err });
    }

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    // Add the interest to the user's list
    // of interests
    var interest = {
      interest: req.body.interest
    };
    user.interests.push(interest);
    user.save(function (err, post) {
      if (err) {
        return handleError(res, { error: 'Error saving user: ' + err });
      }

      return res.status(200).json(user);
    });
  });
});

// Update an interest
router.put('/:id/interests/:interest_id', authorise, function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (err) {
      return handleError(res, { error: 'Error fetching user: ' + err });
    }

    // get the interest and update
    var index = _.findIndex(user.interests, function (interest) {
      return interest._id == req.params.interest_id;
    });
    if (index != -1) {
      user.interests[index].interest = req.body.interest
      user.save(function (err) {
        if (err) { return handleError(res, { error: 'Error saving user: ' + err }); }
        return res.status(200).json(user);
      });
    } else {
      return handleError(res, { error: 'Bad interest id' });
    }
  });
});

// Delete an interest
router.delete('/:id/interests/:interest_id', authorise,  function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (err) {
      return handleError(res, { error: 'Error fetching user: ' + err });
    }

    // get the interest and update
    var interests = _.remove(user.interests, function (interest) {
      return interest._id == req.params.interest_id;
    });
    if (interests > 0) {
      user.save(function (err) {
        if (err) { return handleError(res, { error: 'Error saving user: ' + err }); }
        return res.status(200).json(user.interests);
      });
    }
    else {
      return handleError(res, { error: 'Unable to delete interest' });
    }
  });
});

module.exports = router;