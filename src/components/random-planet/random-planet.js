import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import CardMedia from '@material-ui/core/CardMedia';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SwapiService from '../../services/swapi-service';
import CircularProgress from '@material-ui/core/CircularProgress';
const styles = (theme) => ({
	'@global': {
		body: {
			backgroundColor: theme.palette.common.white
		},
		ul: {
			margin: 0,
			padding: 0
		},
		li: {
			listStyle: 'none'
		}
	},
	heroContent: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4)
	},
	card: {
		display: 'flex'
	},
	cardDetails: {
		flex: 1
	},
	cardMedia: {
		width: 160
	}
});

class RandomPlanet extends Component {
	swapiService = new SwapiService();
	state = {
		planet: {},
		loading: true
	};

	constructor() {
		super();
		this.updatePlanet();
	}

	onPlanetLoaded = (planet) => {
		this.setState({ planet, loading: false });
	};

	updatePlanet() {
		const id = Math.floor(Math.random() * 18) + 2;
		this.swapiService.getPlanet(id).then(this.onPlanetLoaded);
	}

	render() {
		const { classes } = this.props;
		const { planet: { id, name, population, rotationPeriod, diameter }, loading } = this.state;
		const image = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
		const imageBlock = loading ? (
			<div>
				<div className={classes.cardMedia} />
				<CircularProgress size={40} style={{ display: 'contents' }} />
			</div>
		) : (
			<CardMedia className={classes.cardMedia} image={image} title={name} />
		);
		return (
			<div>
				<CssBaseline />
				<Container component="main" className={classes.heroContent}>
					<Card className={classes.card}>
						{imageBlock}
						<div className={classes.cardDetails}>
							<CardContent>
								<Typography component="h2" variant="h5">
									Star: {name}
								</Typography>
								<Grid container direction="row" spacing={1}>
									<Grid item xs={12} sm={4}>
										<List direction="row">
											<ListItem>
												<ListItemText primary="Population:" secondary={population} />
											</ListItem>
										</List>
									</Grid>

									<Grid item xs={12} sm={4} align="right">
										<List direction="row">
											<ListItem>
												<ListItemText primary="Rotation Period:" secondary={rotationPeriod} />
											</ListItem>
										</List>
									</Grid>
									<Grid item xs={12} sm={4} align="right">
										<List direction="row">
											<ListItem>
												<ListItemText primary="Diameter:" secondary={diameter} />
											</ListItem>
										</List>
									</Grid>
								</Grid>
							</CardContent>
						</div>
					</Card>
				</Container>
			</div>
		);
	}
}

export default withStyles(styles)(RandomPlanet);
