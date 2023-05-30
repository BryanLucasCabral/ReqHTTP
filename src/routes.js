const userControllers = require('./controller/usercontroller')
module.exports = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: userControllers.listUsers
  },
  {
    endpoint: '/users/:id',
    method: 'GET',
    handler: userControllers.getUserById
  },
  {
    endpoint: '/users',
    method: 'POST',
    handler: userControllers.createUser
  },
  {
    endpoint: '/users/:id',
    method: 'PUT',
    handler: userControllers.updatUser
  },
  {
    endpoint: '/users/:id',
    method: 'DELETE',
    handler: userControllers.deleteUser
  },
]