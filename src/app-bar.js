import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import clsx from 'clsx';
import GridList from './gridlist';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

var playListName = '';

export default function DenseAppBar(props) {

  const [state, setState] = React.useState({
    left: false,
    vocab:false  
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, ['left']: open });
  };

  const setComponentDisplay = (playList) => (event) => {
    playListName = playList.text;
    //alert(playListName);
  };

  const signOut = (test) => (event) => {
    
    props.setLoginState(false);

    //alert(playListName);
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
    <List>
        {['IELTS 7+ Band Vocabulary', 'IELTS Task 2','IELTS Task 1', 'English Tenses', 'IELTS Speaking'].map((text, index) => (
          <ListItem button key={text} onClick = {setComponentDisplay({text})}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['About Us', 'Contact Us', 'FeedBack'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Sign Out'].map((text, index) => (
          <ListItem button onClick={signOut('signout')}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
     </List>
    </div>
  );


  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            English Ka Gyan Chintan Ke Sath
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer(false)}>
        {list('left')}
      </Drawer>
      <GridList test={playListName}></GridList>
      </div>
  );
}
