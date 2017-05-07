const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes')

const { db, Hotel, Restaurant, Activity } = require('./db');

const app = express();

// body parser and logging middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// set up nunjucks for rendering
nunjucks.configure('views', { noCache: true });
app.engine('html', nunjucks.render);
app.set('view engine', 'html');

// serve up public dir statically
app.use(express.static('public'));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist'));
app.use('/jquery', express.static('node_modules/jquery/dist'));

app.use('/', routes)
// error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500)
    .render('error', { message: 'uh oh!' });
});

db.sync()
.then(() => {
  app.listen(3000, () => {
    console.log('Listening on 3000');
  });
});
