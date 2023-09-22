const { User } = require('../models');

const userData = [
  {
    username: 'good@gmail.com',
    password: 'password012'
    
  },
  {
    username: 'super@gmail.com',
    password: 'password123'
  },
  {
    username: 'cool@gmail.com',
    password: 'password321'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;