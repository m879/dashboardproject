import React from 'react'; 
import './style.css';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme ,ThemeProvider} from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });
  
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: theme.spacing(1),
      color: theme.palette.text.secondary,
    },
}));
  
const Settings = () => {

    const classes = useStyles();
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
      });
    
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
       <div id="home">
            <ThemeProvider theme={darkTheme}>
                {/* <h1>Home</h1>                  */}
                <Grid container >
                    <Grid item lg={12} xs={12}>
                        <Paper className={classes.paper}>
                            <div style={{color:'white'}}>
                                <h2>Notifications</h2>
                                <p>Manage the notifications</p>
                            </div>
                            <hr></hr>
                            <form>
                            <Grid container>
                                <Grid item lg={6} xs={12}>
                                    <div style={{color:'white'}}>
                                        <h3>Notifications</h3>
                                    </div> 
                                    <FormGroup column>
                                        <FormControlLabel style={{color:'white'}}
                                          control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                                          label="Email"
                                        />
                                        <FormControlLabel  style={{color:'white'}}
                                          control={
                                            <Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" 
                                            />
                                          }
                                          label="Push Notifications"
                                        />
                                        <FormControlLabel  style={{color:'white'}}
                                          control={
                                            <Checkbox checked={state.checkedC} onChange={handleChange} name="checkedC"
                                            />
                                          }
                                          label="Text Messages"
                                        />
                                        <FormControlLabel  style={{color:'white'}}
                                          control={
                                            <Checkbox checked={state.checkedD} onChange={handleChange} name="checkedD" 
                                            />
                                          }
                                          label="Phone Calls"
                                        />
                                    </FormGroup>
                                </Grid>
                                <Grid item lg={6} xs={12}>
                                   <div style={{color:'white'}}>
                                        <h3>Messages</h3>
                                    </div> 
                                    <FormGroup column>
                                        <FormControlLabel style={{color:'white'}}
                                          control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                                          label="Email"
                                        />
                                        <FormControlLabel  style={{color:'white'}}
                                          control={
                                            <Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" 
                                            />
                                          }
                                          label="Push Notifications"
                                        />
                                        <FormControlLabel  style={{color:'white'}}
                                          control={
                                            <Checkbox checked={state.checkedC} onChange={handleChange} name="checkedC"
                                            />
                                          }
                                          label="Text Messages"
                                        />
                                    </FormGroup>
                                </Grid>
                            </Grid>
                            <hr></hr>
                            <Button variant="contained" type="submit" color="primary" id="profilebtn">Save</Button>
                            </form>
                        </Paper>
                    </Grid>
                    <Grid item lg={12} xs={12}>
                        <Paper className={classes.paper}>
                           <div style={{color:'white'}}>
                                <h2>Password</h2>
                                <p>Update password</p>
                            </div>
                            <hr></hr>
                            <form>
                                <div>
                                <TextField fullWidth  id="outlined-basic" label="Password*" variant="outlined" style={{marginTop:'1.25rem'}}/>
                                <TextField fullWidth  id="outlined-basic" label="Confirm Password*" variant="outlined" style={{marginTop:'20px'}}/>
                                </div>
                                <hr style={{marginTop:'30px'}}></hr>
                            <Button variant="contained" type="submit" color="primary" id="profilebtn">Update</Button>

                            </form>
                        </Paper>
                    </Grid>
                </Grid>
        </ThemeProvider>
       </div>
    );
}
export default Settings;