import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Record from '../item-record';
import { SwapiServiceConsumer } from '../swapi-service-context';
import ErrorBoundry from '../error-boundry';
export default class PeoplePage extends Component {
	state = {
		selectedItem: 3
	};
	onItemSelected = (id) => {
		this.setState({ selectedItem: id });
	};
	render() {
		return (
			<SwapiServiceConsumer>
				{({ getPerson, getPersonImage, getAllPeople }) => {
					return (
						<Grid container spacing={4}>
							<Grid item md={6} sm={12} xs={12}>
								<ErrorBoundry>
									<ItemList
										onItemSelected={this.onItemSelected}
										getData={getAllPeople}
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
										getData={getPerson}
										getImageUrl={getPersonImage}
									>
										<Record field="gender" label="Gender" />
										<Record field="birthYear" label="Birth year" />
										<Record field="eyeColor" label="Eye color" />
									</ItemDetails>
								</ErrorBoundry>
							</Grid>
						</Grid>
					);
				}}
			</SwapiServiceConsumer>
		);
	}
}
