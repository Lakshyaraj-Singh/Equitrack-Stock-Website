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
    origin: process.env.NODE_ENV === 'production' 
        ? ["https://equitrackstockwebsite-lakshyarajpro.vercel.app",]
        : ["http://localhost:3000", "http://localhost:5173"],
    credentials: true,
  };
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(bodyParser.urlencoded()); 



// Test endpoint
app.get("/api/test", (req, res) => {
  res.json({ 
    message: "Backend is working!", 
    timestamp: new Date().toISOString(),
    mongoUrl: process.env.MONGO ? "MongoDB URL is set" : "MongoDB URL is NOT set"
  });
});

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