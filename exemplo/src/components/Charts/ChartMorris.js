import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

import MorrisChart from './Morris';

class ChartMorris extends Component {

    state = {
        // Data for charts
        chartdata: [
            { y: "2006", a: 100, b: 90 },
            { y: "2007", a: 75, b: 65 },
            { y: "2008", a: 50, b: 40 },
            { y: "2009", a: 75, b: 65 },
            { y: "2010", a: 50, b: 40 },
            { y: "2011", a: 75, b: 65 },
            { y: "2012", a: 100, b: 90 }
        ],
        donutdata: [
            {label: "Download Sales", value: 12},
            {label: "In-Store Sales", value: 30},
            {label: "Mail-Order Sales", value: 20}
        ],
        // Line Chart
        lineOptions: {
            element: 'morris-line',
            xkey: 'y',
            ykeys: ["a", "b"],
            labels: ["Serie A", "Serie B"],
            lineColors: ["#31C0BE", "#7a92a3"],
            resize: true
        },
        // Donut Chart
        donutOptions: {
            element: 'morris-donut',
            colors: ['#f05050', '#fad732', '#ff902b'],
            resize: true
        },
        // Bar Chart
        barOptions: {
            element: 'morris-bar',
            xkey: 'y',
            ykeys: ["a", "b"],
            labels: ["Series A", "Series B"],
            xLabelMargin: 2,
            barColors: ['#23b7e5', '#f05050'],
            resize: true
        },
        // Area Chart
        areaOptions: {
            element: 'morris-area',
            xkey: 'y',
            ykeys: ["a", "b"],
            labels: ["Serie A", "Serie B"],
            lineColors: ['#7266ba', '#23b7e5'],
            resize: true
        }
    }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">Morris JS</div>
                <Container fluid>
                    <Row>
                        <Col md={ 6 }>
                            <Card className="card-default">
                                <CardHeader>Line</CardHeader>
                                <CardBody>
                                    <MorrisChart id="morris-line" type={'Line'} data={this.state.chartdata} options={this.state.lineOptions} />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={ 6 }>
                            <Card className="card-default">
                                <CardHeader>Area</CardHeader>
                                <CardBody>
                                    <MorrisChart type={'Area'} id="morris-area" data={this.state.chartdata} options={this.state.areaOptions}/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 6 }>
                            <Card className="card-default">
                                <CardHeader>Bar</CardHeader>
                                <CardBody>
                                    <MorrisChart type={'Bar'} id="morris-bar" data={this.state.chartdata} options={this.state.barOptions}/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={ 6 }>
                            <Card className="card-default">
                                <CardHeader>Donut</CardHeader>
                                <CardBody>
                                    <MorrisChart type={'Donut'} id="morris-donut" data={this.state.donutdata} options={this.state.donutOptions}/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </ContentWrapper>
        );
    }

}

export default ChartMorris;

