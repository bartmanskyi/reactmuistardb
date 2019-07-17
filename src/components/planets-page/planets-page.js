import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Record from '../item-record';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';

export default class PlanetsPage extends Component {
	swapiService = new SwapiService();
	state = {
		selectedItem: 3
	};
	onItemSelected = (id) => {
		this.setState({ selectedItem: id });
	};
	render() {
		return (
			<Grid container spacing={4}>
				<Grid item md={6} sm={12} xs={12}>
					<ErrorBoundry>
						<ItemList
							onItemSelected={this.onItemSelected}
							getData={this.swapiService.getAllPlanets}
							renderItem={({ name, population }) => {
								return { labelPrimary: name, labelSecondary: `${population}` };
							}}
						/>
					</ErrorBoundry>
				</Grid>

				<Grid item md={6} sm={12} xs={12}>
					<ErrorBoundry>
						<ItemDetails
							itemId={this.state.selectedItem}
							getData={this.swapiService.getPlanet}
							getImageUrl={this.swapiService.getPlanetImage}
						>
							<Record field="population" label="Population" />
							<Record field="rotationPeriod" label="Rotation Period" />
							<Record field="diameter" label="Diameter" />
						</ItemDetails>
					</ErrorBoundry>
				</Grid>
			</Grid>
		);
	}
}
