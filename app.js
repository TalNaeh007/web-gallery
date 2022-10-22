const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var expressHbs = require('express-handlebars');

const app = express();

app.engine('handlebars', expressHbs());
app.set('view engine', 'handlebars');
// app.set('view engine', 'pug'); - 'pug' view engine  
app.set('views', 'views');

const adminData = require('./routes/admin')
const galleryRoutes = require('./routes/gallery')

app.use(bodyParser.urlencoded({extended: false})); //parsing html form type
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminData.routes);
app.use(galleryRoutes);

app.use((req,res,next) => {
    res.status(404).render('404');
});

app.listen(3000);
 
