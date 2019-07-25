import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ItemDetails from '../item-details';
import Record from '../item-record';
import { SwapiServiceConsumer } from '../swapi-service-context';
import ErrorBoundry from '../error-boundry';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
export default class PeoplePage extends Component {
	render() {
		const { itemId } = this.props;
		return (
			<SwapiServiceConsumer>
				{({ getPerson, getPersonImage }) => {
					return (
						<div>
							<Grid container spacing={4}>
								<Grid item xs={12}>
									<Typography variant="h6" gutterBottom style={{ paddingTop: '32px' }}>
										People
									</Typography>
									<Divider />
								</Grid>
							</Grid>
							<ErrorBoundry>
								<ItemDetails itemId={itemId} getData={getPerson} getImageUrl={getPersonImage}>
									<Record field="gender" label="Gender" />
									<Record field="birthYear" label="Birth year" />
									<Record field="eyeColor" label="Eye color" />
								</ItemDetails>
							</ErrorBoundry>
						</div>
					);
				}}
			</SwapiServiceConsumer>
		);
	}
}
