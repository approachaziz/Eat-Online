import React, { Component } from 'react';
import NavBar1 from './navBar'
// import Slider from './slider'
import Slider from './imgSlider'
import Footer from '../Components/BottomBar'
import '../index.css'
import Footer1 from './bottomFooter'
import IMG from './SecondPage/icons/menu.png'
import Hotel1 from './SecondPage/hotelCards'
class Home2  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
   
        }
   
        }
   
    render() { 
 
 return (  
<div>
<NavBar1 />
<Slider/>
<br/>
<h3 className="hotelText"><b>Select Hotel </b><img src={IMG}/></h3>
<br/>
<br/>

<Hotel1 />
<br/>
<div className="footer1">
<Footer/>
</div>
</div>
        );
    }
}
 
export default Home2 ;