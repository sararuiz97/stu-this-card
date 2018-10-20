import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let User = new Schema({
    name: {
      type: String
    },
    description: {
      type: String
    }
});

export default mongoose.model('User', User);
