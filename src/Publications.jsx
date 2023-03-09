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
                        <ListGroupItem>
                            <ListGroupItemHeading>
                                <a href="https://onlinelibrary.wiley.com/share/author/TSZSYNCDG2RIMRR6ABVP?target=10.1002/mcda.1804" target="_blank" rel="noopener noreferrer">
                                    {intl.get('PUBLICATION_Criteria_Preprocessing')}
                                </a>
                            </ListGroupItemHeading>
                            <ListGroupItemText>
                                <b>Huang, H., Canoy, R., Brusselaers, N., te Boveldt, G.</b>
                            </ListGroupItemText>
                            <ListGroupItemText>
                                <a style={{ color: "inherit" }} href="https://onlinelibrary.wiley.com/doi/full/10.1002/mcda.1804" target="_blank" rel="noopener noreferrer">
                                    Journal of multi-criteria decision analysis.
                                </a>
                            </ListGroupItemText>
                            <ListGroupItemText style={{ color: 'grey' }}>
                                Journal paper
                            </ListGroupItemText>
                        </ListGroupItem>
                        <ListGroupItem>
                            <ListGroupItemHeading>
                                <a href="https://res.cloudinary.com/ddwpezn3f/image/upload/v1667561445/Homepage/A_GPS-based_approach_to_measure_the_environmental_impact.pdf" target="_blank" rel="noopener noreferrer">
                                    {intl.get('PUBLICATION_GPS_BASED')}
                                </a>
                            </ListGroupItemHeading>
                            <ListGroupItemText>
                                <b>Brusselaers, N., Huang, H., Macharis, C., & Mommens, K.</b>
                            </ListGroupItemText>
                            <ListGroupItemText>
                                <a style={{ color: "inherit" }} href="https://www.sciencedirect.com/science/article/pii/S0195925522002219" target="_blank" rel="noopener noreferrer">
                                    Environmental Impact Assessment Review, 98, 106955.
                                </a>
                            </ListGroupItemText>
                            <ListGroupItemText style={{ color: 'grey' }}>
                                Journal paper
                            </ListGroupItemText>
                        </ListGroupItem>
                        <ListGroupItem style={{ marginTop: "3vh" }}>
                            <ListGroupItemHeading>
                                <a href="https://res.cloudinary.com/ddwpezn3f/image/upload/v1622042392/Homepage/MAMCA_mass-participation.pdf" target="_blank" rel="noopener noreferrer">
                                    {intl.get('PUBLICATION_MAMCA_MASS')}
                                </a>
                            </ListGroupItemHeading>
                            <ListGroupItemText>
                                <b>Huang, H.,Mommens, K., Lebeau, P. & Macharis, C.</b>
                            </ListGroupItemText>
                            <ListGroupItemText>
                                <a style={{ color: "inherit" }} href="https://link.springer.com/chapter/10.1007/978-3-030-73976-8_1" target="_blank" rel="noopener noreferrer">
                                    Decision Support Systems XI: Decision Support Systems, Analytics and Technologies in Response to Global Crisis Management. Springer, p. 3-17 15 p.
                                </a>
                            </ListGroupItemText>
                            <ListGroupItemText style={{ color: 'grey' }}>
                                Conference paper
                            </ListGroupItemText>
                        </ListGroupItem>
                        <ListGroupItem style={{ marginTop: "3vh" }}>
                            <ListGroupItemHeading>
                                <a href="https://res.cloudinary.com/ddwpezn3f/image/upload/v1595504645/Homepage/Collaborative_decision-making_in_sustainable_mobility.pdf" target="_blank" rel="noopener noreferrer" >
                                    {intl.get('PUBLICATION_COLLABORATIVE_DECISION')}
                                </a>
                            </ListGroupItemHeading>
                            <ListGroupItemText>
                                <b>Huang, H., De Smet, Y., Macharis, C. & Doan Nguyen, A. V.</b>
                            </ListGroupItemText>
                            <ListGroupItemText>
                                <a style={{ color: "inherit" }} href="https://www.tandfonline.com/doi/abs/10.1080/13504509.2020.1795005?journalCode=tsdw20" target="_blank" rel="noopener noreferrer">
                                    International Journal for Sustainable Development & World Ecology. p. 1-11 11 p.
                                </a>
                            </ListGroupItemText>
                            <ListGroupItemText style={{ color: 'grey' }}>
                                Journal paper
                            </ListGroupItemText>
                        </ListGroupItem>
                        <ListGroupItem>
                            <ListGroupItemHeading>
                                <a href="https://res.cloudinary.com/ddwpezn3f/image/upload/v1591264996/Homepage/MAMCA_software.pdf" target="_blank" rel="noopener noreferrer">
                                    {intl.get('PUBLICATION_NEW_MAMCA')}
                                </a>
                            </ListGroupItemHeading>
                            <ListGroupItemText>
                                <b>Huang, H., Lebeau, P. & Macharis, C.</b>
                            </ListGroupItemText>
                            <ListGroupItemText>
                                <a style={{ color: "inherit" }} href="https://link.springer.com/chapter/10.1007/978-3-030-46224-6_4" target="_blank" rel="noopener noreferrer">
                                    Decision Support Systems X: Cognitive Decision Support Systems and Technologies. Springer, p. 43-56 14 p.
                                </a>
                            </ListGroupItemText>
                            <ListGroupItemText style={{ color: 'grey' }}>
                                Conference paper
                            </ListGroupItemText>
                        </ListGroupItem>
                        <ListGroupItem style={{ marginTop: "3vh" }}>
                            <ListGroupItemHeading>
                                <a href="https://res.cloudinary.com/ddwpezn3f/image/upload/v1591264996/Homepage/Understanding_passenger_and_freight_vehicle_behavior_Published.pdf" target="_blank" rel="noopener noreferrer">
                                    {intl.get('PUBLICATION_ANALYZING_VEHICLE')}
                                </a>
                            </ListGroupItemHeading>
                            <ListGroupItemText>
                                <b>Hadavi, S., Buldeo Rai, H., Verlinde, S., Huang, H., Macharis, C. & Guns, T.</b>
                            </ListGroupItemText>
                            <ListGroupItemText>
                                <a style={{ color: "inherit" }} href="https://etrr.springeropen.com/articles/10.1186/s12544-020-00405-x" target="_blank" rel="noopener noreferrer">
                                    European Transport Research Review. 12, 1, p. 1-17 17 p.
                                </a>
                            </ListGroupItemText>
                            <ListGroupItemText style={{ color: 'grey' }}>
                                Journal paper
                            </ListGroupItemText>
                        </ListGroupItem>
                    </ListGroup>
                </Container>

            </div>
        );
    }
}

export default Publications;