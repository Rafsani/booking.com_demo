import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";
import hotelRouter from "./routes/hotelRoute.js";
import reviewRouter from "./routes/reviewRoute.js";

const app = express();

const MONGOD_URL =
  "mongodb+srv://rafsani:rafsani@mydb.lgiia.mongodb.net/mydb?retryWrites=true&w=majority";

mongoose.connect(MONGOD_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB")
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRouter);
app.use('/hotel', hotelRouter);
app.use('/review', reviewRouter);

app.listen(3000, () => {
    console.log(" server is running on port 3000");
});