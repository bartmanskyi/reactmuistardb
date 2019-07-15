import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ItemList from '../item-list';
//import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
export default class PeoplePage extends Component {
	swapiService = new SwapiService();

	state = {
		selectedItem: 3,
		hasError: false
	};
	onItemSelected = (id) => {
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
						onItemSelected={this.onItemSelected}
						getData={this.swapiService.getAllStarships}
						renderItem={({ name, model }) => {
							return { labelPrimary: name, labelSecondary: `${model}` };
						}}
					/>
				</Grid>
				{/* <Grid item md={6} sm={12} xs={12}>
					<PersonDetails personId={this.state.selectedPerson} />
				</Grid> */}
			</Grid>
		);
	}
}
