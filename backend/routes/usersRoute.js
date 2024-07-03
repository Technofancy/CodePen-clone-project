import express from "express";
import { User } from "../models/userModels.js";

const router = express.Router();

// Route to save new user
router.post('/users', async (req, res) => {
    try {
        if (
            !req.body.name ||
            !req.body.email ||
            !req.body.password
        ) {
            return res.status(400).send({
                message: "Please provide all required fields."
            })
        }

        const newUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        }

        const user = await User.create(newUser)
        return res.status(200).send(user);
        
    } catch (error) {
        console.log("Error : ", error)
        res.status(500).send({message: error.message});
    }
})

export default router