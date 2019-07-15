import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import SwapiService from '../../services/swapi-service';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
const styles = (theme) => ({
	card: {
		maxWidth: '100%'
	},
	media: {
		height: 380
	},
	heroContent: {
		paddingTop: theme.spacing(4),
		paddingLeft: 0,
		paddingRight: 0
	}
});

class ItemDetails extends Component {
	swapiService = new SwapiService();
	state = {
		person: null
	};

	componentDidMount() {
		this.updatePerson();
	}

	componentDidUpdate(prevProps) {
		if (this.props.personId !== prevProps.personId) {
			this.updatePerson();
		}
	}

	updatePerson() {
		const { personId } = this.props;
		if (!personId) return;
		this.swapiService.getPerson(personId).then((person) => {
			this.setState({ person });
		});
	}

	render() {
		const { classes } = this.props;
		if (!this.state.person) {
			return (
				<Container component="main" className={classes.heroContent}>
					<Card className={classes.card}>Please select person from the list</Card>
				</Container>
			);
		}
		const { id, name, gender, birthYear, eyeColor } = this.state.person;
		const image = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
		return (
			<Container component="main" className={classes.heroContent}>
				<Card className={classes.card}>
					<CardMedia className={classes.media} image={image} title={name} />
					<CardContent>
						<Typography component="h2" variant="h5">
							{name}
						</Typography>
						<Grid container direction="row" spacing={1}>
							<Grid item xs={12} sm={4}>
								<List direction="row">
									<ListItem>
										<ListItemText primary="Gender:" secondary={gender} />
									</ListItem>
								</List>
							</Grid>

							<Grid item xs={12} sm={4} align="right">
								<List direction="row">
									<ListItem>
										<ListItemText primary="birthYear:" secondary={birthYear} />
									</ListItem>
								</List>
							</Grid>
							<Grid item xs={12} sm={4} align="right">
								<List direction="row">
									<ListItem>
										<ListItemText primary="eyeColor:" secondary={eyeColor} />
									</ListItem>
								</List>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Container>
		);
	}
}

export default withStyles(styles)(ItemDetails);
