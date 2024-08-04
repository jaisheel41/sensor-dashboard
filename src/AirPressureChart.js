import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchData from './fetchData';
import AirPressureChart from './AirPressureChart';

const AirPressureChartPage = () => {
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
      <h1>Air Pressure</h1>
      <AirPressureChart data={data} />
      <nav>
        <Link to="/temperature">Go to Temperature Chart</Link>
        <Link to="/humidity">Go to Humidity Chart</Link>
      </nav>
    </div>
  );
};

export default AirPressureChartPage;
