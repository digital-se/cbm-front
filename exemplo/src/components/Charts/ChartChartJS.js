import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Container, Row, Col, Card } from 'reactstrap';

import { Line as LineChart, Bar as BarChart, Doughnut as DoughnutChart, Pie as PieChart, Polar as PolarChart, Radar as RadarChart } from 'react-chartjs-2';
import { Line, Bar, Doughnut, Pie, Polar, Radar } from './ChartChartJS.setup';

class ChartChartJS extends Component {

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">Chart JS</div>
                <Container fluid className="container-lg">
                    <Row className="mb-3">
                        <Col lg={ 6 }>
                            <h3 className="mb-3 py-2">Line Chart</h3>
                            <Card body>
                                <LineChart data={Line.data} options={Line.options} width={600} height={300}/>
                            </Card>
                        </Col>
                        <Col lg={ 6 }>
                            <h3 className="mb-3 py-2">Bar Chart</h3>
                            <div>
                                <Card body>
                                    <BarChart data={Bar.data} options={Bar.options} width={600} height={300}/>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col lg={ 6 }>
                            <h3 className="mb-3 py-2">Polar Area Chart</h3>
                            <div>
                                <Card body>
                                    <PolarChart data={Polar.data} options={Polar.options} width={600} height={300}/>
                                </Card>
                            </div>
                        </Col>
                        <Col lg={ 6 }>
                            <h3 className="mb-3 py-2">Radar Chart</h3>
                            <div>
                                <Card body>
                                    <RadarChart data={Radar.data} options={Radar.options} width={600} height={300}/>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col lg={ 6 }>
                            <h3 className="mb-3 py-2">Pie Chart</h3>
                            <div>
                                <Card body>
                                    <PieChart data={Pie.data} options={Pie.options} width={600} height={300}/>
                                </Card>
                            </div>
                        </Col>
                        <Col lg={ 6 }>
                            <h3 className="mb-3 py-2">Doughnut Chart</h3>
                            <div>
                                <Card body>
                                    <DoughnutChart data={Doughnut.data} options={Doughnut.options} width={600} height={300}/>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </ContentWrapper>
            );
    }

}

export default ChartChartJS;
