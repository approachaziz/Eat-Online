import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../Redux/actions/cartActions'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import SendIcon from '@material-ui/icons/Send';
import NavigationIcon from '@material-ui/icons/Navigation';
import {compose} from 'recompose'
import '../index.css'
import { Table,Container } from 'reactstrap'
import CartIMG from './icons/shopping-bag.png'
import IMGOnline from './icons/rec.png'
import ContactForm from './formForAddressAndName'
// TodoDisplay
import axios from 'axios';
import { Label, Menu, Tab } from 'semantic-ui-react'
import { Button as Button12, Header, Segment, TransitionablePortal, Popup } from 'semantic-ui-react'
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBBtn, MDBContainer } from "mdbreact";
import { UncontrolledCollapse, Button as Button1, CardBody, Card,ButtonGroup } from 'reactstrap';
import TodoDisplay from './TodoDisplay';
// var Order = require('../../../models/Order');
// var app = require('express').Router();
const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});
var a,b,c;

class Cart extends Component {
  
  constructor(props) {
    super(props);
    this.state={
      activeItem: "1",
      name1:'',
      price1:'',
      Included1:'',
      gettingOrder:[],
      open: false,
      CustName:'',
      CustPhone:'',
      CustAddress:'',
      id:0
      
    }
  }
  submit = values => {
    // print the form values to the console
    console.log(values)
  }
  toggle = tab => () => {
    if (this.state.activeItem !== tab) {
    this.setState({
      activeItem: tab
    });
    }
  }
  componentWillMount() {
    var name=localStorage.getItem("Name");
    var CustPhone1=localStorage.getItem("Phone");
    var CustAddress1=localStorage.getItem("Address");

    this.setState({
      CustName:name
    })
    this.setState({
      CustPhone:CustPhone1
    })
        this.setState({
      CustAddress:CustAddress1
    })
  }
  handleOpen = () =>{ this.setState({ open: true })
   a=localStorage.getItem("Name");
   b=localStorage.getItem("Phone");
   c=localStorage.getItem("Address");  
  }
     delete=(e)=>{
       e.preventDefault();
       axios.delete('http://localhost:3001/DeleteOrder')
       .then(res => console.log(res.data));
     }
  handleClose = () => this.setState({ open: false }) 
  showPropsCart = (event)=>{
    // event.preventDefault();
    const obj = {
      name: this.props.cart.name,
      price: this.props.cart.price,
      include: this.props.cart.Included,
      sent:false
    }

    
 
    axios.get('http://localhost:3001/getOrder').then((res)=>{
      console.log(res);
    
    }).catch((err)=>{
      console.log(err);
    })
  }
  componentDidMount(){
    axios.get('http://localhost:3001/getOrder').then((res)=>{
      console.log(res);
    this.setState({
      gettingOrder:[...res.data]
    })
    
    }).catch((err)=>{
      console.log(err);
    })
  }
  OrderSent=(e)=>{
    e.preventDefault();
    this.setState({
      sent:true
    })
    axios.get('http://localhost:3001/getOrder/:_id').then((res)=>{
      console.log(res);
      
    }).catch((err)=>{
      console.log(err);
    })}
  
    // console.log("OrderSent")
  
  OrderSent1=(e)=>{
    e.preventDefault();

    axios.delete(`http://localhost:3001/getOrder/${this.state.id}$`)
      .then(res => {
        console.log(res);
        console.log(res.data);
    //   })
      
  }
      )
      }

deleteData=(e)=>{
  e.preventDefault();
this.setState({id:e.target.value})
}

