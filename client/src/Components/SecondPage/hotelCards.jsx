import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card1 from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IMG1 from '../hotelPics/burgurKing.jpg'
import IMG2 from '../hotelPics/forkNKnive.jpg'
import IMG3 from '../hotelPics/kfc.jpg'
import IMG4 from '../hotelPics/hardees.jpg'
import IMG6 from '../hotelPics/baba tikka.jpg'
import IMG5 from '../hotelPics/al-aziz.jpg'
import IMG7 from '../hotelPics/Almaida.jpg'
import IMG8 from '../hotelPics/macdonald.jpg'
import Deal1 from '../../Components/Pics/Deal3.jpg'
import Deal2 from '../../Components/Pics/Deal1.jpg'
import Deal3 from '../../Components/Pics/Deal4.jpg'
import Deal4 from '../../Components/Pics/Deal3.jpg'

import {ToastsContainer, ToastsStore,ToastsContainerPosition,lightBackground,DarkBackground} from 'react-toasts';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBContainer } from "mdbreact";
// import '../SecondPage/Style.css'
import { Button as btn, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/actions/cartActions';
import {compose} from 'recompose';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import _ from 'lodash'
import { Button as Btn1, Header, Icon, Image, Modal as Modal1 ,Item as Item1 ,Rating} from 'semantic-ui-react'

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});
var number=0;
class RecipeReviewCard extends React.Component {
    constructor(props) {
        super(props);
    this.state = { 
      open:true,
      expanded1: false,
      expanded2: false,
      expanded3: false,
      expanded4: false,
      expanded5: false,
      expanded6: false,
      expanded7: false,
      expanded8: false,
      addressBurger:"Civil Lines Faislabad",
      contactBurger:"(041) 111 112 525",
      addressKfc:"D-Ground Faislabad",
      contactKfc:"(041) 111 532 532",
      addressBabaTikka:"111, D Ground Block B, D Ground People's Colony No 1,Faisalabad",
      contactBabaTikka:"(041) 8555110",
      addressMacdonald:"Gates Square, Satayana Road، Block B People's Colony No 1,Faisalabad",
      contactMacdonald:"(041) 111 244 622",
      addressForkKnive:"2 Burj Mall,Faisalabad",
      contactForkKnive:"(041) 111 65 65 65",
      addressAlMaida:"Gulbarg Police station Road,Faisalabad",
      contactAlMaida:"(041) 111 11 31 31",
      contactHardees:"Gateway Tower, Main Satiana Rd, Batala Colony",
      addressHardeed:"(041) 85405070",
      Deal1Content:": 3 Zinger Burders + 2 Chicken Biryani + 5 MicNuguts +5 Cold-Drinks",
      Deal2Content:": 2 Zinger Burders + 2 Chicken Biryani + 3 MicNuguts +7 Cold-Drinks",
      Deal3Content:": 1 Zinger Burders + 1 Chicken Biryani + 4 MicNuguts +2 Cold-Drinks",
      Deal4Content:": 4 Zinger Burgers + 4 Chicken Biryani + 5 MicNuguts + 7 Cold-Drinks + 5-Mint Margreta",
      Deal1ContentAlAziz:": 5 Roti +5 naan +1 full Broast +2 plates Fries + 3 Biryani + 5 Cold Drinks",
      Deal2ContentAlAziz:": 3 Roti +5 naan + Half Broast +2 plates Fries + 3 Biryani + 4 Cold Drinks + 2 Rayeta",
      Deal3ContentAlAziz:": 5 Roti +2 naan + leg  Broast +1 plates Fries + 3 Biryani + 3 Cold Drinks",
      Deal4ContentAlAziz:": 1 Roti +1 naan +Cheast Broast +1 plates Fries + 1 Biryani + 1 Cold Drinks",
      Deal1ContentBurgurKing:": 4 Zinger Burgers + 4 Chicken Biryani + 5 MicNuguts + 7 Cold-Drinks + 5-Mint Margreta",
      Deal2ContentBurgurKing:": 3 Zinger Burgers + 2 Chicken Biryani + 3 MicNuguts + 2 Cold-Drinks + 4-Mint Margreta",
      Deal3ContentBurgurKing:": 2 Zinger Burgers + 1 Chicken Biryani +  7 Cold-Drinks + 5-Mint Margreta",
      Deal4ContentBurgurKing:": 1 Stuff Chicken + 4 Chicken Biryani + 5 MicNuguts + 7 Cold-Drinks + 5-Mint Margreta",
      Deal1ContentForkNKnive:": 3 Zinger Burgers + 2 Chicken Biryani + 1 Regular Pizza +5 Cold-Drinks",
      Deal2ContentForkNKnive:": 2 Garlic Breal + 2 Chicken Biryani + 1 small Pizza +7 Cold-Drinks",
      Deal3ContentForkNKnive:": 1 Zinger Burgers + 1 large Pizza Supreme+ 4 MicNuguts +2 Cold-Drinks",
      Deal4ContentForkNKnive:": 2 XL Pizza with ectra topings + 5 MicNuguts + 7 Cold-Drinks + 5-Mint Margreta",
      Deal1ContentAlMaida:": 3 Small Pizza Speacial + 2 Chicken Biryani + 5 MicNuguts +5 Cold-Drinks",
      Deal2ContentAlMaida:": 2 Zinger Burgers  + 3 regular Pizza +7 Cold-Drinks",
      Deal3ContentAlMaida:": 5 Garlic Bread + 2 Personal Pan Pizza +2 Cold-Drinks",
      Deal4ContentAlMaida:": 4 Zinger Burgers + 1 XL Chicken Supreme + 5 MicNuguts + 7 Cold-Drinks + 5-Mint Margreta",
    //  countAll:  ,
    TotalPrice:0,
      count:0,
      count2:0,
      count3:0,
      count4:0,
      count5:0,
      count6:0,
      count7:0,
      count8:0,
      count9:0,
      count10:0,
      count11:0,
      count12:0,
      count13:0,
      count14:0,
      count15:0,
      count16:0,
      count17:0,
      count18:0,
      count19:0,
      count20:0,
      count21:0,
      count22:0,
      count23:0,
      count24:0,
      count25:0,
      count26:0,
      count27:0,
      count28:0,
      count29:0,
      count30:0,
      count31:0,
      count32:0,
      number:0,
      
      };
  this.toggle1=this.toggle1.bind(this);
  this.toggle2=this.toggle2.bind(this);
  this.toggle3=this.toggle3.bind(this);
  this.toggle4=this.toggle4.bind(this);
  this.toggle5=this.toggle5.bind(this);
  this.toggle6=this.toggle6.bind(this);
  this.toggle7=this.toggle7.bind(this);
  this.toggle8=this.toggle8.bind(this);
  
}

handleClick=()=>{
  this.setState(({count})=>({
    count:count+1
  }));
console.log("My name is khan");
}

handleClick2=()=>{
  this.setState(({count2})=>({
    count2:count2+1
  }));

}
handleClick3=()=>{
  this.setState(({count3})=>({
    count3:count3+1
  }));

}
handleClick4=()=>{
  this.setState(({count4})=>({
    count4:count4+1
  }));

}
handleClick5=()=>{
  this.setState(({count5})=>({
    count5:count5+1
  }));

}
handleClick6=()=>{
  this.setState(({count6})=>({
    count6:count6+1
  }));

}
handleClick7=()=>{
  this.setState(({count7})=>({
    count7:count7+1
  }));

}
handleClick8=()=>{
  this.setState(({count8})=>({
    count8:count8+1
  }));

}
handleClick9=()=>{
  this.setState(({count9})=>({
    count9:count9+1
  }));

}
handleClick10=()=>{
  this.setState(({count10})=>({
    count10:count10+1
  }));

}
handleClick11=()=>{
  this.setState(({count11})=>({
    count11:count11+1
  }));

}
handleClick12=()=>{
  this.setState(({count12})=>({
    count12:count12+1
  }));

}
handleClick13=()=>{
  this.setState(({count13})=>({
    count13:count13+1
  }));

}
handleClick14=()=>{
  this.setState(({count14})=>({
    count14:count14+1
  }));

}
handleClick15=()=>{
  this.setState(({count15})=>({
    count15:count15+1
  }));

}
handleClick16=()=>{
  this.setState(({count16})=>({
    count16:count16+1
  }));

}
handleClick17=()=>{
  this.setState(({count17})=>({
    count17:count17+1
  }));

}
handleClick18=()=>{
  this.setState(({count18})=>({
    count18:count18+1
  }));

}
handleClick19=()=>{
  this.setState(({count19})=>({
    count19:count19+1
  }));

}
handleClick20=()=>{
  this.setState(({count20})=>({
    count20:count20+1
  }));

}
handleClick21=()=>{
  this.setState(({count21})=>({
    count21:count21+1
  }));

}
handleClick22=()=>{
  this.setState(({count22})=>({
    count22:count22+1
  }));

}
handleClick23=()=>{
  this.setState(({count23})=>({
    count23:count23+1
  }));

}
handleClick24=()=>{
  this.setState(({count24})=>({
    count24:count24+1
  }));

}
handleClick25=()=>{
  this.setState(({count25})=>({
    count25:count25+1
  }));

}
handleClick26=()=>{
  this.setState(({count26})=>({
    count26:count26+1
  }));

}
handleClick27=()=>{
  this.setState(({count27})=>({
    count27:count27+1
  }));

}
handleClick28=()=>{
  this.setState(({count28})=>({
    count28:count28+1
  }));

}
handleClick29=()=>{
  this.setState(({count29})=>({
    count29:count29+1
  }));

}
handleClick30=()=>{
  this.setState(({count30})=>({
    count30:count30+1
  }));

}
handleClick31=()=>{
  this.setState(({count32})=>({
    count32:count32+1
  }));

}
handleClick32=()=>{
  this.setState(({count31})=>({
    count31:count31+1
  }));

}
handleClick33=()=>{
  this.setState(({count})=>({
    count:count+1
  }));

}
// toggleAll() {
//   this.setState(prevState => ({
//       expanded1: prevState.expanded1
//   }));
// }

toggle1() {
  this.setState(prevState => ({
      expanded1: !prevState.expanded1
  }));
}

toggle2() {
    this.setState(prevState => ({
        expanded2: !prevState.expanded2
    }));
}

toggle3() {
    this.setState(prevState => ({
        expanded3: !prevState.expanded3
    }));
}

toggle4() {
    this.setState(prevState => ({
        expanded4: !prevState.expanded4
    }));
}

toggle5() {
    this.setState(prevState => ({
        expanded5: !prevState.expanded5
    }));
}

toggle6() {
    this.setState(prevState => ({
        expanded6: !prevState.expanded6
    }));
}

toggle7() {
    this.setState(prevState => ({
        expanded7: !prevState.expanded7
    }));
}

toggle8() {
    this.setState(prevState => ({
        expanded8: !prevState.expanded8
    }));
}

handleClose = () => {
  this.setState({ open: false });
};

/////////////////////////////////////////////////////////////////////////////////////


render() {
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
  const { classes } = this.props;
  const {number}=this.state;
  //////////////////////////////////////////////////////////////////////////////////
  
  const productList1 = this.props.products1a.map( (item1,index1)  => {
    return <div key={index1}> 
     
      <MDBBtn   onClick={(event) => {this.props.addToCart(item1);this.handleClick();ToastsStore.success(item1.name+" Added!")}} color="primary">Purchase For 599+Tax</MDBBtn>
      <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} lightBackground/>
      <Button  color="success">{this.state.count}</Button>{' '}
    </div>
  });


