import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Collection = new Schema({
    name: String,
    creator: String,
    shared: [{
      name: String,
      email: String
    }],
    cards: [{
      front: {
        text: String,
        media: String
      },
      back: {
        text: String,
        media: String
      }
    }]
});

export default mongoose.model('Collection', Collection);
