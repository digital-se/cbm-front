import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';

import $ from 'jquery';
import * as CONST from '../Common/constants';
import EasyPieChart from 'easy-pie-chart';
// Knob charts
import 'jquery-knob/js/jquery.knob.js';

class ChartRadial extends Component {

    componentDidMount() {

        // Knob
        let knobLoaderOptions1 = {
            width: '50%', // responsive
            displayInput: true,
            fgColor: CONST.APP_COLORS['info']
        };
        $(this.refs.knobChart1).knob(knobLoaderOptions1);

        let knobLoaderOptions2 = {
            width: '50%', // responsive
            displayInput: true,
            fgColor: CONST.APP_COLORS['purple'],
            readOnly: true
        };
        $(this.refs.knobChart2).knob(knobLoaderOptions2);

        let knobLoaderOptions3 = {
            width: '50%', // responsive
            displayInput: true,
            fgColor: CONST.APP_COLORS['info'],
            bgColor: CONST.APP_COLORS['gray'],
            angleOffset: -125,
            angleArc: 250
        };
        $(this.refs.knobChart3).knob(knobLoaderOptions3);

        let knobLoaderOptions4 = {
            width: '50%', // responsive
            displayInput: true,
            fgColor: CONST.APP_COLORS['pink'],
            displayPrevious: true,
            thickness: 0.1,
            lineCap: 'round'
        };
        $(this.refs.knobChart4).knob(knobLoaderOptions4);

        // Easy pie
        let pieOptions1 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: CONST.APP_COLORS['success'],
            trackColor: false,
            scaleColor: false,
            lineWidth: 10,
            lineCap: 'circle'
        };
        new EasyPieChart(this.refs.easypie1, pieOptions1);

