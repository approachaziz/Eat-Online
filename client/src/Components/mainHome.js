import React, { Component } from 'react';
import NavBar1 from './navBarOnlyForLogin'
import CEOMessage from './MainHomeVideoNecche'
import Slider from './imgSlider'
import Card from './CityMainPage'
import CEO from './ceoMessage'
import IMG from './SecondPage/icons/city.png'
import '../index.css'
import { Container, Row, Col } from 'reactstrap';
import Footer from '../Components/BottomBar'
import { Player } from 'video-react';
import Video from './video.mp4'
import { Responsive, Segment } from 'semantic-ui-react'
import LoadingScreen from 'react-loading-screen';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {
 MDBCard,
 MDBCardBody,
 MDBModalFooter,
 MDBIcon,
 MDBCardHeader,
 MDBBtn,
 MDBInput,
 ToastContainer
} from "mdbreact";
import {BrowserRouter,setRoute,Link,Route,Switch,Redirect} from 'react-router-dom'
import MainCityPage from './CityMainPage'
class Home  extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userName:"",
          Password:"",
          Login:false
          }
    }
    handleSubmit =(e)=>{
      e.preventDefault();
      var le =localStorage.getItem("email");
      var lp =localStorage.getItem("pass");

      if(this.state.userName===le && this.state.Password===lp)
      {
          console.log("logged in "+this.state.userName );
          
          this.setState({
            Login:true
          });
         
        
        }

      else
       {
          alert("Wrong UserName or Password Enter");
       }
  }
      
    userName=(e)=>{
      this.setState({
          userName:e.target.value
          
      })
  }
  Password=(e)=>{
      this.setState({
          Password:e.target.value
      })
  }
    render() { 
      const isLoggedIn=this.state.Login;
      // if (isLoggedIn==true) {
      //    <Redirect to="/cityPage" /> 
      // }
 return (  
   <div>
  {isLoggedIn  ? (
    
    //Login ke baad jo bhi dikhana idher rakhana
 <Card/>
    ) :(

  <div>
  <NavBar1/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>

  <div className="LoginContainer">
<MDBContainer className="LoginKeAnder" >
<MDBRow>
<MDBCol md="7">
<MDBCard>
<MDBCardBody>
<div className="LoginHead">
{/* <MDBCardHeader className="form-header"> */}
  <h3 className="my-3">
    <MDBIcon icon="lock" /> Customer Login :
  </h3>
{/* </MDBCardHeader> */}
</div>
<form onSubmit={this.handleSubmit}>
  <div className="grey-text">
    <MDBInput
      label="Type your email"
      icon="envelope"
    // placeholder={{label,icon}}
      group
      type="email"
      validate
      error="wrong"
      success="right"
      onChange={this.userName}
      />
    <MDBInput
      label="Type your password"
      icon="lock"
      group
      type="password"
      validate
      onChange={this.Password}
    />
  </div>

<div className="text-center mt-4">
  <MDBBtn
    color="light-blue"
    className="mb-3"
    type="submit"
      // href=""
  >
  Login
  {/* <Link to="/cityPage">  Login </Link> */}
  </MDBBtn>
</div>
</form>
<MDBModalFooter>
  <div className="font-weight-light">
    <p>Not a member? <Link to='/signup'>Sign Up</Link></p>
    <p>Forgot Password?</p>
  </div>
</MDBModalFooter>
</MDBCardBody>
</MDBCard>
</MDBCol>
</MDBRow>
</MDBContainer>
</div>
</div>
    )};
   </div>
   )
    }
}
// this.refs.player.muted; 
export default Home ;