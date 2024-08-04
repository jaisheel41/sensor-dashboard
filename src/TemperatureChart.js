import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchData from './fetchData';
import TemperatureChart from './TemperatureChart';

const TemperatureChartPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const newData = await fetchData();
      setData(newData);
    };
    fetchDataAsync();
  }, []);

  return (
    <div>
      <h1>Temperature</h1>
      <TemperatureChart data={data} />
      <nav>
        <Link to="/humidity">Go to Humidity Chart</Link>
        <Link to="/air-pressure">Go to Air Pressure Chart</Link>
      </nav>
    </div>
  );
};

export default TemperatureChartPage;
