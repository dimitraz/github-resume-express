var express = require('express');
var router = express.Router();
var Project = require('../models/project');
var authorise = require('../auth/authorise');
var validate = require('express-validation');
var validation = require('../models/validation/project.js');

// handle errors
function handleError(res, err) {
    return res.status(500).json(err);
}

var baseUrl = '/users/:id';

// Query projects
router.get('/projects', validate(validation), function (req, res) {
    Project.find(req.query, function (err, projects) {
        if (err) {
            return handleError(res, { error: 'Error fetching projects: ' + err });
        }
        return res.json(projects);
    });
});

// Get a list of projects
router.get(baseUrl + '/projects', function (req, res) {
    Project.find({}, function (err, projects) {
        if (err) {
            return handleError(res, { error: 'Error fetching projects: ' + err });
        }
        return res.json(projects);
    });
});

// Get a project by ID
router.get(baseUrl + '/projects/:project_id', function (req, res) {
    Project.findOne({
        _id: req.params.project_id
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
router.post(baseUrl + '/projects', authorise, function (req, res) {
    var project = new Project({
        name: req.body.name,
        userId: req.params.id,
        description: req.body.description || '',
        language: req.body.language || '',
        html_url: req.body.html_url || '',
        ext_url: req.body.ext_url || ''
    });

    project.save(function (err, project) {
        if (err) {
            return handleError(res, { error: 'Error creating project: ' + err });
        }

        return res.status(201).json(project);
    });
});

// Update an existing project
router.put(baseUrl + '/projects/:project_id', authorise, function (req, res) {
    Project.findById(req.params.project_id, function (err, project) {
        if (err) {
            return handleError(res, { error: 'Error fetching project: ' + err });
        }
        
        if (!project) {
            return res.status(404).json({ error: 'Project not found' })
        }

        project.name = req.body.name || project.name;
        project.description = req.body.description || project.description;
        project.language = req.body.language || project.language;
        project.html_url = req.body.html_url || project.html_url;
        project.ext_url = req.body.ext_url || project.ext_url;

        project.save(function (err) {
            if (err) {
                return handleError(res, { error: 'Error updating project: ' + err });
            }
            return res.status(200).json(project);
        });
    });
});

// Delete a project
router.delete(baseUrl + '/projects/:project_id', authorise, function (req, res) {
    Project.findById(req.params.project_id, function (err, project) {
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