import React, { Component } from 'react'
// import React from 'react';
import { MDBIcon } from 'mdbreact';
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { red } from '@material-ui/core/colors';
import SideMenuBar from './SIdeBar'
// import SearchBar  from './searchInNavBar'
import icon1 from './icons/store.png'
import SearchSemantic from './SearchOnNavBar'
import Cart from './icons/cart.png'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../index.css'
import  CountApp  from "./SecondPage/hotelCards";
import {compose} from 'recompose';
import {connect} from 'react-redux';
// import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Cart1 from './Cart';
import Model3 from './NavBAr2'
// import {Link } from 'react-router-dom'
const styles = theme => ({
  root: {
    width: '100%',
    // backgroundColor:red,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
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
});
class PrimarySearchAppBar extends React.Component {
  
  constructor(props){
    super(props);
 
  this.state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    modal: false,
    Deal1Content:"deal1",
    Deal2Content:"deal2",
    Deal3Content:"deal3",
    Deal4Content:"deal4",
  counter:0,
  nestedModal: false,
      closeAll: false    
  };
  this.toggle = this.toggle.bind(this);
  this.toggleAll = this.toggleAll.bind(this);
  this.toggleNested = this.toggleNested.bind(this);
 
} 
 toggle() {
  this.setState(prevState => ({
    modal: !prevState.modal
  }));
}
toggleNested() {
  this.setState({
    nestedModal: !this.state.nestedModal,
    closeAll: false
  });
}

toggleAll() {
  this.setState({
    nestedModal: !this.state.nestedModal,
    closeAll: true
  });
}
  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  
  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
const {number}=this.props;
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        {/* <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem> */}
        {/* <MenuItem onClick={this.handleMenuClose}><Link to='/Login'>Login</Link></MenuItem> */}
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        </Menu>
    );
  
    const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar className="rangBadal">
           <SideMenuBar/>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              <strong><i ><Link to="/cityPage" className="headStyle">Eat-Online </Link><img href="/cityPage" src={icon1}/></i></strong>
            </Typography>
            
            <div className={classes.grow} />
            <span className="navText">
 <p><strong><em>Logged in as:</em></strong>  {localStorage.getItem("email")} </p>
 </span>
            <div className={classes.sectionDesktop}>
       <Model3/>
            {/* <h6>Discount Coming Soon!</h6> */}
              {/* </IconButton> */}
            {/* <SearchSemantic/> */}
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
              <Model3/>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
 
}
const mapStateToProps = (store) => {
  console.log('state',store);
} 

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default compose(connect(mapStateToProps,{showState,addCount,decCount}),
//  withStyles(styles))(PrimarySearchAppBar);



export default withStyles(styles)(PrimarySearchAppBar);
