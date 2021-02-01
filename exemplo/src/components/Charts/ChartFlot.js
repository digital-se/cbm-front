import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

import Sparkline from '../Common/Sparklines.js';
import FlotChart from './Flot';
import { ChartSpline, ChartArea, ChartBar, ChartBarStacked, ChartDonut, ChartLine, ChartPie } from './ChartFlot.setup.js';

class ChartFlot extends Component {

    state = {
        sparkOptions: {
            barColor: '#cfdbe2',
            height: 20,
            barWidth: 3,
            barSpacing: 2,
        },
        sparkValues: [1,0,4,9,5,7,8,9,5,7,8,4,7]
    }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">Flot charts
                    <div className="ml-auto text-center">
                        <Sparkline options={this.state.sparkOptions} values={this.state.sparkValues} />
                    </div>
                </div>
                <Container fluid>
                    { /* START row */ }
                    <Row>
                        <Col lg={ 6 }>
                            <Card className="card-default">
                                <CardHeader>Area</CardHeader>
                                <CardBody>
                                    <FlotChart options={ChartArea.options} data={ChartArea.data} className="flot-chart" height="250px"/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={ 6 }>
                            <Card className="card-default">
                                <CardHeader>Area Spline</CardHeader>
                                <CardBody>
                                    <FlotChart options={ChartSpline.options} data={ChartSpline.data} className="flot-chart" height="250px"/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    { /* END row */ }
                    { /* START row */ }
                    <Row>
                        <Col lg={ 6 }>
                            <Card className="card-default">
                                <CardHeader>Bar</CardHeader>
                                <CardBody>
                                    <FlotChart options={ChartBar.options} data={ChartBar.data} className="flot-chart" height="250px"/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={ 6 }>
                            <Card className="card-default">
                                <CardHeader>Bar - Stacked</CardHeader>
                                <CardBody>
                                    <FlotChart options={ChartBarStacked.options} data={ChartBarStacked.data} className="flot-chart" height="250px"/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    { /* END row */ }
                    { /* START row */ }
                    <Row>
                        <Col lg={ 12 }>
                            <Card className="card-default">
                                <CardHeader>Line</CardHeader>
                                <CardBody>
                                    <FlotChart options={ChartLine.options} data={ChartLine.data} className="flot-chart" height="250px"/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    { /* END row */ }
                    { /* START row */ }
                    <Row>
                        <Col md={ 6 }>
                            <Card className="card-default">
                                <CardHeader>Pie</CardHeader>
                                <CardBody>
                                    <FlotChart options={ChartPie.options} data={ChartPie.data} className="flot-chart" height="250px"/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={ 6 }>
                            <Card className="card-default">
                                <CardHeader>Donut (loaded from json)</CardHeader>
                                <CardBody>
                                    <FlotChart options={ChartDonut.options} data={ChartDonut.data} className="flot-chart" height="250px"/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    { /* END row */ }
                </Container>
            </ContentWrapper>
            );
    }

}

export default ChartFlot;
