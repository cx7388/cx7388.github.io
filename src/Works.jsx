import React, { Component } from 'react';
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
            <Button href={this.props.url} target="_blank">Learn more</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
var mamca = {
  img: mamcaimg,
  title: "Mamca web app developing",
  subtitle: "At VUB",
  text: "Multi-Actor Multi-Criteria Analysis (MAMCA) is a decision-making model developed by prof. dr. Cathy Macharis. " +
    "During the development, I improved the compatibility of the web app so that it could run on various browsers. I improved the display of the page and added some new features.",
  url: "https://www.mamca.be/staitc/"
}

var thesis = {
  img: thesisimg,
  title: "Master thesis",
  subtitle: "At KU Leuven",
  text: "My master thesis is called \"Motivitional Design for Self-assessment and Tele-monitoring in Older Adults\", " +
    "it foucus on the visualization data for the older adults. The old adults could get know their health data through the self-assessment "
    + "and view the health  data from the smart band. The smart band sensor data is sent to Google fit, and API is used to get the data from Google fit",
  url: "https://self-assessment-tool.herokuapp.com/"
}

var webapp = {
  img: webappimg,
  title: "Web application development",
  subtitle: "At KU Leuven",
  text: "This web application is designed for the older adults and caregivers at carehouse of Leuven \"Edourad Remy\". " +
    "Older adults can use it to anwser questionnaires and view the result of questionaires. And caregivers can view the overall results of all the older adults. "
    + "Also they can view the result on specific older adult. They can assign rooms for older adults and took notes. ",
  url: "http://a17-webapps09.studev.groept.be/a17_webapps09/"
}

var pathfinding = {
  img: pathfindingimg,
  title: "C++ Programming: Pathfinding game",
  subtitle: "At KU Leuven",
  text: "A pathfinding game with GUI is designed using C++. There is one hero that should kill all the monsters in the map. " +
    "The hero can be controlled by using direction key or command line. "
    + "It can also find the path automated because of the built-in algorithm  ",
  url: "https://github.com/cx7388/PathfindingGame"
}

var flexiblepcb = {
  img: flexiblepcbimg,
  title: "Posture monitor development based om flexible PCB",
  subtitle: "At KU Leuven",
  text: "A flexible PCB was designed to detect the posture of people. The sensors on the PCB could detect the angle of the back. " +
    "The data will be calculated throught the MCU and send to the mobile phone through the Bluetooth. ",
  url: "https://res.cloudinary.com/ddwpezn3f/image/upload/v1532687021/Homepage/flexiblepcb.pdf"
}
class Works extends Component {
  render() {
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