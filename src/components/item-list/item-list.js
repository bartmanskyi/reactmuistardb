import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Container from '@material-ui/core/Container';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import SwapiService from '../../services/swapi-service';
const styles = (theme) => ({
	card: {
		maxWidth: '100%'
	},
	heroContent: {
		paddingTop: theme.spacing(4),
		paddingLeft: 0,
		paddingRight: 0
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
			<Container component="main" className={classes.heroContent}>
				<Card className={classes.card}>
					<CardContent>
						<List>{items}</List>
					</CardContent>
				</Card>
			</Container>
		);
	}
}

export default withStyles(styles)(ItemList);