  render() { 
    const { classes } = this.props;
    const orderMap=this.state.gettingOrder;
    
    console.log(orderMap);
    const { open } = this.state;
    
    // const cartList = this.props.cart.map(( item, index) =>{
   
    //  return <div key={index}> 
 
    // <Table id="table1"   striped>
    
    //     <tbody>
    //     <tr>
            // <td style={{paddingLeft:"20px"}}>{item.id}</td>
    //         <td style={{paddingLeft:"50px"}}>{item.name}</td>
    //         <td style={{paddingLeft:"70px"}}>{item.price}</td>
    //         <td style={{paddingLeft:"70px"}}>{item.Included}</td>
    //         <td style={{paddingLeft:"70px"}}> <IconButton aria-label="Delete" className={classes.margin}  onClick={ () => this.props.removeFromCart(item)}>
    //       <SendIcon className="CartP1"/>
    //     </IconButton></td>
      
      
    //   <td style={{paddingLeft:"70px"}}> 
    //   {/* <div style={{ display: "flex" }} className="m-5 p-5"> */}
    //     <MDBPopover
    //       placement="top"
    //       popover
    //       clickable
    //       id="popper1"
    //     >
    //       <MDBBtn>Customer Details</MDBBtn>
    //       <div>
    //         <MDBPopoverHeader>popover on top</MDBPopoverHeader>
    //         <MDBPopoverBody>

      
    //         </MDBPopoverBody>
    //       </div>
    //     </MDBPopover>
    //     </td>   
    //      </tr>
    //         {/* <Todos todos={this.state.todos}/> */}
    //     </tbody>
    //   </Table>
      // </div>
       
    // });
    const panes = [
      {
        menuItem: { key: 'users', icon:'active' , content: 'Active Orders' },
        render: () => <Tab.Pane className="goolRadiusTabs">
         <Table >
       <thead>
          <tr>
            <th>#</th>
            <th style={{border:"2px black solid",width:"200px"}}>Name</th>
            <th style={{border:"2px black solid",width:"100px"}}>Price</th>
            <th style={{border:"2px black solid",width:"400px"}}>Items Included</th>
            {/* <th style={{border:"2px black solid",width:"200px"}}>Actions</th> */}
            <th style={{border:"2px black solid",width:"200px"}}>Details</th>
            
          </tr>
        </thead>
        
       </Table>
 {orderMap.map((data )=>{
  return <div >
  <Table id="table1" striped>
    
    <tbody>
    <tr >
        {/* <td style={{paddingLeft:"20px"}}>{data.id}</td> */}
        
        <td  style={{paddingLeft:"50px"}}>{data.id}</td>
        
        <td style={{paddingLeft:"50px"}}>{data.name}</td>
        <td style={{paddingLeft:"70px"}}>{data.price}</td>
        <td style={{paddingLeft:"70px"}}>{data.include}</td>
        {/* <td style={{paddingLeft:"70px"}}> <IconButton aria-label="Delete" className={classes.margin}  onClick={ () => this.props.removeFromCart(data)}> */}
        {/* <td style={{paddingLeft:"70px"}}> <IconButton aria-label="Delete" className={classes.margin}  onClick={this.OrderSent}>

      <SendIcon className="CartP1" id={data._id} value={data._id} name={data._id} onClick={this.deleteData} />
    </IconButton></td> */}
  
  
  <td style={{paddingLeft:"70px"}}> 
  {/* <div style={{ display: "flex" }} className="m-5 p-5"> */}
    <MDBPopover
      placement="top"
      popover
      clickable
      id="popper1"
    >
      <MDBBtn>Customer Details</MDBBtn>
      <div>
        <MDBPopoverHeader>popover on top</MDBPopoverHeader>
        <MDBPopoverBody>
Name:{data.CustomerName}
<br/>
Phone:{data.CustomerPhone}
<br/>
Address:{data.CustomerAddress}
  
        </MDBPopoverBody>
      </div>
    </MDBPopover>
    </td>   
     </tr>
        {/* <Todos todos={this.state.todos}/> */}
    </tbody>
  </Table>
  </div> 
 })};
       <div  className="cart">
         
        {/* {cartList} */}
        <br/>    <br/>  <br/>  <br/>   <br/>   <br/>   <br/>  <br/>    <br/>    <br/>
        <br/>  <br/>  <br/>       <br/>       <br/>      <br/>
   
        </div>
        </Tab.Pane>,
      },
      {
        // menuItem: (
        //   // <Menu.Item key='messages'>
        //   //   Delivered<Label>15</Label>
        //   // </Menu.Item>
        // ),
        // render: () => <Tab.Pane>
   
        // </Tab.Pane>,
      },
    ]
    return (
     <Container>
     <div className="TableBackDashboard">
          <Tab panes={panes} />
      </div>
      </Container>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        cart: state.cart,
        // todos: state.todos
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: item => dispatch(removeFromCart(item))
    }
}
Cart.propTypes = {
  classes: PropTypes.object.isRequired,
}




export default compose(connect(mapStateToProps,mapDispatchToProps),
 withStyles(styles))(Cart);

// export default connect(mapStateToProps, mapDispatchToProps)(Cart);
