import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ItemDetails from '../item-details';
import Record from '../item-record';
import { SwapiServiceConsumer } from '../swapi-service-context';
import ErrorBoundry from '../error-boundry';
export default class PeoplePage extends Component {
	render() {
		const { itemId } = this.props;
		return (
			<SwapiServiceConsumer>
				{({ getPerson, getPersonImage }) => {
					return (
						<Grid container spacing={4}>
							<Grid item xs={12}>
								<ErrorBoundry>
									<ItemDetails itemId={itemId} getData={getPerson} getImageUrl={getPersonImage}>
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
