import React, { Component } from 'react';
import './App.css';
import {
  Col, Row, Container 
} from 'reactstrap';
import logo from './image/dragon.jpg';
import gmail from './image/gmail.svg';
import linkedin from './image/linkedin.svg';
import github from './image/github.svg';
import facebook from './image/facebook.svg';
import twitter from './image/twitter.svg'

class Header extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       gmailFadeIn: false,
//       githubFadeIn:false,
//       linkedinFadeIn:false, 
//     };
//     this.toggle = this.toggle.bind(this);
// }

  render() {
    return (
      <div>
        <header className="App-header">
          <Row style={{height:"3vh"}}>
            </Row>
          <Row>
            <Col xs="9">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to River Huang's Homepage</h1>
            </Col>
            <Col xs="3" style={{ marginTop:"5.5vh"}}>
              <Row style={{ marginBottom:"1vh",float:"right",}}>
              <Container>
              <Col xs="12">
              <a className = "Ref" href="mailto:cx7388@gmail.com">
                  cx7388@gmail.com
                </a>
                <a className = "Ref" href="mailto:cx7388@gmail.com">
              <img style={{marginLeft:"1vh"}} src={gmail} className="Header-img" alt="gmail"/>
              </a>
              </Col>
              </Container>
              </Row>
              <Row style={{float:"right"}}>
              <Container>
              <Col xs="12">
              <a style={{marginLeft:"1vh"}} href="https://github.com/cx7388" target="_blank" rel="noopener noreferrer">
              <img style={{marginLeft:"1vh"}} src={github} className="Header-img" alt="github"/>
              </a>
              <a style={{marginLeft:"1vh"}} href="https://www.linkedin.com/in/he-huang-85b28511b/"target="_blank" rel="noopener noreferrer">
              <img style={{marginLeft:"1vh"}} src={linkedin} className="Header-img" alt="linkedin"/>
              </a>
              <a style={{marginLeft:"1vh"}} href="https://www.facebook.com/he.huang.3382"target="_blank" rel="noopener noreferrer">
              <img style={{marginLeft:"1vh"}} src={facebook} className="Header-img" alt="facebook"/>
              </a>
              <a style={{marginLeft:"1vh"}} href="https://twitter.com/HeHuang5"target="_blank" rel="noopener noreferrer">
              <img style={{marginLeft:"1vh"}} src={twitter} className="Header-img" alt="twitter"/>
              </a>
              </Col>
              </Container>
              </Row>
            </Col>
          </Row>
        </header>
      </div>
    );
  }
}

export default Header;