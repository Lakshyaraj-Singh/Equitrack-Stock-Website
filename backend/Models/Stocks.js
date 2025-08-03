import mongoose from "mongoose";
import User from "./User.js";

const stockSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true
  },
  symbol: {
    type: String,
    required: true,
    uppercase: true,
    
  },
  companyName: {
    type: String,
    required: true,
    
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  buyPrice: {
    type: Number,
    required: true,
    min: 0
  },
  purchaseDate: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});


stockSchema.index({ user: 1, symbol: 1 });

const Stock =mongoose.model('Stock', stockSchema);
export {Stock}