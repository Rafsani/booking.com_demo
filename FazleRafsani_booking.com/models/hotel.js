import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
    ID: {
        type: Number,
    },
    name: {
        type: String,
    },
    location: {
        type: String,
    },
    description: {
        type: String,
    },

    foodprice: {
        type: Number,

    },
    roomprice: {
        type: Number,
    },
    serviceprice: {
        type: Number,
    } 

});

const hotel = mongoose.model("hotel", HotelSchema);

export default hotel;