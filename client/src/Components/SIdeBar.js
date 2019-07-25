// import React from 'react';
import React, { Component } from 'react'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import '../index.css'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import IMG from './icons/store.png'
import {  Link } from "react-router-dom";
const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
    // BackgroundColor:'sandyBrown',
  },
  // body:{
  //   backgroundColor:blue,
  // }
};

class TemporaryDrawer extends React.Component {
  state = {
    left: false,
    
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        {/* <h3 className="SideBarHead"><em><Link to=''<b>Eat-Online </b><img src={IMG}/> </em></h3> */}
        <strong><i ><Link to="/" className="SideBarHead">Eat-Online<img href="/" src={IMG}/> </Link></i></strong>
           
        <h4 className="AdminPanelText"><strong><em><b>Admin Panel</b></em></strong> </h4>
        <Link className="SideBarPanelsText"  to='/ThirdMain'>
        <List>
          {[<span className="SideBarPanelsText">Dashboard</span>].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon >{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}

        </List>
        </Link>
        <Divider />
        {/* <List>
          {[<Link className="SideBarPanelsText" to='/ThirdMain'>All Mail</Link>].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </div>
    );

    const fullList = (
      <div className={classes.fullList}>
        <List>
          {['Inbox'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div  >
          <IconButton className={classes.menuButton}  onClick={this.toggleDrawer('left', true)} color="inherit" aria-label="Open drawer" >
              <MenuIcon  />
            </IconButton>
        <Drawer  open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
          className="sideBarColor"
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
            
          >
            {sideList}
          </div>
        </Drawer >
           </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);
