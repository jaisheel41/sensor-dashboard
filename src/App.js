import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomeScreen from './WelcomeScreen';
import TemperatureChartPage from './TemperatureChartPage';
import HumidityChartPage from './HumidityChartPage';
import AirPressureChartPage from './AirPressureChartPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/temperature" element={<TemperatureChartPage />} />
        <Route path="/humidity" element={<HumidityChartPage />} />
        <Route path="/air-pressure" element={<AirPressureChartPage />} />
      </Routes>
    </div>
  );
};

export default App;
