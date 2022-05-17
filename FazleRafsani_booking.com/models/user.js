import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    ID: {
        type: Number,
    },
    name: {
        type: String,
    }

});

const user = mongoose.model("user", UserSchema);
export default user;