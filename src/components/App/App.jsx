import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import CurrentStats from '../../containers/CurrentStats/CurrentStats';
import Forecast from '../../containers/Forecast/Forecast';
import My404Component from '../My404Component/My404Component';

export class App extends Component {
	state = {
		showNav: false
	};

	render() {
		const nav = this.state.showNav ? (
			<nav className="App-nav">
				<NavLink className="nav-link" to="/" onClick={() => this.setState({ showNav: false })}>
          <i className="fas fa-home"></i>  Home
				</NavLink>
				<hr />
				<NavLink className="nav-link" to="/forecast" onClick={() => this.setState({ showNav: false })}>
          <i className="fas fa-cloud-sun"></i>  Forecast
				</NavLink>
			</nav>
		) : null;

		return (
			<div className="App">
				{nav}
				<header className="App-header">
					<div className="App-header-left">
						<img className="App-logo" src={require('../../images/rangweatherlogo.png')} alt="App logo" />
						<h1>RangWeather</h1>
					</div>
					<div className="App-header-right">
						<i className="fas fa-bars" onClick={() => this.setState({ showNav: !this.state.showNav })} />
					</div>
				</header>
				<main className="App-main">
					<Switch>
						<Route exact path="/" render={() => <CurrentStats />} />
            <Route exact path="/forecast" render={() => <Forecast />} />
            <Route path='*' exact={true} component={My404Component} />
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;
