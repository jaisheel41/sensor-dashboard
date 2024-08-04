// Sidebar.js
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <Menu>
      <Link to="/">Home</Link>
      <Link to="/temperature">Temperature</Link>
      <Link to="/humidity">Humidity</Link>
      <Link to="/air-pressure">Air Pressure</Link>
    </Menu>
  );
};

export default Sidebar;
