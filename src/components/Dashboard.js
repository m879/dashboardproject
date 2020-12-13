import React from 'react'; 
import './style.css';
import {Doughnut,Line,Bar} from 'react-chartjs-2';
import Employee from './DashboardEmployee';


import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme ,ThemeProvider} from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { green, pink, deepPurple,yellow } from '@material-ui/core/colors';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PostAddIcon from '@material-ui/icons/PostAdd';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

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
    pink: {
      color: theme.palette.getContrastText(pink[500]),
      backgroundColor: pink[500],
    },
    green: {
      color: theme.palette.getContrastText(green[500]),
      backgroundColor: green[500],
    },
    yellow: {
      color: theme.palette.getContrastText(yellow[500]),
      backgroundColor: yellow[500],
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
    
  }));
  


  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div  role="tabpanel"  hidden={value !== index}  id={`simple-tabpanel-${index}`}  
      aria-labelledby={`simple-tab-${index}`}  {...other}>
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  
function createData(group, members) {
  return { group, members};
}


const rowsfirst = [
  createData('Machine Learning', 59),
  createData('Electrical Engineering', 37),
  createData('Music', 62),
  createData('Dance', 105),
];

const rowssecond = [
  createData('Music', 100),
  createData('Mechanical Engineering', 152),
  createData('Artificial Intelligence', 102),
  createData('Dance', 125),
];

const rowsthird= [
  createData('Civil Engineering', 359),
  createData('Data Science', 237),
  createData('Music', 262),
  createData('Corona', 305),
];

