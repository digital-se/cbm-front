import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Button, ButtonGroup, ButtonToolbar, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

// Create a single card with header text as attribute
const CardWithHeader = props => (
    <Card className="card-default">
        <CardHeader><CardTitle tag="h3">{props.header}</CardTitle></CardHeader>
        <CardBody>{props.children}</CardBody>
    </Card>
)

class Buttons extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            activePage: 1
        };
    }

    handleSelect(event, selectedEvent) {
        this.setState({
            activePage: selectedEvent.eventKey
        });
    }

    toggleDD = dd => {
        this.setState({
            [dd]: !this.state[dd]
        })
    }

    renderDropdownButton = (title, i) => {
        return (
            <ButtonDropdown isOpen={this.state[`ddSingle${i}`]} toggle={() => this.toggleDD(`ddSingle${i}`)} key={ i } id={ `dropdown-basic-${i}` }>
                <DropdownToggle caret color={ title.toLowerCase() }>
                  {title}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem disabled>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        );
    }

    renderDropdownSplitButton = (title, i) => {
        return (
            <ButtonDropdown isOpen={this.state[`ddSplit${i}`]} toggle={() => this.toggleDD(`ddSplit${i}`)}  key={ i } id={ `split-button-basic-${i}` }>
                <Button color={ title.toLowerCase() }>{title}</Button>
                <DropdownToggle caret color={ title.toLowerCase() }/>
                <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider/>
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
            );
    }

    render() {
        // Used to render DropdownButton examples
        const BUTTONS = ['secondary', 'primary', 'success', 'info', 'warning', 'danger']
        const CSS = '.content-wrapper div:not(.btn-group)>.btn, .btn-group { margin: 0 4px 4px 0 }'; // space for buttons demo
        return (
            <ContentWrapper>
                <h3>Buttons</h3>
                <style>{CSS}</style>
                { /* START row */ }
                <Row>
                    <Col md={ 12 }>
                        { /* START Card */ }
                        <CardWithHeader header="Buttons">
                            <ButtonToolbar>
                                { /* Standard button */ }
                                <Button>Secondary</Button>
                                { /* Provides extra visual weight and identifies the primary action in a set of buttons */ }
                                <Button color="primary">Primary</Button>
                                { /* Indicates a successful or positive action */ }
                                <Button color="success">Success</Button>
                                { /* Contextual button for informational alert messages */ }
                                <Button color="info">Info</Button>
                                { /* Indicates caution should be taken with this action */ }
                                <Button color="warning">Warning</Button>
                                { /* Indicates a dangerous or potentially negative action */ }
                                <Button color="danger">Danger</Button>
                                <Button className="btn btn-inverse mb-sm">Inverse</Button>
                                <Button className="btn btn-green mb-sm">Green</Button>
                                <Button className="btn btn-purple mb-sm">Purple</Button>
                                <Button className="btn btn-pink mb-sm">Pink</Button>
                                { /* Deemphasize a button by making it look like a link while maintaining button behavior */ }
                                <Button color="link">Link</Button>
                            </ButtonToolbar>
                        </CardWithHeader>
                        { /* END Card */ }
                    </Col>
                </Row>
                { /* END row */ }
                { /* START Card */ }
                <CardWithHeader header="Button Labeled">
                    { /* Success button with label  */ }
                    <Button color="success" className="btn-labeled">
                        <span className="btn-label"><i className="fa fa-check"></i></span> Success
                    </Button>
                    { /* Danger button with label  */ }
                    <Button color="danger" className="btn-labeled">
                        <span className="btn-label"><i className="fa fa-times"></i></span> Danger
                    </Button>
                    { /* Info button with label  */ }
                    <Button color="info" className="btn-labeled">
                        <span className="btn-label"><i className="fa fa-exclamation"></i></span> Info
                    </Button>
                    { /* Warning button with label  */ }
                    <Button color="warning" className="btn-labeled">
                        <span className="btn-label"><i className="fas fa-exclamation-triangle"></i></span> Warning
                    </Button>
                    { /* Standard button with label  */ }
                    <Button color="secondary" className="btn-labeled">
                        <span className="btn-label"><i className="fa fa-arrow-left"></i></span> Left
                    </Button>
                    { /* Standard button with label on the right side  */ }
                    <Button color="secondary" className="btn-labeled">
                        Right
                        <span className="btn-label btn-label-right"><i className="fa fa-arrow-right"></i></span>
                    </Button>
                </CardWithHeader>
                { /* END Card */ }
                { /* START row */ }
                <Row>
                    <Col md={ 6 }>
                        { /* START Card */ }
                        <CardWithHeader header="Button sizing">
                            <Row>
                                <Col lg={ 6 }>
                                    <p>
                                        <Button color="primary" size="lg">
                                            Large button
                                        </Button>
                                        <Button color="secondary" size="lg">
                                            Large button
                                        </Button>
                                    </p>
                                    <p>
                                        <Button color="primary">
                                            Primary button
                                        </Button>
                                        <Button color="secondary">
                                            Secondary button
                                        </Button>
                                    </p>
                                </Col>
                                <Col lg={ 6 }>
                                    <p>
                                        <Button color="primary" size="sm">
                                            Small button
                                        </Button>
                                        <Button color="secondary" size="sm">
                                            Small button
                                        </Button>
                                    </p>
                                    <p>
                                        <Button color="primary" size="xs">
                                            Extra small button
                                        </Button>
                                        <Button color="secondary" size="xs">
                                            Extra small button
                                        </Button>
                                    </p>
                                </Col>
                            </Row>
                        </CardWithHeader>
                        { /* END Card */ }
                    </Col>
                    <Col md={ 6 }>
                        { /* START Card */ }
                        <CardWithHeader header="Button group">
                            <p>
                            </p>
                            <ButtonGroup>
                                <Button>Left</Button>
                                <Button>Middle</Button>
                                <Button>Right</Button>
                            </ButtonGroup>
                            <p>
                            </p>
                            <p>
                            </p>
                            <ButtonGroup>
                                <Button>1</Button>
                                <Button>2</Button>
                                <Button>3</Button>
                                <Button>4</Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button>5</Button>
                                <Button>6</Button>
                                <Button>7</Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button>8</Button>
                            </ButtonGroup>
                        </CardWithHeader>
                        { /* END Card */ }
                    </Col>
                </Row>
                { /* END row */ }
                {/* START Card */}
                <CardWithHeader header="Outline Buttons">
                    <Button outline className="mb-1" color="secondary" type="button">Secondary</Button>
                    <Button outline className="mb-1" color="primary" type="button">Primary</Button>
                    <Button outline className="mb-1" color="success" type="button">Success</Button>
                    <Button outline className="mb-1" color="info" type="button">Info</Button>
                    <Button outline className="mb-1" color="warning" type="button">Warning</Button>
                    <Button outline className="mb-1" color="danger" type="button">Danger</Button>
                    <Button outline className="mb-1" color="inverse" type="button">Inverse</Button>
                    <Button outline className="mb-1" color="green" type="button">Green</Button>
                    <Button outline className="mb-1" color="purple" type="button">Purple</Button>
                    <Button outline className="mb-1" color="pink" type="button">Pink</Button>
                    <br/>
                    <br/>
                    <Button outline className="mb-1" size="lg" color="primary" type="button">Outline Large</Button>
                    <Button outline className="mb-1" size="sm" color="primary" type="button">Outline Small</Button>
                    <Button outline className="mb-1" size="xs" color="primary" type="button">Outline xSmall</Button>
                </CardWithHeader>
                {/* END Card */}
                { /* START row */ }
                <Row>
                    <Col md={ 6 }>
                        { /* START Card */ }
                        <CardWithHeader header="Button Pills">
                            <p>
                                Pill left
                            </p>
                            <div>
                                <Button color="secondary" className="btn-pill-left">Secondary</Button>
                                <Button color="primary" className="btn-pill-left">Primary</Button>
                                <Button color="success" className="btn-pill-left">Success</Button>
                                <Button color="info" className="btn-pill-left">Info</Button>
                                <Button color="warning" className="btn-pill-left">Warning</Button>
                                <Button color="danger" className="btn-pill-left">Danger</Button>
                                <Button color="inverse" className="btn-pill-left">Inverse</Button>
                            </div>
                            <p>
                                Pill right
                            </p>
                            <div>
                                <Button color="secondary" className="btn-pill-right">Secondary</Button>
                                <Button color="primary" className="btn-pill-right">Primary</Button>
                                <Button color="success" className="btn-pill-right">Success</Button>
                                <Button color="info" className="btn-pill-right">Info</Button>
                                <Button color="warning" className="btn-pill-right">Warning</Button>
                                <Button color="danger" className="btn-pill-right">Danger</Button>
                                <Button color="inverse" className="btn-pill-right">Inverse</Button>
                            </div>
                        </CardWithHeader>
                        { /* END Card */ }
                    </Col>
                    <Col md={ 6 }>
                        { /* START Card */ }
                        <CardWithHeader header="Button Oval">
                            <Button color="secondary" className="btn-oval">Secondary</Button>
                            <Button color="primary" className="btn-oval">Primary</Button>
                            <Button color="success" className="btn-oval">Success</Button>
                            <Button color="info" className="btn-oval">Info</Button>
                            <Button color="warning" className="btn-oval">Warning</Button>
                            <Button color="danger" className="btn-oval">Danger</Button>
                            <Button color="inverse" className="btn-oval">Inverse</Button>
                        </CardWithHeader>
                        { /* END Card */ }
                        { /* START Card */ }
                        <CardWithHeader header="Button Square">
                            <Button color="secondary" className="btn-square">Secondary</Button>
                            <Button color="primary" className="btn-square">Primary</Button>
                            <Button color="success" className="btn-square">Success</Button>
                            <Button color="info" className="btn-square">Info</Button>
                            <Button color="warning" className="btn-square">Warning</Button>
                            <Button color="danger" className="btn-square">Danger</Button>
                            <Button color="inverse" className="btn-square">Inverse</Button>
                        </CardWithHeader>
                        { /* END Card */ }
                    </Col>
                </Row>
                { /* END row */ }
                { /* START row */ }
                <Row>
                    <Col md={ 6 }>
                        { /* START Card */ }
                        <CardWithHeader header="Button dropdown">
                            <ButtonToolbar>
                                { BUTTONS.map(this.renderDropdownButton) }
                            </ButtonToolbar>
                        </CardWithHeader>
                        { /* END Card */ }
                    </Col>
                    <Col md={ 6 }>
                        { /* START Card */ }
                        <CardWithHeader header="Split button dropdown">
                            <ButtonToolbar>
                                { BUTTONS.map(this.renderDropdownSplitButton) }
                            </ButtonToolbar>
                        </CardWithHeader>
                        { /* END Card */ }
                    </Col>
                </Row>
                { /* END row */ }
                { /* START Card */ }
                <CardWithHeader header="Pagination">
                    { /* START row */ }
                    <Row>
                        <Col lg={ 6 }>
                            <div>
                                <h4>Sizes</h4>
                                <Pagination size="lg">
                                    <PaginationItem>
                                        <PaginationLink previous href="#" /></PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">2</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">3</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink next href="#" />
                                    </PaginationItem>
                                </Pagination>
                            </div>
                        </Col>
                        <Col lg={ 6 }>
                            <h4>Pagination</h4>
                            <Pagination>
                                <PaginationItem>
                                  <PaginationLink previous href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                  <PaginationLink href="#">
                                    1
                                  </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                  <PaginationLink href="#">
                                    2
                                  </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                  <PaginationLink href="#">
                                    3
                                  </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                  <PaginationLink href="#">
                                    4
                                  </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                  <PaginationLink href="#">
                                    5
                                  </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                  <PaginationLink next href="#" />
                                </PaginationItem>
                            </Pagination>
                        </Col>
                    </Row>
                    { /* END row */ }
                </CardWithHeader>
                { /* END Card */ }
            </ContentWrapper>
            );
    }
}

export default Buttons;
