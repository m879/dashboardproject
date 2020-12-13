import React from 'react';
 
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Button from '@material-ui/core/Button';



const Contact = (props) => {
    return (
       <div>
         <ListItem style={{width:'100%'}}>
            <ListItemAvatar ><Avatar src={props.img}></Avatar></ListItemAvatar>
            <ListItemText primary={props.name} secondary={props.designation} />
            <ListItemSecondaryAction>
              <Button variant="contained" color="primary" href="#contained-buttons">{props.btn}</Button>
            </ListItemSecondaryAction>
         </ListItem>
       </div>
    );
}
 
export default Contact;