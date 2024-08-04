import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomeScreen.css';

const WelcomeScreen = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/temperature');
  };

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1>Hi!</h1>
        <p>Ready to see the visualizations?</p>
        <button onClick={handleButtonClick} className="welcome-button">
          Okay
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
