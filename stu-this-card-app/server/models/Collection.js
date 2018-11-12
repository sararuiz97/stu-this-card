import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Collection = new Schema({
  name: String,
  creator: String,
  its_3d: Boolean,
  model_3d: String,
});

export default mongoose.model('Collection', Collection);
