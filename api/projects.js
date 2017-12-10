var express = require('express');
var router = express.Router();
var Project = require('../models/project');

// handle errors
function handleError(res, err) {
    return res.status(500).json(err);
}

// simple middleware for authenticated routes
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    // denied, redirect to login
    return res.status(403).json({ message: "Unauthorised action" });
}

// Get a list of projects
router.get('/', function (req, res) {
    Project.find({}, function (err, projects) {
        if (err) {
            return handleError(res, { error: 'Error fetching projects: ' + err });
        }
        return res.json(projects);
    });
});

// Get a project by ID
router.get('/:id', function (req, res) {
    Project.findOne({
        _id: req.params.id
    }, function (err, project) {
        if (err) {
            return handleError(res, { error: 'Error fetching project: ' + err });
        }

        if (!project) {
            return res.status(404).json({ error: 'Project not found' })
        }

        return res.json(project);
    });
});

// Create a new project
router.post('/', ensureAuthenticated, function (req, res) {
    Project.create(req.body, function (err, project) {
        if (err) {
            return handleError(res, { error: 'Error creating project: ' + err });
        }

        return res.status(201).json(project);
    });
});

// Update an existing project
router.patch('/:id', ensureAuthenticated, function (req, res) {
    Project.findById(req.params.id, function (err, project) {
        if (err) {
            return handleError(res, { error: 'Error fetching project: ' + err });
        }

        if (!project) {
            return res.status(404).json({ error: 'Project not found' })
        }

        project.name = req.body.name;
        project.login = req.body.login;

        project.save(function (err) {
            if (err) {
                return handleError(res, { error: 'Error updating project: ' + err });
            }
            return res.status(200).json(project);
        });
    });
});

// Partially update an existing project
router.patch('/:id', ensureAuthenticated, function (req, res) {
    Project.findById(req.params.id, function (err, project) {
        if (err) {
            return handleError(res, { error: 'Error fetching project: ' + err });
        }

        if (!project) {
            return res.status(404).json({ error: 'Project not found' })
        }

        if (req.body.name) { project.name = req.body.name }
        if (req.body.address) { project.address = req.body.address }
        // project.phone_number = req.body.phone_number

        project.save(function (err) {
            if (err) {
                return handleError(res, { error: 'Error updating project: ' + err });
            }
            return res.status(200).json(project);
        });
    });
});

// Delete a project
router.delete('/:id', ensureAuthenticated, function (req, res) {
    Project.findById(req.params.id, function (err, project) {
        if (err) {
            return handleError(res, { error: 'Error fetching project: ' + err });
        }

        if (!project) {
            return res.status(404).json({ error: 'Project not found' })
        }

        project.remove(function (err) {
            if (err) {
                return handleError(res, { error: 'Error deleting project: ' + err });
            }
            return res.status(200).end();
        });
    });
});

module.exports = router;