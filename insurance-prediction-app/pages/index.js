import { useState } from 'react';
import PredictionForm from '../components/PredictionForm';
import AnalysisSection from '../components/AnalysisSection';

const IndexPage = () => {
  const [predictionLog, setPredictionLog] = useState([]);

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch('/api/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to get prediction result');
      }

      const data = await response.json();
      const newPredictionLogEntry = { formData, predictionResult: data.prediction };
      setPredictionLog(prevLog => [...prevLog, newPredictionLogEntry]);
    } catch (error) {
      console.error('Prediction failed:', error);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <h1>Insurance Charge Prediction</h1>
        <PredictionForm onSubmit={handleSubmit} />
      </div>
      <div style={{ flex: 1 }}>
        <h2>Prediction Log</h2>
        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
          {predictionLog.map((entry, index) => (
            <div key={index}>
              <AnalysisSection entry={entry} />
              <hr style={{ margin: '5px 0' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
