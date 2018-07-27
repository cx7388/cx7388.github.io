import React, { Component } from 'react';
import './App.css';
import { Jumbotron, Container, Col, Row, Nav, NavItem, NavLink } from 'reactstrap';
import YouTube from 'react-youtube';
import SoundCloudPlayer from 'react-player/lib/players/SoundCloud'
import classnames from 'classnames';

class Whatsmore extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      videoId: 'tm_uJaZkirc',
    };
  };

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  setVideoId(id) {
    this.setState({
      videoId: id,
    })
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      }
    };
    const optsgala = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        start: 0,
        end: 236,
      }
    };
    return (
      <div>
        <Container>
          <Jumbotron>
            <h1 className="display-3">Music!</h1>
            <p className="lead">Yes, I love music! I play bass, I enjoy the power of bass. And I also play guitar and computer music.</p>
            <hr className="my-2" />
            <p>I used to lead a band when I was a student, and we played in front of people. I also made some computer music. Let's check it!</p>
            <p className="lead">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); this.setVideoId('tm_uJaZkirc'); }}
                  >
                    Jozef II Straat Festival
            </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); this.setVideoId('zCg7Ynz6Tb4') }}
                  >
                    Tokyo Ghoul Bass Cover
            </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '3' })}
                    onClick={() => { this.toggle('3'); this.setVideoId('FMUQgNWj_Os') }}
                  >
                    2017 Spring Gala of Leuven
            </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '4' })}
                    onClick={() => { this.toggle('4'); }}
                  >
                    SoundCloud Music
            </NavLink>
                </NavItem>
              </Nav>
            </p>
            <Container>
              <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                  {this.state.activeTab === "4" ?
                    <div>
                      <div style={{ marginTop: "1vh" }}>
                        <SoundCloudPlayer
                          url='https://soundcloud.com/he-huang-513802433/return'
                          playing={false}
                          controls={true}
                          height='18vh'
                        />
                      </div>
                      <div style={{ marginTop: "5vh" }}>
                        <SoundCloudPlayer
                          url='https://soundcloud.com/he-huang-513802433/journey'
                          playing={false}
                          controls={true}
                          height='18vh'
                        />
                      </div>
                      <div style={{ marginTop: "5vh" }}>
                        <SoundCloudPlayer
                          url='https://soundcloud.com/he-huang-513802433/lost-in-the-sea-1'
                          playing={false}
                          controls={true}
                          height='18vh'
                        />
                      </div>
                      <div style={{ marginTop: "5vh" }}>
                        <SoundCloudPlayer
                          url='https://soundcloud.com/he-huang-513802433/miss'
                          playing={false}
                          controls={true}
                          height='18vh'
                        />
                      </div>
                    </div> :
                    <YouTube
                      videoId={this.state.videoId}
                      opts={this.state.activeTab === "3" ? optsgala : opts}
                      onReady={this._onReady} />}
                </Col>
              </Row>
            </Container>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

export default Whatsmore;