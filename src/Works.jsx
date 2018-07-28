import React, { Component } from 'react';
import intl from 'react-intl-universal';
import './App.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
  Col, Row, Container
} from 'reactstrap';
import thesisimg from './image/thesis.png';
import mamcaimg from './image/mamca.jpg';
import webappimg from './image/webapp.png';
import pathfindingimg from './image/pathfinding.jpg';
import flexiblepcbimg from './image/flexiblepcb.jpg';



class WorkCard extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardImg top width="50%" src={this.props.img} alt={this.props.title} />
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <CardSubtitle>{this.props.subtitle}</CardSubtitle>
            <CardText>{this.props.text}</CardText>
            <Button outline color="dark" href={this.props.url} target="_blank">{intl.get('LEARNMORE')}</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

class Works extends Component {
  render() {
    var mamca = {
      img: mamcaimg,
      title: intl.get('MAMCA_TITLE'),
      subtitle: intl.get('AT_VUB'),
      text: intl.get('MAMCA_TEXT'),
      url: "https://www.mamca.be/staitc/"
    }
    
    var thesis = {
      img: thesisimg,
      title: intl.get('THESIS_TITLE'),
      subtitle: intl.get('AT_KULEUVEN'),
      text: intl.get('THESIS_TEXT'),
      url: "https://self-assessment-tool.herokuapp.com/"
    }
    
    var webapp = {
      img: webappimg,
      title: intl.get('WEBAPP_TITLE'),
      subtitle: intl.get('AT_KULEUVEN'),
      text: intl.get('WEBAPP_TEXT'),
      url: "http://a17-webapps09.studev.groept.be/a17_webapps09/"
    }
    
    var pathfinding = {
      img: pathfindingimg,
      title: intl.get('C++_TITLE'),
      subtitle: intl.get('AT_KULEUVEN'),
      text: intl.get('C++_TEXT'),
      url: "https://github.com/cx7388/PathfindingGame"
    }
    
    var flexiblepcb = {
      img: flexiblepcbimg,
      title: intl.get('PCB_TITLE'),
      subtitle: intl.get('AT_KULEUVEN'),
      text: intl.get('PCB_TEXT'),
      url: "https://res.cloudinary.com/ddwpezn3f/image/upload/v1532687021/Homepage/flexiblepcb.pdf"
    }
    return (
      <div>
        <Container>
          <Row style={{ marginTop:"3vh",marginBottom: "3vh" }}>
            <Col xs="1">
            </Col>
            <Col xs="4">
              <WorkCard img={mamca.img} title={mamca.title} subtitle={mamca.subtitle} text={mamca.text} url={mamca.url} />
            </Col>
            <Col xs="1">
            </Col>
            <Col xs="1">
            </Col>
            <Col xs="4">
              <WorkCard img={thesis.img} title={thesis.title} subtitle={thesis.subtitle} text={thesis.text} url={thesis.url} />
            </Col>
            <Col xs="1">
            </Col>
          </Row>
          <Row style={{ marginTop:"3vh",marginBottom: "3vh" }}>
            <Col xs="1">
            </Col>
            <Col xs="4">
              <WorkCard img={webapp.img} title={webapp.title} subtitle={webapp.subtitle} text={webapp.text} url={webapp.url} />
            </Col>
            <Col xs="1">
            </Col>
            <Col xs="1">
            </Col>
            <Col xs="4">
              <WorkCard img={pathfinding.img} title={pathfinding.title} subtitle={pathfinding.subtitle} text={pathfinding.text} url={pathfinding.url} />
            </Col>
            <Col xs="1">
            </Col>
          </Row>
          <Row style={{ marginTop:"3vh",marginBottom: "3vh" }}> 
            <Col xs="1">
            </Col>
            <Col xs="4">
              <WorkCard img={flexiblepcb.img} title={flexiblepcb.title} subtitle={flexiblepcb.subtitle} text={flexiblepcb.text} url={flexiblepcb.url} />
            </Col>
            <Col xs="1">
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Works;