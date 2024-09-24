import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    specialChars: true,
  });

  const generatePassword = () => {
    let characterPool = '';
    if (options.uppercase) characterPool += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (options.lowercase) characterPool += 'abcdefghijklmnopqrstuvwxyz';
    if (options.numbers) characterPool += '0123456789';
    if (options.specialChars) characterPool += '!@#$%^&*()_+{}[]<>?';
    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      generatedPassword += characterPool[randomIndex];
    }
    setPassword(generatedPassword);
  };

  const handleOptionChange = (option) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [option]: !prevOptions[option],
    }));
  };
  return (
    <div className="password-generator">
      <h2>Password Generator</h2>
      <div>
        <input type="text" value={password} readOnly />
        <button onClick={() => navigator.clipboard.writeText(password)}>Copy</button>
      </div>
      <div>
        <label>Password Length: {length}</label>
        <input 
          type="range" 
          min="8" 
          max="64" 
          value={length} 
          onChange={(e) => setLength(e.target.value)} 
        />
      </div>
      <div>
        <input 
          type="checkbox" 
          checked={options.uppercase} 
          onChange={() => handleOptionChange('uppercase')} 
        />
        <label>Include Uppercase Letters</label>
      </div>
      <div>
        <input 
          type="checkbox" 
          checked={options.lowercase} 
          onChange={() => handleOptionChange('lowercase')} 
        />
        <label>Include Lowercase Letters</label>
      </div>
      <div>
        <input 
          type="checkbox" 
          checked={options.numbers} 
          onChange={() => handleOptionChange('numbers')} 
        />
        <label>Include Numbers</label>
      </div>
      <div>
        <input 
          type="checkbox" 
          checked={options.specialChars} 
          onChange={() => handleOptionChange('specialChars')} 
        />
        <label>Include Special Characters</label>
      </div>
      <button onClick={generatePassword}>Generate Password</button>
    </div>
  );
};

export default PasswordGenerator;
