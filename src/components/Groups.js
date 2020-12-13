import React from 'react';
import './style.css';

import Grid from '@material-ui/core/Grid';
import { createMuiTheme ,ThemeProvider} from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Button from '@material-ui/core/Button';
import { yellow } from '@material-ui/core/colors';

const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });
  
  const useStyles = makeStyles({
    avatar: {
      backgroundColor: yellow[500],
    },
  });
  

  const useRowStyles = makeStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
  });
  
  function createData(name,image) {
    return {  
      name, image,
      history: [
        { date: 'Data Science',subimg:'https://source.unsplash.com/weekly?tool', customerId: '12-11-2020', amount: 300 },
        { date: 'Corona',subimg:'https://source.unsplash.com/weekly?corona',     customerId: '2-11-2019', amount: 1000 },
      ],
    };
  }
  
  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
  
    return (
      <React.Fragment>
        <TableRow className={classes.root}>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row" style={{display:'flex'}}>  
          <Avatar alt="Remy Sharp"       src={row.image} />
          <h3 style={{marginTop:'8px',marginLeft:'8px'}}>{row.name}</h3>
          </TableCell>
          <TableCell align="center">
              <AvatarGroup max={4}>
                <Avatar alt="Remy Sharp"       src="https://source.unsplash.com/weekly?student" />
                <Avatar alt="Travis Howard"    src="https://source.unsplash.com/weekly?girls" />
                <Avatar alt="Cindy Baker"      src="https://source.unsplash.com/weekly?flower" />
                <Avatar alt="Agnes Walker"     src="https://source.unsplash.com/weekly?boy" />
                <Avatar alt="Trevor Henderson" src="https://source.unsplash.com/weekly?student" />
              </AvatarGroup>
          </TableCell>
          <TableCell align="center">
            <Button variant="contained" color="primary" href="#contained-buttons">Join</Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell >Sub Groups</TableCell>
                      <TableCell align="center">Date Created</TableCell>
                      <TableCell align="center">Memebers</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.history.map((historyRow) => (
                      <TableRow key={historyRow.date}>
                        <TableCell align="center" component="th" scope="row" style={{display:'flex'}}>
                          <Avatar alt="Remy Sharp"       src={historyRow.subimg} />
                          <h3 style={{marginTop:'8px',marginLeft:'8px'}}>{historyRow.date}</h3>
                          </TableCell>
                        <TableCell align="center">{historyRow.customerId}</TableCell>
                        <TableCell align="center">{historyRow.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  
Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};
  
const rows = [
  createData('Machine Learning','https://source.unsplash.com/weekly?data'),
  createData('Music','https://source.unsplash.com/weekly?music'),
  createData('Startup','https://source.unsplash.com/weekly?startup'),
  createData('Mechanical Engineering','https://source.unsplash.com/weekly?tool'),
  createData('Electrical Engineering','https://source.unsplash.com/weekly?electrical'),
  createData('Civil Engineering','https://source.unsplash.com/weekly?bridge'),
  createData('Chemical Engineering','https://source.unsplash.com/weekly?chemical'),
  createData('Entrance Exam','https://source.unsplash.com/weekly?exam'),
];
  
   
const Groups= () => {

  const classes = useStyles();

    return (
       <div id="home">
         <ThemeProvider theme={darkTheme}>
                <Grid container>
                    <Grid item lg={11} xs={12} component={Paper}>
                    <div style={{paddingTop:'10px',paddingBottom:'10px'}}>
                      <h2 style={{paddingLeft:'5%'}}>Explore your Groups</h2>
                    </div>
                    <hr ></hr>
                    <TableContainer >
                      <Table aria-label="collapsible table">
                        <TableHead>
                          <TableRow>
                            <TableCell />
                            <TableCell style={{fontWeight:'bolder'}}>GROUPS</TableCell>
                            <TableCell style={{fontWeight:'bolder'}} align="center">MEMBERS</TableCell>
                            <TableCell style={{fontWeight:'bolder'}} align="center">JOIN</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <Row key={row.name} row={row} />
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    </Grid>
                </Grid>
        </ThemeProvider>
       </div>
    );
}
 
export default Groups;