// import React from "react";
import React, { Component } from 'react';
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
  MDBInput
} from "mdbreact";
import '../index.css'
import {Link } from 'react-router-dom'
import Navigation from './navBarOnlyForLogin'
class FormPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      Login:false,
     }
  }
  render() { 
 return (
  <div >
    <Navigation/>
    <br/>
    <br/>
    <br/>
    <br/>
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
                  <MDBIcon icon="lock" /> Login:
                </h3>
              {/* </MDBCardHeader> */}
              </div>
              <form>
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
                  />
                  <MDBInput
                    label="Type your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </div>

              <div className="text-center mt-4">
            <Link to="/dashboardAdmin">
             <span>

                <MDBBtn
                  color="light-blue"
                  className="mb-3"
                  type="submit"
                  >
                  Login
                </MDBBtn>
                  </span>
                  </Link>
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
  );
}
};

export default FormPage;