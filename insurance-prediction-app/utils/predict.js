// Function to predict insurance charges based on user inputs
const predictInsuranceCharge = (formData) => {
  // Extract user inputs from formData
  const { age, bmi, children, smoker, region } = formData;

  // Apply coefficients from the linear regression model
  const intercept = 6.545;
  const ageCoefficient = 0.05208;
  const bmiCoefficient = 0.01630;
  const childrenCoefficient = 0.07798;
  const smokerCoefficient = 1.585;
  const southwestCoefficient = -0.07440;
  const southeastCoefficient = -0.1189;
  const ageSCoefficient = -0.0002098;

  // Encode categorical variables (if needed)
  const southwest = region === 'southwest' ? 1 : 0;
  const southeast = region === 'southeast' ? 1 : 0;

  // Calculate predicted insurance charge
  const predictedCharge = Math.exp(intercept +
                                    age * ageCoefficient +
                                    bmi * bmiCoefficient +
                                    children * childrenCoefficient +
                                    smoker * smokerCoefficient +
                                    southwest * southwestCoefficient +
                                    southeast * southeastCoefficient +
                                    age * ageSCoefficient);

  return predictedCharge;
};

export default predictInsuranceCharge;
