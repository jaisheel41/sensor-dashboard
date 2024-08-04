// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomeScreen from './WelcomeScreen';
import TemperatureChartPage from './TemperatureChartPage';
import HumidityChartPage from './HumidityChartPage';
import AirPressureChartPage from './AirPressureChartPage';
import Sidebar from './Sidebar';
import './App.css';

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/temperature" element={<TemperatureChartPage />} />
        <Route path="/humidity" element={<HumidityChartPage />} />
        <Route path="/air-pressure" element={<AirPressureChartPage />} />
      </Routes>
    </Router>
  );
};

export default App;
