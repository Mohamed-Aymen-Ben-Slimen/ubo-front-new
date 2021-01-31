
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Button from '../CustomButtons/Button';

import logo from '../../assets/img/logo/logo.png';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#5499D0',
    borderRight: 'none'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  logo: {
    width: '30%',
    height: 'auto',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    margin: '10% auto 20% auto'
  },
  sideLineForBorderRadius: {
    position: 'absolute',
    width: '20px',
    height: '100%',
    top: '0',
    right: '0',
    borderRadius: '35px 0 0 35px',
    background: '#FCF3EA 0% 0% no-repeat padding-box',
  },
  buttonsList: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  button: {
    background: 'transparent 0% 0% no-repeat padding-box',
    borderRadius: '37px',
    opacity: 1,
    font: 'normal normal normal 18px/28px Fredoka One',
    letterSpacing: 0,
    margin: '16px 0',
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      background: '#83D3F4 0% 0% no-repeat padding-box',
    },
    '&:focus': {
      background: '#83D3F4 0% 0% no-repeat padding-box',
    },
     opened: {
    width: `calc(100% - ${drawerWidth}px)`,
    margin: '0'
  },
  closed: {
    width: '100%',
    margin: '0'
  }
  },
  active: {
    background: '#83D3F4 0% 0% no-repeat padding-box',
  }
}));


export default function CustomDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [selectedButton, setSelectedButton] = React.useState(0);

  const selectButton = (id) => {
    setSelectedButton(id);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      {
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={ {backgroundColor: 'transparent', borderRadius: 'none', boxShadow: 'none', position: 'fixed'} }
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon style={ {color: '#0069d9'} }/>
          </IconButton>
        </Toolbar>
      </AppBar>
       }
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.sideLineForBorderRadius}></div>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose} style={ {color: 'white'} }>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <img src={logo} className={classes.logo}/>
        <List className={classes.buttonsList}>
          <Button  className={`${classes.button} ${1 === selectedButton && classes.active}`} id={1} href="/dashboard-page" onClick={ () => selectButton(1) }>General</Button>
          <Button className={`${classes.button} ${2 === selectedButton && classes.active}`} id={2} href="/activities-page" onClick={ () => selectButton(2) }>Activities</Button>
          <Button className={`${classes.button} ${3 === selectedButton && classes.active}`} id={3} onClick={ () => selectButton(3) }>Profile</Button>
        </List>


      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={ open ? classes.opened : classes.closed }>
          {props.children}
        </div>
      </main>
    </div>
  );
}





