import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Collection = new Schema({
  name: String,
  its_3d: Boolean,
  model_3d: String,
  creator: Schema.Types.ObjectId,
});

export default mongoose.model('Collection', Collection);
