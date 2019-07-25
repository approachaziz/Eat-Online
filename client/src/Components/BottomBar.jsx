// import React from "react";
import React, { Component } from 'react'
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import icon1 from './icons/store.png'
import '../index.css'
import whatsapp from './socialMediaIcons/whatsapp.png'
import instagram from './socialMediaIcons/instagram-logo.png'
import youtube  from './socialMediaIcons/youtube-logo.png'
import programmer from './socialMediaIcons/programmer.png'
import { Grid, Image, Label, Segment } from 'semantic-ui-react'
import paypal from './icons/paypal.png'
import visa from './icons/visa.png'
import master from './icons/mastercard.png'
const FooterPage = () => {
  return (
    <MDBFooter  className="font-small pt-4 mt-4">
    
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="5">
          <strong><i ><Link to="/" className="headStyle">Eat-Online </Link><img href="/" src={icon1}/></i></strong>
             <h3 className="footerText">
            <u>Fast Solution For Quality Food</u> 
            </h3>
       <h5 className="bottomSignText">Created and Managed by:<img src={programmer} /></h5>
       <h6 className="bottomSignTextname"><b>Abdul Aziz</b> </h6>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title"><u style={{color:'white', fontSize:'18pt'}}><strong><em>Partner Websites</em></strong></u></h5>
            <ul>
              <li className="list-unstyled">
                <a href="www.foodpanda.pk" className="list-unstyled">FoodPanda.com</a>
              </li>
              <li className="list-unstyled">
                <a href="www.pizzaHut.com" className="list-unstyled">PizzaHut.com</a>
              </li>
              <li className="list-unstyled">
                <a href="www.KFC.com" className="list-unstyled">KFc.com</a>
              </li>
              <li className="list-unstyled">
                <a href="www.macdonalds.com" className="list-unstyled">Macdonalds.com</a>
              </li>
            </ul>
            <h5>We Accept</h5>
          <img src={paypal} style={{paddingLeft:'1rem'}} />
          <img src={visa} style={{paddingLeft:'2rem'}}  />
        
          <img src={master} style={{paddingLeft:'2rem'}}  />
          
          </MDBCol>
          <MDBCol mod="4">
          <h3>Follow Us On</h3>
          <img src={instagram} />
          <br/>
          <br/>
        
          <img src={youtube} />
          <br/>
          <br/>
        
          <h4>Contact Us </h4>
          <img src={whatsapp} /> <h4 className="inline">+92 304 1199989</h4>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} <b>Copyright:</b> <Link to="/"><strong style={{color:'white'}}> Eat-Online.com </strong></Link>
        </MDBContainer>
      </div>
      
    </MDBFooter>
  );
}

export default FooterPage;