  const productList2 = this.props.products1b.map( (item2,index2)  => {
    return <div key={index2}> 
     
      <MDBBtn    onClick={(event) => {this.props.addToCart(item2);this.handleClick2();ToastsStore.success(item2.name+" Added!")}} color="primary">Purchase For 400+Tax</MDBBtn>
      <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} lightBackground/>
 <Button color="success">{this.state.count2}</Button>{' '}

    </div>
  });


  const productList3 = this.props.products1c.map( (item3,index3)  => {
    return <div key={index3}> 
     
      <MDBBtn    onClick={(event) => {this.props.addToCart(item3);this.handleClick3();ToastsStore.success(item3.name+" Added!")}} color="primary">Purchase For 399+Tax</MDBBtn>
      <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} lightBackground/>
 <Button color="success">{this.state.count3}</Button>{' '}

    </div>
  });


  const productList4 = this.props.products1d.map( (item4,index4)  => {
    return <div key={index4}> 
     
      <MDBBtn    onClick={(event) => {this.props.addToCart(item4);this.handleClick4();ToastsStore.success(item4.name+" Added!")}} color="primary">Purchase For 999+Tax</MDBBtn>
      <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} lightBackground/>
      <Button color="success">{this.state.count4}</Button>{' '}
   
    </div>
  });


////////////////////////FORk N KNIVE

  
const productList5 = this.props.products2a.map( (item5,index5)  => {
  return <div key={index5}> 
  
  
    <MDBBtn    onClick={(event) => {this.props.addToCart(item5);this.handleClick5();ToastsStore.success(item5.name+" Added!")}} color="primary">Purchase For 599+Tax</MDBBtn>
    <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} lightBackground/>
 <Button color="success">{this.state.count5}</Button>{' '}

 </div>
});


const productList6 = this.props.products2b.map( (item6,index6)  => {
  return <div key={index6}> 
    
    <MDBBtn    onClick={(event) => {this.props.addToCart(item6);this.handleClick6();ToastsStore.success(item6.name+" Added!")}} color="primary">Purchase For 400+Tax</MDBBtn>
    <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} lightBackground/>
      <Button color="success">{this.state.count6}</Button>{' '}
  
  </div>
});


const productList7 = this.props.products2c.map( (item7,index7)  => {
  return <div key={index7}> 
    <MDBBtn    onClick={(event) => {this.props.addToCart(item7);this.handleClick7();ToastsStore.success(item7.name+" Added!")}} color="primary">Purchase For 399+Tax</MDBBtn>
    <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} lightBackground/>
 <Button color="success">{this.state.count7}</Button>{' '}

  </div>
});


