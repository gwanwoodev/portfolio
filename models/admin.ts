import mongoose from "mongoose";
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    username: String,
    password: String
});

export default mongoose.model('admin', adminSchema);