        let pieOptions2 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: CONST.APP_COLORS['warning'],
            trackColor: false,
            scaleColor: false,
            lineWidth: 4,
            lineCap: 'circle'
        };
        new EasyPieChart(this.refs.easypie2, pieOptions2);

        let pieOptions3 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: CONST.APP_COLORS['danger'],
            trackColor: false,
            scaleColor: CONST.APP_COLORS['gray'],
            lineWidth: 15,
            lineCap: 'circle'
        };
        new EasyPieChart(this.refs.easypie3, pieOptions3);

        let pieOptions4 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: CONST.APP_COLORS['danger'],
            trackColor: CONST.APP_COLORS['yellow'],
            scaleColor: CONST.APP_COLORS['gray-dark'],
            lineWidth: 15,
            lineCap: 'circle'
        };
        new EasyPieChart(this.refs.easypie4, pieOptions4);
    }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>Radial charts
                        <small>Canvas based &amp; No canvas Pure CSS radial progress bars solutions</small>
                    </div>
                </div>
                <h4 className="page-header">Knob</h4>
                <Row>
                    <Col md={ 3 } sm={ 6 }>
                        <Card className="text-center">
                            <CardHeader>Default</CardHeader>
                            <CardBody>
                                <input ref="knobChart1" type="text" defaultValue="80" />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={ 3 } sm={ 6 }>
                        <Card className="text-center">
                            <CardHeader>Ready only</CardHeader>
                            <CardBody>
                                <input ref="knobChart2" type="text" defaultValue="45" />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={ 3 } sm={ 6 }>
                        <Card className="text-center">
                            <CardHeader>Offset and arc</CardHeader>
                            <CardBody>
                                <input ref="knobChart3" type="text" defaultValue="30" />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={ 3 } sm={ 6 }>
                        <Card className="text-center">
                            <CardHeader>Display previous</CardHeader>
                            <CardBody>
                                <input ref="knobChart4" type="text" defaultValue="20" />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <h4 className="page-header">Easypie Charts</h4>
                <Row>
                    <Col md={ 3 } sm={ 6 }>
                        <Card className="text-center">
                            <CardHeader>Default</CardHeader>
                            <CardBody>
                                <div ref="easypie1" data-percent="85" className="easypie-chart">
                                    <span>85</span>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={ 3 } sm={ 6 }>
                        <Card className="text-center">
                            <CardHeader>Slim</CardHeader>
                            <CardBody>
                                <div ref="easypie2" data-percent="45" className="easypie-chart">
                                    <span>45</span>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={ 3 } sm={ 6 }>
                        <Card className="text-center">
                            <CardHeader>Track color</CardHeader>
                            <CardBody>
                                <div ref="easypie3" data-percent="25" className="easypie-chart">
                                    <span>25</span>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={ 3 } sm={ 6 }>
                        <Card className="text-center">
                            <CardHeader>Scale color</CardHeader>
                            <CardBody>
                                <div ref="easypie4" data-percent="60" className="easypie-chart">
                                    <span>60</span>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <h4 className="page-header">Pure CSS
                   <small>radial progress bars solutions</small>
                </h4>
                { /* START row */ }
                <Row>
                    <div className="col-lg-6">
                        { /* START card */ }
                        <Card className="text-center card-default">
                            <CardHeader>Radial Size</CardHeader>
                            <CardBody>
                                <Row>
                                    <Col md={ 3 }>
                                        <div data-label="85%" className="radial-bar radial-bar-85 radial-bar-lg"></div>
                                    </Col>
                                    <Col md={ 3 }>
                                        <div data-label="45%" className="radial-bar radial-bar-45"></div>
                                    </Col>
                                    <Col md={ 3 }>
                                        <div data-label="60%" className="radial-bar radial-bar-60 radial-bar-sm"></div>
                                    </Col>
                                    <Col md={ 3 }>
                                        <div data-label="20%" className="radial-bar radial-bar-20 radial-bar-xs"></div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        { /* END card */ }
                        { /* START card */ }
                        <Card className="text-center card-default">
                            <CardHeader>Radial with Images</CardHeader>
                            <CardBody>
                                <Row>
                                    <Col md={ 3 }>
                                        <div className="radial-bar radial-bar-20 radial-bar radial-bar-danger">
                                            <img src="img/user/03.jpg" alt="Thumbnail" />
                                        </div>
                                    </Col>
                                    <Col md={ 3 }>
                                        <div data-label="35%" className="radial-bar radial-bar-35 radial-bar-warning">
                                            <img src="img/user/01.jpg" alt="Thumbnail" />
                                        </div>
                                    </Col>
                                    <Col md={ 3 }>
                                        <div data-label="50%" className="radial-bar radial-bar-50 radial-bar-info">
                                            <img src="img/user/04.jpg" alt="Thumbnail" />
                                        </div>
                                    </Col>
                                    <Col md={ 3 }>
                                        <div data-label="100%" className="radial-bar radial-bar-100 radial-bar-success">
                                            <img src="img/user/05.jpg" alt="Thumbnail" />
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        { /* END card */ }
                        { /* START card */ }
                        <Card className="text-center card-default">
                            <CardHeader>Radial with Tooltips</CardHeader>
                            <CardBody>
                                <Row>
                                    <Col md={ 3 }>
                                        <br/>
                                        <div data-label="85%" data-title="85%" className="radial-bar radial-bar-85"></div>
                                    </Col>
                                    <Col md={ 3 }>
                                        <br/>
                                        <div data-label="45%" data-title="45%" className="radial-bar radial-bar-45"></div>
                                    </Col>
                                    <Col md={ 3 }>
                                        <br/>
                                        <div data-label="60%" data-title="60%" className="radial-bar radial-bar-60"></div>
                                    </Col>
                                    <Col md={ 3 }>
                                        <br/>
                                        <div data-label="20%" data-title="20%" className="radial-bar radial-bar-20"></div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        { /* END card */ }
                    </div>
                    <div className="col-lg-6">
                        { /* START card */ }
                        <Card className="text-center card-default">
                            <CardHeader>Radial Variants</CardHeader>
                            <CardBody>
                                <Row>
                                    <Col md={ 3 }>
                                        <div data-label="20%" className="radial-bar radial-bar-20 radial-bar-lg radial-bar-danger"></div>
                                    </Col>
                                    <Col md={ 3 }>
                                        <div data-label="35%" className="radial-bar radial-bar-35 radial-bar-lg radial-bar-warning"></div>
                                    </Col>
                                    <Col md={ 3 }>
                                        <div data-label="50%" className="radial-bar radial-bar-50 radial-bar-lg radial-bar-info"></div>
                                    </Col>
                                    <Col md={ 3 }>
                                        <div data-label="100%" className="radial-bar radial-bar-100 radial-bar-lg radial-bar-success"></div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        { /* END card */ }
                        { /* START card */ }
                        <Card className="card-default">
                            <CardHeader>Radial applications</CardHeader>
                            <CardBody className="text-center">
                                <div data-label="85%" className="radial-bar radial-bar-85 radial-bar-lg"></div>
                                <p>Visitors</p>
                            </CardBody>
                            <CardFooter className="text-center">
                                <Row>
                                    <Col md={ 4 }>
                                        <div data-label="35%" className="radial-bar radial-bar-warning radial-bar-35 radial-bar-sm"></div>
                                        <p>
                                            <small>Conversions</small>
                                        </p>
                                    </Col>
                                    <Col md={ 4 }>
                                        <div data-label="45%" className="radial-bar radial-bar-info radial-bar-45 radial-bar-sm"></div>
                                        <p>
                                            <small>Recurrent</small>
                                        </p>
                                    </Col>
                                    <Col md={ 4 }>
                                        <div data-label="20%" className="radial-bar radial-bar-success radial-bar-20 radial-bar-sm"></div>
                                        <p>
                                            <small>Uniques</small>
                                        </p>
                                    </Col>
                                </Row>
                            </CardFooter>
                        </Card>
                        { /* END card */ }
                    </div>
                </Row>
                { /* END row */ }
            </ContentWrapper>
            );
    }

}

export default ChartRadial;
