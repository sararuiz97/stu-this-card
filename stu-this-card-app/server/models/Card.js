import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Card = new Schema({
    front: {
      text: String,
      media: String
    },
    back: {
      text: String,
      media: String
    }
});

export default mongoose.model('Card', Card);
