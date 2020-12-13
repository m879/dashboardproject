import React from 'react';
import './style.css';

import Contact from './Contact';

import Grid from '@material-ui/core/Grid';
import { createMuiTheme ,ThemeProvider} from '@material-ui/core/styles';
import {  withStyles,makeStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';
import {  useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });
  
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },   
  }));

function TabPanel(props) {
    const { children, value, index, ...other } = props;  
    return (
      <div  role="tabpanel"  hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={5}>  <Typography>{children}</Typography></Box>
        )}
      </div>
    );
}
  
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
  
function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
}
  
const Mygroups= () => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
       <div id="home">
          <ThemeProvider theme={darkTheme}>
                <Grid  style={{paddingRight:'3%'}}>
                <AppBar position="static" color="default">
                  <Tabs value={value} onChange={handleChange}
                    indicatorColor="secondary" textColor="secondary" variant="fullWidth" aria-label="full width tabs example"
                  >
                    <Tab label="Connections" {...a11yProps(0)} />
                    <Tab label="Suggestions" {...a11yProps(1)} />
                  </Tabs>
                </AppBar>
                <TabPanel value={value} index={0} dir={theme.direction} id="contactsuggestions" >
                <Grid container>
                    <Grid lg={6} sm={12} style={{width:'100%'}}>
                      <div  style={{listStyle:'none'}}>
                        <Contact name="Adolf " designation="Web Developer" btn="Unfollow" img="https://source.unsplash.com/weekly?boy"/>
                        <Contact name="John" designation="UI/UI Designer" btn="Unfollow" img="https://source.unsplash.com/weekly?designer"/>
                        <Contact name="Micky" designation="Teacher" btn="Unfollow" img="https://source.unsplash.com/weekly?teacher"/>
                        <Contact name="Daniyal" designation="Artist" btn="Unfollow" img="https://source.unsplash.com/weekly?artist"/>
                        <Contact name="Xavier" designation="Manager" btn="Unfollow" img="https://source.unsplash.com/weekly?manager"/>
                        <Contact name="P C Warsaw" designation="Teacher" btn="Unfollow" img="https://source.unsplash.com/weekly?girl"/>
                        <Contact name="Watson" designation="Charter Account" btn="Unfollow" img="https://source.unsplash.com/weekly?account"/>
                        <Contact name="Jim ki Kong" designation="Student" btn="Unfollow" img="https://source.unsplash.com/weekly?girl"/>
                        <Contact name="Rohan Singh" designation="Teacher" btn="Unfollow" img="https://source.unsplash.com/weekly?flower"/>
                        <Contact name="Anil Pratap" designation="Web Developer" btn="Unfollow" img="https://source.unsplash.com/weekly?developer"/>
                      </div>
                    </Grid>
                    <Grid lg={6} sm={12} style={{width:'100%'}}>
                      <div  style={{listStyle:'none'}}>
                      <Contact name="Armando" designation="Student" btn="Unfollow"       
                         img="https://source.unsplash.com/weekly?student"/>
                      <Contact name="Andreas" designation="Web Developer" btn="Unfollow" 
                         img="https://source.unsplash.com/weekly?coding"/>
                      <Contact name="Eisso" designation="Python Developer" btn="Unfollow"
                          img="https://source.unsplash.com/weekly?developer"/>
                      <Contact name="Ara" designation="UI/UI Designer" btn="Unfollow"  
                          img="https://source.unsplash.com/weekly?designer"/>
                      <Contact name="Boris" designation="Web Developer" btn="Unfollow" 
                          img="https://source.unsplash.com/weekly?flower"/>
                      <Contact name="Alexei" designation="Student" btn="Unfollow" 
                          img="https://source.unsplash.com/weekly?lady"/>
                      <Contact name="Gaston" designation="Web Developer" btn="Unfollow" 
                          img="https://source.unsplash.com/weekly?tree"/>
                      <Contact name="Azam" designation="Full Stack Developer" btn="Unfollow" 
                          img="https://source.unsplash.com/weekly?developer"/>
                      <Contact name="Fritz" designation="Data Scientist" btn="Unfollow"
                          img="https://source.unsplash.com/weekly?data"/>
                      <Contact name="Cruz" designation="UI/UI Designer" btn="Unfollow" 
                          img="https://source.unsplash.com/weekly?sun"/>
                      </div>
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel  value={value} index={1} dir={theme.direction} id="contactsuggestions" >
                  <Grid container>
                    <Grid lg={6} sm={12} style={{width:'100%'}}>
                      <h3 style={{textAlign:'center'}}>Friends</h3>
                      <hr></hr>
                      <div  style={{listStyle:'none'}}>
                        <Contact name="John" designation="Student" btn="Connect" 
                            img="https://source.unsplash.com/weekly?student"/>
                        <Contact name="Rohan" designation="Coder" btn="Connect" 
                            img="https://source.unsplash.com/weekly?flower"/>
                        <Contact name="Arjun" designation="Coding" btn="Connect" 
                            img="https://source.unsplash.com/weekly?glass"/>
                        <Contact name="Anurag" designation="Django Developer" btn="Connect" 
                            img="https://source.unsplash.com/weekly?laptop"/>
                        <Contact name="Anil" designation="Web Developer" btn="Connect" 
                            img="https://source.unsplash.com/weekly?coding"/>
                        <Contact name="Anmol" designation="Singer" btn="Connect" 
                            img="https://source.unsplash.com/weekly?bottle"/>
                        <Contact name="Hrithik" designation="Python Developer" btn="Connect" 
                            img="https://source.unsplash.com/weekly?developer"/>
                        <Contact name="Rakesh" designation="Data Scientist" btn="Connect" 
                            img="https://source.unsplash.com/weekly?lab"/>
                        <Contact name="Harry" designation="Student" btn="Connect" 
                            img="https://source.unsplash.com/weekly?bag"/>
                        <Contact name="Davil" designation="Web Developer" btn="Connect" 
                            img="https://source.unsplash.com/weekly?data"/>
                      </div>
                    </Grid>
                    <Grid lg={6} sm={12} style={{width:'100%'}}>
                      <h3 style={{textAlign:'center'}}>Popular</h3>
                      <hr></hr>
                      <div  style={{listStyle:'none'}}>
                      <Contact name="Rakesh" designation="Actor" btn="Connect"
                         img="https://source.unsplash.com/weekly?flower"/>
                      <Contact name="Akash" designation="Singer" btn="Connect"
                         img="https://source.unsplash.com/weekly?singer"/>
                      <Contact name="Anil" designation="Student" btn="Connect"
                         img="https://source.unsplash.com/weekly?student"/>
                      <Contact name="Anmol" designation="Actor" btn="Connect" 
                         img="https://source.unsplash.com/weekly?water"/>
                      <Contact name="Adam" designation="Bussiness man" btn="Connect" 
                         img="https://source.unsplash.com/weekly?actor"/>
                      <Contact name="Pascal" designation="Actor" btn="Connect" 
                          img="https://source.unsplash.com/weekly?hill"/>
                      <Contact name="Edison" designation="Developer" btn="Connect" 
                          img="https://source.unsplash.com/weekly?man"/>
                      <Contact name="Nikos" designation="Actor" btn="Connect" 
                          img="https://source.unsplash.com/weekly?lady"/>
                      <Contact name="Orion" designation="Web Developer" btn="Connect"
                          img="https://source.unsplash.com/weekly?land"/>
                      <Contact name="Ivar" designation="Singer" btn="Connect" 
                          img="https://source.unsplash.com/weekly?plain"/>
                      </div>
                    </Grid>
                  </Grid>
                  </TabPanel>
          </Grid>
        </ThemeProvider>
       </div>
    );
}
 
export default Mygroups;