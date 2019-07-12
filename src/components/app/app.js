import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import withRoot from './withRoot';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

class App extends Component {
	state = {
		showRandomPlanet: true,
		selectedPerson: 5
	};
	toggleRandomPlanet = () => {
		this.setState((state) => {
			return {
				showRandomPlanet: !state.showRandomPlanet
			};
		});
	};
	onPersonSelected = (id) => {
		console.log(id)
		this.setState({ selectedPerson: id });
	};
	render() {
		const renderRandomPlanet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
		return (
			<div>
				<Header />
				{renderRandomPlanet}
				<Button variant="contained" color="primary" onClick={this.toggleRandomPlanet}>
					Primary
				</Button>
				<Container component="main">
					<Grid container spacing={4}>
						<Grid item md={6} sm={12} xs={12}>
							<ItemList onItemSelected={this.onPersonSelected} />
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
