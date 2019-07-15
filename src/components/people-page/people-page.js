import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
export default class PeoplePage extends Component {
	swapiService = new SwapiService();

	state = {
		selectedPerson: 3,
		hasError: false
	};
	onPersonSelected = (id) => {
		this.setState({ selectedPerson: id });
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
						renderItem={({ name, gender, birthYear }) => {
							return { labelPrimary: name, labelSecondary: `${gender}, ${birthYear}` };
						}}
					/>
				</Grid>
				<Grid item md={6} sm={12} xs={12}>
					<PersonDetails personId={this.state.selectedPerson} />
				</Grid>
			</Grid>
		);
	}
}
