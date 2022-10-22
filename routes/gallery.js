//what the user sees

const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const adminData = require('./admin');
const router = express.Router();



router.get('/', (req, res, next)=> {
    const projects = adminData.projects;
    res.render('gallery', {prjcts: projects, docTitle: 'My Gallery', path: 'admin/gallery'});

    // console.log(adminData.projects);
    // res.sendFile(path.join(rootDir, 'views', 'gallery.html'))  
});  //add middleware function

module.exports = router;
