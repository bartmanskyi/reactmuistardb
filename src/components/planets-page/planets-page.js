import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import SwapiService from '../../services/swapi-service';
export default class PeoplePage extends Component {
	swapiService = new SwapiService();

	state = {
		selectedItem: 3
	};
	onPlanetSelected = (id) => {
		this.setState({ selectedItem: id });
	};
	render() {
		return (
			<Grid container spacing={4}>
				<Grid item md={6} sm={12} xs={12}>
					<ItemList
						onItemSelected={this.onPlanetSelected}
						getData={this.swapiService.getAllPlanets}
						renderItem={({ name, population }) => {
							return { labelPrimary: name, labelSecondary: `${population}` };
						}}
					/>
				</Grid>
				<Grid item md={6} sm={12} xs={12}>
					<ItemDetails itemId={this.state.selectedItem} getData={this.swapiService.getPlanet} />
				</Grid>
			</Grid>
		);
	}
}
