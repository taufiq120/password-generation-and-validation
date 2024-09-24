import React from 'react';
import './App.css';
import PasswordGenerator from './PasswordGenerator';
import PasswordValidator from './PasswordValidator';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <PasswordGenerator />
        <PasswordValidator />
      </div>
    </div>
  );
}

export default App;
