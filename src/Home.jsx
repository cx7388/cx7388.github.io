import React, { Component } from 'react';
import intl from 'react-intl-universal';
import './App.css';
import kuleuven from './image/kuleuven.svg';
import swjtu from './image/swjtu.jpg';
import vub from './image/vub.svg';
import { Row, Col } from 'reactstrap';

const headStyle = {
  textAlign: 'left'
};
const textStyle = {
  textAlign: 'justify'
}

class Home extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="5">
            <h3 style={headStyle}>{intl.get('BACKGROUND')}</h3>
            <p style={textStyle}>{intl.get('BACKGROUND_TEXT')}</p>
            <h3 style={headStyle}>{intl.get('EDUCATION')}</h3>
            <h4 style={headStyle}>{intl.get('PHD')}</h4>
            <img style={{ height: '10vh', float: 'left', marginRight: '1vw' }} src={vub} alt="vub" />
            <p style={textStyle}>{intl.get('PHD_TEXT')}</p>
          </Col>
          <Col xs="1" style={{ height: intl.get('HOME_HEIGHT'), borderRight: '1px groove grey' }}></Col>
          <Col xs="1"></Col>
          <Col sm="5" >
            <h4 style={headStyle}>{intl.get('MASTER')}</h4>
            <img style={{ height: '5vh', float: 'left', marginRight: '1vw' }} src={kuleuven} alt="kuleuven" />
            <p style={textStyle}>{intl.get('MASTER_TEXT')}</p>
            <h4 style={headStyle}>{intl.get('BACHELOR')}</h4>
            <img style={{ height: '5vh', float: 'left', marginRight: '1vw' }} src={kuleuven} alt="kuleuven" />
            <p style={textStyle}>{intl.get('BACHELOR_KULEUVEN_TEXT')}</p>
            <div>&nbsp;</div>
            <img style={{ height: '10vh', float: 'left', marginRight: '1vw' }} src={swjtu} alt="swjtu" />
            <p style={textStyle}>{intl.get('BACHELOR_SWJTU_TEXT')}</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;