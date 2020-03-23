import mongoose from "mongoose";
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    userId: String,
    password: String
});

export default mongoose.model('admin', adminSchema);