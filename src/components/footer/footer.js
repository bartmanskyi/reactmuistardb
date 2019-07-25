import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

function MadeWithLove() {
	return (
		<Typography variant="body1">
			{'Built with '}
			<Link color="inherit" href="https://reactjs.org/" target="_blank">
				React
			</Link>
			{' & '}
			<Link color="inherit" href="https://material-ui.com/" target="_blank">
				Material-UI
			</Link>
			{' & '}
			<Link color="inherit" href="https://swapi.co/" target="_blank">
				The Star Wars API
			</Link>
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	main: {
		marginTop: theme.spacing(8),
		marginBottom: theme.spacing(2)
	},
	footer: {
		padding: theme.spacing(2),
		marginTop: 'auto',
		backgroundColor: 'white',
		textAlign: 'center'
	}
}));

export default function StickyFooter() {
	const classes = useStyles();

	return (
		<footer className={classes.footer}>
			<Grid container spacing={4}>
				<Grid item xs={12}>
					<MadeWithLove />
					<Typography variant="body2" color="textSecondary">
						<Link color="inherit" href="https://github.com/bartmanskyi/reactmuistardb" target="_blank">
							Github
						</Link>
					</Typography>
				</Grid>
			</Grid>
		</footer>
	);
}