const productList8 = this.props.products2d.map( (item8,index8)  => {
  return <div key={index8}> 
    <MDBBtn    onClick={(event) => {this.props.addToCart(item8);this.handleClick8();ToastsStore.success(item8.name+" Added!")}} color="primary">Purchase For 999+Tax</MDBBtn>
    <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} lightBackground/>
 <Button color="success">{this.state.count8}</Button>{' '}

  </div>
});



////////////////////////KFC

  
const productList9 = this.props.products3a.map( (item9,index9)  => {
  return <div key={index9}> 
    <MDBBtn    onClick={(event) => {this.props.addToCart(item9);this.handleClick9();ToastsStore.success(item9.name+" Added!")}} color="primary">Purchase For 599+Tax</MDBBtn>
    <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} lightBackground/> 
 <Button color="success">{this.state.count9}</Button>{' '}

  </div>
});


const productList10 = this.props.products3b.map( (item10,index10)  => {
  return <div key={index10}> 
    <MDBBtn    onClick={(event) => {this.props.addToCart(item10);this.handleClick10();ToastsStore.success(item10.name+" Added!")}} color="primary">Purchase For 400+Tax</MDBBtn>
    <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} lightBackground/>
      <Button color="success">{this.state.count10}</Button>{' '}
  
  </div>
});


const productList11 = this.props.products3c.map( (item11,index11)  => {
  return <div key={index11}> 
    <MDBBtn    onClick={(event) => {this.props.addToCart(item11);this.handleClick11();ToastsStore.success(item11.name+" Added!")}} color="primary">Purchase For 399+Tax</MDBBtn>
    <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} lightBackground/> 
 <Button color="success">{this.state.count11}</Button>{' '}

  </div>
});


const productList12 = this.props.products3d.map( (item12,index12)  => {
  return <div key={index12}> 
    <MDBBtn    onClick={(event) => {this.props.addToCart(item12);this.handleClick12();ToastsStore.success(item12.name+" Added!")}} color="primary">Purchase For 999+Tax</MDBBtn>
    <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} lightBackground/>
 <Button color="success">{this.state.count12}</Button>{' '}

  </div>
});

///////////////////////////////////HARDEES
const productList13 = this.props.products4a.map( (item13,index13)  => {
  return <div key={index13}> 
    <MDBBtn    onClick={(event) => {this.props.addToCart(item13);this.handleClick13();ToastsStore.success(item13.name+" Added!")}} color="primary">Purchase For 599+Tax</MDBBtn>
 
 <Button color="success">{this.state.count13}</Button>{' '}

  </div>
});


const productList14 = this.props.products4b.map( (item14,index14)  => {
  return <div key={index14}> 
    <MDBBtn    onClick={(event) => {this.props.addToCart(item14);this.handleClick14();ToastsStore.success(item14.name+" Added!")}} color="primary">Purchase For 400+Tax</MDBBtn>
    <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} lightBackground/>
      <Button color="success">{this.state.count14}</Button>{' '}
  
  </div>
});


const productList15 = this.props.products4c.map( (item15,index15)  => {
  return <div key={index15}> 
  
  
    {/* <MDBBtn color="primary" onClick={() => this.props.addToCart(item15)}>Purchase For 399+Tax </MDBBtn> */}
    <MDBBtn    onClick={(event) => {this.props.addToCart(item15);this.handleClick15();ToastsStore.success(item15.name+" Added!")}} color="primary">Purchase For 399+Tax</MDBBtn>
    <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} lightBackground/>
 <Button color="success">{this.state.count15}</Button>{' '}

  
  </div>
});


const productList16 = this.props.products4d.map( (item16,index16)  => {
  return <div key={index16}> 
  
    {/* <MDBBtn  color="primary" onClick={() => this.props.addToCart(item16)}>Purchase For 999+Tax </MDBBtn> */}
    <MDBBtn    onClick={(event) => {this.props.addToCart(item16);this.handleClick16();ToastsStore.success(item16.name+" Added!")}} color="primary">Purchase For 999+Tax</MDBBtn>
    <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} lightBackground/>
 <Button color="success">{this.state.count16}</Button>{' '}

  </div>
});

////////////////////////////////////////AL-MAIDA


const productList17 = this.props.products5a.map( (item17,index17)  => {
  return <div key={index17}> 
    <MDBBtn    onClick={(event) => {this.props.addToCart(item17);this.handleClick17();ToastsStore.success(item17.name+" Added!")}} color="primary">Purchase For 400+Tax</MDBBtn>
    <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} lightBackground/>
 <Button color="success">{this.state.count17}</Button>{' '}


  </div>
});


const productList18 = this.props.products5b.map( (item18,index18)  => {
  return <div key={index18}> 
   <MDBBtn    onClick={(event) => {this.props.addToCart(item18);this.handleClick18();ToastsStore.success(item18.name+" Added!")}} color="primary">Purchase For 399+Tax</MDBBtn>
 <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} lightBackground/>
 <Button color="success">{this.state.count18}</Button>{' '}
  </div>
});


const productList19 = this.props.products5c.map( (item19,index19)  => {
  return <div key={index19}> 
  
    {/* <MDBBtn  color="primary" onClick={() => this.props.addToCart(item19)}>Purchase For 400+Tax </MDBBtn> */}
    <MDBBtn    onClick={(event) => {this.props.addToCart(item19);this.handleClick19();ToastsStore.success(item19.name+" Added!")}} color="primary">Purchase For 999+Tax</MDBBtn>
    <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} lightBackground/>
 <Button color="success">{this.state.count19}</Button>{' '}
 
  </div>
});

const productList20 = this.props.products5a.map( (item20,index20)  => {
  return <div key={index20}> 
  
    {/* <MDBBtn  color="primary" onClick={() => this.props.addToCart(item20)}>Purchase For 999+Tax </MDBBtn> */}
    <MDBBtn    onClick={(event) => {this.props.addToCart(item20);this.handleClick20();ToastsStore.success(item20.name+" Added!")}} color="primary">Purchase For 999+Tax</MDBBtn>
    <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} lightBackground/>
 <Button color="success">{this.state.count20}</Button>{' '}

  </div>
});


//////////////////////        AL-AZIZ
const productList21 = this.props.products6a.map( (item21,index21)  => {
  return <div key={index21}> 
    <MDBBtn    onClick={(event) => {this.props.addToCart(item21);this.handleClick21();ToastsStore.success(item21.name+" Added!")}} color="primary">Purchase For 399+Tax</MDBBtn>
    <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} lightBackground/>
 <Button color="success">{this.state.count21}</Button>{' '}

  </div>
});


const productList22 = this.props.products6b.map( (item22,index22)  => {
  return <div key={index22}> 
  
    <MDBBtn    onClick={(event) => {this.props.addToCart(item22);this.handleClick22();ToastsStore.success(item22.name+" Added!")}} color="primary">Purchase For 599+Tax</MDBBtn>
    <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} lightBackground/>
 <Button color="success">{this.state.count22}</Button>{' '}

  </div>
});


