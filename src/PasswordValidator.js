import React, { useState } from 'react';

const PasswordValidator = () => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const validatePassword = () => {
    const criteria = [
      { regex: /.{8,64}/, message: 'Length must be between 8 and 64 characters.' },
      { regex: /[A-Z]/, message: 'Must contain at least one uppercase letter.' },
      { regex: /[a-z]/, message: 'Must contain at least one lowercase letter.' },
      { regex: /[0-9]/, message: 'Must contain at least one number.' },
      { regex: /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/, message: 'Must contain at least one special character.' },
    ];
    for (let i = 0; i < criteria.length; i++) {
      if (!criteria[i].regex.test(password)) {
        setMessage(criteria[i].message);
        return;
      }
    }
    setMessage('Password is strong!');
  };
  return (
    <div className="password-validator">
      <h2>Password Validator</h2>
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Enter your password" 
      />
      <button onClick={validatePassword}>Validate</button>
      <p>{message}</p>
    </div>
  );
};

export default PasswordValidator;
