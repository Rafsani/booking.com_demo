import express from "express";
import hotel from "../models/hotel.js";
import review from "../models/review.js";

const hotelRouter = express.Router();

hotelRouter.post("/addhotel", (req, res) => {
    console.log(req.body);
    try {
        const newhotel = new hotel({
            ID: req.body.ID,
            name: req.body.name,
            location: req.body.location,
            description: req.body.description,
            foodprice: req.body.foodprice,
            roomprice: req.body.roomprice,
            serviceprice: req.body.serviceprice
        });
        newhotel.save();

        res.send("hotel added" + newhotel);
    } catch (error) {
        res.send(error);
    }

});


hotelRouter.get("/getallhotels", (req, res) => {
    hotel.find({}, (err, hotels) => {
        if (err) {
            res.send(err);
        } else {
            res.send(hotels);
        }
    });
});


hotelRouter.get("/gethotel", (req, res) => {
    const { location, lowprice, highprice, rating } = req.query;
    console.log(location, lowprice, highprice, rating);
    review.find({ rating: {$gte: rating } }, (err, reviews) => {
        if (err) {
            res.send(err);
        } else {
            const hotelIDs = reviews.map(review => review.hotelID);
            hotel.find({ID: {$in: hotelIDs } ,location: location, foodprice: { $gte: lowprice, $lte: highprice } }, (err, hotels) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send(hotels);
                }
            });
        }
    });
});

hotelRouter.get("/gethotelbykeyword", (req, res) => {
    const { keyword } = req.query;
    console.log(keyword);
    hotel.find({name: {$regex: keyword}}, (err, hotels) => {
        if (err) {
            res.send(err);
        } else {
            res.send(hotels);
        }
    });
});

/**
 *  
 * split the name
 * then match with keyword
 * 
{name: {$in: keyword}}
* 
 * 
 *
 * 
 */



export default hotelRouter;