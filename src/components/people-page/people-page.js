import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
export default class PeoplePage extends Component {
	swapiService = new SwapiService();

	state = {
		selectedItem: 3,
		hasError: false
	};
	onPersonSelected = (id) => {
		this.setState({ selectedItem: id });
	};
	componentDidCatch() {
		this.setState({ hasError: true });
	}
	render() {
		if (this.state.hasError) {
			return <ErrorIndicator />;
		}
		return (
			<Grid container spacing={4}>
				<Grid item md={6} sm={12} xs={12}>
					<ItemList
						onItemSelected={this.onPersonSelected}
						getData={this.swapiService.getAllPeople}
						renderItem={({ name, birthYear }) => {
							return { labelPrimary: name, labelSecondary: `${birthYear}` };
						}}
					/>
				</Grid>
				<Grid item md={6} sm={12} xs={12}>
					<ItemDetails personId={this.state.selectedItem} />
				</Grid>
			</Grid>
		);
	}
}
