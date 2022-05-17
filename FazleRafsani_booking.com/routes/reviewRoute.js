import express from "express";
import review from "../models/review.js";
const reviewRoute = express.Router();

reviewRoute.post("/addreview", (req, res) => {
  console.log(req.body);
  try {
    const newReview = new review({
      hotelID: req.body.hotelID,
      userID: req.body.userID,
      rating: req.body.rating,
    });
      newReview.save();
      res.send("review added " + newReview);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

reviewRoute.get("/getallreviews", (req, res) => {
        review.find({}, (err, reviews) => {
            if (err) {
                res.send(err);
            } else {
                res.send(reviews);
            }
        }).sort({rating: -1});
    });


export default reviewRoute;
