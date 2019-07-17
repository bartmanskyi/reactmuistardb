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
		selectedItem: null
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
							getData={this.swapiService.getAllStarships}
							renderItem={({ name, model }) => {
								return { labelPrimary: name, labelSecondary: `${model}` };
							}}
						/>
					</ErrorBoundry>
				</Grid>

				<Grid item md={6} sm={12} xs={12}>
					<ErrorBoundry>
						<ItemDetails
							itemId={this.state.selectedItem}
							getData={this.swapiService.getStarship}
							getImageUrl={this.swapiService.getStarshipImage}
						>
							<Record field="manufacturer" label="Manufacturer" />
							<Record field="crew" label="Crew" />
							<Record field="length" label="Length" />
						</ItemDetails>
					</ErrorBoundry>
				</Grid>
			</Grid>
		);
	}
}
