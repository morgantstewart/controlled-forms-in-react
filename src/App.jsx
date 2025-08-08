// src/App.jsx

import { useState } from 'react';

import './App.css';

const App = () => {
  const [cityInput, setCityInput] = useState('');

  const handleChange = (event) => {
    setCityInput(event.target.value);
  };

  return (
    <>
      <label htmlFor="cityInput">City: </label>
      <input
        id="cityInput"
        name="cityInput"
        type="text"
        value={cityInput}
        onChange={handleChange}
      />
    </>
  );
};

export default App;
