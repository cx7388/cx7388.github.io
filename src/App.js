import React, { Component } from 'react';
import ScrollToTop from 'react-scroll-up';
import { Breadcrumb, BreadcrumbItem, Modal, ModalBody, ListGroup, ListGroupItem, Col } from 'reactstrap';
import intl from 'react-intl-universal';
import Cookies from 'js-cookie';
import cv from './image/cv_Page_1.png';
import up from './image/up-button.svg'
import './App.css';
import Homepage from './Homepage';
import Header from './Header';

const locales = {
  "en-US": require('./locales/en-US.json'),
  "zh-CN": require('./locales/zh-CN.json'),
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchPage: 'Home',
      modal: false,
      initDone: false,
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

  loadLocales() {
    // init method will load CLDR locale data according to currentLocale
    // react-intl-universal is singleton, so you should init it only once in your app
    if (!Cookies.get("lang")) {
      intl.init({
        currentLocale: 'en-US', // TODO: determine locale here
        locales,
      })
        .then(() => {
          Cookies.set("lang", 'en-US');
          // After loading CLDR locale data, start to render
          this.setState({ initDone: true });
        });
    }
    else {
      intl.init({
        currentLocale: Cookies.get("lang"), // TODO: determine locale here
        locales,
      })
        .then(() => {
          // After loading CLDR locale data, start to render
          this.setState({ initDone: true });
        });
    }
  }

  componentDidMount() {
    this.loadLocales();
  }

  render() {
    return (
      this.state.initDone &&
        <div className="App">
          <Header />
          <div>
            <Breadcrumb>
              <BreadcrumbItem><a href='#' className="RefHome" onClick={() => { this.changeHomepage('Home') }}>{intl.get('HOME')}</a></BreadcrumbItem>
              <BreadcrumbItem><a href='#' className="RefHome" onClick={this.toggle}>{intl.get('CV')}</a></BreadcrumbItem>
              {/* <BreadcrumbItem><a href='#' onClick={() => { this.changeHomepage('Publication') }}>Publication</a></BreadcrumbItem> */}
              <BreadcrumbItem><a href='#' className="RefHome" onClick={() => { this.changeHomepage('Works') }}>{intl.get('WORKS')}</a></BreadcrumbItem>
              <BreadcrumbItem><a href='#' className="RefHome" onClick={() => { this.changeHomepage('Whatsmore') }}>{intl.get('WHATSMORE')}</a></BreadcrumbItem>
            </Breadcrumb>
            <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalBody>
                <ListGroup>
                  <ListGroupItem>
                    <Col sm="12" >
                      <img width="100%" src={cv} alt="cv" />
                    </Col>
                  </ListGroupItem>
                </ListGroup>
              </ModalBody>
            </Modal>
          </div>
          <Homepage command={this.state.switchPage} />
          <ScrollToTop showUnder={160}>
            <img style={{ width: "6vh" }} src={up} alt="up" />
          </ScrollToTop>
        </div>
    );
  }
}

export default App;
