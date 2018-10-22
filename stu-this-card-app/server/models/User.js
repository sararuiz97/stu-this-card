
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let User = new Schema({
    name: String,
    email: String
});

export default mongoose.model('User', User);
