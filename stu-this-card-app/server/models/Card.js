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
    },
    its_collection: String,
});

export default mongoose.model('Card', Card);
