import React from 'react'; 
import './style.css';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
 

const Employee = (props) => {

    return (
      <ListItem>
      <ListItemAvatar ><Avatar src={props.img}></Avatar></ListItemAvatar>
      <ListItemText  primary={props.name} secondary={props.designation} />
      <ListItemSecondaryAction>
        <Button variant="contained" color="primary" href="#contained-buttons">Chat</Button>
      </ListItemSecondaryAction>
    </ListItem>
    );
}
 
export default  Employee ;