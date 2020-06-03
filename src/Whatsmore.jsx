import React, { Component } from 'react';
import intl from 'react-intl-universal';
import './App.css';
import {
  Jumbotron, Container, Col, Row, Nav, NavItem, NavLink, Button, ButtonGroup,
  Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption
} from 'reactstrap';
import YouTube from 'react-youtube';
import SoundCloudPlayer from 'react-player/lib/players/SoundCloud'
import classnames from 'classnames';

class MusicPart extends Component {
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
        start: 1,
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
                    style={{ cursor: "pointer" }}
                    onClick={() => { this.toggle('1'); this.setVideoId('tm_uJaZkirc'); }}
                  >
                    {intl.get("MUSIC_JOZEF")}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    style={{ cursor: "pointer" }}
                    onClick={() => { this.toggle('2'); this.setVideoId('zCg7Ynz6Tb4') }}
                  >
                    {intl.get('MUSIC_TOKYO')}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '3' })}
                    style={{ cursor: "pointer" }}
                    onClick={() => { this.toggle('3'); this.setVideoId('FMUQgNWj_Os') }}
                  >
                    {intl.get('MUSIC_GALA')}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '4' })}
                    style={{ cursor: "pointer" }}
                    onClick={() => { this.toggle('4'); }}
                  >
                    {intl.get('MUSIC_SOUNDCLOUD')}
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <Container style={{ marginTop: '5vh' }}>
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

class PhotographyPart extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.items = [];
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 9 - 1 ? 0 : this.state.activeIndex + 1; //the three is the number of the items
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? 9 - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const items = [
      {
        src: 'http://res.cloudinary.com/ddwpezn3f/image/upload/v1532805790/Homepage/Photography/Anterwep.jpg',
        altText: 'Antwerp',
        captionHeader: intl.get('PHOTO_ANTWERP_HEADER'),
        captionText: intl.get('PHOTO_ANTWERP'),
      },
      {
        src: 'http://res.cloudinary.com/ddwpezn3f/image/upload/v1532805799/Homepage/Photography/South_France_2.jpg',
        altText: 'SouthFranceGirl',
        captionHeader: intl.get('PHOTO_SOUTHFRANCE_GIRL_HEADER'),
        captionText: intl.get('PHOTO_SOUTHFRANCE'),
      },
      {
        src: 'https://res.cloudinary.com/ddwpezn3f/image/upload/v1591200378/Homepage/Photography/Sunset.jpg',
        altText: 'Sunset',
        captionHeader: intl.get('PHOTO_SUNSET_HEADER'),
        captionText: intl.get('PHOTO_BRUSSELS'),
      },
      {
        src: 'https://res.cloudinary.com/ddwpezn3f/image/upload/v1591200374/Homepage/Photography/Bright_Brussels.jpg',
        altText: 'Bright Brussels',
        captionHeader: intl.get('PHOTO_BRIGHTBRUSSELS_HEADER'),
        captionText: intl.get('PHOTO_BRUSSELS'),
      },
      {
        src: 'http://res.cloudinary.com/ddwpezn3f/image/upload/v1532805797/Homepage/Photography/South_France_3.jpg',
        altText: 'SouthFranceBridge',
        captionHeader: intl.get('PHOTO_SOUTHFRANCE_BRIDGE_HEADER'),
        captionText: intl.get('PHOTO_SOUTHFRANCE'),
      },
      {
        src: 'http://res.cloudinary.com/ddwpezn3f/image/upload/v1532805800/Homepage/Photography/South_France.jpg',
        altText: 'SouthFranceLavender',
        captionHeader: intl.get('PHOTO_SOUTHFRANCE_LAVENDER_HEADER'),
        captionText: intl.get('PHOTO_SOUTHFRANCE'),
      },
      {
        src: 'http://res.cloudinary.com/ddwpezn3f/image/upload/v1532805788/Homepage/Photography/Prague.jpg',
        altText: 'PragueMan',
        captionHeader: intl.get('PHOTO_PRAGUE_MAN_HEADER'),
        captionText: intl.get('PHOTO_PRAGUE'),
      },
      {
        src: 'http://res.cloudinary.com/ddwpezn3f/image/upload/v1532805790/Homepage/Photography/Prague_2.jpg',
        altText: 'PragueOldYoung',
        captionHeader: intl.get('PHOTO_PRAGUE_OLDYOUNG_HEADER'),
        captionText: intl.get('PHOTO_PRAGUE'),
      },
      {
        src: 'http://res.cloudinary.com/ddwpezn3f/image/upload/v1532805796/Homepage/Photography/Amsterdam.jpg',
        altText: 'Amsterdam1',
        captionHeader: intl.get('PHOTO_AMSTERDAM'),
        // captionText: intl.get('PHOTO_AMSTERDAM'),
      },
      {
        src: 'http://res.cloudinary.com/ddwpezn3f/image/upload/v1532805798/Homepage/Photography/Amsterdam_2.jpg',
        altText: 'Amsterdam2',
        captionHeader: intl.get('PHOTO_AMSTERDAM'),
        // captionText: intl.get('PHOTO_SOUTHFRANCE'),
      },
      {
        src: 'http://res.cloudinary.com/ddwpezn3f/image/upload/v1532805791/Homepage/Photography/Malta.jpg',
        altText: 'MaltaPigeon',
        captionHeader: intl.get('PHOTO_MALTA_PIGEON_HEADER'),
        captionText: intl.get('PHOTO_MALTA'),
      },
      
    ];
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img style={{height:"auto",width:"100%"}}src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.captionText} captionHeader={item.captionHeader} />
        </CarouselItem>
      );
    });
    return (
      <div>
        <Container>
          <Jumbotron>
            <h1 className="display-3">{intl.get('PHOTOGRAPHY')}!</h1>
            <p className="lead">{intl.get('PHOTOGRAPHY_INTRO')}</p>
            <hr className="my-2" />
            <p>{intl.get('PHOTOGRAPHY_TEXT')}</p>
            <Carousel 
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
            >
              <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
              {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

class Whatsmore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jumbotron: 'MUSIC',
    };
  };
  render() {
    return (
      <div>
        <Container style={{ marginBottom: "2.5vh" }}>
          <Row style={{ margin: "auto", width: "50%" }}>
            <ButtonGroup style={{ margin: "auto", width: "50%" }}>
              <Button style={{ margin: "auto", width: "50%" }} outline color='dark' onClick={() => { this.setState({ jumbotron: 'MUSIC' }) }}>{intl.get('MUSIC')}</Button>
              <Button style={{ margin: "auto", width: "50%" }} outline color='dark' onClick={() => { this.setState({ jumbotron: 'PHOTOGRAPHY' }) }}>{intl.get('PHOTOGRAPHY')}</Button>
            </ButtonGroup>
          </Row>
        </Container>
        {this.state.jumbotron === "MUSIC" ? <MusicPart /> : <PhotographyPart />}

      </div>
    );
  }
}

export default Whatsmore;