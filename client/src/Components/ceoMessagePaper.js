// import React from 'react';
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import '../index.css'
// import { FormInline } from 'mdbreact';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width:500,
    // length:100,
    // marginLeft:0,
    height:300,
  },
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div className="align1">
      <Paper  className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          CEO of Online-Eat
        </Typography>
        <Typography component="p">
       Out Moto is to Provide Quality Food for Our Customer at thir door step and in our More than 200 Branches all over the pakistan
       WE beleive in qualty insurance since <strong>1999</strong> and till now we Being Motivated for Customer Satisfication 
       It will be our Keen Interest for you to check in at our any Branch to Know what a qualuty Food look like
        <em> <br/><strong> QUALITY WITH SATISFICATION</strong></em>
        <br/>
        <br/>
        IS Our MOTO SO feel free to Visit Us at any Branch in Paksitan or Order Online from here
        <b><em><br/><br/><br/>The Largest Food court  Chain In pakistan </em></b> 
        </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
