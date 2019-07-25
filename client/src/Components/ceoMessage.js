import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import IMG from './MyPic/Picture.jpg'
import { Responsive, Segment } from 'semantic-ui-react'
const extra = (
  <a>
    <Icon name='user' />
    approach.aziz@gmail.com
  </a>
)

const CardExampleCardProps = () => (
  // <Segment.Group>
  //  <Responsive as={Segment}>
  <Card
    image={IMG}
    header='Abdul Aziz'
    meta='Full-Stack Developer'
    description="Full Stack Developer with High Skills in front end UI Creations "
    extra={extra}
  />
  // </Responsive>
  // </Segment.Group>
)

export default CardExampleCardProps


// // import React from "react";
// import React, { Component } from 'react';
// import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
// import Paper from './ceoMessagePaper'
// import Phone from './icons/icon.png'
// import Email from './icons/close-envelope.png'

// import '../index.css'
// import { Container, Row, Col } from 'reactstrap';
// class HoverPage extends React.Component {
//   render() {
//     return (
//   <Container>
//  <Row>
//           <Col xs="2" sm="12">
// <h2 className="message"><strong>CEO Message</strong></h2>
          
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <img
//               src={IMG}
//               className="img-fluid rounded-circle hoverable"
//               alt=""
//             />
//             <p className="CEOImageKeNeeche">Abdul Aziz || Web Master <p className="differP"><img src={Phone}/>+92 3041199989</p><p className="differP1"><img src={Email}/>approach.aziz@gmail.com</p></p>
//             </Col>
//            <Col>
//       <Paper/>
//       </Col>
//        </Row>
//       </Container>
//     );
//   }
// }

// export default HoverPage;