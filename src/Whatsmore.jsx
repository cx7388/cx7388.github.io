import React, { Component } from 'react';
import intl from 'react-intl-universal';
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
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      }
    };
    const optsgala = {
      height: '390',
      width: '100%',
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
            <h1 className="display-3">{intl.get('MUSIC')}!</h1>
            <p className="lead">{intl.get('MUSIC_INTRO')}</p>
            <hr className="my-2" />
            <p>{intl.get('MUSIC_TEXT')}</p>
            <div className="lead">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    style = {{cursor: "pointer"}}
                    onClick={() => { this.toggle('1'); this.setVideoId('tm_uJaZkirc'); }}
                  >
                    {intl.get("MUSIC_JOZEF")}
            </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    style = {{cursor: "pointer"}}
                    onClick={() => { this.toggle('2'); this.setVideoId('zCg7Ynz6Tb4') }}
                  >
                    {intl.get('MUSIC_TOKYO')}
            </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '3' })}
                    style = {{cursor: "pointer"}}
                    onClick={() => { this.toggle('3'); this.setVideoId('FMUQgNWj_Os') }}
                  >
                    {intl.get('MUSIC_GALA')}
            </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '4' })}
                    style = {{cursor: "pointer"}}
                    onClick={() => { this.toggle('4'); }}
                  >
                    {intl.get('MUSIC_SOUNDCLOUD')}
            </NavLink>
                </NavItem>
              </Nav>
            </div>
            <Container style={{marginTop:'5vh'}}>
              <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                  {this.state.activeTab === "4" ?
                    <div>
                      <div style={{ marginTop: "1vh" }}>
                        <SoundCloudPlayer
                          url='https://soundcloud.com/he-huang-513802433/return'
                          playing={false}
                          controls={false}
                          height='18vh'
                          width='100%'
                        />
                      </div>
                      <div style={{ marginTop: "5vh" }}>
                        <SoundCloudPlayer
                          url='https://soundcloud.com/he-huang-513802433/journey'
                          playing={false}
                          controls={true}
                          height='18vh'
                          width='100%'
                        />
                      </div>
                      <div style={{ marginTop: "5vh" }}>
                        <SoundCloudPlayer
                          url='https://soundcloud.com/he-huang-513802433/lost-in-the-sea-1'
                          playing={false}
                          controls={true}
                          height='18vh'
                          width='100%'
                        />
                      </div>
                      <div style={{ marginTop: "5vh" }}>
                        <SoundCloudPlayer
                          url='https://soundcloud.com/he-huang-513802433/miss'
                          playing={false}
                          controls={true}
                          height='18vh'
                          width='100%' 
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