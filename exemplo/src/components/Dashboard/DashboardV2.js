import React, { Component } from 'react';
import { withNamespaces, Trans } from 'react-i18next';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Tooltip, Progress } from 'reactstrap';
// EasyPieChart
import EasyPieChart from 'easy-pie-chart';

import Sparkline from '../Common/Sparklines';
import FlotChart from '../Charts/Flot';

/**
 * Wrap an element and assign automatically an ID,
 * creates a handler to show/hide tooltips without
 * the hassle of creating new states and class methods.
 * Support only one child and simple text content.
 */
class BSTooltip extends Component {
    // static propTypes { content: PropTypes.string }
    state = {
        _id: 'id4tooltip_'+new Date().getUTCMilliseconds(),
        tooltipOpen: false
    }
    toggle = e => {
        this.setState({tooltipOpen: !this.state.tooltipOpen});
    }
    render() {
        return [
            <Tooltip {...this.props} isOpen={this.state.tooltipOpen} toggle={this.toggle} target={this.state._id} key='1'>
                {this.props.content}
            </Tooltip>,
            React.cloneElement(React.Children.only(this.props.children), {
                id: this.state._id,
                key: '2'
            })
        ]
    }
}


class DashboardV2 extends Component {

    state = {
        splineData: [{
            "label": "Hours",
            "color": "#23b7e5",
            "data": [
                ["Jan", 70],
                ["Feb", 20],
                ["Mar", 70],
                ["Apr", 85],
                ["May", 59],
                ["Jun", 93],
                ["Jul", 66],
                ["Aug", 86],
                ["Sep", 60],
                ["Oct", 60],
                ["Nov", 12],
                ["Dec", 50]
            ]
        }, {
            "label": "Commits",
            "color": "#7266ba",
            "data": [
                ["Jan", 20],
                ["Feb", 70],
                ["Mar", 30],
                ["Apr", 50],
                ["May", 85],
                ["Jun", 43],
                ["Jul", 96],
                ["Aug", 36],
                ["Sep", 80],
                ["Oct", 10],
                ["Nov", 72],
                ["Dec", 31]
            ]
        }],
        splineOptions: {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true,
                    radius: 4
                },
                splines: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 1,
                    fill: 0.5
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: (label, x, y) => x + ' : ' + y
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                min: 0,
                max: 150, // optional: use it for a clear represetation
                tickColor: '#eee',
                //position: 'right' or 'left',
                tickFormatter: v => v
            },
            shadowSize: 0
        },

        // Chart bar Stacked
        barStackedData: [{
            "label": "Pending",
            "color": "#9289ca",
            "data": [
                ["Pj1", 86],
                ["Pj2", 136],
                ["Pj3", 97],
                ["Pj4", 110],
                ["Pj5", 62],
                ["Pj6", 85],
                ["Pj7", 115],
                ["Pj8", 78],
                ["Pj9", 104],
                ["Pj10", 82],
                ["Pj11", 97],
                ["Pj12", 110],
                ["Pj13", 62]
            ]
        }, {
            "label": "Assigned",
            "color": "#7266ba",
            "data": [
                ["Pj1", 49],
                ["Pj2", 81],
                ["Pj3", 47],
                ["Pj4", 44],
                ["Pj5", 100],
                ["Pj6", 49],
                ["Pj7", 94],
                ["Pj8", 44],
                ["Pj9", 52],
                ["Pj10", 17],
                ["Pj11", 47],
                ["Pj12", 44],
                ["Pj13", 100]
            ]
        }, {
            "label": "Completed",
            "color": "#564aa3",
            "data": [
                ["Pj1", 29],
                ["Pj2", 56],
                ["Pj3", 14],
                ["Pj4", 21],
                ["Pj5", 5],
                ["Pj6", 24],
                ["Pj7", 37],
                ["Pj8", 22],
                ["Pj9", 28],
                ["Pj10", 9],
                ["Pj11", 14],
                ["Pj12", 21],
                ["Pj13", 5]
            ]
        }],
        barStackedOptions: {
            series: {
                stack: true,
                bars: {
                    align: 'center',
                    lineWidth: 0,
                    show: true,
                    barWidth: 0.6,
                    fill: 0.9
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: (label, x, y) => x + ' : ' + y
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                // position: 'right' or 'left'
                tickColor: '#eee'
            },
            shadowSize: 0
        },

        dropdownTranslateOpen: false,
        dropdownCardOpen: false,
        dropdownChartOpen: false
    }

    toggleDDTranslate = () => {
        this.setState({
            dropdownTranslateOpen: !this.state.dropdownTranslateOpen
        });
    }

    toggleDD = () => {
        this.setState({
            dropdownCardOpen: !this.state.dropdownCardOpen
        });
    }

    toggleDDChart = () => {
        this.setState({
            dropdownChartOpen: !this.state.dropdownChartOpen
        });
    }

    componentDidMount() {
        let pieOptions1 = {
             animate: {duration: 800, enabled: true},
             barColor:"#23b7e5",
             trackColor:"#edf2f6",
             scaleColor:false,
             lineWidth:2,
             lineCap:'round',
             size:130
        };
        new EasyPieChart(this.refs.easypiechart1, pieOptions1);
        let pieOptions2 = {
             animate: {duration: 800, enabled: true},
             barColor:"#f532e5",
             trackColor:"#edf2f6",
             scaleColor:false,
             lineWidth:2,
             lineCap:'round',
             size:130
        };
        new EasyPieChart(this.refs.easypiechart2, pieOptions2);
        let pieOptions3 = {
             animate: {duration: 800, enabled: true},
             barColor:"#7266ba",
             trackColor:"#edf2f6",
             scaleColor:false,
             lineWidth:2,
             lineCap:'round',
             size:130
        };
        new EasyPieChart(this.refs.easypiechart3, pieOptions3);
        let pieOptions4 = {
             animate: {duration: 800, enabled: true},
             barColor:"#ff902b",
             trackColor:"#edf2f6",
             scaleColor:false,
             lineWidth:2,
             lineCap:'round',
             size:130
        };
        new EasyPieChart(this.refs.easypiechart4, pieOptions4);
    }

    changeLanguage = lng => {
        this.props.i18n.changeLanguage(lng);
    }

    render() {

        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>Dashboard
                        <small><Trans i18nKey='dashboard.WELCOME'></Trans></small>
                    </div>
                    { /* START Language list */ }
                    <div className="ml-auto">
                        <Dropdown isOpen={this.state.dropdownTranslateOpen} toggle={this.toggleDDTranslate}>
                            <DropdownToggle>
                                English
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-right-forced animated fadeInUpShort">
                                <DropdownItem onClick={() => this.changeLanguage('en')}>English</DropdownItem>
                                <DropdownItem onClick={() => this.changeLanguage('es')}>Spanish</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    { /* END Language list */ }
                </div>
                <Row>
                    <Col xl={ 4 }>
                        { /* START List group */ }
                        <div className="list-group mb-3">
                            <div className="list-group-item">
                                <div className="d-flex align-items-center py-3">
                                    <div className="w-50 px-3">
                                        <p className="m-0 lead">1204</p>
                                        <p className="m-0 text-sm">Commits this month</p>
                                    </div>
                                    <div className="w-50 px-3 text-center">
                                        <Sparkline options={{
                                                barColor:"#23b7e5",
                                                height:"60",
                                                barWidth:"10",
                                                barSpacing:"6",
                                                chartRangeMin:"0"
                                            }}
                                            values="3,6,7,8,4,5"/>
                                    </div>
                                </div>
                            </div>
                            <div className="list-group-item">
                                <div className="d-flex align-items-center py-3">
                                    <div className="w-50 px-3">
                                        <p className="m-0 lead">$ 3,200.00</p>
                                        <p className="m-0 text-sm">Available budget</p>
                                    </div>
                                    <div className="w-50 px-3 text-center">
                                        <Sparkline options={{
                                                type:"line",
                                                height:"60",
                                                width:"80%",
                                                lineWidth:"2",
                                                lineColor:"#7266ba",
                                                chartRangeMin:"0",
                                                spotColor:"#888",
                                                minSpotColor:"#7266ba",
                                                maxSpotColor:"#7266ba",
                                                fillColor:"",
                                                highlightLineColor:"#fff",
                                                spotRadius:"3",
                                                resize:true
                                            }}
                                            values="7,3,4,7,5,9,4,4,7,5,9,6,4"/>

                                    </div>
                                </div>
                            </div>
                            <div className="list-group-item">
                                <div className="d-flex align-items-center py-3">
                                    <div className="w-50 px-3">
                                        <p className="m-0 lead">67</p>
                                        <p className="m-0 text-sm">New followers</p>
                                    </div>
                                    <div className="w-50 px-3 text-center">
                                        <div className="d-flex align-items-center flex-wrap justify-content-center">
                                            <BSTooltip placement="top" content="Katie">
                                                <img src="img/user/02.jpg" alt="Follower" className="circle thumb24 mx-1" />
                                            </BSTooltip>
                                            <BSTooltip placement="top" content="Cody">
                                                <img src="img/user/01.jpg" alt="Follower" className="circle thumb24 mx-1" />
                                            </BSTooltip>
                                            <BSTooltip placement="top" content="Tamara">
                                                <img src="img/user/03.jpg" alt="Follower" className="circle thumb24 mx-1" />
                                            </BSTooltip>
                                            <BSTooltip placement="top" content="Gene">
                                                <img src="img/user/04.jpg" alt="Follower" className="circle thumb24 mx-1" />
                                            </BSTooltip>
                                            <BSTooltip placement="top" content="Marsha">
                                                <img src="img/user/04.jpg" alt="Follower" className="circle thumb24 mx-1" />
                                            </BSTooltip>
                                            <BSTooltip placement="top" content="Robin">
                                                <img src="img/user/09.jpg" alt="Follower" className="circle thumb24 mx-1" />
                                            </BSTooltip>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        { /* END List group */ }
                    </Col>
                    <Col xl={ 8 }>
                        { /* START bar chart */ }
                        <div className="card" id="cardChart3">
                            <div className="card-header">
                                <Dropdown className="float-right" isOpen={this.state.dropdownCardOpen} toggle={this.toggleDD}>
                                    <DropdownToggle className="btn-sm">Monthly</DropdownToggle>
                                    <DropdownMenu className="dropdown-menu-right-forced fadeInLeft animated">
                                        <DropdownItem>Daily</DropdownItem>
                                        <DropdownItem>Monthly</DropdownItem>
                                        <DropdownItem>Yearly</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                <div className="card-title">Projects Hours</div>
                            </div>
                            <div className="card-body">
                                <FlotChart data={this.state.barStackedData} options={this.state.barStackedOptions} height="250px" />
                            </div>
                        </div>
                        { /* END bar chart */ }
                    </Col>
                </Row>
                <div className="unwrap my-3">
                    {/* START chart */}
                    <div className="card">
                        <div className="card-header">
                            {/* START button group */}
                            <Dropdown className="float-right" isOpen={this.state.dropdownChartOpen} toggle={this.toggleDDChart}>
                                <DropdownToggle className="btn-sm">All time</DropdownToggle>
                                <DropdownMenu className="dropdown-menu-right-forced fadeInLeft animated">
                                    <DropdownItem>Daily</DropdownItem>
                                    <DropdownItem>Monthly</DropdownItem>
                                    <DropdownItem>All time</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            {/* END button group */}
                            <div className="card-title">Overall progress</div>
                        </div>
                        <div className="card-body">
                            <FlotChart data={this.state.splineData} options={this.state.splineOptions} height="250px" />
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-3 col-6 text-center">
                                    <p>Projects</p>
                                    <div className="h1">25</div>
                                </div>
                                <div className="col-md-3 col-6 text-center">
                                    <p>Teammates</p>
                                    <div className="h1">85</div>
                                </div>
                                <div className="col-md-3 col-6 text-center">
                                    <p>Hours</p>
                                    <div className="h1">380</div>
                                </div>
                                <div className="col-md-3 col-6 text-center">
                                    <p>Budget</p>
                                    <div className="h1 text-truncate">$ 10,000.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END chart */}
                </div>
                { /* START radial charts */ }

                <div className="row mb-3">
                    <div className="col-lg-3 col-6 text-center">
                        <p>Current Project</p>
                        <div className="text-center py-4">
                            <div ref="easypiechart1" data-percent="60" className="easypie-chart easypie-chart-md">
                                <span>60%</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 text-center">
                        <p>Current Progress</p>
                        <div className="text-center py-4">
                            <div ref="easypiechart2" data-percent="30" className="easypie-chart easypie-chart-md">
                                <span>30%</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 text-center">
                        <p>Space Usage</p>
                        <div className="text-center py-4">
                            <div ref="easypiechart3" data-percent="50" className="easypie-chart easypie-chart-md">
                                <span>50%</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 text-center">
                        <p>Interactions</p>
                        <div className="text-center py-4">
                            <div ref="easypiechart4" data-percent="75" className="easypie-chart easypie-chart-md">
                                <span>75%</span>
                            </div>
                        </div>
                    </div>
                </div>
                { /* START radial charts */ }
                { /* START Multiple List group */ }
                <div className="list-group mb-3">
                    <div className="list-group-item list-group-item-action">
                        <table className="wd-wide">
                            <tbody>
                                <tr>
                                    <td className="wd-xs">
                                        <div className="px-2">
                                            <img className="img-fluid rounded thumb64" src="img/dummy.png" alt="Dummy" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2">
                                            <h4 className="mb-2">Project A</h4>
                                            <small className="text-muted">Vestibulum ante ipsum primis in faucibus orci</small>
                                        </div>
                                    </td>
                                    <td className="wd-sm  d-none d-lg-table-cell">
                                        <div className="px-2">
                                            <p className="m-0">Last change</p>
                                            <small className="text-muted">4 weeks ago</small>
                                        </div>
                                    </td>
                                    <td className="wd-xs d-none d-lg-table-cell">
                                        <div className="px-2">
                                            <p className="m-0 text-muted">
                                                <em className="icon-people mr-2 fa-lg"></em>26</p>
                                        </div>
                                    </td>
                                    <td className="wd-xs d-none d-lg-table-cell">
                                        <div className="px-2">
                                            <p className="m-0 text-muted">
                                                <em className="icon-doc mr-2 fa-lg"></em>3500</p>
                                        </div>
                                    </td>
                                    <td className="wd-sm">
                                        <div className="px-2">
                                            <Progress className="m-0 progress-xs" value="80" color="success"></Progress>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="list-group mb-3">
                    <div className="list-group-item list-group-item-action">
                        <table className="wd-wide">
                            <tbody>
                                <tr>
                                    <td className="wd-xs">
                                        <div className="px-2">
                                            <img className="img-fluid rounded thumb64" src="img/dummy.png" alt="Dummy" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2">
                                            <h4 className="mb-2">Project X</h4>
                                            <small className="text-muted">Vestibulum ante ipsum primis in faucibus orci</small>
                                        </div>
                                    </td>
                                    <td className="wd-sm d-none d-lg-table-cell">
                                        <div className="px-2">
                                            <p className="m-0">Last change</p>
                                            <small className="text-muted">Today at 06:23 am</small>
                                        </div>
                                    </td>
                                    <td className="wd-xs d-none d-lg-table-cell">
                                        <div className="px-2">
                                            <p className="m-0 text-muted">
                                                <em className="icon-people mr-2 fa-lg"></em>3</p>
                                        </div>
                                    </td>
                                    <td className="wd-xs d-none d-lg-table-cell">
                                        <div className="px-2">
                                            <p className="m-0 text-muted">
                                                <em className="icon-doc mr-2 fa-lg"></em>150</p>
                                        </div>
                                    </td>
                                    <td className="wd-sm">
                                        <div className="px-2">
                                            <Progress className="m-0 progress-xs" value="50" color="purple"></Progress>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="list-group mb-3">
                    <div className="list-group-item list-group-item-action">
                        <table className="wd-wide">
                            <tbody>
                                <tr>
                                    <td className="wd-xs">
                                        <div className="px-2">
                                            <img className="img-fluid rounded thumb64" src="img/dummy.png" alt="Dummy" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2">
                                            <h4 className="mb-2">Project Z</h4>
                                            <small className="text-muted">Vestibulum ante ipsum primis in faucibus orci</small>
                                        </div>
                                    </td>
                                    <td className="wd-sm d-none d-lg-table-cell">
                                        <div className="px-2">
                                            <p className="m-0">Last change</p>
                                            <small className="text-muted">Yesterday at 10:20 pm</small>
                                        </div>
                                    </td>
                                    <td className="wd-xs d-none d-lg-table-cell">
                                        <div className="px-2">
                                            <p className="m-0 text-muted">
                                                <em className="icon-people mr-2 fa-lg"></em>15</p>
                                        </div>
                                    </td>
                                    <td className="wd-xs d-none d-lg-table-cell">
                                        <div className="px-2">
                                            <p className="m-0 text-muted">
                                                <em className="icon-doc mr-2 fa-lg"></em>480</p>
                                        </div>
                                    </td>
                                    <td className="wd-sm">
                                        <div className="px-2">
                                            <Progress className="m-0 progress-xs" value="20" color="green"></Progress>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                { /* END Multiple List group */ }
            </ContentWrapper>
            );
    }

}

export default withNamespaces('translations')(DashboardV2);
