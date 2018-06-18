const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const registryRouter = require('./src/routes/registryRoutes');

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');


app.use('/', registryRouter);

app.get('/', (req, res) => {
  res.render('index', {
    nav: [{
      link: '/create',
      title: 'Create'
    },
    {
      link: '/manage',
      title: 'Manage'
    },
    {
      link: '/editregistry',
      title: 'Search and Edit Registry'
    }
    ],
    title: 'Bowring Bridal Registry'
  });
});


app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`);
});
