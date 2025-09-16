// mlService.js
export const fakeMLPrediction = ({ soil, moisture, temperature, humidity }) => {
  // just a dummy formula, you can replace with real ML later
  const score = (soil + moisture + temperature + humidity) / 400; // normalize 0-1
  const decision = score > 0.5 ? "sprinkle" : "no_action";
  return { score, decision };
};
