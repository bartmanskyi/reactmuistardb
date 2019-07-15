import React, { Component } from 'react';

import withRoot from './withRoot';
import Container from '@material-ui/core/Container';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
// import PlanetsPage from '../planets-page';
// import StarshipsPage from '../starships-page';
import ErrorIndicator from '../error-indicator';

class App extends Component {
	state = {
		showRandomPlanet: true,
		hasError: false
	};
	toggleRandomPlanet = () => {
		this.setState((state) => {
			return {
				showRandomPlanet: !state.showRandomPlanet
			};
		});
	};

	componentDidCatch() {
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return <ErrorIndicator />;
		}
		const renderRandomPlanet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
		return (
			<div>
				<Header onToggleRandomPlanet={this.toggleRandomPlanet} showRandomPlanet={this.state.showRandomPlanet} />
				{renderRandomPlanet}
				<Container component="main">
					<PeoplePage />
					{/* <PlanetsPage />
					<StarshipsPage /> */}
				</Container>
			</div>
		);
	}
}

export default withRoot(App);
