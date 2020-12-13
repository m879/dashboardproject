import React from 'react'; 
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
 
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

import { red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles({
  media: {
    height: 140,
  },
  avatar: {
    backgroundColor: red[500],
  },
});

const HomeCards= (props) => {
  const classes = useStyles();
    return (
        <div>
            <Card variant="outlined" style={{marginTop:'20px'}} >
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>  R</Avatar>
              }
              action={
                <IconButton aria-label="settings"><MoreVertIcon /></IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader="December 14, 2020"
            />
            <CardActionArea>
              <CardMedia  className={classes.media}  image={props.img}/>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{props.body}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <IconButton aria-label="add to favorites"><FavoriteIcon /> </IconButton>
              <IconButton aria-label="share"><ShareIcon /></IconButton>
              <Button size="small" variant="outlined" color="secondary" style={{marginLeft:'auto'}}>Learn More</Button>
            </CardActions>
           </Card>
        </div>
    );
}
 
export default  HomeCards;