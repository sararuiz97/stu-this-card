import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import mongoose from 'mongoose';
import passport from 'passport';
import config from './config/database';

// Connect To Database
mongoose.connect(config.database);
// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to Database '+config.database);
});
// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error '+err);
});

const app = express();

const cards = require('./routes/cards');
const collections = require('./routes/collections');
const users = require('./routes/users');


// Port Number
const port = process.env.PORT || 4000;

// CORS Middleware
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/cards', cards);
app.use('/collections', collections);
app.use('/users', users);


// Start Server
app.listen(port, () => {
  console.log('Server started on port '+ port);
});
