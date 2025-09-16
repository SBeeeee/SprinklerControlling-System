
import Result from "../models/result.model.js"
import { fakeMLPrediction } from "./mlService.js";


export const createResult = async (farmerId, { device_id, soil, moisture, temperature, humidity, imageUrl }) => {
  const { score, decision } = fakeMLPrediction({ soil, moisture, temperature, humidity });

  const result = await Result.create({
    device_id,
    farmer_id: farmerId || null,
    soil,
    moisture,
    temperature,
    humidity,
    imageUrl,
    score,
    decision,
  });

  return result;
};

export const getResultsByUser = async (userId) => {
  return Result.find({ farmer_id: userId }).sort({ createdAt: -1 });
};
