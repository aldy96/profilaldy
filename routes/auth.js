const passport = require('passport')


/*
  Beyond this point is all system specific routes.
  All routes are here for simplicity of understanding the tutorial
  /register -- Look closer at the package https://www.npmjs.com/package/passport-local-mongoose
  for understanding why we don't try to encrypt the password within our application
*/
const User = require('../models/user')

module.exports = (app) => 
{
app.post('/register', function (req, res) {
    User.register(
      new User({ 
        email: req.body.email, 
        username: req.body.username 
      }), req.body.password, function (err, msg) {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successful" });
        }
      }
    )
  })

  /*
  Login routes -- This is where we will use the 'local'
  passport authenciation strategy. If success, send to
  /login-success, if failure, send to /login-failure
*/
app.post('/login', passport.authenticate('local', { 
    failureRedirect: '/login-failure', 
    successRedirect: '/login-success'
  }), (err, req, res, next) => {
    if (err) next(err);
  });
  
  app.get('/login-failure', (req, res, next) => {
    console.log(req.session);
    res.send('Login Attempt Failed.');
  });
  
  app.get('/login-success', (req, res, next) => {
    console.log(req.session);
    res.send('Login Attempt was successful.');
  });

  app.post('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
  });

  /*
  Protected Route -- Look in the account controller for
  how we ensure a user is logged in before proceeding.
  We call 'isAuthenticated' to check if the request is 
  authenticated or not. 
*/
app.get('/profile', function(req, res) {
    console.log(req.session)
    if (req.isAuthenticated()) {
      res.json({ message: 'You made it to the secured profie' })
    } else {
      res.json({ message: 'You are not authenticated' })
    }
  })
  
  app.get('/current_user', (req, res) => {
    if (req.isAuthenticated()) {
        res.send(req.user);
    } else {
        res.send(false);
    }
});

app.post('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.send({ message: "Logout successful" });
  });
});
}