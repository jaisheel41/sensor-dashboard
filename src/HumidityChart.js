import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchData from './fetchData';
import HumidityChart from './HumidityChart';

const HumidityChartPage = () => {
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
      <h1>Humidity</h1>
      <HumidityChart data={data} />
      <nav>
        <Link to="/temperature">Go to Temperature Chart</Link>
        <Link to="/air-pressure">Go to Air Pressure Chart</Link>
      </nav>
    </div>
  );
};

export default HumidityChartPage;
