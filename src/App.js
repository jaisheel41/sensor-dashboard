import React from 'react';
import { Route, Switch, Link, useHistory } from 'react-router-dom';
import WelcomeScreen from './WelcomeScreen';
import TemperatureChartPage from './TemperatureChartPage';
import HumidityChartPage from './HumidityChartPage';
import AirPressureChartPage from './AirPressureChartPage';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={WelcomeScreen} />
        <Route path="/temperature" component={TemperatureChartPage} />
        <Route path="/humidity" component={HumidityChartPage} />
        <Route path="/air-pressure" component={AirPressureChartPage} />
      </Switch>
    </div>
  );
};

export default App;