const productList23 = this.props.products6c.map( (item23,index23)  => {
  return <div key={index23}> 
    {/* <MDBBtn color="primary" onClick={() => this.props.addToCart(item23)}> Purchase For 400+Tax</MDBBtn> */}
    <MDBBtn    onClick={(event) => {this.props.addToCart(item23);this.handleClick23();ToastsStore.success(item23.name+" Added!")}} color="primary">Purchase For 400+Tax</MDBBtn>
    <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} lightBackground/>
 <Button color="success">{this.state.count23}</Button>{' '}

 
  </div>
});


const productList24 = this.props.products6d.map( (item24,index24)  => {
  return <div key={index24}> 
   {/* <MDBBtn color="primary" onClick={() => this.props.addToCart(item24)}>Purchase For 399+Tax </MDBBtn> */}
   <MDBBtn    onClick={(event) => {this.props.addToCart(item24);this.handleClick24();ToastsStore.success(item24.name+" Added!")}} color="primary">Purchase For 399+Tax</MDBBtn>
   <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} lightBackground/>
 <Button color="success">{this.state.count24}</Button>{' '}

  </div>
});


//////////////////////        BABA-TIkka
const productList25 = this.props.products7a.map( (item25,index25)  => {
  return <div key={index25}> 
    <MDBBtn    onClick={(event) => {this.props.addToCart(item25);this.handleClick25();ToastsStore.success(item25.name+" Added!")}} color="primary">Purchase For 999+Tax</MDBBtn>
    <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} lightBackground/>
 <Button color="success">{this.state.count25}</Button>{' '}

  </div>
});


const productList26 = this.props.products7b.map( (item26,index26)  => {
  return <div key={index26}> 
  
    <MDBBtn    onClick={(event) => {this.props.addToCart(item26);this.handleClick26();ToastsStore.success(item26.name+" Added!")}} color="primary">Purchase For 599+Tax</MDBBtn>
    <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} lightBackground/>
 <Button color="success">{this.state.count26}</Button>{' '}

  </div>
});


const productList27 = this.props.products7c.map( (item27,index27)  => {
  return <div key={index27}> 
    {/* <MDBBtn color="primary" onClick={() => this.props.addToCart(item27)}> Purchase For 400+Tax</MDBBtn> */}
    <MDBBtn    onClick={(event) => {this.props.addToCart(item27);this.handleClick27();ToastsStore.success(item27.name+" Added!")}} color="primary">Purchase For 400+Tax</MDBBtn>
    <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} lightBackground/>
 <Button color="success">{this.state.count27}</Button>{' '}


  </div>
});


const productList28 = this.props.products7d.map( (item28,index28)  => {
  return <div key={index28}> 
   {/* <MDBBtn color="primary" onClick={() => this.props.addToCart(item28)}>Purchase For 399+Tax </MDBBtn> */}
   <MDBBtn    onClick={(event) => {this.props.addToCart(item28);this.handleClick28();ToastsStore.success(item28.name+" Added!")}} color="primary">Purchase For 399+Tax</MDBBtn>
   <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} lightBackground/>
 <Button color="success">{this.state.count28}</Button>{' '}

  </div>
});

//////////////////////////Macdonald


const productList29 = this.props.products8a.map( (item29,index29)  => {
  return <div key={index29}> 
    {/* <MDBBtn  color="primary" onClick={() => this.props.addToCart(item29)}>Purchase For 999+Tax </MDBBtn> */}
    <MDBBtn    onClick={(event) => {this.props.addToCart(item29);this.handleClick29();ToastsStore.success(item29.name+" Added!")}} color="primary">Purchase For 999+Tax</MDBBtn>
    <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} lightBackground/>
 <Button color="success">{this.state.count29}</Button>{' '}

  </div>
});


const productList30 = this.props.products8b.map( (item30,index30)  => {
  return <div key={index30}> 
  
    {/* <MDBBtn onClick={() => this.props.addToCart(item30)}  color="primary">Purchase For 599+Tax</MDBBtn> */}

    <MDBBtn    onClick={(event) => {this.props.addToCart(item30);this.handleClick30();ToastsStore.success(item30.name+" Added!")}} color="primary">Purchase For 599+Tax</MDBBtn>
    <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} lightBackground/>
 <Button color="success">{this.state.count30}</Button>{' '}

  </div>
});


const productList31 = this.props.products8c.map( (item31,index31)  => {
  return <div key={index31}> 
  
    <MDBBtn    onClick={(event) => {this.props.addToCart(item31);this.handleClick31();ToastsStore.success(item31.name+" Added!")}} color="primary">Purchase For 400+Tax</MDBBtn>
    <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} lightBackground/>
 <Button color="success">{this.state.count31}</Button>{' '}

  </div>
});


