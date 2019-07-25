import React, { Component } from 'react';
import NavBar from  '../navBar';
import DashboardCart from '../DashBoardCart'
import IMG from '../icons/menu.png'
class DashBoardShow extends Component {
    state = {  }
    render() { 
        return (  
            <div>
<NavBar/>
<br/>
                
                <br/>
                <br/>
                
                <br/>
                <br/>
                
                <br/>
                <br/>
                
                <br/>
       
<h3 className="hotelText">DashBoard <img src={IMG}/></h3>
                <br/>
                
                <br/>
                {/* <Login/> */}
                <DashboardCart/>
            </div>
        );
    }
}
 
export default DashBoardShow;