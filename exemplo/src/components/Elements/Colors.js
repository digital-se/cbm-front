import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Card, CardBody, Row, Col } from 'reactstrap';

class Colors extends Component {

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>Colors
                        <small>Color swatches</small>
                    </div>
                </div>
                <Card className="card-default">
                    <CardBody>
                        <Row className="row-flush">
                            <Col xs="12" md="4">
                                <div className="box-placeholder b0 w-100 bg-primary-light">.bg-primary-light</div>
                            </Col>
                            <Col xs="12" md="4">
                                <div className="box-placeholder b0 w-100 bg-primary">.bg-primary</div>
                            </Col>
                            <Col xs="12" md="4">
                                <div className="box-placeholder b0 w-100 bg-primary-dark">.bg-primary-dark</div>
                            </Col>
                        </Row>
                        <Row className="row-flush">
                            <Col xs="12" md="4">
                                <div className="box-placeholder b0 w-100 bg-success-light">.bg-success-light</div>
                            </Col>
                            <Col xs="12" md="4">
                                <div className="box-placeholder b0 w-100 bg-success">.bg-success</div>
                            </Col>
                            <Col xs="12" md="4">
                                <div className="box-placeholder b0 w-100 bg-success-dark">.bg-success-dark</div>
                            </Col>
                        </Row>
                        <Row className="row-flush">
                            <Col xs="12" md="4">
                                <div className="box-placeholder b0 w-100 bg-info-light">.bg-info-light</div>
                            </Col>
                            <Col xs="12" md="4">
                                <div className="box-placeholder b0 w-100 bg-info">.bg-info</div>
                            </Col>
                            <Col xs="12" md="4">
                                <div className="box-placeholder b0 w-100 bg-info-dark">.bg-info-dark</div>
                            </Col>
                        </Row>
                        <Row className="row-flush">
                            <Col xs="12" md="4">
                                <div className="box-placeholder b0 w-100 bg-warning-light">.bg-warning-light</div>
                            </Col>
                            <Col xs="12" md="4">
                                <div className="box-placeholder b0 w-100 bg-warning">.bg-warning</div>
                            </Col>
                            <Col xs="12" md="4">
                                <div className="box-placeholder b0 w-100 bg-warning-dark">.bg-warning-dark</div>
                            </Col>
                        </Row>
                        <Row className="row-flush">
                            <Col xs="12" md="4">
                                <div className="box-placeholder b0 w-100 bg-danger-light">.bg-danger-light</div>
                            </Col>
                            <Col xs="12" md="4">
                                <div className="box-placeholder b0 w-100 bg-danger">.bg-danger</div>
                            </Col>
                            <Col xs="12" md="4">
                                <div className="box-placeholder b0 w-100 bg-danger-dark">.bg-danger-dark</div>
                            </Col>
                        </Row>
                        <Row className="row-flush">
                            <Col xs="12" md="4">
                                <div className="box-placeholder b0 w-100 bg-inverse-light">.bg-inverse-light</div>
                            </Col>
                            <Col xs="12" md="4">
                                <div className="box-placeholder b0 w-100 bg-inverse">.bg-inverse</div>
                            </Col>
                            <Col xs="12" md="4">
                                <div className="box-placeholder b0 w-100 bg-inverse-dark">.bg-inverse-dark</div>
                            </Col>
                        </Row>
                        <Row className="row-flush">
                            <Col xs="12" md="4">
                                <div className="box-placeholder b0 w-100 bg-green-light">.bg-green-light</div>
                            </Col>
                            <Col xs="12" md="4">
                                <div className="box-placeholder b0 w-100 bg-green">.bg-green</div>
                            </Col>
                            <Col xs="12" md="4">
                                <div className="box-placeholder b0 w-100 bg-green-dark">.bg-green-dark</div>
                            </Col>
                        </Row>
                        <Row className="row-flush">
                            <Col xs="12" md="4">
                                <div className="box-placeholder b0 w-100 bg-pink-light">.bg-pink-light</div>
                            </Col>
                            <Col xs="12" md="4">
                                <div className="box-placeholder b0 w-100 bg-pink">.bg-pink</div>
                            </Col>
                            <Col xs="12" md="4">
                                <div className="box-placeholder b0 w-100 bg-pink-dark">.bg-pink-dark</div>
                            </Col>
                        </Row>
                        <Row className="row-flush">
                            <Col xs="12" md="4">
                                <div className="box-placeholder b0 w-100 bg-purple-light">.bg-purple-light</div>
                            </Col>
                            <Col xs="12" md="4">
                                <div className="box-placeholder b0 w-100 bg-purple">.bg-purple</div>
                            </Col>
                            <Col xs="12" md="4">
                                <div className="box-placeholder b0 w-100 bg-purple-dark">.bg-purple-dark</div>
                            </Col>
                        </Row>
                        <Row className="row-flush">
                            <Col xs="12" md="4">
                                <div className="box-placeholder b0 w-100 bg-yellow-light">.bg-yellow-light</div>
                            </Col>
                            <Col xs="12" md="4">
                                <div className="box-placeholder b0 w-100 bg-yellow">.bg-yellow</div>
                            </Col>
                            <Col xs="12" md="4">
                                <div className="box-placeholder b0 w-100 bg-yellow-dark">.bg-yellow-dark</div>
                            </Col>
                        </Row>
                        <Row className="row-flush">
                            <Col className="text-center d-flex">
                                <div className="box-placeholder b0 w-100 bg-gray-darker">.bg-gray-darker</div>
                            </Col>
                            <Col className="text-center d-flex">
                                <div className="box-placeholder b0 w-100 bg-gray-dark">.bg-gray-dark</div>
                            </Col>
                            <Col className="text-center d-flex">
                                <div className="box-placeholder b0 w-100 bg-gray">.bg-gray</div>
                            </Col>
                            <Col className="text-center d-flex">
                                <div className="box-placeholder b0 w-100 bg-gray-light">.bg-gray-light</div>
                            </Col>
                            <Col className="text-center d-flex">
                                <div className="box-placeholder b0 w-100 bg-gray-lighter">.bg-gray-lighter</div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </ContentWrapper>
            );
    }

}

export default Colors;