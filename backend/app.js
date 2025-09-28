import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import {User} from "./Models/User.js"
import bodyParser from "body-parser";
import userRouter from "./Routes/User.js"
import stockRouter from "./Routes/Stock.js"
const app=express();    
dotenv.config();
const corsOptions = {
    origin:"*",
    credentials: true,
  };
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(bodyParser.urlencoded()); 



//Defining Routes
app.use("/api/user",userRouter)
app.use("/api/stk",stockRouter)
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

// Only start server if not in Vercel environment
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`);
  });
}

// Export app for Vercel
export default app;



// complete Polygon Setup
// app.get("/test-poly", async (req, res) => { 
//   try {
//     const response = await rest.getGroupedStocksAggregates("2025-08-25");
//     console.log('Response:', response.results.find(stock => stock.T === "AAPL"));
    
//   } catch (e) {
//     console.error('An error happened:', e);
//   }
// });