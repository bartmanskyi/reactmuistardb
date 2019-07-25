import React, { Component, Children, cloneElement } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
const styles = (theme) => ({
	card: {
		maxWidth: '100%'
	},
	media: {
		minHeight: 400
	},
	p: {
		textAlign: 'center'
	}
});

class ItemDetails extends Component {
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
				<Grid container spacing={4}>
					<Grid item xs={12}>
						<Card className={classes.card}>
							<p className={classes.p}>Please select item from the list</p>
						</Card>
					</Grid>
				</Grid>
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
			<Grid container spacing={4}>
				<Grid item xs={12}>
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
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(ItemDetails);
