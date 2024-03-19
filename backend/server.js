const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8090;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB;

mongoose.connect(URL, {
    // useCreateIndex: true,
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindAndVerify: false
});


const connection = mongoose.connection;
connection.once("open",()=>{
    console.log("Mongo Db Connected!")
})

const userRouter = require('./routes/user');

app.use("/user",userRouter);

app.listen(PORT,()=>{
    console.log(`Server is Running on ${PORT}`)
})