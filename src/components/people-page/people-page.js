import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ItemList from '../item-list';
import { SwapiServiceConsumer } from '../swapi-service-context';
import ErrorBoundry from '../error-boundry';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withRouter } from 'react-router-dom';
class PeoplePage extends Component {
	onItemSelected = (id) => {
		const { history } = this.props;
		history.push(id);
	};
	render() {
		return (
			<SwapiServiceConsumer>
				{({ getAllPeople }) => {
					return (
						<Grid container spacing={4}>
							<Grid item xs={12}>
								<Typography variant="h6" gutterBottom style={{ paddingTop: '32px' }}>
									People
								</Typography>
								<Divider />
							</Grid>
							<Grid item xs={12}>
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
						</Grid>
					);
				}}
			</SwapiServiceConsumer>
		);
	}
}
export default withRouter(PeoplePage);
