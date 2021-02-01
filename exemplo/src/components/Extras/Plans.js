import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';

class Plans extends Component {

    render() {
        return (
            <ContentWrapper>
                <Container className="container-md py-4">
                    <div className="text-center mb-3 pb-3">
                        <div className="h2 text-bold">Launch your business today</div>
                        <p>Select the plan in different options that best fit your project</p>
                    </div>
                </Container>
                <Container className="container-md">
                    {/* START PLAN TABLE */}
                    <Row>
                        {/* PLAN */}
                        <Col lg="4">
                            <div className="plan">
                                <h3 className="plan-header">Single</h3>
                                <div className="plan-price">
                                    <div className="text-lg">
                                        <sup>
                                            <small>$</small>
                                        </sup>18
                                        {/* span.plan-period /mo */}
                                    </div>
                                </div>
                                <ul className="plan-features">
                                    <li>
                                        <em className="fa fa-check"></em>Unlimited Styles</li>
                                    <li>
                                        <em className="fa fa-check"></em>RTL &amp; Translation</li>
                                    <li>
                                        <em className="fa fa-check"></em>Customer support</li>
                                    <li>
                                        <em className="fa fa-check"></em>Free Updates</li>
                                    <li>
                                        <em className="fa fa-check"></em>Limited to one client</li>
                                    <li>
                                        <em className="fa fa-times plan-feature-disable"></em>Multiple installation</li>
                                    <li>
                                        <em className="fa fa-times plan-feature-disable"></em>Not ready for resale</li>
                                </ul>
                                <hr/>
                                <div className="text-center">
                                    <a className="btn btn-info" href="">Choose</a>
                                </div>
                            </div>
                        </Col>
                        {/* PLAN */}
                        <Col lg="4">
                            <div className="plan">
                                <h3 className="plan-header">Multiple</h3>
                                <div className="plan-price">
                                    <div className="text-lg">
                                        <sup>
                                            <small>$</small>
                                        </sup>60
                                        {/* span.plan-period /mo */}
                                    </div>
                                </div>
                                <ul className="plan-features">
                                    <li>
                                        <em className="fa fa-check"></em>Unlimited Styles</li>
                                    <li>
                                        <em className="fa fa-check"></em>RTL &amp; Translation</li>
                                    <li>
                                        <em className="fa fa-check"></em>Customer support</li>
                                    <li>
                                        <em className="fa fa-check"></em>Free Updates</li>
                                    <li>
                                        <em className="fa fa-check"></em>Unlimited clients</li>
                                    <li>
                                        <em className="fa fa-check"></em>Multiple installation</li>
                                    <li>
                                        <em className="fa fa-times plan-feature-disable"></em>Not ready for resale</li>
                                </ul>
                                <hr/>
                                <p className="plan-description">The perfect price for all your project solutions.</p>
                                <div className="text-center">
                                    <a className="btn btn-info" href="">Choose</a>
                                </div>
                            </div>
                        </Col>
                        {/* PLAN */}
                        <Col lg="4">
                            <div className="plan">
                                <h3 className="plan-header">Extended</h3>
                                <div className="plan-price">
                                    <div className="text-lg">
                                        <sup>
                                            <small>$</small>
                                        </sup>900
                                        {/* span.plan-period /mo */}
                                    </div>
                                </div>
                                <ul className="plan-features">
                                    <li>
                                        <em className="fa fa-check"></em>Unlimited Styles</li>
                                    <li>
                                        <em className="fa fa-check"></em>RTL &amp; Translation</li>
                                    <li>
                                        <em className="fa fa-check"></em>Customer support</li>
                                    <li>
                                        <em className="fa fa-check"></em>Free Updates</li>
                                    <li>
                                        <em className="fa fa-check"></em>Unlimited clients</li>
                                    <li>
                                        <em className="fa fa-check"></em>Multiple installation</li>
                                    <li>
                                        <em className="fa fa-check"></em>Ready for resale</li>
                                </ul>
                                <hr/>
                                <div className="text-center">
                                    <a className="btn btn-info" href="">Choose</a>
                                </div>
                            </div>
                            <p className="text-center text-muted">
                                <small>* Subject to specific license terms. Price and features listed for demo only.</small>
                            </p>
                        </Col>
                    </Row>
                    {/* END PLAN TABLE */}
                    <div className="text-center my-3 py-4">
                        <div className="h2 text-bold">Native styles</div>
                        <p>Example plan table using card for demonstration</p>
                    </div>
                    {/* START PLAN TABLE */}
                    <Row>
                        {/* PLAN */}
                        <Col lg="4">
                            <Card className="b">
                                <CardBody className="text-center bb">
                                    <div className="text-bold">STARTER</div>
                                    <h3 className="my-3">
                                        <sup>$</sup>
                                        <span className="text-lg">17</span>
                                        <span>/mo</span>
                                    </h3>
                                </CardBody>
                                <CardBody>
                                    <p>
                                        <em className="fa fa-check fa-fw text-green mr-2"></em>
                                        <span>Unlimited Styles</span>
                                    </p>
                                    <p>
                                        <em className="fa fa-check fa-fw text-green mr-2"></em>
                                        <span>RTL &amp; Translation</span>
                                    </p>
                                    <p>
                                        <em className="fa fa-check fa-fw text-green mr-2"></em>
                                        <span>Customer support</span>
                                    </p>
                                    <p>
                                        <em className="fa fa-check fa-fw text-green mr-2"></em>
                                        <span>Free Updates</span>
                                    </p>
                                    <p>
                                        <em className="fa fa-check fa-fw text-green mr-2"></em>
                                        <span>Limited to one client</span>
                                    </p>
                                    <p>
                                        <em className="fa fa-times fa-fw text-warning mr-2"></em>
                                        <span>Multiple installation</span>
                                    </p>
                                    <p>
                                        <em className="fa fa-times fa-fw text-warning mr-2"></em>
                                        <span>Not ready for resale</span>
                                    </p>
                                </CardBody>
                                <CardBody className="text-center">
                                    <a className="btn btn-secondary btn-lg" href="">Select this plan</a>
                                </CardBody>
                            </Card>
                        </Col>
                        {/* PLAN */}
                        <Col lg="4">
                            <Card className="b">
                                <CardBody className="text-center bg-green">
                                    <div className="text-bold">IDEAL</div>
                                    <h3 className="my-3">
                                        <sup>$</sup>
                                        <span className="text-lg">49</span>
                                        <span>/mo</span>
                                    </h3>
                                </CardBody>
                                <CardBody>
                                    <p>
                                        <em className="fa fa-check fa-fw text-green mr-2"></em>
                                        <span>Unlimited Styles</span>
                                    </p>
                                    <p>
                                        <em className="fa fa-check fa-fw text-green mr-2"></em>
                                        <span>RTL &amp; Translation</span>
                                    </p>
                                    <p>
                                        <em className="fa fa-check fa-fw text-green mr-2"></em>
                                        <span>Customer support</span>
                                    </p>
                                    <p>
                                        <em className="fa fa-check fa-fw text-green mr-2"></em>
                                        <span>Free Updates</span>
                                    </p>
                                    <p>
                                        <em className="fa fa-check fa-fw text-green mr-2"></em>
                                        <span>Limited to one client</span>
                                    </p>
                                    <p>
                                        <em className="fa fa-check fa-fw text-green mr-2"></em>
                                        <span>Multiple installation</span>
                                    </p>
                                    <p>
                                        <em className="fa fa-times fa-fw text-warning mr-2"></em>
                                        <span>Not ready for resale</span>
                                    </p>
                                </CardBody>
                                <CardBody className="text-center">
                                    <a className="btn btn-danger btn-lg" href="">Select this plan</a>
                                </CardBody>
                            </Card>
                        </Col>
                        {/* PLAN */}
                        <Col lg="4">
                            <Card className="b">
                                <CardBody className="text-center bb">
                                    <div className="text-bold">PREMIUM</div>
                                    <h3 className="my-3">
                                        <sup>$</sup>
                                        <span className="text-lg">95</span>
                                        <span>/mo</span>
                                    </h3>
                                </CardBody>
                                <CardBody>
                                    <p>
                                        <em className="fa fa-check fa-fw text-green mr-2"></em>
                                        <span>Unlimited Styles</span>
                                    </p>
                                    <p>
                                        <em className="fa fa-check fa-fw text-green mr-2"></em>
                                        <span>RTL &amp; Translation</span>
                                    </p>
                                    <p>
                                        <em className="fa fa-check fa-fw text-green mr-2"></em>
                                        <span>Customer support</span>
                                    </p>
                                    <p>
                                        <em className="fa fa-check fa-fw text-green mr-2"></em>
                                        <span>Free Updates</span>
                                    </p>
                                    <p>
                                        <em className="fa fa-check fa-fw text-green mr-2"></em>
                                        <span>Limited to one client</span>
                                    </p>
                                    <p>
                                        <em className="fa fa-check fa-fw text-green mr-2"></em>
                                        <span>Multiple installation</span>
                                    </p>
                                    <p>
                                        <em className="fa fa-check fa-fw text-green mr-2"></em>
                                        <span>Ready for resale*</span>
                                    </p>
                                </CardBody>
                                <CardBody className="text-center">
                                    <a className="btn btn-secondary btn-lg" href="">Select this plan</a>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <p className="text-center text-muted">
                        <small>* Subject to specific license terms. Price and features listed for demo only.</small>
                    </p>
                </Container>
            </ContentWrapper>
            );
    }

}

export default Plans;
