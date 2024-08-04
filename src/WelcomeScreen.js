import React from 'react';
import { useHistory } from 'react-router-dom';

const WelcomeScreen = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push('/temperature');
  };

  return (
    <div>
      <h1>Hi, how are you?</h1>
      <p>Ready to see the visualizations?</p>
      <button onClick={handleButtonClick}>Okay</button>
    </div>
  );
};

export default WelcomeScreen;
