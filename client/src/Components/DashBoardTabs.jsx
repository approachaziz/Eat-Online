import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../Redux/actions/cartActions'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import {compose} from 'recompose'
import '../index.css'
import { Table,Container } from 'reactstrap'
import CartIMG from './icons/shopping-bag.png'
import { MDBContainer, MDBRow, MDBCol, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBIcon } from
"mdbreact";
import { UncontrolledCollapse, Button as Button1, CardBody, Card,ButtonGroup } from 'reactstrap';
const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});
var number=0;
var TotalPrice;
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state={
      activeItem: "1"
    }
  }
  toggle = tab => () => {
    if (this.state.activeItem !== tab) {
    this.setState({
      activeItem: tab
    });
    }
  }
    
  render() {
    const { classes } = this.props;
    const cartList = this.props.cart.map(( item, index) =>{
     return <div key={index}> 
    <Table   striped>
        <tbody>
        <tr>
            <td style={{paddingLeft:"20px"}}>{item.id}</td>
            <td style={{paddingLeft:"70px"}}>{item.name}</td>
            <td style={{paddingLeft:"70px"}}>{item.price}</td>
            <td style={{paddingLeft:"70px"}}>{item.Included}</td>
            {/* <td style={{paddingLeft:"70px"}}> */}
            <td style={{paddingLeft:"70px"}}> <IconButton aria-label="Delete" className={classes.margin}  onClick={ () => this.props.removeFromCart(item)}>
          <DeleteIcon className="CartP1"/>
        </IconButton></td>
          </tr>
            {/* <Todos todos={this.state.todos}/> */}
        </tbody>
      </Table>
      </div>
      });

    return (
 
     <MDBContainer className="mt-4">
        <MDBRow>
          <MDBCol md="12">
            <h2>Active Orders</h2>
            <MDBNav tabs className="nav-justified">
              <MDBNavItem>
                <MDBNavLink to="#" className={this.state.activeItem==="1" ? "active" : "" } onClick={this.toggle("1")} role="tab">
                  <MDBIcon icon="user" /> Pending
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#" className={this.state.activeItem==="2" ? "active" : "" } onClick={this.toggle("2")} role="tab">
                  Deleted
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#" className={this.state.activeItem==="3" ? "active" : "" } onClick={this.toggle("3")} role="tab">
                  Delivered
                </MDBNavLink>
              </MDBNavItem>
            </MDBNav>
            <MDBTabContent className="card" activeItem={this.state.activeItem}>
            <MDBTabPane tabId="1" role="tabpanel">

     <div className="TableBackDashboard" className="mt-2">
        {/* <h1 className="CartHeading">Your<img src={CartIMG}/>Cart</h1> */}
       <Table >
       <thead>
          <tr>
            <th>#</th>
            <th style={{border:"2px black solid",width:"100px"}}>Name</th>
            <th style={{border:"2px black solid",width:"200px"}}>Price</th>
            <th style={{border:"2px black solid",width:"400px"}}>Items Included</th>
            <th style={{border:"2px black solid",width:"200px"}}>Details</th>
            <th style={{border:"2px black solid",width:"200px"}}>Actions</th>
            
          </tr>
        </thead>
       
       </Table>
        <div  className="cart">
          {cartList}
      {/* <p>Total Price:{TotalPrice}</p> */}
        </div>
      </div>
      </MDBTabPane>
      </MDBTabContent>
      </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        cart: state.cart,
        
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
