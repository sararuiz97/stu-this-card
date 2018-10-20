import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Collection = new Schema({
    name: String,
});

export default mongoose.model('Collection', Collection);
