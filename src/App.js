import React, { Component } from 'react';
import logo from './image/dragon.jpg';
import './App.css';
import { Breadcrumb, BreadcrumbItem, Modal, ModalBody, Col, ListGroup, ListGroupItem } from 'reactstrap';
import Homepage from './Homepage';
import { Document, Page } from 'react-pdf'
import cv from './files/cv.pdf'

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
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    const { pageNumber } = this.state;
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
              <Col  sm="12" md={{ size: 8, offset: 1 }}>

              <Document
                file={cv}
                onLoadSuccess={this.onDocumentLoadSuccess}
              >
                <Page width={565} pageNumber={pageNumber} />
              </Document>

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
