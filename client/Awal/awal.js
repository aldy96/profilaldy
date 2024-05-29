if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
  

const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const cors = require('cors')

const app = express();


app.use(cors({ origin:'http://localhost:3000'}));

users=[]

const initializePassport = require('../../services/passport-config')
initializePassport(
    passport,
    nama => users.find(user => user.nama === nama),
  
)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

app.get('/api/a', (req, res) => {res.send({users})})

app.get('/api/nama', checkAuthenticated, (req, res) => {
    res.send({ nama: req.user.nama })
  })
  
  app.get('/api/login', (req, res) => {
    res.redirect('/')
   
  })
  
  // app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  //   successRedirect: '/',
  //   failureRedirect: '/login',
  //   failureFlash: true
  // }))
  
  app.get('/api/register', checkNotAuthenticated, (req, res) => {
    res.redirect('/api/register')
  })
  
  app.post('/register', checkNotAuthenticated, async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      users.push({
        id: Date.now().toString(),
        nama: req.body.nama,
        password: hashedPassword
      })
      console.log(users)
     
    } catch {
      res.redirect('/api/register')
    }
  })
  
  app.get('/api/logout', (req, res) => {
    req.logOut()
    res.redirect('/api/login')
  })
  
  function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
  
    res.redirect('/api/login')
  }
  
  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/api')
    }
    next()
  }
  
 
const PORT = process.env.PORT || 5000;
app.listen(PORT);