const productList32 = this.props.products8d.map( (item32,index32)  => {
  return <div key={index32}> 
   <MDBBtn    onClick={(event) => {this.props.addToCart(item32);this.handleClick32();ToastsStore.success(item32.name+" Added!")}} color="primary">Purchase For 399+Tax</MDBBtn>
   <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} lightBackground/>
 <Button color="success">{this.state.count32}</Button>{' '}
 
  </div>
});
 
  return (
   <Container>
   <Row>
   <Col xs="6" sm="4">
     <Card1 className={classes.card} className="p-2 bd-highlight col-example">
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              F
            </Avatar>
          }
          title="Burgur King"
          subheader="june 30, 2019"
        />
        <CardMedia
          className={classes.media}
          image={IMG1}
          title="Burgur King"
        />
        <CardContent>
          <Typography component="p">
          <strong>Address:</strong>{this.state.addressBurger}
          <br/>
          <strong>Hours:Open/Close:</strong>11Am-2Pm
          <br/>
          <strong>Contact:</strong>{this.state.contactBurger}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
         
  <div>
        {/* <Button color="danger" style={{backgroundColor:'sandybrown' }} onClick={this.toggle1}>Order Here</Button> */}
        {/* <Modal isOpen={this.state.expanded1} toggle={this.toggle1} className={this.props.className} external={externalCloseBtn}> */}
        <Modal1 trigger={<Btn1 style={{backgroundColor:'sandybrown' ,borderRadius:12}}>Order Here</Btn1>}>
    <Modal1.Header>Profile Picture</Modal1.Header>
    <Modal1.Content image scrolling>
      <Image size='medium' style={{borderRadius:12}} src={IMG1} wrapped />

      <Modal1.Description>
        <Header>Burgur KING Jaranwala Road Branch</Header>
        <p><em>Order From <u>Burgur King</u> Faisalabd! Your Favorite one!</em></p>


        <Item1.Group>
    <Item1>
      <Item1.Image size='tiny' src={Deal1} />

      <Item1.Content>
        <Item1.Header as='a'>Deal1</Item1.Header>
        <Item1.Meta>4 Persons</Item1.Meta>
        <Item1.Description>
          {/* <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' /> */}
          <strong>Included</strong>{this.state.Deal1ContentBurgurKing}

        {productList1}
        </Item1.Description>
        <Item1.Extra>Additional Details</Item1.Extra>
      </Item1.Content>
    </Item1>

    <Item1>
      <Item1.Image size='tiny' src={Deal2} />

      <Item1.Content>
        <Item1.Header as='a'>Deal 2</Item1.Header>
        <Item1.Meta>2 Persons</Item1.Meta>
        <Item1.Description>
         
          <strong>Included</strong>{this.state.Deal2ContentBurgurKing}

        {productList2}
     
        </Item1.Description>
        <Item1.Extra>Additional Details</Item1.Extra>
      </Item1.Content>
    </Item1>
  </Item1.Group >

  <Item1.Group>
    <Item1>
      <Item1.Image size='tiny' src={Deal3} />

      <Item1.Content>
        <Item1.Header as='a'>Deal3</Item1.Header>
        <Item1.Meta>4 Persons</Item1.Meta>
        <Item1.Description>
         
          <strong>Included</strong>{this.state.Deal3ContentBurgurKing}

        {productList3}
        </Item1.Description>
        <Item1.Extra>Additional Details</Item1.Extra>
      </Item1.Content>
    </Item1>

    <Item1>
      <Item1.Image size='tiny' src={Deal4} />

      <Item1.Content>
        <Item1.Header as='a'>Deal 4</Item1.Header>
        <Item1.Meta>5 Persons</Item1.Meta>
        <Item1.Description>
          {/* <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' /> */}
          <strong>Included</strong>{this.state.Deal4ContentBurgurKing}

        {productList4}
     
        </Item1.Description>
        <Item1.Extra>Additional Details</Item1.Extra>
      </Item1.Content>
    </Item1>
  </Item1.Group >

      </Modal1.Description>
    </Modal1.Content>
    <Modal1.Actions>
      {/* <Btn1 primary>
        Proceed <Icon name='chevron right' />
      </Btn1>
       */}
      {/* <Button color="secondary" onClick={this.toggleAll}>Cancel</Button> */}
    </Modal1.Actions>
  </Modal1>
 {/*                      //////////Fork N Knive DEAL  Model ///////////////*/}
 
         
       </div>
        </CardActions>
      </Card1>
        </Col>
        <Col xs="6" sm="4">
      <Card1 className={classes.card} className="p-2 bd-highlight col-example">
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              F
            </Avatar>
          }
       
          title="Fork N Knive Faislabad"
          subheader="june 30, 2019"
        />
        <CardMedia
          className={classes.media}
          image={IMG2}
          title="Fork N Knive"
        />
        <CardContent>
          <Typography component="p">
          <strong>Address:</strong>{this.state.addressForkKnive}
          <br/>
          <strong>Hours:Open/Close:</strong>11Am-2Am
          <br/>
          <strong>Contact:</strong>{this.state.contactForkKnive}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
        <div>
     
     
     <Modal1 onClick={this.toggle2} trigger={<Btn1 style={{backgroundColor:'sandybrown' ,borderRadius:12}}>Order Here</Btn1>}>
    <Modal1.Header>Profile Picture</Modal1.Header>
    <Modal1.Content image scrolling>
      <Image size='medium' style={{borderRadius:12}} src={IMG2} wrapped />

      <Modal1.Description>
        <Header>Fork N Knive Jaranwala Road Branch</Header>
        <p><em>Order From <u>Fork N Knive</u> Faisalabd! Your Favorite one!</em></p>


        <Item1.Group>
    <Item1>
      <Item1.Image size='tiny' src={Deal1} />

      <Item1.Content>
        <Item1.Header as='a'>Deal1</Item1.Header>
        <Item1.Meta>4 Persons</Item1.Meta>
        <Item1.Description>
          {/* <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' /> */}
          <strong>Included</strong>{this.state.Deal1ContentForkNKnive}

        {productList5}
        </Item1.Description>
        <Item1.Extra>Additional Details</Item1.Extra>
      </Item1.Content>
    </Item1>

    <Item1>
      <Item1.Image size='tiny' src={Deal2} />

      <Item1.Content>
        <Item1.Header as='a'>Deal 2</Item1.Header>
        <Item1.Meta>2 Persons</Item1.Meta>
        <Item1.Description>
         
          <strong>Included</strong>{this.state.Deal2ContentForkNKnive}

        {productList6}
     
        </Item1.Description>
        <Item1.Extra>Additional Details</Item1.Extra>
      </Item1.Content>
    </Item1>
  </Item1.Group >

  <Item1.Group>
    <Item1>
      <Item1.Image size='tiny' src={Deal3} />

      <Item1.Content>
        <Item1.Header as='a'>Deal3</Item1.Header>
        <Item1.Meta>4 Persons</Item1.Meta>
        <Item1.Description>
         
          <strong>Included</strong>{this.state.Deal3ContentForkNKnive}

        {productList7}
        </Item1.Description>
        <Item1.Extra>Additional Details</Item1.Extra>
      </Item1.Content>
    </Item1>

    <Item1>
      <Item1.Image size='tiny' src={Deal4} />

      <Item1.Content>
        <Item1.Header as='a'>Deal 4</Item1.Header>
        <Item1.Meta>5 Persons</Item1.Meta>
        <Item1.Description>
         
          <strong>Included</strong>{this.state.Deal4ContentForkNKnive}

        {productList8}
     
        </Item1.Description>
        <Item1.Extra>Additional Details</Item1.Extra>
      </Item1.Content>
    </Item1>
  </Item1.Group >

      </Modal1.Description>
    </Modal1.Content>
    <Modal1.Actions>
      {/* <Btn1 primary>
        Done Here! <Icon name='chevron right' />
      </Btn1> */}
    </Modal1.Actions>
  </Modal1>
  
      </div>

        </CardActions>
      </Card1>
      </Col>
      <Col sm="4">
      <Card1 className={classes.card} className="p-2 bd-highlight col-example">
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              F
            </Avatar>
          
          }
          title="KFC"
          subheader="june 30, 2019"
        />
        <CardMedia
          className={classes.media}
          image={IMG3}
          title="KFC"
        />
        <CardContent>
          <Typography component="p">
          <strong>Address:</strong>{this.state.addressKfc}
          <br/>
          <strong>Hours:Open/Close:</strong>11Am-2Am
          <br/>
          <strong>Contact:</strong>{this.state.contactKfc}
                </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
     
          {/*     ///////////KFC Model Deals */}
        <div>
  
   <Modal1 onClick={this.toggle3} trigger={<Btn1 style={{backgroundColor:'sandybrown' ,borderRadius:12}}>Order Here</Btn1>}>
    <Modal1.Header>Profile Picture</Modal1.Header>
    <Modal1.Content image scrolling>
      <Image size='medium' style={{borderRadius:12}} src={IMG3} wrapped />

      <Modal1.Description>
        <Header>KFC D-Ground Branch</Header>
        <p><em>Order From <u>KFC</u> Faisalabd! Your Favorite one!</em></p>



        <Item1.Group>
    <Item1>
      <Item1.Image size='tiny' src={Deal4} />

      <Item1.Content>
        <Item1.Header as='a'>Deal1</Item1.Header>
        <Item1.Meta>4 Persons</Item1.Meta>
        <Item1.Description>
          {/* <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' /> */}
          <strong>Included</strong>{this.state.Deal1Content}

        {productList9}
        </Item1.Description>
        <Item1.Extra>Additional Details</Item1.Extra>
      </Item1.Content>
    </Item1>

    <Item1>
      <Item1.Image size='tiny' src={Deal3} />

      <Item1.Content>
        <Item1.Header as='a'>Deal 2</Item1.Header>
        <Item1.Meta>2 Persons</Item1.Meta>
        <Item1.Description>
         
          <strong>Included</strong>{this.state.Deal2Content}

        {productList10}
     
        </Item1.Description>
        <Item1.Extra>Additional Details</Item1.Extra>
      </Item1.Content>
    </Item1>
  </Item1.Group >

  <Item1.Group>
    <Item1>
      <Item1.Image size='tiny' src={Deal1}/>

      <Item1.Content>
        <Item1.Header as='a'>Deal3</Item1.Header>
        <Item1.Meta>4 Persons</Item1.Meta>
        <Item1.Description>
         
          <strong>Included</strong>{this.state.Deal3Content}

        {productList11}
        </Item1.Description>
        <Item1.Extra>Additional Details</Item1.Extra>
      </Item1.Content>
    </Item1>

    <Item1>
      <Item1.Image size='tiny' src={Deal2} />

      <Item1.Content>
        <Item1.Header as='a'>Deal 4</Item1.Header>
        <Item1.Meta>5 Persons</Item1.Meta>
        <Item1.Description>
         
          <strong>Included</strong>{this.state.Deal4Content}

        {productList12}
     
        </Item1.Description>
        <Item1.Extra>Additional Details</Item1.Extra>
      </Item1.Content>
    </Item1>
  </Item1.Group >

         </Modal1.Description>
    </Modal1.Content>
    <Modal1.Actions>
      {/* <Btn1 primary>
        Done Here! <Icon name='chevron right' />
      </Btn1> */}
    </Modal1.Actions>
  </Modal1>
      </div>

        </CardActions>
      </Card1>
      </Col>
      </Row>
     <br/>
     <br/>
      <Row>
      <Col xs="6" sm="4">     
    <Card1 className={classes.card} className="p-2 bd-highlight col-example">
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              F
            </Avatar>
          }
          title="Hardees"
          subheader="june 30, 2019"
        />
        <CardMedia
          className={classes.media}
          image={IMG4}
          title="Hardees"
        />
        <CardContent>
          <Typography component="p" className="HardeesSizing">
          <strong>Address:</strong>Gateway Tower,Satiana Rd, Batala Colony 
          <br/>
          <strong>Hours:Open/Close:</strong>11Am-2Pm
          <br/>
          <strong>Contact:</strong>(041) 85405070
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          
        <div >
        
        <ModalBody>
        <Modal1 onClick={this.toggle4} trigger={<Btn1 style={{backgroundColor:'sandybrown' ,borderRadius:12}}>Order Here</Btn1>}>
            
    <Modal1.Header>Profile Picture</Modal1.Header>
    <Modal1.Content image scrolling>
      <Image size='medium' style={{borderRadius:12}} src={IMG3} wrapped />

      <Modal1.Description>
        <Header>Hardees D-Ground Branch</Header>
        <p><em>Order From <u>Hardees</u> Faisalabd! Your Favorite one!</em></p>
        <div>
        <b><em>Order from Hardees Faisalbad!</em></b><br />
 

        <Item1.Group>
    <Item1>
      <Item1.Image size='tiny' src={Deal1} />

      <Item1.Content>
        <Item1.Header as='a'>Deal1</Item1.Header>
        <Item1.Meta>4 Persons</Item1.Meta>
        <Item1.Description>
          {/* <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' /> */}
          <strong>Included</strong>{this.state.Deal1Content}

        {productList13}
        </Item1.Description>
        <Item1.Extra>Additional Details</Item1.Extra>
      </Item1.Content>
    </Item1>

    <Item1>
      <Item1.Image size='tiny' src={Deal2} />

      <Item1.Content>
        <Item1.Header as='a'>Deal 2</Item1.Header>
        <Item1.Meta>2 Persons</Item1.Meta>
        <Item1.Description>
         
          <strong>Included</strong>{this.state.Deal2Content}

        {productList14}
     
        </Item1.Description>
        <Item1.Extra>Additional Details</Item1.Extra>
      </Item1.Content>
    </Item1>
  </Item1.Group >

  <Item1.Group>
    <Item1>
      <Item1.Image size='tiny' src={Deal3} />

      <Item1.Content>
        <Item1.Header as='a'>Deal3</Item1.Header>
        <Item1.Meta>4 Persons</Item1.Meta>
        <Item1.Description>
         
          <strong>Included</strong>{this.state.Deal3Content}

        {productList15}
        </Item1.Description>
        <Item1.Extra>Additional Details</Item1.Extra>
      </Item1.Content>
    </Item1>

    <Item1>
      <Item1.Image size='tiny' src={Deal4} />

      <Item1.Content>
        <Item1.Header as='a'>Deal 4</Item1.Header>
        <Item1.Meta>5 Persons</Item1.Meta>
        <Item1.Description>
         
          <strong>Included</strong>{this.state.Deal4Content}

        {productList16}
     
        </Item1.Description>
        <Item1.Extra>Additional Details</Item1.Extra>
      </Item1.Content>
    </Item1>
  </Item1.Group >

 
         </div>
         </Modal1.Description>
    </Modal1.Content>
    <Modal1.Actions>
      {/* <Btn1 primary>
        Done Here! <Icon name='chevron right' />
      </Btn1> */}
    </Modal1.Actions>
  </Modal1>
 
          </ModalBody>
      </div>
        </CardActions>      
      </Card1>
    </Col>

    <Col xs="6" sm="4"> 
     <Card1 className={classes.card} className="p-2 bd-highlight col-example">
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              F
            </Avatar>
          }
          title="Al-Maida Pizza Garden"
          subheader="june 30, 2019"
        />
        <CardMedia
          className={classes.media}
          image={IMG7}
          title="Al-Maida"
        />
        <CardContent>
          <Typography component="p">
          <strong>Address:</strong>{this.state.addressAlMaida}
          <br/>
          <strong>Hours:Open/Close:</strong>11Am-2Pm
          <br/>
          <strong>Contact:</strong>{this.state.contactAlMaida}
             </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
               
        <div>
  
         <Modal1 onClick={this.toggle5} trigger={<Btn1 style={{backgroundColor:'sandybrown' ,borderRadius:12}}>Order Here</Btn1>}>
  
    <Modal1.Header>Profile Picture</Modal1.Header>
    <Modal1.Content image scrolling>
      <Image size='medium' style={{borderRadius:12}} src={IMG7} wrapped />

         
          <ModalBody>
      <Modal1.Description>
        <Header>Al-Maida D-Ground Branch</Header>
        <p><em>Order From <u>Al-Maida</u> Faisalabd! Your Favorite one!</em></p>


        <Item1.Group>
    <Item1>
      <Item1.Image size='tiny' src={Deal1} />

      <Item1.Content>
        <Item1.Header as='a'>Deal1</Item1.Header>
        <Item1.Meta>4 Persons</Item1.Meta>
        <Item1.Description>
          {/* <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' /> */}
          <strong>Included</strong>{this.state.Deal1ContentAlMaida}

        {productList17}
        </Item1.Description>
        <Item1.Extra>Additional Details</Item1.Extra>
      </Item1.Content>
    </Item1>

    <Item1>
      <Item1.Image size='tiny' src={Deal2}/>

      <Item1.Content>
        <Item1.Header as='a'>Deal 2</Item1.Header>
        <Item1.Meta>2 Persons</Item1.Meta>
        <Item1.Description>
         
          <strong>Included</strong>{this.state.Deal2ContentAlMaida}

        {productList18}
     
        </Item1.Description>
        <Item1.Extra>Additional Details</Item1.Extra>
      </Item1.Content>
    </Item1>
  </Item1.Group >

  <Item1.Group>
    <Item1>
      <Item1.Image size='tiny' src={Deal3} />

      <Item1.Content>
        <Item1.Header as='a'>Deal3</Item1.Header>
        <Item1.Meta>4 Persons</Item1.Meta>
        <Item1.Description>
         
          <strong>Included</strong>{this.state.Deal3ContentAlMaida}

        {productList19}
        </Item1.Description>
        <Item1.Extra>Additional Details</Item1.Extra>
      </Item1.Content>
    </Item1>

    <Item1>
      <Item1.Image size='tiny' src={Deal4} />

      <Item1.Content>
        <Item1.Header as='a'>Deal 4</Item1.Header>
        <Item1.Meta>5 Persons</Item1.Meta>
        <Item1.Description>
         
          <strong>Included</strong>{this.state.Deal4ContentAlMaida}

        {productList20}
     
        </Item1.Description>
        <Item1.Extra>Additional Details</Item1.Extra>
      </Item1.Content>
    </Item1>
  </Item1.Group >


         </Modal1.Description>
          </ModalBody>
    </Modal1.Content>
    <Modal1.Actions>
      {/* <Btn1 primary>
        Done Here! <Icon name='chevron right' />
      </Btn1> */}
    </Modal1.Actions>

         
  </Modal1>
        
      </div>

        </CardActions>
      </Card1>
      </Col>
      <Col sm="4">
      <Card1 className={classes.card} className="p-2 bd-highlight col-example">
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              F
            </Avatar>
          }

          title="AL-Aziz Broast and Ice-bar"
          subheader="june 30, 2019"
        />
        <CardMedia
          className={classes.media}
          image={IMG5}
          title="AL-Aziz Broast and Ice-bar"
        />
        <CardContent>
          <Typography component="p">
          <strong>Address:</strong>Novality Pull samundri Road,Faisalabad
          <br/>
          <strong>Hours:Open/Close:</strong>24 Hrs
          <br/>
          <strong>Contact:</strong>Not Available
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
  
        <Modal1 onClick={this.toggle6} trigger={<Btn1 style={{backgroundColor:'sandybrown' ,borderRadius:12}}>Order Here</Btn1>}>
  
  <Modal1.Header>Profile Picture</Modal1.Header>
  <Modal1.Content image scrolling>
    <Image size='medium' style={{borderRadius:12}} src={IMG5} wrapped />

       
        <ModalBody>
    <Modal1.Description>
      <Header>Al-Aziz Samundri Road </Header>
      <p><em>Order From <u>Al-Aziz</u> Faisalabd! Your Favorite one!</em></p>


      <Item1.Group>
    <Item1>
      <Item1.Image size='tiny' src={Deal2} />

      <Item1.Content>
        <Item1.Header as='a'>Deal1</Item1.Header>
        <Item1.Meta>4 Persons</Item1.Meta>
        <Item1.Description>
        <strong>Included</strong>{this.state.Deal1ContentAlAziz}

        {productList21}
        </Item1.Description>
        <Item1.Extra>Additional Details</Item1.Extra>
      </Item1.Content>
    </Item1>

    <Item1>
      <Item1.Image size='tiny' src={Deal1} />

      <Item1.Content>
        <Item1.Header as='a'>Deal 2</Item1.Header>
        <Item1.Meta>2 Persons</Item1.Meta>
        <Item1.Description>
         
          <strong>Included</strong>{this.state.Deal2ContentAlAziz}

        {productList22}
     
        </Item1.Description>
        <Item1.Extra>Additional Details</Item1.Extra>
      </Item1.Content>
    </Item1>
  </Item1.Group >

  <Item1.Group>
    <Item1>
      <Item1.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />

      <Item1.Content>
        <Item1.Header as='a'>Deal3</Item1.Header>
        <Item1.Meta>4 Persons</Item1.Meta>
        <Item1.Description>
         
          <strong>Included</strong>{this.state.Deal3ContentAlAziz}

        {productList23}
        </Item1.Description>
        <Item1.Extra>Additional Details</Item1.Extra>
      </Item1.Content>
    </Item1>

    <Item1>
      <Item1.Image size='tiny' src={Deal3} />

      <Item1.Content>
        <Item1.Header as='a'>Deal 4</Item1.Header>
        <Item1.Meta>5 Persons</Item1.Meta>
        <Item1.Description>
         
          <strong>Included</strong>{this.state.Deal4ContentAlAziz}

        {productList24}
     
        </Item1.Description>
        <Item1.Extra>Additional Details</Item1.Extra>
      </Item1.Content>
    </Item1>
  </Item1.Group >

       </Modal1.Description>
        </ModalBody>
  </Modal1.Content>
  <Modal1.Actions>
    {/* <Btn1 primary>
      Done Here! <Icon name='chevron right' />
    </Btn1> */}
  </Modal1.Actions>

       
