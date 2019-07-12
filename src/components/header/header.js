import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Divider from '@material-ui/core/Divider';
const styles = (theme) => ({
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
	},
	divider: {
		width: 1,
		height: 28,
		margin: 4
	}
});

class Header extends Component {
	render() {
		const { classes, showRandomPlanet } = this.props;
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
						<Divider className={classes.divider} />
						<FormGroup row>
							<FormControlLabel
								control={
									<Switch
										checked={showRandomPlanet}
										color="primary"
										onChange={() => this.props.onToggleRandomPlanet()}
									/>
								}
								label="Random Planet"
								labelPlacement="start"
							/>
						</FormGroup>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default withStyles(styles)(Header);
