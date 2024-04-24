const AnalysisSection = ({ entry }) => {
    const { formData, predictionResult } = entry;
  
    return (
      <div>
        <h3>Form Data</h3>
        <p><strong>Age:</strong> {formData.age}</p>
        <p><strong>BMI:</strong> {formData.bmi}</p>
        <p><strong>Number of Children:</strong> {formData.children}</p>
        <p><strong>Smoker:</strong> {formData.smoker ? 'Yes' : 'No'}</p>
        <p><strong>Region:</strong> {formData.region}</p>
        <h3>Prediction Result</h3>
        <p><strong>Insurance Charge:</strong> {`$${predictionResult.toFixed(2)}`}</p>
      </div>
    );
  };
  
  export default AnalysisSection;