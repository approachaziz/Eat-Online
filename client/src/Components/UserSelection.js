import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import IMG1 from './icons/admin (1).png'
import IMG2 from './icons/teamwork (1).png'
import IMG3 from './icons/admin.png'
import LoadingScreen from 'react-loading-screen'
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import NavBar1 from './navBarOnlyForLogin';
import '../index.css'
import { MDBCard, MDBCardBody, MDBContainer } from "mdbreact";
 
import ReactDelayRender from 'react-delay-render';
class UserSelection extends Component {
    state = { 
      load:true
     } 
    render() { 
        return (  
            
  <div>
    {/* <Load/> */}
    {/* {delay(2000)} */}
     
{/* // alert("@ sec baad chlla") */}

<NavBar1/>
  
<br/>
<br/>
<br/>
<br/>
<Row>

<Col sm="12" md={{ size: 6, offset: 3 }}>
<MDBContainer>
<MDBCard>
  <MDBCardBody>
      <Row>
      <Col xs="9" >
  <h3>Select! How would you like to Enter in Our Site!</h3>
  <p>Use Your Credentials</p>
      </Col>
      <Col xs="3">
      <img src={IMG3} alt="Icon"/>
      </Col>  
  </Row>
  </MDBCardBody>
</MDBCard>
</MDBContainer>
</Col>
</Row>
<br/>
<br/>
<br/>
<Row>
        <Col xs="6" className="SelectionHeadings">
        <Link to="/ThirdMain">
            <span >
              <h2 className="SelectionHeadings" > Admin Login</h2>
              <img src={IMG1} alt="Admin" />
            </span>
            </Link>
        </Col>
        <Col xs="6" className="SelectionHeadings">
         <Link to="/MainHome">
          <span>

              <h2 className="SelectionHeadings"  > Customer Login</h2>
              <img src={IMG2} alt="Customer" />
          </span>
          </Link>
        </Col>
      </Row>
//       <br/>
<br/>
<br/> 
<br/>
<br/><br/>
<br/> 
     {/* },6000)} */}
   </div>

        );
    }
}
 
export default UserSelection;