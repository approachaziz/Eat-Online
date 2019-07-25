// import React from "react";
import React, { Component } from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, MDBInput, MDBCol } from
"mdbreact";
import '../index.css'
 import SearchBar from './SearchBarForCities'
import Image from 'react-image-resizer';
import IMG1 from './Pics/food1.png'
import IMG2 from './Pics/food2.png'
import IMG3 from './Pics/food3.png'
import {Link} from 'react-router-dom'
const size1={
    height:'10px',

}
var hgt=500;
// var wid=1300;
const Slider = () => {
  return (
    // <MDBContainer >
    <div>

    <div >
      <MDBCarousel
      activeItem={2}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-5"
      className="mr-16"
    >
 
      <MDBCarouselInner className="RadiusGoolKro">
        <MDBCarouselItem itemId="1">
          <MDBView>
            <Image
              className="d-block w-100"
              src={IMG1}
              height={hgt}
              mode='fit'             
              alt="First slide"
              />
          
          </MDBView>
           
          <MDBCarouselCaption>
          {/* <MDBCol md="6"> */}
      {/* <MDBInput className="SearchBarOnSlider" hint="Search" type="text" containerClass="mt-0" /> */}
   
    {/* </MDBCol> */}
    {/* <input className="SearchBarOnSlider" placeholder="Search Your Resturent..." type="text" /> */}
    {/* <div className="SearchBarOnSlider">
    <select className="optionBar">
    <option value="1">Faisalabad</option>
      <option value="2">Lahore</option>
      <option value="3">Karachi</option>
      <option value="4">Islamabad</option>
      <option value="5">Gujranwala</option>
      <option value="6">Jehlum</option>
      
    </select>
    <label>  </label>
  </div> */}
   {/* <SearchBar/> */}
      {/* </MDBCol> */}
            <h3 className="h3-responsive">Always Available for You</h3>
            <p>Avail Our Exciting Offers!</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <Image
              className="d-block w-100"
              src={IMG2}
            height={hgt}
            mode='fit'             
                
            alt="Second slide"
            />
          </MDBView>
          <MDBCarouselCaption>
          {/* <Search/> */}
          {/* <MDBInput className="SearchBarOnSlider" hint="Search" type="text" containerClass="mt-0" /> */}
    {/* <input className="SearchBarOnSlider" placeholder="Search Your Resturent..." type="text" /> */}
    {/* <SearchBar/> */}
    {/* <div className="SearchBarOnSlider">
    <select className="optionBar">
    <option  value="" disabled selected>Search For Resturent...</option>
      <option value="1">Faisalabad</option>
      <option value="2">Lahore</option>
      <option value="3">Karachi</option>
      <option value="4">Islamabad</option>
      <option value="5">Gujranwala</option>
      <option value="6">Jehlum</option>
      
    </select>
    <label>   </label>
  </div> */}
            <h3 className="h3-responsive">Positive Response is our Satisfication</h3>
            <p>Maintaining Quality for you</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <Image
              className="d-block w-100"
              src={IMG3}
                height={hgt}
                style={{MarginLeft:'12px'}}
                // width={wid}              
                mode='fit'             
              
                //   className={size1}
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
          {/* <Search/> */}
   
          {/* <MDBInput className="SearchBarOnSlider" hint="Search" type="text" containerClass="mt-0" /> */}
          {/* <input className="SearchBarOnSlider" placeholder="Search Your Resturent..." type="text" /> */}
          {/* <SearchBar/> */}
          {/* <div className="SearchBarOnSlider">
    <select className="optionBar">
    <option  value="" disabled selected>Search For Resturent...</option>
    <option value="1">Faisalabad</option>
      <option value="2">Lahore</option>
      <option value="3">Karachi</option>
      <option value="4">Islamabad</option>
      <option value="5">Gujranwala</option>
      <option value="6">Jehlum</option>
      
    </select>
    <label>   </label>
  </div> */}

            <h3 className="h3-responsive">Want Some Food!</h3>
            <p><b>Contact +923041199989</b></p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>

    </MDBCarousel>
    </div>
   
    </div>
    // </MDBContainer>
  );
}

export default Slider;