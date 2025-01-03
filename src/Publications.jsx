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
                                <a href="https://res.cloudinary.com/ddwpezn3f/image/upload/v1735911367/Engaging_stakeholders_in_construction_transport_policy_wbvmkl.pdf" target="_blank" rel="noopener noreferrer">
                                    Engaging stakeholders in construction transport policy: A mass-participation framework
                                </a>
                            </ListGroupItemHeading>
                            <ListGroupItemText>
                                <b>Huang, H., Brusselaers, N., De Smet, Y., Macharis, C.</b>
                            </ListGroupItemText>
                            <ListGroupItemText>
                                <a style={{ color: "inherit" }} href="https://doi.org/10.1016/j.cstp.2024.101359" target="_blank" rel="noopener noreferrer">
                                    Case Studies on Transport Policy.
                                </a>
                            </ListGroupItemText>
                            <ListGroupItemText style={{ color: 'grey' }}>
                                Journal paper
                            </ListGroupItemText>
                        </ListGroupItem>
                        <ListGroupItem>
                            <ListGroupItemHeading>
                                <a href="https://res.cloudinary.com/ddwpezn3f/image/upload/v1729955033/Homepage/20_years_review_of_the_multi_actor_multi_criteria_analysis.pdf" target="_blank" rel="noopener noreferrer">
                                    20 years review of the multi actor multi criteria analysis (MAMCA) framework: a proposition of a systematic guideline
                                </a>
                            </ListGroupItemHeading>
                            <ListGroupItemText>
                                <b>Huang, H., Heuninckx, S., Macharis, C.</b>
                            </ListGroupItemText>
                            <ListGroupItemText>
                                <a style={{ color: "inherit" }} href="https://link.springer.com/article/10.1007/s10479-024-06357-y" target="_blank" rel="noopener noreferrer">
                                    Annals of Operations Research.
                                </a>
                            </ListGroupItemText>
                            <ListGroupItemText style={{ color: 'grey' }}>
                                Journal paper
                            </ListGroupItemText>
                        </ListGroupItem>
                        <ListGroupItem>
                            <ListGroupItemHeading>
                                <a href="https://res.cloudinary.com/ddwpezn3f/image/upload/v1727983535/Homepage/Facilitating_Sustainable_Logistics_Policy_Developm.pdf" target="_blank" rel="noopener noreferrer">
                                    Facilitating Sustainable Logistics Policy Development Using Multicriteria Satisfaction Analysis: A Case of Preference Mapping for Cargo Bike Last-Mile Delivery
                                </a>
                            </ListGroupItemHeading>
                            <ListGroupItemText>
                                <b>Huang, H., Zhang, X., Conrrente, S., Siraj S., Kiba-Janiak M.</b>
                            </ListGroupItemText>
                            <ListGroupItemText>
                                <a style={{ color: "inherit" }} href="https://link.springer.com/chapter/10.1007/978-3-031-67936-0_10" target="_blank" rel="noopener noreferrer">
                                    Strengthening European Mobility Policy.
                                </a>
                            </ListGroupItemText>
                            <ListGroupItemText style={{ color: 'grey' }}>
                                Book chapter
                            </ListGroupItemText>
                        </ListGroupItem>
                        <ListGroupItem>
                            <ListGroupItemHeading>
                                <a href="https://res.cloudinary.com/ddwpezn3f/image/upload/v1725963521/Homepage/Int_Trans_Operational_Res_-_2024_-_Huang_-_The_MAMCABM_framework_for_the_evaluation_of_mobility_decision80_90making_problems_kprbum.pdf" target="_blank" rel="noopener noreferrer">
                                    The MAMCABM framework for the evaluation of mobility decision-making problems: theory and practice
                                </a>
                            </ListGroupItemHeading>
                            <ListGroupItemText>
                                <b>Huang, H., Sun, S, Mommens, K., Macharis, C.</b>
                            </ListGroupItemText>
                            <ListGroupItemText>
                                <a style={{ color: "inherit" }} href="https://link.springer.com/article/10.1007/s10479-024-06090-6" target="_blank" rel="noopener noreferrer">
                                    International Transactions in Operational Research.
                                </a>
                            </ListGroupItemText>
                            <ListGroupItemText style={{ color: 'grey' }}>
                                Journal paper
                            </ListGroupItemText>
                        </ListGroupItem>
                        <ListGroupItem>
                            <ListGroupItemHeading>
                                <a href="https://res.cloudinary.com/ddwpezn3f/image/upload/v1725661444/Homepage/A_collaborative_group_decision-support_system_the_survey_based_multi-actor_multi-criteria_analysis_MAMCA_software.pdf" target="_blank" rel="noopener noreferrer">
                                    A collaborative group decision-support system: the survey based multi-actor multi-criteria analysis (MAMCA) software
                                </a>
                            </ListGroupItemHeading>
                            <ListGroupItemText>
                                <b>Huang, H., Burgherr, P., Macharis, C.</b>
                            </ListGroupItemText>
                            <ListGroupItemText>
                                <a style={{ color: "inherit" }} href="https://www.tandfonline.com/doi/full/10.1080/01605682.2024.2398114" target="_blank" rel="noopener noreferrer">
                                    Journal of the Operational Research Society.
                                </a>
                            </ListGroupItemText>
                            <ListGroupItemText style={{ color: 'grey' }}>
                                Journal paper
                            </ListGroupItemText>
                        </ListGroupItem>
                        <ListGroupItem>
                            <ListGroupItemHeading>
                                <a href="https://res.cloudinary.com/ddwpezn3f/image/upload/v1725965925/Homepage/Quantifying_visual_complexity_pbf28z.pdf" target="_blank" rel="noopener noreferrer">
                                    Quantifying and reducing the complexity of multi-line charts as a visual aid in multi-criteria decision-making
                                </a>
                            </ListGroupItemHeading>
                            <ListGroupItemText>
                                <b>Huang, H., Siraj, S.</b>
                            </ListGroupItemText>
                            <ListGroupItemText>
                                <a style={{ color: "inherit" }} href="https://link.springer.com/article/10.1007/s10479-024-06090-6" target="_blank" rel="noopener noreferrer">
                                    Annals of Operations Research.
                                </a>
                            </ListGroupItemText>
                            <ListGroupItemText style={{ color: 'grey' }}>
                                Journal paper
                            </ListGroupItemText>
                        </ListGroupItem>
                        <ListGroupItem>
                            <ListGroupItemHeading>
                                <a href="https://res.cloudinary.com/ddwpezn3f/image/upload/v1717252438/Homepage/MCDA_Calculator_Printed_Version.pdf" target="_blank" rel="noopener noreferrer">
                                    MCDA Calculator: A Streamlined Decision Support System for Multi-criteria Decision Analysis
                                </a>
                            </ListGroupItemHeading>
                            <ListGroupItemText>
                                <b>Huang, H., Burgherr, P.</b>
                            </ListGroupItemText>
                            <ListGroupItemText>
                                <a style={{ color: "inherit" }} href="https://link.springer.com/chapter/10.1007/978-3-031-59376-5_3" target="_blank" rel="noopener noreferrer">
                                    Decision Support Systems XIV. Human-Centric Group Decision, Negotiation and Decision Support Systems for Societal Transitions.
                                </a>
                            </ListGroupItemText>
                            <ListGroupItemText style={{ color: 'grey' }}>
                                Conference paper
                            </ListGroupItemText>
                        </ListGroupItem>
                        <ListGroupItem>
                            <ListGroupItemHeading>
                                <a href="https://res.cloudinary.com/ddwpezn3f/image/upload/v1696623382/Homepage/Robust_Stakeholder-Based_Group-Decision_Making_Framework_MAMCA_BWM_as0zvb.pdf" target="_blank" rel="noopener noreferrer">
                                    Robust Stakeholder-Based Group-Decision Making Framework: The Multi-Actor Multi-Criteria Analysis (MAMCA) with the Integration of Best-Worst Method (BWM)
                                </a>
                            </ListGroupItemHeading>
                            <ListGroupItemText>
                                <b>Huang, H.</b>
                            </ListGroupItemText>
                            <ListGroupItemText>
                                <a style={{ color: "inherit" }} href="https://link.springer.com/chapter/10.1007/978-3-031-40328-6_2" target="_blank" rel="noopener noreferrer">
                                    BWM 2023: Advances in Best-Worst Method.
                                </a>
                            </ListGroupItemText>
                            <ListGroupItemText style={{ color: 'grey' }}>
                                Conference paper
                            </ListGroupItemText>
                        </ListGroupItem>
                        <ListGroupItem>
                            <ListGroupItemHeading>
                                <a href="https://res.cloudinary.com/ddwpezn3f/image/upload/v1684844890/Homepage/MAMCABM_A_Data-Driven_Stakeholder-Based_Decision-Support_System_that_Considers_Uncertainties.pdf" target="_blank" rel="noopener noreferrer">
                                    {intl.get('PUBLICATION_MAMCABM')}
                                </a>
                            </ListGroupItemHeading>
                            <ListGroupItemText>
                                <b>Huang, H., Sun, S., Liu, L., Mommens, K., Macharis, C.</b>
                            </ListGroupItemText>
                            <ListGroupItemText>
                                <a style={{ color: "inherit" }} href="https://link.springer.com/chapter/10.1007/978-3-031-32534-2_7" target="_blank" rel="noopener noreferrer">
                                    Decision Support Systems XIII. Decision Support Systems in An Uncertain World: The Contribution of Digital Twins.
                                </a>
                            </ListGroupItemText>
                            <ListGroupItemText style={{ color: 'grey' }}>
                                Conference paper
                            </ListGroupItemText>
                        </ListGroupItem>
                        <ListGroupItem>
                            <ListGroupItemHeading>
                                <a href="https://res.cloudinary.com/ddwpezn3f/image/upload/v1684845395/Homepage/Criteria_preprocessing_in_multi_actor_multi_criteria_analysis.pdf" target="_blank" rel="noopener noreferrer">
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