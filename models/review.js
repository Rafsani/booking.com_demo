import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    hotelID: {
        type: Number,
    },
    userID: {
        type: Number,
    },
    rating: {
        type: Number,
    }

});

const review = mongoose.model("review", ReviewSchema);
export default review;