const Dashboard = () => {

  const classes = useStyles();

  const data = {
    labels: ['Students','Teachers','Bussiness'],
    datasets: [
      {
        data: [300, 200, 400],
        backgroundColor: ['#FF6384','#36A2EB','#FFCE56'],
        hoverBackgroundColor: ['#FF6384','#36A2EB','#FFCE56']
      }
    ]
  }    
  const databargraph = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'Web Development',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Machine Learning',
        data: [2, 3, 20, 5, 1, 4],
        backgroundColor: 'rgb(54, 162, 235)',
      },
      {
        label: 'Data Science',
        data: [3, 10, 13, 15, 22, 30],
        backgroundColor: 'rgb(75, 192, 192)',
      },
    ],
  }
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }
    
  const dataline = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
        yAxisID: 'y-axis-1',
      },
      {
        label: '# of No Votes',
        data: [1, 2, 1, 1, 2, 2],
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
        yAxisID: 'y-axis-2',
      },
    ],
  }

  const optionsline = {
    scales: {
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
        },
        {
          type: 'linear',
          display: true,
          position: 'right',
          id: 'y-axis-2',
          gridLines: {
            drawOnArea: false,
          },
        },
      ],
    }, 
  }

  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
       <div id="home">
            <ThemeProvider theme={darkTheme}>
                <Grid  container style={{marginTop:'-20px'}}>
                    <Grid item lg={3} xs={12}> 
                      <Card className={classes.root} style={{margin:'2%'}} variant="outlined">
                        <ListItem style={{height:'100px'}}>
                          <ListItemAvatar>  <Avatar className={classes.pink} ><PersonAddIcon /></Avatar></ListItemAvatar>
                          <ListItemText  primary="100+" secondary="NEW MEMBERS" />
                        </ListItem>
                      </Card>
                    </Grid>
                    <Grid item lg={3} xs={12}>
                        <Card className={classes.root} style={{margin:'2%'}} variant="outlined">
                        <ListItem style={{height:'100px'}}>
                          <ListItemAvatar><Avatar className={classes.green}><GroupRoundedIcon /></Avatar></ListItemAvatar>
                          <ListItemText primary="20+" secondary="GROUPS" />
                        </ListItem>
                        </Card>
                    </Grid>
                    <Grid item lg={3} xs={12}>
                        <Card className={classes.root} style={{margin:'2%'}} variant="outlined">
                          <ListItem style={{height:'100px'}}>
                            <ListItemAvatar>  <Avatar className={classes.purple} ><PostAddIcon/> </Avatar></ListItemAvatar>
                            <ListItemText primary="300+" secondary="POSTS" />
                          </ListItem>
                        </Card>
                    </Grid>
                    <Grid item lg={3} xs={12}>
                        <Card className={classes.root} style={{margin:'2%'}} variant="outlined">
                        <ListItem style={{height:'100px'}}>
                          <ListItemAvatar><Avatar className={classes.yellow}><GroupRoundedIcon /> </Avatar></ListItemAvatar>
                          <ListItemText primary="500+"  secondary="USERS" />
                        </ListItem>
                        </Card>
                    </Grid>
               </Grid>        
                <Grid  style={{marginTop:'30px'}} container>
                <Grid item lg={6} xs={12}>
                        <Paper className={classes.paper}>
                          <article className="canvas-container" style={{background:'white'}}>
                          <h4 style={{textAlign:'center',paddingTop:'30px',color:'black'}}>Number of blogs posted in six months</h4>
                              <hr></hr>
                              <Bar data={databargraph} options={options}  />
                          </article>
                        </Paper>
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <Paper className={classes.paper}>
                            <div>
                            <article className="canvas-container" style={{background:'white'}} >
                                 <h4 style={{textAlign:'center',paddingTop:'30px'}}>Our Users</h4>
                                 <hr></hr>
                                 <Doughnut data={data} />
                            </article>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item lg={6} xs={12} style={{marginTop:'30px'}}>
                        <Paper className={classes.paper} style={{padding:'0px'}}>
                        <div  className={classes.purple} style={{textAlign:'center',padding:'15% 5% 10% 5%'}}>
                              <Typography variant="h6" id="font1"  className={classes.title} style={{color:'white',textAlign:'center'}}>
                                Top Performance of Week 
                              </Typography>
                              <Typography variant="h6" color="textSecondary" id="font1"  style={{textAlign:'center',fontSize:'14px',padding:'5%'}}>
                              Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
                              </Typography>
                              <Button variant="contained" color="secondary">Contact Us</Button>
                            </div>
                          <Grid item style={{padding:'5%'}}>
                            <div className={classes.demo} style={{color:'white'}}>
                              <List className={classes.root}>
                                <ListItem>
                                  <ListItemText primary="Employes"/>
                                  <ListItemSecondaryAction><ListItemText primary="Connect"/></ListItemSecondaryAction>
                                </ListItem>
                                <hr></hr>     
                                <Employee name="Alisa" designation="UI/UX Designer"   img="https://source.unsplash.com/weekly?girl"/>
                                <Employee name="Teresa" designation="Web Developer" img="https://source.unsplash.com/weekly?student"/>
                                <Employee name="David" designation="Content Writter"   img="https://source.unsplash.com/weekly?coder"/>
                                <Employee name="Amit" designation="Blog Writter"   img="https://source.unsplash.com/weekly?flower"/>
                                <Employee name="Ayan" designation="Student"    img="https://source.unsplash.com/weekly?hill"/>
                              </List>
                            </div>
                          </Grid>
                        </Paper>
                    </Grid>
                    <Grid item lg={6} xs={12} style={{marginTop:'30px'}}>
                        <Paper className={classes.paper}>
                          <div  style={{background:'white'}}>
                              <article className="canvas-container" >
                                <Line data={dataline} options={optionsline}/>
                              </article>
                              <div>
                              <AppBar position="static">
                                  <Tabs value={value} onChange={handleChange}>
                                    <Tab label="LAST WEEK" {...a11yProps(0)} />
                                    <Tab label="LAST MONTH" {...a11yProps(1)} />
                                    <Tab label="LAST YEAR" {...a11yProps(2)} />
                                  </Tabs>
                                </AppBar>
                                <TabPanel value={value} index={0}>
                                   <div id="font1" >
                                     <h3>Number of Users added</h3>
                                     <p>Based on their interests</p>
                                   </div>
                                   <hr></hr>
                                   <div>
                                   <TableContainer component={Paper}>
                                      <Table className={classes.table} aria-label="simple table">
                                        <TableHead>
                                          <TableRow>
                                            <TableCell style={{fontWeight:'bolder'}}>GROUP</TableCell>
                                            <TableCell style={{fontWeight:'bolder'}} align="center">NEW MEMBERS</TableCell>
                                          </TableRow>
                                        </TableHead>
                                        <TableBody>
                                          {rowsfirst.map((row) => (
                                            <TableRow key={row.group} >
                                              <TableCell component="th" id="font1" scope="row">{row.group}</TableCell>
                                              <TableCell align="center">{row.members}</TableCell>
                                            </TableRow>
                                          ))}
                                        </TableBody>
                                      </Table>
                                    </TableContainer>
                                   </div>
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                   <div id="font1">
                                     <h3 >Number of Users added</h3>
                                     <p>Based on their interests</p>
                                   </div>
                                   <hr></hr>
                                   <div>
                                   <TableContainer component={Paper}>
                                      <Table className={classes.table} aria-label="simple table">
                                        <TableHead>
                                          <TableRow>
                                            <TableCell  style={{fontWeight:'bolder'}}>GROUP</TableCell>
                                            <TableCell  style={{fontWeight:'bolder'}} align="center">NEW MEMBERS</TableCell>
                                          </TableRow>
                                        </TableHead>
                                        <TableBody>
                                          {rowssecond.map((row) => (
                                            <TableRow key={row.group}>
                                              <TableCell id="font1" component="th" scope="row">{row.group}</TableCell>
                                              <TableCell align="center">{row.members}</TableCell>
                                            </TableRow>
                                          ))}
                                        </TableBody>
                                      </Table>
                                    </TableContainer>
                                   </div>
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                   <div id="font1">
                                     <h3>Number of Users added</h3>
                                     <p>Based on their interests</p>
                                   </div>
                                   <hr></hr>
                                   <div>
                                   <TableContainer component={Paper}>
                                      <Table className={classes.table} aria-label="simple table">
                                        <TableHead>
                                          <TableRow>
                                            <TableCell  style={{fontWeight:'bolder'}}>GROUP</TableCell>
                                            <TableCell  style={{fontWeight:'bolder'}} align="center">NEW MEMBERS</TableCell>
                                          </TableRow>
                                        </TableHead>
                                        <TableBody>
                                          {rowsthird.map((row) => (
                                            <TableRow key={row.group}>
                                              <TableCell component="th" id="font1" scope="row">{row.group}</TableCell>
                                              <TableCell align="center">{row.members}</TableCell>
                                            </TableRow>
                                          ))}
                                        </TableBody>
                                      </Table>
                                    </TableContainer>
                                   </div>
                                </TabPanel>
                              </div>
                          </div>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid style={{marginTop:'30px',textAlign:'center',color:'white'}}>
                    <p>Copyright protected</p>
                    <div style={{paddingBottom:'10px'}}>
                      <FacebookIcon  style={{ fontSize: 30 ,marginLeft:'10px'}} />
                      <LinkedInIcon  style={{ fontSize: 30 ,marginLeft:'10px'}} />
                      <InstagramIcon style={{ fontSize: 30 ,marginLeft:'10px'}} />
                      <GitHubIcon    style={{ fontSize: 30 ,marginLeft:'10px'}} />
                    </div>
                </Grid>
        </ThemeProvider>
       </div>
    );
}
 
export default Dashboard;