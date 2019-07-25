import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import {connect} from 'react-redux'
import {addTodo} from '../Redux/actions/cartActions'
// import { Toast, ToastBody, ToastHeader } from 'reactstrap'; 
import {compose} from 'recompose';
import IMG from './icons/cv.png'
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
 
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  
});
function IconLabelButtons(props) {
  const { classes } = props;
    
    
  return (
    <div>
      <Button   type="submit" variant="contained" color="secondary" className={classes.button}>
        Click Here First <img src={IMG}/>
        {/* <Icon ><img src={IMG}/></Icon> */}
      </Button>
     
    </div>
  );
}

IconLabelButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(connect (null, {addTodo}),
  withStyles(styles))(IconLabelButtons);



 //