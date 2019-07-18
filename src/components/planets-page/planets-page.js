import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ItemList from '../item-list';
import { SwapiServiceConsumer } from '../swapi-service-context';
import ErrorBoundry from '../error-boundry';
import { withRouter } from 'react-router-dom';
class PlanetsPage extends Component {
	onItemSelected = (id) => {
		const { history } = this.props;
		const newPath = `/planets/${id}`;
		history.push(newPath);
	};
	render() {
		return (
			<SwapiServiceConsumer>
				{({ getAllPlanets }) => {
					return (
						<Grid container spacing={4}>
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
