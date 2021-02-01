import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import classnames from 'classnames';
import { Container,
        Row,
        Col,
        Collapse,
        Card,
        CardDeck,
        CardBody,
        CardHeader,
        CardFooter,
        CardTitle,
        CardText,
        TabContent,
        TabPane,
        Nav,
        NavItem,
        NavLink,
        Jumbotron } from 'reactstrap';

import CardTool from '../Common/CardTool'

class Cards extends Component {

    state = {
        activeTab: '1',
        key: 1,
        // array with each accordion state (open/close)
        accordionState: [true, false, false],
        // choose to show open only one or more at the same time
        oneAtATime: true
    }

    toggleTab = tab => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    /* id is the index in the accordionState array */
    toggleAccordion = id => {
        let accordionState = this.state.accordionState.map((val,i) => {
            return id === i ? !val : (this.state.oneAtATime ? false : val)
        })
        this.setState({
            accordionState
        })
    }

    onCheckChange = e => {
        this.setState({
            oneAtATime: e.currentTarget.checked
        })
    }

    onCardRemove = (card, confirm) => {
        console.log('Removing card');
        // Call confirm() to continue removing the card
        // perform checks to avoid removing card if some user action is required
        setTimeout(confirm, 50);
    }
    onCardRemoved = () => {
        console.log('Card Removed');
    }

    onCardRefresh = (card, done) => {
        // perform any action when a .card triggers a the refresh event
        // when the action is done, call done to remove spiiner
        setTimeout(done, 3000);
    }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>Cards
                        <small>Cards can contain almost any kind of element inside</small>
                    </div>
                </div>
                <Container fluid>
                    { /* END row */ }
                    <h4 className="page-header mt-0">Card dismiss &amp; refresh</h4>
                    { /* START row */ }
                    <Row>
                        <Col lg={ 4 }>
                            { /* START card */ }
                            <Card className="card-default">
                                <CardHeader>Dismissable Card
                                    <CardTool dismiss refresh onRemove={this.onCardRemove} onRemoved={this.onCardRemoved} onRefresh={this.onCardRefresh}/>
                                </CardHeader>
                                <CardBody>
                                    <p>Card can be dismissed by clicking on the cross icon icon on the top right corner</p>
                                </CardBody>
                            </Card>
                            { /* END card */ }
                        </Col>
                        <Col lg={ 4 }>
                            { /* START card */ }
                            <Card className="card-default">
                                <CardHeader>Standard Spinner
                                    <CardTool refresh onRefresh={this.onCardRefresh}/>
                                </CardHeader>
                                <CardBody>
                                    <p>Click on the refresh icon to see how it triggers a refresh-event while it shows a spinner</p>
                                </CardBody>
                            </Card>
                            { /* END card */ }
                        </Col>
                        <Col lg={ 4 }>
                            { /* START card */ }
                            <Card className="card-default">
                                <CardHeader>Custom Spinner
                                    <CardTool refresh onRefresh={this.onCardRefresh} spinner="traditional"/>
                                </CardHeader>
                                <CardBody>
                                    <p>Click on the refresh icon to see how it triggers a refresh-event while it shows a spinner</p>
                                </CardBody>
                            </Card>
                            { /* END card */ }
                        </Col>
                    </Row>
                    { /* END row */ }
                </Container>
                <h4 className="page-header">Card Styles</h4>
                <div className="row">
                    <div className="col-lg-4">
                        <Card color="primary" className="text-white mb-3">
                            <CardHeader>Header</CardHeader>
                            <CardBody>
                                <CardTitle>Primary card title</CardTitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card className="card-default mb-3">
                            <CardHeader>Header</CardHeader>
                            <CardBody>
                                <CardTitle>Card Default card title</CardTitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card color="success" className="text-white mb-3">
                            <CardHeader>Header</CardHeader>
                            <CardBody>
                                <CardTitle>Success card title</CardTitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <Card color="danger" className="text-white mb-3">
                            <CardHeader>Header</CardHeader>
                            <CardBody>
                                <CardTitle>Danger card title</CardTitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card color="warning" className="text-white mb-3">
                            <CardHeader>Header</CardHeader>
                            <CardBody>
                                <CardTitle>Warning card title</CardTitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card color="info" className="text-white mb-3">
                            <CardHeader>Header</CardHeader>
                            <CardBody>
                                <CardTitle>Info card title</CardTitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card bg-light mb-3">
                            <CardHeader>Header</CardHeader>
                            <CardBody>
                                <CardTitle>Light card title</CardTitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
                            </CardBody>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <Card color="dark" className="text-white mb-3">
                            <CardHeader>Header</CardHeader>
                            <CardBody>
                                <CardTitle>Dark card title</CardTitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <Card outline color="primary" className="mb-3">
                            <CardHeader className="text-white bg-primary">Header</CardHeader>
                            <CardBody>
                                <CardTitle>Primary card title</CardTitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card outline color="secondary" className="mb-3">
                            <CardHeader color="secondary">Header</CardHeader>
                            <CardBody>
                                <CardTitle>Card Default card title</CardTitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card outline color="success" className="mb-3">
                            <CardHeader className="text-white bg-success">Header</CardHeader>
                            <CardBody>
                                <CardTitle>Success card title</CardTitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <Card outline color="danger" className="mb-3">
                            <CardHeader className="text-white bg-danger">Header</CardHeader>
                            <CardBody>
                                <CardTitle>Danger card title</CardTitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card outline color="warning" className="mb-3">
                            <CardHeader className="text-white bg-warning">Header</CardHeader>
                            <CardBody>
                                <CardTitle>Warning card title</CardTitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card outline color="info" className="mb-3">
                            <CardHeader className="text-white bg-info">Header</CardHeader>
                            <CardBody>
                                <CardTitle>Info card title</CardTitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <h4 className="page-header">Card Deck</h4>
                <div className="mb-4">
                    <CardDeck>
                        <Card className="card-default">
                            <CardHeader>Demo content</CardHeader>
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            </CardBody>
                            <CardFooter>
                                <div className="text-sm text-muted">Last updated 3 mins ago</div>
                            </CardFooter>
                        </Card>
                        <Card className="card-default">
                            <CardHeader>Demo content</CardHeader>
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                                <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                                <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                                <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                            </CardBody>
                            <CardFooter>
                                <div className="text-sm text-muted">Last updated 3 mins ago</div>
                            </CardFooter>
                        </Card>
                        <Card className="card-default">
                            <CardHeader>Demo content</CardHeader>
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                            </CardBody>
                            <CardFooter>
                                <div className="text-sm text-muted">Last updated 3 mins ago</div>
                            </CardFooter>
                        </Card>
                    </CardDeck>
                </div>

