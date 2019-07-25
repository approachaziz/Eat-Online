// import React from 'react';
import React, { Component , Fragment } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText} from 'mdbreact';
import IMG1 from './CityPics/01 Faisalabad.jpg'
import IMG2 from './CityPics/The-City-Of-Gujranwala-Pakistan.jpg'
import IMG3 from './CityPics/quaid-mazar.jpg'
import IMG4 from './CityPics/images.jpg'
import IMG5 from './CityPics/GU-660x400.jpg'
import '../index.css';
import IMG6 from './CityPics/jehlum.jpg'
import IMG7 from './CityPics/faislabad.jpg'
import IMG8 from './CityPics/Gujranwala2.jpg'
import IMG9 from './CityPics/karachi2.jpg'
import IMG10 from './CityPics/Islamabad2.jpg'
import IMG11 from './CityPics/lahore2.jpg'
import  {Link,Route} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Image, Reveal } from 'semantic-ui-react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
// import MainPage from './'
const Card = () => {
  return (
    
 <MDBContainer>
  
    <MDBRow>
    <MDBCol>
      <MDBCard className="bordRadius">
        {/* <MDBCardImage className="img-fluid" src={IMG1} waves /> */}
        <Reveal animated='move up'>
    <Reveal.Content visible>
      <Image src={IMG1}  />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image src={IMG7}  />
    </Reveal.Content>
  </Reveal>
        <MDBCardBody >
          <MDBCardTitle>Faisalabad</MDBCardTitle>
    <Fragment >
    <Link className="SelectBtnCity"  to= "/SecondPageOnClick"> <span>   <MDBBtn rounded color="info" > Select</MDBBtn>
       </span>
       </Link>
          </Fragment>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <br/>
    <br/>
  
    {/* </div> */}
    {/* //  */}
    {/* //  */}
    <MDBCol >
      <MDBCard style={{ width: "22rem" }}>
        {/* <MDBCardImage className="img-fluid" src={IMG2} waves /> */}
        <Reveal animated='move right'>
    <Reveal.Content visible>
      <Image src={IMG2}  />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image src={IMG8}  />
    </Reveal.Content>
  </Reveal>
        <MDBCardBody>
          <MDBCardTitle>Gujranwala</MDBCardTitle>
        
          <Fragment >
          <Link className="SelectBtnCity"  to= "/SecondPageOnClick"> <span>   <MDBBtn rounded color="info" > Select</MDBBtn>
       </span>
       </Link>
          </Fragment>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
     {/* /* //  */
     /* //  */ }

<MDBCol>
 <MDBCard style={{ width: "22rem" }}>
        {/* <MDBCardImage className="img-fluid" src={IMG3} waves /> */}
        <Reveal animated='move left'>
    <Reveal.Content visible>
      <Image src={IMG3}  />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image src={IMG9}  />
    </Reveal.Content>
  </Reveal>
        <MDBCardBody>
          <MDBCardTitle>Karachi</MDBCardTitle>
          <Fragment >
          <Link className="SelectBtnCity"  to= "/SecondPageOnClick"> <span>   <MDBBtn rounded color="info" > Select</MDBBtn>
       </span>
       </Link>
          </Fragment>
           </MDBCardBody>
      </MDBCard>
    </MDBCol>
     </MDBRow>
     {/* //  */}
     {/* //  */}
     <br/>
     <br/>
     
 <MDBRow>
 <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        {/* <MDBCardImage className="img-fluid" src={IMG4} waves /> */}
        <Reveal animated='move down'>
    <Reveal.Content visible>
      <Image src={IMG4}  />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image src={IMG10}  />
    </Reveal.Content>
  </Reveal>
        <MDBCardBody>
          <MDBCardTitle>Islamabad</MDBCardTitle>
      
          <Fragment >
          <MDBBtn rounded color="info" > <Link className="SelectBtnCity"  to= "/SecondPageOnClick">Select</Link></MDBBtn>
          </Fragment>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
     {/* //  */}
    {/* //  */}
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        {/* <MDBCardImage className="img-fluid" src={IMG5} waves /> */}
        <Reveal animated='move right'>
    <Reveal.Content visible>
      <Image src={IMG5}  />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image src={IMG11}  />
    </Reveal.Content>
  </Reveal>
        <MDBCardBody>
          <MDBCardTitle>Behria Town Lahore</MDBCardTitle>
          <Fragment >
          <Link className="SelectBtnCity"  to= "/SecondPageOnClick"> 
            <span>
               <MDBBtn rounded color="info" > Select</MDBBtn>
           </span>
       </Link>
          </Fragment>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    {/* // //  */}
    {/* // //  */}
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
          <Reveal animated='move'>
    <Reveal.Content visible>
      <Image src={IMG6}  />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image src={IMG8}  />
    </Reveal.Content>
  </Reveal>
        <MDBCardBody>
          <MDBCardTitle>Jehlum</MDBCardTitle>
          <Fragment  >
          <Link className="SelectBtnCity"  to= "/SecondPageOnClick"> 
            <span>
               <MDBBtn rounded color="info" > Select</MDBBtn>
           </span>
       </Link>
        
          </Fragment>
       </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
  </MDBContainer>
  )
}

export default Card;