
import { useState } from 'react';
import SelectInput from './SelectInput';
import TextInput from './TextInput';
import CheckboxInput from './CheckboxInput';
import styles from './PredictionForm.module.css'; // Import CSS module for styling

const regions = [
  { value: 'northwest', label: 'Northwest' },
  { value: 'southwest', label: 'Southwest' },
  { value: 'northeast', label: 'Northeast' },
  { value: 'southeast', label: 'Southeast' }
];

const PredictionForm = ({ onSubmit, predictionResult }) => {
  const [age, setAge] = useState('');
  const [bmi, setBMI] = useState('');
  const [children, setChildren] = useState('');
  const [smoker, setSmoker] = useState(false);
  const [region, setRegion] = useState('northwest');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!age || isNaN(age) || !bmi || isNaN(bmi) || !children || isNaN(children)) {
      setError('Please enter valid values for Age, BMI, and Number of Children.');
      return;
    }

    onSubmit({ age: parseInt(age), bmi: parseFloat(bmi), children: parseInt(children), smoker, region });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <TextInput label="Age" value={age} onChange={e => setAge(e.target.value)} />
      <TextInput label="BMI" value={bmi} onChange={e => setBMI(e.target.value)} />
      <TextInput label="Number of Children" value={children} onChange={e => setChildren(e.target.value)} />
      <div className={styles.checkbox}>
        <CheckboxInput label="Smoker" checked={smoker} onChange={e => setSmoker(e.target.checked)} />
      </div>
      <SelectInput label="Region" options={regions} value={region} onChange={e => setRegion(e.target.value)} />
      {error && <p className={styles.error}>{error}</p>}
      <button type="submit" className={styles.button}>Predict</button>
    </form>
  );
};

export default PredictionForm;
