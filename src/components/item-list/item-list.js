import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';

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
	state = {
		itemList: null
	};
	componentDidMount() {
		const { getData } = this.props;
		getData().then((itemList) => {
			this.setState({ itemList });
		});
	}

	renderItems(arr) {
		return arr.map((item) => {
			const { id } = item;
			const { labelPrimary, labelSecondary } = this.props.renderItem(item);
			return (
				<ListItem button key={id} onClick={() => this.props.onItemSelected(id)}>
					<ListItemText primary={labelPrimary} secondary={labelSecondary} />
				</ListItem>
			);
		});
	}

	render() {
		const { classes } = this.props;
		const { itemList } = this.state;
		if (!itemList) {
			return <CircularProgress />;
		}
		const items = this.renderItems(itemList);
		return (
			<Grid container spacing={4}>
				<Grid item xs={12}>
					<Card className={classes.card}>
						<CardContent>
							<List>{items}</List>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(ItemList);
