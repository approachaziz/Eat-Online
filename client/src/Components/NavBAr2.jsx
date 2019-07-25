import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Cart1 from './Cart';
// import icon1 from './icons/store.png'
import Cart from './icons/cart.png'
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Form from './formForAddressAndName'
import IconLabelButtons from './btnForForm'
import axios from 'axios';
import { connect } from 'react-redux';
import {compose} from 'recompose'


class ModalExample extends React.Component {
  constructor(props) {
    super(props);
  //   this.state = {
  //     modal: false,
  //     nestedModal: false,
  //     closeAll: false,
  //     abs: 'ali'
  //   };
  
  //   this.toggle = this.toggle.bind(this);
  //   this.toggleNested = this.toggleNested.bind(this);
  //   this.toggleAll = this.toggleAll.bind(this);
  // }
 this.state = {
    modal: false,
    nestedModal: false,
    closeAll: false,
    name:'',
    phone:'',
    address:'',
    CustName:'',
    CustPhone:'',
    CustAddress:'',
    
    abs: 'ali'
  };
}
  toggle=()=> {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  toggleNested =()=>{
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  }
  
  toggleAll=()=>{
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
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
  showPropsCart = (event)=>{
    // this.setState({
    //   CustName:localStorage.getItem("name")
    // })
    console.log(this.state.CustName);
    console.log(this.state.CustPhone);
    console.log(this.state.CustAddress);
    // console.log(this.props.cart.price);    
    // event.preventDefault();
    const obj = {
      // id:this.props.cart[0].id,
      name: this.props.cart[0].name,
      price: this.props.cart[0].price,
      include: this.props.cart[0].Included,
      CustomerName: this.state.CustName, 
      CustomerPhone: this.state.CustPhone, 
      CustomerAddress: this.state.CustAddress 
      
    }
    axios.post('http://localhost:3001/SendOrder',obj).then((res)=>{
      console.log(res);
      console.log("price is"+obj.price);
      
    });
    // this.setState(name1:name);
    
    axios.get('http://localhost:3001/getOrder').then((res)=>{
      console.log(res);
      
    }).catch((err)=>{
      console.log(err);
    })
    alert("Thanku For Finalzing Order! Your Order will reach  in 45 minutes")
  }
  componentDidMount(){
    axios.get('http://localhost:3001/getOrder').then((res)=>{
      console.log(res);
    
    }).catch((err)=>{
      console.log(err);
    })
  }
  render() {

    return (
      <div>
     <span onClick={this.toggle}>
        <IconButton color="inherit">
          <Badge badgeContent={"Here!"} color="secondary">
                <img src={Cart}  />
        {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>

            <Cart1/>
            <br />
            
            <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
              <ModalHeader>Nested Modal title</ModalHeader>
              <ModalBody>
                {/* NAME OR ADdress ka form yaha show krwao */}
<Form/>

              </ModalBody>
      {/* <IconLabelButtons/> */}
              <ModalFooter>
                {/* <Button color="primary" onClick={this.toggleNested}>Done</Button>{' '} */}
                <Button color="success" onClick={()=>{
              console.log(this.state.abs);
              this.showPropsCart();
            }}>Finalize Purchase</Button>
                <Button color="secondary" onClick={this.toggleAll}>Cancel</Button>
              </ModalFooter>
            </Modal>
          
          
            </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.toggleNested}>Finalize Purchase</Button>
            
            
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </Badge>
        </IconButton>
        </span>
      </div>
    );
  }
}





const mapStateToProps = (state, props)=>{
  return {
      cart: state.cart
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//       removeFromCart: item => dispatch(removeFromCart(item))
//   }
// }
// Cart.propTypes = {
// classes: PropTypes.object.isRequired,
// }




export default connect(mapStateToProps)(ModalExample);