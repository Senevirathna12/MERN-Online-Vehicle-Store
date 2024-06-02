import mongoose from 'mongoose';

const vehicleSchema = mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String, 
    },
    year: {
      type: Number,
    },
    colors: {
      type: [String], 
    },
    quantity: {
      type: Number,
    },
    itemNo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Vehicle = mongoose.model('Vehicles', vehicleSchema);
