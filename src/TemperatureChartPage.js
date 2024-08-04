import React, { useEffect, useState } from 'react';
import fetchData from './fetchData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './TemperatureChartPage.css';

const TemperatureChartPage = () => {
  const [data, setData] = useState([]);
  const [formattedData, setFormattedData] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState(null);

  const fetchDataAsync = async () => {
    let newData = await fetchData();
    const startDate = new Date('2024-07-26T00:00:00Z').getTime();
    newData = newData.filter(item => item.timestamp >= startDate);
    setData(newData);
  };

  useEffect(() => {
    fetchDataAsync();
    const intervalId = setInterval(fetchDataAsync, 60000); // Fetch new data every 60 seconds
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    if (data.length) {
      const groupedData = data.reduce((acc, item) => {
        const deviceId = item.device_id;
        if (!acc[deviceId]) {
          acc[deviceId] = [];
        }
        acc[deviceId].push(item);
        return acc;
      }, {});

      const formatted = Object.keys(groupedData).map(deviceId => ({
        name: `Device ${deviceId}`,
        data: groupedData[deviceId],
      }));

      setFormattedData(formatted);
    }
  }, [data]);

  const handleLegendClick = (e) => {
    if (selectedDevice === e.value) {
      setSelectedDevice(null);
    } else {
      setSelectedDevice(e.value);
    }
  };

  const displayedData = selectedDevice
    ? formattedData.filter(deviceData => deviceData.name === selectedDevice)
    : formattedData;

  return (
    <div className="chart-page">
      <h1 className="chart-title">Temperature</h1>
      <div className="button-container">
        <button
          className={`filter-button ${selectedDevice === null ? 'selected' : ''}`}
          onClick={() => setSelectedDevice(null)}
        >
          All
        </button>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="95%" height={600}>
          <LineChart data={displayedData.flatMap(deviceData => deviceData.data)} margin={{ top: 10, right: 30, left: 10, bottom: 100 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="timestamp"
              type="number"
              domain={['auto', 'auto']}
              tickFormatter={(tick) => new Date(tick).toLocaleString()}
              tick={{ fontSize: 12, angle: -45, textAnchor: 'end' }}
              scale="time"
              interval="preserveStartEnd"
              tickCount={10}
              padding={{ left: 20, right: 20 }}
            />
            <YAxis />
            <Tooltip labelFormatter={(label) => new Date(label).toLocaleString()} />
            <Legend verticalAlign="top" align="center" wrapperStyle={{ paddingBottom: 20 }} onClick={handleLegendClick} />
            {formattedData.map((deviceData, index) => (
              <Line
                key={index}
                type="monotone"
                dataKey="temperature"
                data={deviceData.data}
                name={deviceData.name}
                stroke={index === 1 ? "#FF8C00" : index === 2 ? "#006400" : `hsl(${index * 60}, 100%, 50%)`}
                connectNulls
                hide={selectedDevice && selectedDevice !== deviceData.name}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TemperatureChartPage;
