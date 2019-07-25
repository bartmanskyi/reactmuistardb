import React from 'react';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Record from '../item-record';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';

const PlanetsPage = ({ history, match }) => {
	const swapiService = new SwapiService();
	const { id } = match.params;
	return (
		<Grid container spacing={4}>
			<Grid item md={6} sm={12} xs={12}>
				<ErrorBoundry>
					<ItemList
						onItemSelected={(id) => {
							history.push(id);
						}}
						getData={swapiService.getAllStarships}
						renderItem={({ name, model }) => {
							return { labelPrimary: name, labelSecondary: `${model}` };
						}}
					/>
				</ErrorBoundry>
			</Grid>

			<Grid item md={6} sm={12} xs={12}>
				<ErrorBoundry>
					<ItemDetails
						itemId={id}
						getData={swapiService.getStarship}
						getImageUrl={swapiService.getStarshipImage}
					>
						<Record field="manufacturer" label="Manufacturer" />
						<Record field="crew" label="Crew" />
						<Record field="length" label="Length" />
					</ItemDetails>
				</ErrorBoundry>
			</Grid>
		</Grid>
	);
};

export default withRouter(PlanetsPage);
