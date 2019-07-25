import React from "react";
import {MDBBtn, MDBDropdown, MDBDropdownToggle, MDBBtnGroup, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import {Link} from 'react-router-dom'
const URL="localhost:3000/cityPage";
const DropdownPage = () => {
  return (
    <MDBBtnGroup>
      <MDBBtn color="danger">
        DANGER
      </MDBBtn>
      <MDBDropdown>
        <MDBDropdownToggle caret color="danger" />
        <MDBDropdownMenu color="danger">
          <MDBDropdownItem><a href="/cityPage/SecondPageOnClick"><span>Faislabad</span></a></MDBDropdownItem>
          <MDBDropdownItem>Another Action</MDBDropdownItem>
          <MDBDropdownItem>Something else here</MDBDropdownItem>
          <MDBDropdownItem>Something else here</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </MDBBtnGroup>
  );
}

export default DropdownPage;
// import React from 'react';
// import PropTypes from 'prop-types';
// import Button from '@material-ui/core/Button';
// import { withStyles } from '@material-ui/core/styles';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import InputLabel from '@material-ui/core/InputLabel';
// import Input from '@material-ui/core/Input';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import  {Link,Route} from 'react-router-dom';
// import IMG from './icons/search.png'
// import '../index.css'
// import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText} from 'mdbreact';
// const styles = theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
  
//   },
//   formControl: {
//     margin: theme.spacing.unit,
//     minWidth: 290,
//   },
// });

// class DialogSelect extends React.Component {
//   state = {
//     open: false,
//     age: '',
//   };
// check =()=>{
//     var a=this.state.age;
//     var b=document.getElementById("empty");
//     if(a.length==0){
// b.innerHTML="Please Select A city...";
// b.style.backgroundColor= "lightblue";
//     }
// else{
//     this.setState({ open: false });
// }
    
// }
//   handleChange = name => event => {
//     this.setState({ [name]: Number(event.target.value) });
//   };

//   handleClickOpen = () => {
//     this.setState({ open: true });
//   };

//   handleClose = () => {
//     this.setState({ open: false });
//   };

//   render() {
//     const { classes } = this.props;

//     return (
//       <div>
//         <Button className="searchbtn" onClick={this.handleClickOpen}><button className="searchbtn"><img src={IMG} />Search My City</button></Button>
//         <Dialog
//           disableBackdropClick
//           disableEscapeKeyDown
//           open={this.state.open}
//           onClose={this.handleClose}
//         >
//           <DialogTitle>Search City</DialogTitle>
//           <p id="empty"></p>
//           <DialogContent>
//             <form className={classes.container}>
//               <FormControl className={classes.formControl}>
//                 <InputLabel htmlFor="age-native-simple">Delivery Only For Faislabad</InputLabel>
//                 <Select
//                   className="selectStyle"
//                   native
//                   value={this.state.age}
//                   onChange={this.handleChange('age')}
//                   input={<Input id="age-native-simple" />}
//                 >
//                   <option value="" />
//                   <option className="options" value="1">Faisalabad</option>
//       <option className="options" value="2">Lahore</option>
//       <option className="options" value="3">Karachi</option>
//       <option className="options" value="4">Islamabad</option>
//       <option className="options" value="5">Gujranwala</option>
//       <option  className="options" value="6">Jehlum</option>
//                 </Select>
//               </FormControl>
              
//             </form>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={this.handleClose} color="primary">
//               Cancel
//             </Button>
          
//             <Link className="SelectBtnCity"  to= "/SecondPageOnClick"> <span>   <MDBBtn rounded color="info" onClick={this.check}> Select</MDBBtn>
//        </span>
//        </Link>
//    </DialogActions>
//         </Dialog>
//       </div>
//     );
//   }
// }

// DialogSelect.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(DialogSelect);
