import React, { Component } from 'react';
import intl from 'react-intl-universal';
import './App.css';
import {
    ListGroup, Container, ListGroupItem, ListGroupItemHeading, ListGroupItemText 
} from 'reactstrap';

class Publications extends Component {
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
                    <ListGroup>
                        <ListGroupItem style={{marginTop:"3vh"}}>
                            <ListGroupItemHeading>
                                 <a href="https://res.cloudinary.com/ddwpezn3f/image/upload/v1591264996/Homepage/MAMCA_software.pdf" target="_blank" >
                                 {intl.get('PUBLICATION_ANALYZING_VEHICLE')}
                                 </a>
                            </ListGroupItemHeading>
                            <ListGroupItemText>
                            <b>Hadavi, S., Buldeo Rai, H., Verlinde, S., Huang, H., Macharis, C. & Guns, T.</b>
                            </ListGroupItemText>
                            <ListGroupItemText>
                            <a style={{color: "inherit"}} href="https://etrr.springeropen.com/articles/10.1186/s12544-020-00405-x" target="_blank" >
                            European Transport Research Review. 12, 1, p. 1-17 17 p.
                            </a>
                            </ListGroupItemText>
                            <ListGroupItemText style={{color: 'grey'}}>
                            Article
                            </ListGroupItemText>
                        </ListGroupItem>
                        <ListGroupItem>
                            <ListGroupItemHeading>
                            <a href="https://res.cloudinary.com/ddwpezn3f/image/upload/v1591264996/Homepage/Understanding_passenger_and_freight_vehicle_behavior_Published.pdf" target="_blank" >
                                {intl.get('PUBLICATION_NEW_MAMCA')}
                            </a>
                            </ListGroupItemHeading>
                            <ListGroupItemText>
                            <b>Huang, H., Lebeau, P. & Macharis, C.</b>
                            </ListGroupItemText>
                            <ListGroupItemText>
                            <a style={{color: "inherit"}} href="https://link.springer.com/chapter/10.1007/978-3-030-46224-6_4" target="_blank" >
                            Decision Support Systems X: Cognitive Decision Support Systems and Technologies. Springer, p. 43-56 14 p.
                            </a>
                            </ListGroupItemText>
                            <ListGroupItemText style={{color: 'grey'}}>
                            Conference paper
                            </ListGroupItemText>
                        </ListGroupItem>
                    </ListGroup>
                </Container>

            </div>
        );
    }
}

export default Publications;