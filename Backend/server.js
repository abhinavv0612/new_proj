const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose  = require("mongoose");
const cors = require("cors");
app.use(cors());
const userRoute = require("./routes/userRoute")
app.use(express.json());
mongoose.connect(process.env.MONGODB_URL)
.then(() =>{
    console.log("connected successfully")
})
.catch((error) =>{ 
    console.log(error);
})


app.use(userRoute);
app.listen(5000);


