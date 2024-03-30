import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: { type : String, required: true, unique: true, match: /^[a-zA-Z0-9_-]+$/, minlength: 3, maxlength: 25},
    email: { type : String, required: true},
    password: { type : String, required: true, minlength: 3, maxlength: 25},
})

const User = mongoose.model('User',userSchema)
export default User