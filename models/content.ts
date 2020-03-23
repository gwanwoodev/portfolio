import mongoose from "mongoose";
const Schema = mongoose.Schema;

const contentSchema = new Schema({
    title: String,
    preview: String,
    thumbnail: String,
    publihed_date: {type: Date, default: Date.now}
})

export default mongoose.model("content", contentSchema);