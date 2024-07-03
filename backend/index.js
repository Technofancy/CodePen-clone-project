import express from "express";
import cors from 'cors';

import { PORT, MONGODBURL } from "./config.js";
import mongoose from "mongoose";
import usersRoute from './routes/usersRoute.js'

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling cors
app.use(cors());

app.get('/', (req, res) => {
    console.log("Req :-", req);
    res.status(200).send("Namaste!");
});

// Route
app.use('/', usersRoute);

// Connect database
mongoose
    .connect(MONGODBURL)
    .then(() => {
        console.log("App connected to database")


        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        })


    })
    .catch((err) => {
        console.log(err);
    });
