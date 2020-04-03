import mongoose, { PassportLocalSchema } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    username: String,
    password: String
});

adminSchema.plugin(passportLocalMongoose);

const model = mongoose.model("Admin", adminSchema as PassportLocalSchema);

export default model;