</Modal1>
      
    {/* </div> */}
    </CardActions>
      </Card1>

      </Col>
      </Row>
      <br/>
      <br/>
     <Row>
     <Col xs="6" sm="4">
      <Card1 className={classes.card} className="p-2 bd-highlight col-example">
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              F
            </Avatar>
          }
          title="Baba Tikka"
          subheader="june 30, 2019"
        />
        <CardMedia
          className={classes.media}
          image={IMG6}
          title="BABA Tikka"
        />
        <CardContent>
          <Typography component="p">
          <strong>Address:</strong>{this.state.addressBabaTikka}
          <br/>
          <strong>Hours:Open/Close:</strong>11Am-2Pm
          <br/>
          <strong>Contact:</strong>{this.state.contactBabaTikka}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
        <div>
        <Button color="danger" style={{backgroundColor:'sandybrown',padding:4 }} onClick={this.toggle7}>Order Here</Button>
        <Modal isOpen={this.state.expanded7} toggle={this.toggle7} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
            <b><em>Order from BABA-TIKKA Faisalbad!</em></b><br />
         
         {/* BABA Tikaa model deals */}
         <Item1.Group>
    <Item1>
      <Item1.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />

      <Item1.Content>
        <Item1.Header as='a'>Deal1</Item1.Header>
        <Item1.Meta>4 Persons</Item1.Meta>
        <Item1.Description>
          {/* <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' /> */}
          <strong>Included</strong>{this.state.Deal1ContentAlAziz}

        {productList25}
        </Item1.Description>
        <Item1.Extra>Additional Details</Item1.Extra>
      </Item1.Content>
    </Item1>

    <Item1>
      <Item1.Image size='tiny' src={Deal3} />

      <Item1.Content>
        <Item1.Header as='a'>Deal 2</Item1.Header>
        <Item1.Meta>2 Persons</Item1.Meta>
        <Item1.Description>
         
          <strong>Included</strong>{this.state.Deal2ContentAlAziz}

        {productList26}
     
        </Item1.Description>
        <Item1.Extra>Additional Details</Item1.Extra>
      </Item1.Content>
    </Item1>
  </Item1.Group >

  <Item1.Group>
    <Item1>
      <Item1.Image size='tiny' src={Deal2} />

      <Item1.Content>
        <Item1.Header as='a'>Deal3</Item1.Header>
        <Item1.Meta>4 Persons</Item1.Meta>
        <Item1.Description>
         
          <strong>Included</strong>{this.state.Deal3ContentAlAziz}

        {productList27}
        </Item1.Description>
        <Item1.Extra>Additional Details</Item1.Extra>
      </Item1.Content>
    </Item1>

    <Item1>
      <Item1.Image size='tiny' src={Deal1}/>

      <Item1.Content>
        <Item1.Header as='a'>Deal 4</Item1.Header>
        <Item1.Meta>5 Persons</Item1.Meta>
        <Item1.Description>
         
          <strong>Included</strong>{this.state.Deal4ContentAlAziz}

        {productList28}
     
        </Item1.Description>
        <Item1.Extra>Additional Details</Item1.Extra>
      </Item1.Content>
    </Item1>
  </Item1.Group >


          
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle7}>Done Here</Button>{' '}
            <Button color="secondary" onClick={this.toggle7}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>

      <div className="rating">
