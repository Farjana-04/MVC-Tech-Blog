const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Awesome",
    user_id: 1,
    post_id: 1
  },
  {
    user_id: 5,
    post_id: 6,
    comment_text: "Very useful tool!"
},
  {
    comment_text: "Best of luck",
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: "Fantastic",
    user_id: 3,
    post_id: 3
  },
  {
    user_id: 4,
    post_id: 4,
    comment_text: "This is great news!"
},
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;