import React, { Component, Children, cloneElement } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import SwapiService from '../../services/swapi-service';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
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
		item: null,
		image: null,
		loading: true
	};

	componentDidMount() {
		this.updateItem();
	}

	componentDidUpdate(prevProps) {
		if (this.props.itemId !== prevProps.itemId) {
			this.setState({ loading: true });
			this.updateItem();
		}
	}

	updateItem() {
		const { itemId, getData, getImageUrl } = this.props;
		if (!itemId) return;
		getData(itemId).then((item) => {
			this.setState({ item, image: getImageUrl(item), loading: false });
		});
	}

	render() {
		const { classes } = this.props;
		if (!this.state.item) {
			return (
				<Container component="main" className={classes.heroContent}>
					<Card className={classes.card}>Please select item from the list</Card>
				</Container>
			);
		}
		//const { item: { name, gender, birthYear, eyeColor }, image, loading } = this.state;
		const { item, image, loading } = this.state;
		const imageBlock = loading ? (
			<div>
				<div className={classes.media} />
				<CircularProgress />
			</div>
		) : (
			<CardMedia className={classes.media} image={image} title={item.name} />
		);
		return (
			<Container component="main" className={classes.heroContent}>
				<Card className={classes.card}>
					{imageBlock}
					<CardContent>
						<Typography component="h2" variant="h5">
							{item.name}
						</Typography>
						<Grid container direction="row" spacing={1}>
							{Children.map(this.props.children, (child) => {
								return cloneElement(child, { item });
							})}
						</Grid>
					</CardContent>
				</Card>
			</Container>
		);
	}
}

export default withStyles(styles)(ItemDetails);
