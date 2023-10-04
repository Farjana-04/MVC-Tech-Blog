//The withAuth function is a middleware function that checks if a user is authenticated 
//before allowing access to certain routes. 

const withAuth = (req, res, next) => {
    if(!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;

// const withAuth = require('./withAuth.js');

// app.get('/protected-route', withAuth, (req, res) => {
//   // This route will only be accessible if the user is authenticated
//   res.send('Protected Route');
// });