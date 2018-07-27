import React, { Component } from 'react';
import logo from './image/dragon.jpg';
import cv from './image/cv_Page_1.png';
import './App.css';
import { Breadcrumb, BreadcrumbItem, Modal, ModalBody, Col, ListGroup, ListGroupItem } from 'reactstrap';
import Homepage from './Homepage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchPage: 'Home',
      modal: false,
      numPages: null,
      pageNumber: 1,
    };
    this.changeHomepage = this.changeHomepage.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  changeHomepage(e) {
    this.setState({ switchPage: e });
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to River Huang's Homepage</h1>
        </header>
        <div>
          <Breadcrumb>
            <BreadcrumbItem><a href='#' onClick={() => { this.changeHomepage('Home') }}>Home</a></BreadcrumbItem>
            <BreadcrumbItem><a href='#' onClick={this.toggle}>CV</a></BreadcrumbItem>
            <BreadcrumbItem><a href='#' onClick={() => { this.changeHomepage('Publication') }}>Publication</a></BreadcrumbItem>
            <BreadcrumbItem><a href='#' onClick={() => { this.changeHomepage('Works') }}>Works</a></BreadcrumbItem>
            <BreadcrumbItem><a href='#' onClick={() => { this.changeHomepage('Contact') }}>Contact</a></BreadcrumbItem>
            <BreadcrumbItem><a href='#' onClick={() => { this.changeHomepage('Whatsmore') }}>What's more</a></BreadcrumbItem>
          </Breadcrumb>
          <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalBody>
            <ListGroup>
        <ListGroupItem>
              <Col sm="12" >
              <img width = "100%" src={cv} alt="cv"/>
              </Col>
              </ListGroupItem>
              </ListGroup>
            </ModalBody>
          </Modal>
        </div>
        <Homepage command={this.state.switchPage} />
      </div>
    );
  }
}

export default App;
