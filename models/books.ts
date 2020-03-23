import mongoose from "mongoose";
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    author: String,
    publihed_date: {type: Date, default: Date.now}
})

export default mongoose.model('book', bookSchema);