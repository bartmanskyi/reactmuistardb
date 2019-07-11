import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Error from '@material-ui/icons/Error';
const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(3, 2),
		color: '#f44336',
	}
}));
export default function ShowError() {
	const classes = useStyles();
	return (
		<Paper className={classes.root}>
			<Typography variant="h5" component="h3">
				<Error />
				
			</Typography>
			<Typography component="p">
			Error. This element can't be loaded
			</Typography>
		</Paper>
	);
}
