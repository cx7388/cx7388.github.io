import React, { Component } from 'react';
import logo from './image/dragon.jpg';
import './App.css';
import { Breadcrumb, BreadcrumbItem} from 'reactstrap';
import Homepage from './Homepage';
// import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      switchPage : 'Home',
    };
    this.changeHomepage = this.changeHomepage.bind(this);
  }
  changeHomepage(e) {
    this.setState({switchPage:e});
  }
  // componentDidMount(){
  //     this.changeHomepage(this.state.switchPage);
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to River Huang's Homepage</h1>
        </header>
        <div>
      <Breadcrumb>
        <BreadcrumbItem><a href='#' onClick={()=>{this.changeHomepage('Home')}}>Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href='#' onClick={()=>{this.changeHomepage('CV')}}>CV</a></BreadcrumbItem>
        <BreadcrumbItem><a href='#' onClick={()=>{this.changeHomepage('Publication')}}>Publication</a></BreadcrumbItem>
        <BreadcrumbItem><a href='#' onClick={()=>{this.changeHomepage('Works')}}>Works</a></BreadcrumbItem>
        <BreadcrumbItem><a href='#' onClick={()=>{this.changeHomepage('Contact')}}>Contact</a></BreadcrumbItem>
        <BreadcrumbItem><a href='#' onClick={()=>{this.changeHomepage('Whatsmore')}}>What's more</a></BreadcrumbItem>
      </Breadcrumb>
    </div>
    <Homepage command={this.state.switchPage}/>
      </div>
    );
  }
}

export default App;
