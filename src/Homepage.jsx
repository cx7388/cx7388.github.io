import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import kuleuven from './image/kuleuven.svg';
import swjtu from './image/swjtu.jpg';
import { Document, Page } from 'react-pdf'
import cv from './files/cv.pdf'

const headStyle = {
  textAlign: 'left'
};
const textStyle = {
  textAlign: 'justify'
}

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Row>
          <Col xs="5">
            <h3 style={headStyle}>Background</h3>
            <p style={textStyle}>My name is He Huang, I'd rather call myself River Huang, I was born in Chengdu, China.
            Now I am a master student at KU Leuven. My specialization is in programming, data visualization, and data analysis.
            I can skilled use different programming language, C, C++, Java, JavaScript, PHP, Python, MATLAB, Arduino etc.
            And I am familiar with the HCI concept, in the application layout design, I always tried to find the best way of visualization.
            </p>
            <h3 style={headStyle}>Education</h3>
            <h4 style={headStyle}>Master</h4>
            <img style={{ height: '5vh', float: 'left', marginRight: '1vw' }} src={kuleuven} alt="kuleuven" />
            <p style={textStyle}>My major of master is Electronics and ICT Engineering Technology (Option: Internet Computing).
            During the master study, I majored in different web development stack and design concepts.
            My master thesis is data visualization for the older adult.
            Thanks to the study and the master thesis, I grew a great interest in data visualization and data analysis.
            </p>
          </Col>
          <Col xs="1" style={{ height: '70vh', borderRight: '1px groove grey' }}></Col>
          <Col xs="1"></Col>
          <Col sm="5" >
            <h4 style={headStyle}>Bachelor</h4>
            <img style={{ height: '5vh', float: 'left', marginRight: '1vw' }} src={kuleuven} alt="kuleuven" />
            <p style={textStyle}>
              When I was an bachelor Electronics Engineering student at KU Leuven, I started to get involved in various computer technologies and programming techniques.
              I gradually liked programming, and its logic made me feel happy.
              Studying at KU Leuven is hard but with pleasure.
              I still think that I changed my major and went to Leuven is the most important decision in my life.
            </p>
            <div>&nbsp;</div>
            <img style={{ height: '10vh', float: 'left', marginRight: '1vw' }} src={swjtu} alt="swjtu" />
            <p style={textStyle}>
              Southwest Jiaotong University is where the dream starts. I studied vehicle engineering at Southwest Jiaotong University and achieved good results.
              I have won two scholarships and ranked the top ten among more than 200 students. But I gradually felt that the things I learned in vehicle engineering were too rigid.
              I want more flexible and cutting-edge knowledge. At that time, I learned that SWJTU had a 2+2 project with KU Leuven, so I signed up and passed the test to KU Leuven.
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1,
    }
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
  render() {
    const { pageNumber, numPages } = this.state;
    const height = 30;
    if (this.props.command == 'Home') {
      return (
        <div>
          <Container>
            <Home />
          </Container>
        </div>
      );
    }
    if (this.props.command == 'CV') {
      return (
        <div>
          <Container>
            <Row>
              <Col sm="12" md={{ size: 8, offset: 3 }}>
                <Document
                  file={cv}
                  onLoadSuccess={this.onDocumentLoadSuccess}
                >
                  <Page width = "430" pageNumber={pageNumber} />
                </Document>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
    return (
      <div>
        This is {this.props.command}
      </div>
    );
  }
}
export default Homepage;