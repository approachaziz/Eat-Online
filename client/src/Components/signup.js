import React, { Component } from 'react'
import {Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Navigation from './navBar'
import {MDBIcon, MDBContainer} from 'mdbreact'
import '../index.css'
export class Signup extends Component {
  validatePassword=()=>{
    var a=document.getElementById("password").value;

  //  document.getElementById("msg").innerHTML=a;
  var specialCharacter="!~#$%^&*@_";
  var passScore=0;
  for(var i=0; i< a.length; i++){
    if(specialCharacter.indexOf(a.charAt(i)) > -1 ){
passScore +=20;
    }
  }

  if(/[a-z]/.test(a)){
    passScore +=20;
  }
  if(/[A-Z]/.test(a)){
    passScore +=20;
  }
  if(/[\d]/.test(a)){
    passScore +=20;
  }
  if( a.length >= 4){
    passScore +=20;
  }
  var strength="";
  var backgroundColor="";
  if(passScore >= 100){
    strength="strong";
    backgroundColor="lightgreen";

  }
  else if(passScore >= 80){
    strength="Medium";
    backgroundColor="lightblue";

  }
  else if(passScore >= 60){
    strength="Weak";
    backgroundColor="gray";

  }
  else{
    strength="very weak";
    backgroundColor="red";

  }
  document.getElementById("msg").innerHTML= strength;
  document.getElementById("password").style.backgroundColor= backgroundColor;

}
check=()=>{
  var password1 = document.getElementById("password").value;
  var password2 = document.getElementById("cpassword").value;
  var leftdiv = document.getElementById("confmPass");
 
        // If password not entered 
        
      if(password1 != password2) { 
          leftdiv.innerHTML="Password did not match:...";
      }
      else if(password1 === ""){
        leftdiv.innerHTML="\n\n\n Fill All Fields!...";
      }
       
  
  else{
  
    leftdiv.innerHTML="\n\n\n Congrat' You Have Been Registered!...";
      this.checkConfm();
  }
    
}
  
    checkConfm=()=>{
      
          var n = document.getElementById("name").value;
      var e = document.getElementById("email").value;
      var p = document.getElementById("password").value;
      var cp = document.getElementById("cpassword").value;
       var obj = {
        "name" : n,
        "email" : e,
        "pass" : p,
        "cpass" : cp,
      
      };
      localStorage.setItem("name" , obj.name);
      localStorage.setItem("email" , obj.email);
      localStorage.setItem("pass" , obj.pass);
      localStorage.setItem("cpass" , obj.cpass);
              
             
       }


      // Function to check Whether both passwords 
            // is same or not. 
           
  render() {
    return (
      <div>
        <Navigation/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <Row>
    <Col xs={2} sm={1} lg={4} md={4}  style={{backgroundColor:''}}>
  
    <div className="PassMatchDiv" id="confmPass" style={{height:"200px", width:"300px", marginTop:"120px", marginLeft:"100px", fontFamily:"timesNewRoman", fontSize:"30px"}}>
    </div>
    </Col>
    <Col xs={8} sm={10} lg={4} md={4}  style={{backgroundColor:''}}>
   {/*signin*/}
   
   <main  style={{height:"480px"}}>
      <CssBaseline   />
      
      <Paper >
        <br/>
        <br/>
      
      
        <h3 className="my-3">
                  <MDBIcon icon="lock" /> SignUp
                </h3>
        <MDBContainer>
                <form >
        <FormControl margin="normal" required="required" fullWidth>
            <InputLabel htmlFor="email">UserName</InputLabel>
            <Input id="name" name="name" autoComplete="email" autoFocus required />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus  />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input type="text" name="password"  id="password" autoComplete="current-password" onChange={this.validatePassword}   />
          </FormControl>
    <span id="msg" style={{ fontFamily:"cursive"}}></span>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Conferm Password</InputLabel>
            <Input name="password" type="password" id="cpassword" autoComplete="current-password"  />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
          
            fullWidth
            variant="contained"
            color="secondary"
            onClick={this.check}
          >
            Sign UP
          </Button>
  
  <br/>
  <br/>
        </form>
        </MDBContainer>
  
      </Paper>
    </main>
    
    </Col>
    <Col  xs={2} sm={1} lg={4} md={4}  style={{backgroundColor:''}}>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/><br/>
    <br/>
    <br/><br/><br/>
    
    </Col>
 
  </Row>
 
 
      </div>
    )
  }
}

export default Signup
