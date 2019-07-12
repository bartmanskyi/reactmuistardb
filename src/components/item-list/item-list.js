import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import SwapiService from '../../services/swapi-service';
const styles = (theme) => ({
	card: {
		maxWidth: '100%'
	}
});

class ItemList extends Component {
	swapiService = new SwapiService();
	state = {
		peopleList: null
	};
	componentDidMount() {
		this.swapiService.getAllPeople().then((peopleList) => {
			this.setState({ peopleList });
		});
	}

	renderItems(arr) {
		return arr.map(({ id, name }) => {
			return (
				<ListItem button key={id} onClick={() => this.props.onItemSelected(id)}>
					<ListItemText primary={name} />
				</ListItem>
			);
		});
	}

	render() {
		const { classes } = this.props;
		const { peopleList } = this.state;
		if (!peopleList) {
			return <CircularProgress />;
		}
		const items = this.renderItems(peopleList);
		return (
			<Card className={classes.card}>
				<CardContent>
					<List>{items}</List>
				</CardContent>
			</Card>
		);
	}
}

export default withStyles(styles)(ItemList);
