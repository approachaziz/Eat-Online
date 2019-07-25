import React, { Component } from 'react';
import { connect } from 'react-redux';
import {compose} from 'recompose'
import { removeFromCart } from '../Redux/actions/cartActions'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import '../index.css'
import { Header, Table, Rating } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import CartIMG from './icons/shopping-bag.png'
import {ToastsContainer, ToastsStore,ToastsContainerPosition,lightBackground,DarkBackground} from 'react-toasts';
const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});
var number=0;

let TotalPrice=0;
class Cart extends Component {
 
  render() {
    const { classes } = this.props;
    const cartList = this.props.cart.map(( item, index) =>{
   
     
     return <div key={index}> 
    
    <Table celled padded>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as='h5' textAlign='center'>
            {item.name}
          </Header>
        </Table.Cell>
        <Table.Cell singleLine>Rs.{item.price}</Table.Cell>
        {/* <Table.Cell>
          <Rating icon='star' defaultRating={3} maxRating={3} />
        </Table.Cell> */}
        <Table.Cell>
      {item.Included}
        </Table.Cell>
        <Table.Cell>

        <IconButton aria-label="Delete"  className={classes.margin}  onClick={ () => this.props.removeFromCart(item) }>
           <DeleteIcon  onClick={() => ToastsStore.warning(item.name+ " Deleted!")}  className="CartP1"/>
           <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} lightBackground/>
        </IconButton>
        </Table.Cell>
      </Table.Row>
     </Table.Body>
  </Table>
    {console.log(TotalPrice=TotalPrice+item.price)}
  {/* <p>{TotalPrice=item.price}</p>       */}
      </div>;
    }
    
    );
    return (
      <div>
        <h1 className="CartHeading">Your<img src={CartIMG}/>Cart</h1>
       <Table>
       <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine>Name</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        {/* <Table.HeaderCell>User Review</Table.HeaderCell> */}
        <Table.HeaderCell>Item Included</Table.HeaderCell>
        <Table.HeaderCell>Action</Table.HeaderCell>
        
      </Table.Row>
    </Table.Header>
       </Table>
        <div  className="cart">
          {cartList}
      {/* <p>Total Price:{TotalPrice}</p> */}
        </div>
        {/* <p>Your Total :{TotalPrice}</p> */}
      </div>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        cart: state.cart
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
