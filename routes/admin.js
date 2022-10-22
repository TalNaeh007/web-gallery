//stuff admin can do

const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

const projects = [];

router.get('/add-project', (req, res, next)=> {
    // res.sendFile(path.join(rootDir, 'views', 'add-project.html')); 
    res.render('add-project', {'pageTitle': 'Add Project',docTitle: 'Add a Project', path: 'admin/add-project'});
});  

router.post('/add-project', (req,res,next) => {

    projects.push({ title: req.body.title })
    res.redirect('/');
});

exports.routes = router;
exports.projects = projects;

