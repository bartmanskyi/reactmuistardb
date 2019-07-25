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
import Hidden from '@material-ui/core/Hidden';
import { Link as LinkRouter } from 'react-router-dom';
const styles = (theme) => ({
	appBar: {
		borderBottom: `1px solid ${theme.palette.divider}`
	},
	toolbar: {
		flexWrap: 'wrap'
	},
	toolbarTitle: {
		flexGrow: 1,
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'none'
		}
	},
	toolbarLink: {
		color: 'rgba(0, 0, 0, 0.87)',
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'none'
		}
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
						<Hidden xsDown>
							<Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
								<Link component={LinkRouter} to="/" className={classes.toolbarLink}>
									Star DB
								</Link>
							</Typography>
						</Hidden>
						<nav>
							<Link
								variant="button"
								color="textPrimary"
								className={classes.link}
								component={LinkRouter}
								to="/people/"
							>
								People
							</Link>
							<Link
								variant="button"
								color="textPrimary"
								className={classes.link}
								component={LinkRouter}
								to="/planets/"
							>
								Planets
							</Link>
							<Link
								variant="button"
								color="textPrimary"
								className={classes.link}
								component={LinkRouter}
								to="/starships/"
							>
								Starships
							</Link>
						</nav>
						<Divider className={classes.divider} />
						<FormGroup row>
							<Hidden xsDown>
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
							</Hidden>
							<Hidden smUp>
								<FormControlLabel
									control={
										<Switch
											checked={showRandomPlanet}
											color="primary"
											onChange={() => this.props.onToggleRandomPlanet()}
										/>
									}
									style={{ marginLeft: 5 }}
								/>
							</Hidden>
						</FormGroup>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default withStyles(styles)(Header);
