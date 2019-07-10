import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import withRoot from './withRoot';
import Container from '@material-ui/core/Container';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<RandomPlanet />
				<Container component="main">
					<Grid container spacing={3}>
						<Grid item md={6} sm={12}>
							<ItemList />
						</Grid>
						<Grid item md={6} sm={12}>
							<PersonDetails />
						</Grid>
					</Grid>
				</Container>
			</div>
		);
	}
}

export default withRoot(App);
