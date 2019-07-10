import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
// import SearchPanel from '../search-panel';
// import TodoList from '../todo-list';
// import ItemAddForm from '../item-add-form';
// import AppFooter from '../app-footer';
// import Container from '@material-ui/core/Container';
// import { withStyles } from '@material-ui/core/styles';
import withRoot from './withRoot';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<RandomPlanet />
			</div>
		);
	}
}

export default withRoot(App);
