import React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

const TodoList = () => {
	return (
		<div>
			<CssBaseline />
			<Container component="main">
				<List className="todo-list" subheader={<ListSubheader component="div">List of people</ListSubheader>}>
					<ListItem button className="todo-list-item">
						<ListItemText disableTypography primary="label" />
					</ListItem>
					<ListItem button className="todo-list-item">
						<ListItemText disableTypography primary="label" />
					</ListItem>
					<ListItem button className="todo-list-item">
						<ListItemText disableTypography primary="label" />
					</ListItem>
				</List>
			</Container>
		</div>
	);
};
export default TodoList;
