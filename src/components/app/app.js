import React, { Component } from 'react';

import withRoot from './withRoot';
import Container from '@material-ui/core/Container';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import PeopleIdPage from '../peopleid-page';
import PlanetsPage from '../planets-page';
import PlanetsIdPage from '../planetsid-page';
import StarshipsPage from '../starships-page';
import ErrorIndicator from '../error-indicator';
import WelcomeContent from '../welcome-content';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';
class App extends Component {
	state = {
		swapiService: new SwapiService(),
		showRandomPlanet: false,
		hasError: false
	};

	onServiceChange = () => {
		this.setState(({ swapiService }) => {
			const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
			return {
				swapiService: new Service()
			};
		});
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
				<SwapiServiceProvider value={this.state.swapiService}>
					<Router>
						<Header
							onToggleRandomPlanet={this.toggleRandomPlanet}
							showRandomPlanet={this.state.showRandomPlanet}
						/>
						{renderRandomPlanet}
						<Container component="main">
							<Route path="/" exact component={WelcomeContent} />
							<Route
								path="/people"
								exact
								render={() => (
									<div>
										<Typography variant="h6" gutterBottom style={{ paddingTop: '32px' }}>
											People
										</Typography>
										<Divider />
									</div>
								)}
							/>
							<Route path="/people" exact component={PeoplePage} />
							<Route
								path="/people/:id"
								render={({ match }) => {
									const { id } = match.params;
									return <PeopleIdPage itemId={id} />;
								}}
							/>
							<Route
								path="/planets"
								exact
								render={() => (
									<div>
										<Typography variant="h6" gutterBottom style={{ paddingTop: '32px' }}>
											Planets
										</Typography>
										<Divider />
									</div>
								)}
							/>
							<Route path="/planets" exact component={PlanetsPage} />
							<Route
								path="/planets/:id"
								render={({ match }) => {
									const { id } = match.params;
									return <PlanetsIdPage itemId={id} />;
								}}
							/>
							<Route path="/starships" exact component={StarshipsPage} />
						</Container>
					</Router>
				</SwapiServiceProvider>
			</div>
		);
	}
}

export default withRoot(App);
