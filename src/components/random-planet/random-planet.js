import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
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
}));

export default function Pricing() {
	const classes = useStyles();

	return (
		<div>
			<CssBaseline />
			<Container component="main" className={classes.heroContent}>
				<Card className={classes.card}>
					<CardMedia
						className={classes.cardMedia}
						image="https://source.unsplash.com/random"
						title="Image title"
					/>
					<div className={classes.cardDetails}>
						<CardContent>
							<Typography component="h2" variant="h5">
								Heading
							</Typography>
							This is a media card. You can use this section to describe the content.
						</CardContent>
					</div>
				</Card>
			</Container>
		</div>
	);
}
