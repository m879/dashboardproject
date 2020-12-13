import React from 'react'; 
import './style.css';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme ,ThemeProvider} from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });
  
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    input: {
        display: 'none',
      },
    paper: {
      padding: theme.spacing(2),
      margin: theme.spacing(1),
      color: theme.palette.text.secondary,
    },
}));
  


const Profile= () => {

    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    return (
       <div id="home">
            <ThemeProvider theme={darkTheme}>
                <Grid container >
                    <Grid item lg={4} xs={12}>
                        <Paper className={classes.paper}>
                            <div>
                                <div style={{textAlign:'center',margin:'50px',color:'white'}}>
                                  <img src="https://source.unsplash.com/weekly?flower" style={{width:'150px',height:'150px',borderRadius:'100%'}}></img>
                                  <div id="font1">
                                    <h3>ABC XYZ</h3>
                                    <h5>Student</h5>
                                  </div>
                                  <input  accept="image/*"  className={classes.input}  id="contained-button-file"  multiple  type="file"/>
                                  <label htmlFor="contained-button-file">
                                    <Button variant="contained" color="primary" component="span">Upload Picture</Button>
                                  </label>
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item lg={8} xs={12}>
                        <Paper className={classes.paper} >
                        <Grid item lg={12} xs={12}>
                            <div id="font1" style={{color:'white',paddingLeft:'3%'}}>
                            <h2>Profile</h2>
                            <h3>The information can be edited</h3>
                            </div>
                        </Grid>
                        <form className={classes.root} noValidate autoComplete="off" >
                            <Grid container style={{borderTop:'1px solid white'}}>
                            <Grid item lg={6} xs={12} style={{padding:'3%'}}>
                              <TextField fullWidth  id="outlined-basic" label="First name*" variant="outlined" style={{marginTop:'20px'}}/>
                              <TextField fullWidth  id="outlined-basic" label="Last name*" variant="outlined" style={{marginTop:'20px'}}/>
                              <TextField fullWidth  id="outlined-basic" label="Country*" variant="outlined" style={{marginTop:'20px'}}/>
                            </Grid>
                            <Grid item lg={6} xs={12} style={{padding:'3%'}}>
                              <TextField fullWidth  id="outlined-basic" label="Email*" variant="outlined" style={{marginTop:'20px'}}/>
                              <TextField fullWidth  id="outlined-basic" label="Phone number*" variant="outlined" style={{marginTop:'1.25rem'}}/>                            
                              <FormControl variant="filled" className={classes.formControl} fullWidth style={{marginTop:'20px'}}>
                                <InputLabel id="demo-simple-select-filled-label">State*</InputLabel>
                                <Select  value={age}  onChange={handleChange}>
                                  <MenuItem value="">
                                    <em>None</em>
                                  </MenuItem>
                                  <MenuItem value={10}>Delhi</MenuItem>
                                  <MenuItem value={20}>Uttar Pradesh</MenuItem>
                                  <MenuItem value={30}>Gujarat</MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>
                            <Button variant="contained" type="submit" color="primary" id="profilebtn">Save Details</Button>
                            </Grid>
                        </form>
                        </Paper>
                    </Grid>
                </Grid>
        </ThemeProvider>
       </div>
    );
}
export default Profile;