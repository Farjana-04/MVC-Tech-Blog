const { Post } = require('../models');

const postData = [
  {
    title: 'Why MVC is import',
    content: 'MVC allows developers to maintain true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the controller layer for application logic',
    user_id: 1
  },
  {
    title: 'Authentication vs. Authorization',
    content: 'There is a difference between Authentication vs. Authorization. Authentication is confirming your own identity whereas Authorization means being allowed access to system.',
    user_id: 2
  },
  {
    title: 'Object Relational Mapping',
    content: 'I have really loved learning about ORMs. It is really simplified the way I create queries in SQL!',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;