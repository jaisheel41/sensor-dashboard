// src/App.js
import React, { useEffect, useState } from 'react';
import fetchData from './fetchData';
import TemperatureChart from './TemperatureChart';
import HumidityChart from './HumidityChart';
import AirPressureChart from './AirPressureChart';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(async () => {
      const newData = await fetchData();
      setData(newData);
    }, 5000); // Fetch data every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div>
      <h1>Live Data Visualization</h1>
      <TemperatureChart data={data} />
      <HumidityChart data={data} />
      <AirPressureChart data={data} />
    </div>
  );
};

export default App;
