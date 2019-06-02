import React from 'react';
import CurrentStats from '../CurrentStats/CurrentStats';
import Forecast from '../../containers/Forecast/Forecast';
import { Switch, Route } from 'react-router-dom';

const Main = props => {

  return (
    <main className="Main">
      <Switch>
        <Route exact path='/' render={() => <CurrentStats currentStats={props.currentStats} historicalStats={props.historicalStats} />} />
        <Route exact path='/forecast' render={() => <Forecast/> } />
      </Switch>
    </main>
  );
};

export default Main;