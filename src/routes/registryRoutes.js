const express = require('express');

const registryRouter = express.Router();

const registry = [{
  registryCode: '1111',
  bride: 'Meghan',
  groom: 'Henry',
  contact: '111111',
  email: 'test@testing.com',
  weddingDate: '10/12/2018',
  showersDate: '10/08/2018',
  registryDate: '05/25/2018',
  store: '111',
  employee: 'rosy'
},
{
  registryCode: '2222',
  bride: 'Ana',
  groom: 'Patrick',
  contact: '222222',
  email: 'ana@gmail.com',
  weddingDate: '08/12/2018',
  showersDate: '08/08/2018',
  registryDate: '05/25/2018',
  store: '222',
  employee: 'rosy'
},
{
  registryCode: '3333',
  bride: 'Maya',
  groom: 'Sam',
  contact: '333333',
  email: 'maya@gmail.com',
  weddingDate: '08/12/2018',
  showersDate: '08/08/2018',
  registryDate: '05/25/2018',
  store: '333',
  employee: 'nancy'
}
];
registryRouter.route('/create')
  .get((req, res) => {
    res.render('create', {
      nav: [{
        link: '/create',
        title: 'Create'
      },
      {
        link: '/manage',
        title: 'Manage',
      },
      {
        link: '/editregistry',
        title: 'Search and Edit Registry'
      }
      ],
      title: 'Bowring Bridal Registry'
    });
  });

registryRouter.route('/manage')
  .get((req, res) => {
    res.render('manage', {
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
      title: 'Bowring Bridal Registry',
      registry
    });
  });

registryRouter.route('/editregistry')
  .get((req, res) => {
    res.render('editregistry', {
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
      title: 'Bowring Bridal Registry',
      registry
    });
  });

registryRouter.route('/:id')
  .get((req, res) => {
    const { id } = req.params;
    // object destructuring
    res.render('manage', {
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
      title: 'Bowring Bridal Registry',
      singleRegistry: registry[id]
    });
    // res.send('Search and Edit registry here');
  });

module.exports = registryRouter;
