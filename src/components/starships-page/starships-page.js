import React from 'react';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Record from '../item-record';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
const PlanetsPage = ({ history, match }) => {
	const swapiService = new SwapiService();
	const { id } = match.params;
	return (
		<Grid container spacing={4}>
			<Grid item xs={12}>
				<Typography variant="h6" gutterBottom style={{ paddingTop: '32px' }}>
					Starships
				</Typography>
				<Divider />
			</Grid>
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
