import predictInsuranceCharge from '../../utils/predict';

export default function handler(req, res) {
  console.log("predict called"); // Log the prediction result to the console

  if (req.method === 'POST') {
    const { age, bmi, children, smoker, region } = req.body;
    const prediction = predictInsuranceCharge({ age, bmi, children, smoker, region });
    console.log('Prediction Result:', prediction); // Log the prediction result to the console
    res.status(200).json({ prediction });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}