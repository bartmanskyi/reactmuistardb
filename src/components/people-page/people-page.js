import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';

export default class PeoplePage extends Component {
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
							getData={this.swapiService.getAllPeople}
							renderItem={({ name, birthYear }) => {
								return { labelPrimary: name, labelSecondary: `${birthYear}` };
							}}
						/>
					</ErrorBoundry>
				</Grid>
				<Grid item md={6} sm={12} xs={12}>
					<ErrorBoundry>
						<ItemDetails
							itemId={this.state.selectedItem}
							getData={this.swapiService.getPerson}
							getImageUrl={this.swapiService.getPersonImage}
						/>
					</ErrorBoundry>
				</Grid>
			</Grid>
		);
	}
}