                <h4 className="page-header">Accordion</h4>
                <div>
                    <div className="custom-control custom-checkbox mb-3">
                      <input type="checkbox" id="customCheck1" className="custom-control-input" checked={this.state.oneAtATime} onChange={this.onCheckChange}/>
                      <label className="custom-control-label" htmlFor="customCheck1">Open One at a time</label>
                    </div>
                    <Card className="card-default mb-1">
                        <CardHeader onClick={() => this.toggleAccordion(0)}>
                            <h4 className="mb-0">
                                <a className="text-inherit">Collapsible Group Item #1</a>
                            </h4>
                        </CardHeader>
                        <Collapse isOpen={this.state.accordionState[0]}>
                            <CardBody className="border-top">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.</CardBody>
                        </Collapse>
                    </Card>
                    <Card className="card-default mb-1">
                        <CardHeader onClick={() => this.toggleAccordion(1)}>
                            <h4 className="mb-0">
                                <a className="text-inherit">Collapsible Group Item #2</a>
                            </h4>
                        </CardHeader>
                        <Collapse isOpen={this.state.accordionState[1]}>
                            <CardBody className="border-top">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.</CardBody>
                        </Collapse>
                    </Card>
                    <Card className="card-default mb-1">
                        <CardHeader onClick={() => this.toggleAccordion(2)}>
                            <h4 className="mb-0">
                                <a className="text-inherit">Collapsible Group Item #3</a>
                            </h4>
                        </CardHeader>
                        <Collapse isOpen={this.state.accordionState[2]}>
                            <CardBody className="border-top">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.</CardBody>
                        </Collapse>
                    </Card>
                </div>

                <h4 className="page-header">Tabs</h4>
                {/* START row */}
                <div className="row">
                    <div className="col-xl-12">
                        {/* START card */}
                        <Card className="card-default">
                            <CardHeader>Basic Tabs</CardHeader>
                            <CardBody>
                                <div role="tabpanel">
                                    {/* Nav tabs */}
                                    <Nav tabs>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: this.state.activeTab === '1' })}
                                                onClick={() => { this.toggleTab('1');}}>
                                                Home
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: this.state.activeTab === '2' })}
                                                onClick={() => { this.toggleTab('2');}}>
                                                Profile
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: this.state.activeTab === '3' })}
                                                onClick={() => { this.toggleTab('3');}}>
                                                Messages
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: this.state.activeTab === '4' })}
                                                onClick={() => { this.toggleTab('4');}}>
                                                Settings
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                    {/* Tab panes */}
                                    <TabContent activeTab={this.state.activeTab}>
                                        <TabPane tabId="1">Suspendisse velit erat, vulputate sit amet feugiat a, lobortis nec felis.</TabPane>
                                        <TabPane tabId="2">Integer lobortis commodo auctor.</TabPane>
                                        <TabPane tabId="3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TabPane>
                                        <TabPane tabId="4">Sed commodo tellus ut mi tristique pharetra.</TabPane>
                                    </TabContent>
                                </div>
                            </CardBody>
                        </Card>
                        {/* END card */}
                    </div>
                </div>
                {/* END row */}
                <Jumbotron fluid>
                    <h1 className="display-4">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4"/>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="" role="button">Learn more</a>
                    </p>
                </Jumbotron>
            </ContentWrapper>
            );
    }

}

export default Cards;