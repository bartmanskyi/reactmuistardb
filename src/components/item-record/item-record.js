import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
const Record = ({ item, field, label }) => {
	return (
		<Grid item xs={12} sm={4}>
			<List direction="row">
				<ListItem>
					<ListItemText primary={label} secondary={item[field]} />
				</ListItem>
			</List>
		</Grid>
	);
};
export default Record;
