const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user')

module.exports = (app) => {
    /*
  Session configuration and utilization of the MongoStore for storing
  the session in the MongoDB database
*/

const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const mongoString = 'mongodb://127.0.0.1:27017/data';
mongoose.connect(mongoString);
const db = mongoose.connection;
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: 'your secret key',
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({ mongoUrl: db.client.s.url })
}));

/*
  Setup the local passport strategy, add the serialize and 
  deserialize functions that only saves the ID from the user
  by default.
*/
const strategy = new LocalStrategy(User.authenticate())
passport.use(strategy);
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(passport.initialize());
app.use(passport.session());
}