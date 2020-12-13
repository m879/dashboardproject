import React from 'react';
import { NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, fade } from '@material-ui/core/styles';
import { createMuiTheme ,ThemeProvider} from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CloseIcon from '@material-ui/icons/Close';
import SettingsIcon from '@material-ui/icons/Settings';

import Slide from '@material-ui/core/Slide';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import PostAddIcon from '@material-ui/icons/PostAdd';
import MessageIcon from '@material-ui/icons/Message';
import ContactsIcon from '@material-ui/icons/Contacts';
import GroupAddIcon from '@material-ui/icons/GroupAdd';


const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: { useNextVariants: true },
  
});

const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  dialog: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  dialogBar: {
    position: 'relative',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Navigation(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);


  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <div style={{textAlign:'center',marginTop:'-65px',marginBottom:'40px',background:'#3f51b5',border:'none',height:'4.1rem'}}>
         <img src="https://logos.textgiraffe.com/logos/logo-name/21684448-designstyle-pixels-m.png" 
         style={{width:'90%',height:'4.5em',borderRadius:'100%',padding:'5px 15px 0px 15px'}}></img>
      </div>
      <div style={{textAlign:'center'}}  id="font1" >
          <h3>About Us</h3>
          <div textColor="secondary" style={{padding:'10px 15px 30px 15px',color:'rgba(255, 255, 255, 0.7)'}}>
           A social platform to connect with people and share your experiences related to technology and many 
           more things.
          </div>
        </div>
      <Divider />
      <List>
      <NavLink to="/" style={{textDecoration:'none',color:'white'}}>
          <ListItem button>
              <ListItemIcon><DashboardIcon/></ListItemIcon>
             <ListItemText id="font1" primary='Dashboard' />
          </ListItem>
        </NavLink>
      <NavLink to="/posts" style={{textDecoration:'none',color:'white'}}>
          <ListItem button>
              <ListItemIcon><PostAddIcon/></ListItemIcon>
             <ListItemText primary='Posts' />
          </ListItem>
        </NavLink>
        <NavLink to="/messages" style={{textDecoration:'none',color:'white'}}>
          <ListItem button>
              <ListItemIcon><MessageIcon/></ListItemIcon>
             <ListItemText primary='Messages' />
          </ListItem>
        </NavLink>
        <NavLink to="/contact" style={{textDecoration:'none',color:'white'}}>
          <ListItem button>
              <ListItemIcon><ContactsIcon/></ListItemIcon>
             <ListItemText primary='Contact' />
          </ListItem>
        </NavLink>
        <NavLink to="/groups" style={{textDecoration:'none',color:'white'}}>
          <ListItem button>
              <ListItemIcon><GroupAddIcon/></ListItemIcon>
             <ListItemText primary='Explore Groups' />
          </ListItem>
        </NavLink>
        <NavLink to="/settings" style={{textDecoration:'none',color:'white'}}>
          <ListItem button>
              <ListItemIcon><SettingsIcon/></ListItemIcon>
             <ListItemText primary='Settings' />
          </ListItem>
        </NavLink>
        </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  const menuId = 'primary-search-account-menu';

  const [anchorEl, setAnchorEl] = React.useState(null);


  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}  onClose={handleMobileMenuClose}  
    >
      <MenuItem onClick={handleClickOpenDialog} >
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <NavLink to="/profile" style={{textDecoration:'none',color:'white'}}>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      </NavLink>
    </Menu>
  );

  return (
    <div className={classes.root}>
        <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>  <SearchIcon /></div>
            <InputBase  placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
        
            <Dialog fullScreen className={classes.dialog}  open={openDialog} onClose={handleCloseDialog} TransitionComponent={Transition}>
                <AppBar className={classes.dialogBar}>
                  <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleCloseDialog} aria-label="close">
                      <CloseIcon />
                    </IconButton>
                    <Typography variant="h6">Notifications</Typography>
                  </Toolbar>
                </AppBar>
                <DialogContent >
                   <DialogContentText id="scroll-dialog-description"   tabIndex={-1}>          
                       <div>
                         <h2>No new notifications</h2>
                       </div>   
                   </DialogContentText>
                </DialogContent>
            </Dialog>



            <IconButton aria-label="show 17 new notifications" onClick={handleClickOpenDialog} color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <NavLink to="/profile" style={{textDecoration:'none',color:'white'}}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </NavLink>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"  open>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} /> 
      </main>
      
      </ThemeProvider>
    </div>
  );
}

export default Navigation;