import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

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
	appBar: {
		borderBottom: `1px solid ${theme.palette.divider}`
	},
	toolbar: {
		flexWrap: 'wrap'
	},
	toolbarTitle: {
		flexGrow: 1
	},
	link: {
		margin: theme.spacing(1, 1.5)
	}
}));

export default function Pricing() {
	const classes = useStyles();

	return (
		<div>
			<CssBaseline />
			<AppBar position="static" color="default" elevation={0} className={classes.appBar}>
				<Toolbar className={classes.toolbar}>
					<Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
						Star DB
					</Typography>
					<nav>
						<Link variant="button" color="textPrimary" href="#" className={classes.link}>
							People
						</Link>
						<Link variant="button" color="textPrimary" href="#" className={classes.link}>
							Planets
						</Link>
						<Link variant="button" color="textPrimary" href="#" className={classes.link}>
							Starships
						</Link>
					</nav>
				</Toolbar>
			</AppBar>
		</div>
	);
}
