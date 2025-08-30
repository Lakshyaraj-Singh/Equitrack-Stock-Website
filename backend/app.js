import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import {User} from "./Models/User.js"
import userRouter from "./Routes/User.js"
const app=express();    
dotenv.config();
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
  };
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  



//Defining Routes
app.use("/api/user",userRouter)

const PORT = process.env.PORT || "3004";
const url = process.env.MONGO;

const main = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("connected");
  } catch (err) {
    console.log(err);
  }
};

main(url);

app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});



// complete Polygon Setup
// app.get("/test-poly", async (req, res) => { 
//   try {
//     const response = await rest.getGroupedStocksAggregates("2025-08-25");
//     console.log('Response:', response.results.find(stock => stock.T === "AAPL"));
    
//   } catch (e) {
//     console.error('An error happened:', e);
//   }
// });