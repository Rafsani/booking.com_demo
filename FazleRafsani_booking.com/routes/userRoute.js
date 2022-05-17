import express from "express";
import user from "../models/user.js";

const userRouter = express.Router();

userRouter.post("/adduser", (req, res) => {
    console.log(req.body);

    try {
        const newUser = new user({
            ID: req.body.ID,
            name: req.body.name
        });
        newUser.save();
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
        
    res.send("user added");
    
});


export default userRouter;