import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainHome from './Components/mainHome';
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import SecondPage from './Components/SecondPageOnClick'
import {Provider} from 'react-redux';
import Store from './Redux/store/index'
import Third from './Components/ThirdPage/ThirdMain'
import Login1 from './Components/Login'
import Signup from './Components/signup'
import MainCityPage from './Components/CityMainPage'
import Selection from './Components/UserSelection'
const store = Store();
class App extends Component 
{
  constructor(props) {
    super(props)
    this.state = {
        status:false
    }
   
}
  render() {
  
    return (
      <Provider store = { store } >
      <BrowserRouter>
      <div className="App">

      <Switch>
     <Route path="/" exact component={Selection} />
     <Route path="/MainHome" component={MainHome}/>
     <Route path="/SecondPageOnClick" component={SecondPage} />
     <Route path="/ThirdMain" component={Third} />
      <Route path="/Login" component={Login1}/>
      <Route path="/signup" component={Signup} />
      <Route path="/cityPage" component={MainCityPage}/>
      <Route path="/cityPage/SecondPageOnClick" component={SecondPage}/>
  
     </Switch>
     
      </div>

      </BrowserRouter>
       </Provider>
    );
  }
}

export default App;
