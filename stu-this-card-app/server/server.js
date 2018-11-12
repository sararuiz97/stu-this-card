import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();

mongoose.connect('mongodb://localhost:27017/cardsDB');
const connection = mongoose.connection;

connection.once('open', () => {
   console.log('MongoDB connection succeeded');
});

app.use(cors());
app.use(bodyParser.json());


app.use('/cards', require('./controllers/card.controller'));
app.use('/collections', require('./controllers/collection.controller'));
app.use('/users', require('./controllers/user.controller'));


app.listen(4000, () => console.log('Express server running on port 4000'));
