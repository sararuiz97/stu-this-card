import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Collection = new Schema({
  name: String,
  creator: String,
  shared: [{
    name: String,
    email: String
  }]
});

export default mongoose.model('Collection', Collection);
