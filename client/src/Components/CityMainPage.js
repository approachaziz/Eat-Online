import React, { Component } from 'react'
// import React, { Component } from 'react';
import NavBar1 from './navBar'
import CEOMessage from './MainHomeVideoNecche'
import Slider from './imgSlider'
import Card from './CityCard'
import CEO from './ceoMessage'
import IMG from './SecondPage/icons/city.png'
import '../index.css'
import { Container, Row, Col } from 'reactstrap';
import Footer from '../Components/BottomBar'
import { Player } from 'video-react';
import Video from './video.mp4'
import { Responsive, Segment } from 'semantic-ui-react'
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
import {BrowserRouter,setRoute,Link,Route,Switch } from 'react-router-dom'
class MainPageCity extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                
<div>
{/* <Segment.Group> */}
   {/* <Responsive as={Segment}> */}
<NavBar1/>
<Slider/>
<br/>
<MDBContainer>
    <MDBRow> 
 <MDBCol xs="1"></MDBCol>

 <MDBCol  md="5"><br/><CEO/></MDBCol>
{/* <CEO/> */}
{/* <Col xs="1"></Col> */}
 <MDBCol size="9" md="6"> 
<br/>
<div className="embed-responsive embed-responsive-16by9">
  <iframe title="embedsPage" className="embed-responsive-item" src={Video}
    allowfullscreen>
  {/* <source src="movie.ogg" type="video/ogg"> */}
  {/* Your browser does not support the video tag. */}
 
    </iframe>
</div>
<br/>
<CEOMessage/>
 </MDBCol> 
 </MDBRow> 
</MDBContainer>
<br/>
<br/>
<br/>
<h3 className="hotelText"><b>Select City </b><img src={IMG}/></h3>
<br/>
<br/>
 <Card/>
<div className="footer1">
<Footer/>
</div>
{/* </Responsive> */}
{/* </Segment.Group> */}
</div>
    
            </div>
        );
    }
}
 
export default MainPageCity;