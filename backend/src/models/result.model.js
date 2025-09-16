import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  device_id: { type: String, required: true },
  farmer_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  soil: { type: Number },         
  moisture: { type: Number },     
  temperature: { type: Number },  
  humidity: { type: Number }, 
  imageUrl: { type: String },       
  score: { type: Number }, 
  decision: { type: String,required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Result", resultSchema);
