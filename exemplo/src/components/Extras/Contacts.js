import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Card, CardBody, CardFooter, Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';

const ContactCard = props => (
    <Card className="card-default">
        <CardBody className="text-center">
            <img className="mb-2 img-fluid rounded-circle thumb64" src={props.imgsrc} alt="Contact"/>
            <h4>{props.name}</h4>
            <p>{props.desc}</p>
        </CardBody>
        <CardFooter className="d-flex">
            <div>
                <button type="button" className="btn btn-xs btn-primary">Send message</button>
            </div>
            <div className="ml-auto">
                <button type="button" className="btn btn-xs btn-secondary">View</button>
            </div>
        </CardFooter>
    </Card>
)


class Contacts extends Component {

    state = {
        dropdownOpen: false
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">Contacts
                    <div className="ml-auto">
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle color="link">
                                <em className="fa fa-ellipsis-v fa-lg"></em>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-right-forced animated fadeInLeft">
                                <DropdownItem>
                                    <em className="fa-fw fa fa-plus mr-2"></em>
                                    <span>New contact</span>
                                </DropdownItem>
                                <DropdownItem>
                                    <em className="fa-fw fas fa-share mr-2"></em>
                                    <span>Import contact</span>
                                </DropdownItem>
                                <DropdownItem>
                                    <em className="fa-fw fas fa-reply mr-2"></em>
                                    <span>Export contacts</span>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
                <Row>
                    <Col lg="4" sm="6">
                        <ContactCard imgsrc="img/user/02.jpg" name="Audrey Hunt" desc="Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!"/>
                    </Col>
                    <Col lg="4" sm="6">
                        <ContactCard imgsrc="img/user/03.jpg" name="Leonard Price" desc="Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!"/>
                    </Col>
                    <Col lg="4" sm="6">
                        <ContactCard imgsrc="img/user/04.jpg" name="Jamie Stephens" desc="Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!"/>
                    </Col>
                    <Col lg="4" sm="6">
                        <ContactCard imgsrc="img/user/05.jpg" name="Tara Nelson" desc="Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!"/>
                    </Col>
                    <Col lg="4" sm="6">
                        <ContactCard imgsrc="img/user/06.jpg" name="Constance Cook" desc="Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!"/>
                    </Col>
                    <Col lg="4" sm="6">
                        <ContactCard imgsrc="img/user/07.jpg" name="Laura Palmr" desc="Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!"/>
                    </Col>
                    <Col lg="4" sm="6">
                        <ContactCard imgsrc="img/user/08.jpg" name="Audrey Hunt" desc="Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!"/>
                    </Col>
                    <Col lg="4" sm="6">
                        <ContactCard imgsrc="img/user/09.jpg" name="Leslie Mckinney" desc="Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!"/>
                    </Col>
                    <Col lg="4" sm="6">
                        <ContactCard imgsrc="img/user/04.jpg" name="Brian Mills" desc="Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!"/>
                    </Col>
                </Row>
            </ContentWrapper>
            );
    }

}

export default Contacts;
