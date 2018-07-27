import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import Home from './Home';
import Works from './Works';

class Homepage extends Component {
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
  render() {
    if (this.props.command === 'Home') {
      return (
        <div>
          <Container>
            <Home/>
          </Container>
        </div>
      );
    }
    if (this.props.command === 'Works')
      return (
        <div>
          <Works/>
        </div>
      );
    return (
      <div>
        This is {this.props.command}
      </div>
    );
  }
}
export default Homepage;