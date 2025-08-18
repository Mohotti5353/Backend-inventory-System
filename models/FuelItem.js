import mongoose from "mongoose";

const FuelItemSchema = new mongoose.Schema(
  {
    fuelType: {
      type: String,
      required: true,
      trim: true,
    },
    quantityLiters: {
      type: Number,
      required: true,
      min: 0,
    },
    pricePerLiter: {
      type: Number,
      required: true,
      min: 0,
    },
    supplier: {
      type: String,
      required: true,
      trim: true,
    },
    receivedDate: {
      type: Date,
      default: Date.now,
    },
    
  },
  { timestamps: true }
);

export default mongoose.model("FuelItem", FuelItemSchema);
