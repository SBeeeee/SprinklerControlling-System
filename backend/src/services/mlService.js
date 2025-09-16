export const  fakeMLPrediction= async (imagePath) => {
   
    const score = Math.random();
    const decision = score > 0.5 ? "sprinkle" : "no_action";
    return { score, decision };
  };
  