<span className="RatingClr">☆</span><span>☆</span><span>☆</span><span>☆</span>
</div>
        </CardActions>
      </Card1>
      </Col>
      <Col xs="6" sm="4">
      <Card1 className={classes.card} className="p-2 bd-highlight col-example">
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              F
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title="Macdonald"
          subheader="june 30, 2019"
        />
        <CardMedia
          className={classes.media}
          image={IMG8}
          title="Macdonald"
        />
        <CardContent>
          <Typography component="p">
          <strong>Address:</strong>{this.state.addressMacdonald}
                    <br/>
          <strong>Hours:Open/Close:</strong>11Am-2Pm
          <br/>
          <strong>Contact:</strong>{this.state.contactMacdonald}
         </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
        <div>
        <Button color="danger" style={{backgroundColor:'sandybrown',padding:5 }} onClick={this.toggle8} >Order Here</Button>
        <Modal isOpen={this.state.expanded8} toggle={this.toggle8} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
            <b><em>Order from Macdonalds Faisalbad!</em></b><br />
      {/* ////////////Macdonald Model Deals */}
     
      <Item1.Group>
    <Item1>
      <Item1.Image size='tiny' src={Deal3} />

      <Item1.Content>
        <Item1.Header as='a'>Deal1</Item1.Header>
        <Item1.Meta>4 Persons</Item1.Meta>
        <Item1.Description>
          {/* <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' /> */}
          <strong>Included</strong>{this.state.Deal1ContentBurgurKing}

        {productList29}
        </Item1.Description>
        <Item1.Extra>Additional Details</Item1.Extra>
      </Item1.Content>
    </Item1>

    <Item1>
      <Item1.Image size='tiny' src={Deal4} />

      <Item1.Content>
        <Item1.Header as='a'>Deal 2</Item1.Header>
        <Item1.Meta>2 Persons</Item1.Meta>
        <Item1.Description>
         
          <strong>Included</strong>{this.state.Deal2ContentBurgurKing}

        {productList30}
     
        </Item1.Description>
        <Item1.Extra>Additional Details</Item1.Extra>
      </Item1.Content>
    </Item1>
  </Item1.Group >

  <Item1.Group>
    <Item1>
      <Item1.Image size='tiny' src={Deal2} />

      <Item1.Content>
        <Item1.Header as='a'>Deal3</Item1.Header>
        <Item1.Meta>4 Persons</Item1.Meta>
        <Item1.Description>
         
          <strong>Included</strong>{this.state.Deal3Content}

        {productList31}
        </Item1.Description>
        <Item1.Extra>Additional Details</Item1.Extra>
      </Item1.Content>
    </Item1>

    <Item1>
      <Item1.Image size='tiny' src={Deal1} />

      <Item1.Content>
        <Item1.Header as='a'>Deal 4</Item1.Header>
        <Item1.Meta>5 Persons</Item1.Meta>
        <Item1.Description>
         
          <strong>Included</strong>{this.state.Deal4Content}

        {productList32}
     
        </Item1.Description>
        <Item1.Extra>Additional Details</Item1.Extra>
      </Item1.Content>
    </Item1>
  </Item1.Group >


       
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle8}>Done Here</Button>{' '}
            <Button color="secondary" onClick={this.toggle8}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
      <div class="rating">
