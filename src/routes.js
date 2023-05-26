const userController = require('./controller/usercontroller')
module.exports = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: userController.listUsers
  }
]