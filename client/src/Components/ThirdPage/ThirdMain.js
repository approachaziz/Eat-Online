import React, { Component } from 'react';
import NavBar from  '../navBar';
import DashboardCart from '../DashBoardCart'
import LoginForThird from './LoginForThird'
// import DashboardCart1 from '../DashBoardTabs'
// import Login from '../FunnyLogin/Login'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBModalFooter,
    MDBIcon,
    MDBCardHeader,
    MDBBtn,
    MDBInput,
    ToastContainer
  } from "mdbreact";
  import {BrowserRouter,setRoute,Link,Route,Switch } from 'react-router-dom'
import IMG from '../icons/menu.png'
import {ToastsContainer, ToastsStore,ToastsContainerPosition,lightBackground,DarkBackground} from 'react-toasts';
import { Alert } from 'reactstrap';
class ThirdMain extends Component {
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
        if(this.state.userName=="abdul@gmail.com" && this.state.Password=="abdul")
        {
            console.log("logged in "+this.state.userName );
            
         this.setState({
             Login:true
         })
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
        return ( 
           <div>
            {isLoggedIn  ? (
               //Login ke baad jo bhi dikhana idher rakhana
           <LoginForThird/>
             ) :(
               <div>
               <NavBar/>
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
                 <MDBIcon icon="lock" /> Login For Admin:
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
              
               >
                 Login 
               </MDBBtn>
             </div>
             </form>
             <MDBModalFooter>
               <div className="font-weight-light">
                 {/* <p>? <Link to='/signup'>Only Provided To Authorized Users</Link></p> */}
                 <p><b><strong>Alert:</strong></b> Authorization is only Given to Authorized Users </p>
               <p>for only Evaluation purpose Username is<u>"abdul@gmail.com"</u> and Pass is <u>abdul</u></p>
               </div>
             </MDBModalFooter>
           </MDBCardBody>
         </MDBCard>
       </MDBCol>
     </MDBRow>
   </MDBContainer>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   
 </div>

                
           </div>
           )};
               </div>
        )  
  }
}
 
export default ThirdMain;