<span className="RatingClr">☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
{/* <span> <Rating icon='star' defaultRating={3} maxRating={4} /></span> */}
</div>
         </CardActions>
      </Card1>
    </Col>
      </Row>
      
      </Container>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    
    products2a: state.products2a,
    products2b: state.products2b,
    products2c: state.products2c,
    products2d: state.products2d,
    
    products3a: state.products3a,
    products3b: state.products3b,
    products3c: state.products3c,
    products3d: state.products3d,
    
    products4a: state.products4a,
    products4b: state.products4b,
    products4c: state.products4c,
    products4d: state.products4d,
    
    products1a: state.products1a,
    products1b: state.products1b,
    products1c: state.products1c,
    products1d: state.products1d,
    
    products5a: state.products5a,
    products5b: state.products5b,
    products5c: state.products5c,
    products5d: state.products5d,
    
    products6a: state.products6a,
    products6b: state.products6b,
    products6c: state.products6c,
    products6d: state.products6d,
    
    products7a: state.products7a,
    products7b: state.products7b,
    products7c: state.products7c,
    products7d: state.products7d,
    
    products8a: state.products8a,
    products8b: state.products8b,
    products8c: state.products8c,
    products8d: state.products8d,
    number:state.count2

    };
}

function mapDispatchToProps(dispatch) {
  return {
      addToCart: item => dispatch(addToCart(item)),
    }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default compose(connect(mapStateToProps,mapDispatchToProps),
 withStyles(styles))(RecipeReviewCard);
