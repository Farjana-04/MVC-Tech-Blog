const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// The `/api/comment` endpoint
// GET all Comment
router.get('/', (req, res) => {
    Comment.findAll({
        include: [User],
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err); 
            res.status(500).json(err); 
        })
});
router.get('/', withAuth, async (req, res) => {
    try{ 
     const commentData = await Comment.findAll({
       include: [User],
     });
   // serialize the data
     const comments = commentData.map((comment) => comment.get({ plain: true }));
   
     console.log(comments);
     
     res.render('single-post', {comments, loggedIn: req.session.loggedIn});
   } catch(err) {
       res.status(500).json(err);
   }
   });
//route to create a comment
router.post('/comments', withAuth, (req, res) => {
    if (req.session) {
    Comment.create({
        comment_text: req.body.comment_text, 
        post_id: req.body.post_id,
        // use the id from the session
        user_id: req.session.user_id,
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    }
});
//route to update a comment
router.put('/:id', withAuth, (req, res) => {
    Comment.update({
        comment_text: req.body.comment_text
      },
      {
        where: {
          id: req.params.id
        }
    }).then(dbCommentData => {
        if (!dbCommentData) {
            res.status(404).json({ message: 'No comment found with this id' });
            return;
        }
        res.json(dbCommentData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
//route to delete a comment
router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id 
        }
    }).then(dbCommentData => {
        if (!dbCommentData) {
            res.status(404).json({ message: 'No comment found with this id' });
            return;
        }
        res.json(dbCommentData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;