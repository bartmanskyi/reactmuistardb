import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ItemDetails from '../item-details';
import Record from '../item-record';
import { SwapiServiceConsumer } from '../swapi-service-context';
import ErrorBoundry from '../error-boundry';
export default class PlanetsPage extends Component {
	render() {
		const { itemId } = this.props;
		return (
			<SwapiServiceConsumer>
				{({ getPlanet, getPlanetImage }) => {
					return (
						<Grid container spacing={4}>
							<Grid item xs={12}>
								<ErrorBoundry>
									<ItemDetails itemId={itemId} getData={getPlanet} getImageUrl={getPlanetImage}>
										<Record field="population" label="Population" />
										<Record field="rotationPeriod" label="Rotation Period" />
										<Record field="diameter" label="Diameter" />
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
