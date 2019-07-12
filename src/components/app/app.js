import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import withRoot from './withRoot';
import Container from '@material-ui/core/Container';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

class App extends Component {
	state = {
		showRandomPlanet: true,
		selectedPerson: null
	};
	toggleRandomPlanet = () => {
		this.setState((state) => {
			return {
				showRandomPlanet: !state.showRandomPlanet
			};
		});
	};
	onPersonSelected = (id) => {
		this.setState({ selectedPerson: id });
	};
	render() {
		const renderRandomPlanet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
		return (
			<div>
				<Header onToggleRandomPlanet={this.toggleRandomPlanet} showRandomPlanet={this.state.showRandomPlanet}/>
				{renderRandomPlanet}
				<Container component="main">
					<Grid container spacing={4}>
						<Grid item md={6} sm={12} xs={12}>
							<ItemList onItemSelected={this.onPersonSelected}/>
						</Grid>
						<Grid item md={6} sm={12} xs={12}>
							<PersonDetails personId={this.state.selectedPerson} />
						</Grid>
					</Grid>
				</Container>
			</div>
		);
	}
}

export default withRoot(App);
