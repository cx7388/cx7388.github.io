import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import Home from './Home';
import Works from './Works';
import Publications from './Publications';
import Whatsmore from './Whatsmore';

class Homepage extends Component {
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
  render() {
    if (this.props.command === 'Home') {
      return (
        <div>
          <Container>
            <Home />
          </Container>
        </div>
      );
    }
    if (this.props.command === 'Publications')
    return (
      <div>
        <Publications />
      </div>
    );
    if (this.props.command === 'Works')
      return (
        <div>
          <Works />
        </div>
      );
    // if (this.props.command === 'Whatsmore')
    //   return (
    //     <div>
    //       <Whatsmore />
    //     </div>
    //   );
  }
}
export default Homepage;