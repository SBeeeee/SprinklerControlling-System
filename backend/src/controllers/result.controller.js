import { createResult, getResultsByUser } from "../services/result.services.js"

export const uploadResult = async (req, res) => {
  try {
    const { device_id, soil, moisture, temperature, humidity } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const result = await createResult(null, {
      device_id,
      soil,
      moisture,
      temperature,
      humidity,
      imageUrl,
    });

    res.status(201).json({ message: "Result created", result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


export const listResults = async (req, res) => {
  try {
    const results = await getResultsByUser(req.user.id);
    res.json(results);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
