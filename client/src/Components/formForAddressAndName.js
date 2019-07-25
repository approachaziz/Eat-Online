import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import IconLabelButtons from './btnForForm'
import {connect} from 'react-redux';
import {addTodo} from '../Redux/actions/cartActions'
import { Container, Row, Col } from 'reactstrap'
import {compose} from 'recompose';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import IMG from './icons/customer-service.png'
import { Field, reduxForm,createReduxForm} from 'redux-form'
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';
const styles = theme => ({
  container: {
    display: 'block',
  },

  input: {
    margin: theme.spacing.unit,
    width:'11rem',
  },

  input1: {
    margin: theme.spacing.unit,
    width:'14rem',
  },
});

 class Inputs extends Component {
 constructor(props){
super(props);
this.state={
  name:"",
  phone:"",
  address:""

}
 }
 
//  handleChange = (e)=> {
//    this.setState({
//      name:e.target.value
    
//     })
//   }
// handleSubmit() {
//   const finalform = [{
//     name: findDOMNode(this.refs.name).value,
//     phone: findDOMNode(this.refs.phone).value,
//     address: findDOMNode(this.refs.address)
//   }]
//   console.log(finalform.name);
//   this.props.postMobiles(finalform);
//     alert("Thanku for submission");
// // }
  handleSubmit =(e)=>{
    e.preventDefault();
    //  console.log(this.state);
    let data = {
      name:this.state.name,
      phone:this.state.phone,
      address:this.state.address

    }
    console.log(`name is ${this.state.name} and phone is ${this.state.phone} and address is ${this.state.address}`)
    // var Name=document.getElementById("Name").value;
    // var Phone=document.getElementById("Phone").value;
    // var Address=document.getElementById("Address").value;
    var Name=this.state.name;
    var Phone=this.state.phone;
    var Address=this.state.address;
    
    var obj = {
      "Name" : Name,
      "Phone" : Phone,
      "Address" : Address,
      // "cpass" : cp,
    
    };
    localStorage.setItem("Name" , obj.Name);
    localStorage.setItem("Phone" , obj.Phone);
    localStorage.setItem("Address" , obj.Address);
  // this.props.addTodo(data);
  }
  
  name = (e)=> {
    this.setState({
      name:e.target.value
     })
   }
  
  phone = (e)=> {
    this.setState({
      phone:e.target.value
     })
   }
   address = (e)=> {
    this.setState({
      address:e.target.value
      
     })
   }
  render(){
    const { classes } = this.props;
    const { handleSubmit } = this.props
  return (
    // <div className={classes.container}>
  <Container>

 <form onSubmit={this.handleSubmit}>
      <Row>
      <Col  xs="5">
      <Input
      id="Name"
      ref='name'
        placeholder=" Your Name"
        className={classes.input}
      onChange={this.name}
        inputProps={{
          'aria-label': 'Name',
        }}
      />
      <br/>
        <Input
        id="Phone"
        ref='phone'
      placeholder="Phone"
      className={classes.input}
    onChange={this.phone}
      inputProps={{
        'aria-label': 'Phone',
      }}
    />
        <br/>
   
      <Input
      id="Address"
      ref='address'
      placeholder="Address"
      className={classes.input1}
    //   className="Increasewidth"
    onChange={this.address}
      inputProps={{
        'aria-label': 'address',
      }}
    /> 

{/* <button onClick={this.handleSubmit.bind(this)}>Submit</button> */}
        <IconLabelButtons  />
    </Col>
    <Col  xs="4">
    <img src={IMG}/>
    </Col>
    </Row>
    </form>
        </Container>
    
  );
}
  }

  function mapStateToProps(state) {
    return {
      finalform: state.finalform,    
     
    }
  }
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addTodo,
  }, dispatch)}
 

// export default connect(mapStateToProps,mapDispatchToProps)(addTodo)

// const mapStateToProps = (store) => {
//   console.log('state',store);
// }    
Inputs.propTypes = {
classes: PropTypes.object.isRequired,
};



export default compose(connect(mapStateToProps,mapDispatchToProps) ,
 withStyles(styles))(Inputs);
