import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ItemDetails from '../item-details';
import Record from '../item-record';
import { SwapiServiceConsumer } from '../swapi-service-context';
import ErrorBoundry from '../error-boundry';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
export default class PlanetsPage extends Component {
	render() {
		const { itemId } = this.props;
		return (
			<SwapiServiceConsumer>
				{({ getPlanet, getPlanetImage }) => {
					return (
						<div>
							<Grid container spacing={4}>
								<Grid item xs={12}>
									<Typography variant="h6" gutterBottom style={{ paddingTop: '32px' }}>
										Planets
									</Typography>
									<Divider />
								</Grid>
							</Grid>
							<ErrorBoundry>
								<ItemDetails itemId={itemId} getData={getPlanet} getImageUrl={getPlanetImage}>
									<Record field="population" label="Population" />
									<Record field="rotationPeriod" label="Rotation Period" />
									<Record field="diameter" label="Diameter" />
								</ItemDetails>
							</ErrorBoundry>
						</div>
					);
				}}
			</SwapiServiceConsumer>
		);
	}
}
