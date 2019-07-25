import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ItemList from '../item-list';
import { SwapiServiceConsumer } from '../swapi-service-context';
import ErrorBoundry from '../error-boundry';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withRouter } from 'react-router-dom';
class PlanetsPage extends Component {
	onItemSelected = (id) => {
		const { history } = this.props;
		history.push(id);
	};
	render() {
		return (
			<SwapiServiceConsumer>
				{({ getAllPlanets }) => {
					return (
						<Grid container spacing={4}>
							<Grid item xs={12}>
								<Typography variant="h6" gutterBottom style={{ paddingTop: '32px' }}>
									Planets
								</Typography>
								<Divider />
							</Grid>
							<Grid item xs={12}>
								<ErrorBoundry>
									<ItemList
										onItemSelected={this.onItemSelected}
										getData={getAllPlanets}
										renderItem={({ name, population }) => {
											return { labelPrimary: name, labelSecondary: `${population}` };
										}}
									/>
								</ErrorBoundry>
							</Grid>
						</Grid>
					);
				}}
			</SwapiServiceConsumer>
		);
	}
}
export default withRouter(PlanetsPage);
