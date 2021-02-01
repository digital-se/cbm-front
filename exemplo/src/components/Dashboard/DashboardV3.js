import React, { Component } from 'react';
import { withNamespaces, Trans } from 'react-i18next';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
// EasyPieChart
import EasyPieChart from 'easy-pie-chart';

import Sparkline from '../Common/Sparklines';
import Scrollable from '../Common/Scrollable'
import FlotChart from '../Charts/Flot';
import VectorMap from '../Maps/VectorMap';

const defaultColors = {
    markerColor:  '#23b7e5',      // the marker points
    bgColor:      'transparent',  // the background
    scaleColors:  ['#878c9a'],    // the color of the region in the serie
    regionFill:   '#bbbec6'       // the base region color
};

const RegionValues = {
    'CA': 11100,   // Canada
    'DE': 2510,    // Germany
    'FR': 3710,    // France
    'AU': 5710,    // Australia
    'GB': 8310,    // Great Britain
    'RU': 9310,    // Russia
    'BR': 6610,    // Brazil
    'IN': 7810,    // India
    'CN': 4310,    // China
    'US': 839,     // USA
    'SA': 410      // Saudi Arabia
}


class DashboardV3 extends Component {

    state = {
        splineData: [{
            "label": "Home",
            "color": "#1ba3cd",
            "data": [
                ["1", 38],
                ["2", 40],
                ["3", 42],
                ["4", 48],
                ["5", 50],
                ["6", 70],
                ["7", 145],
                ["8", 70],
                ["9", 59],
                ["10", 48],
                ["11", 38],
                ["12", 29],
                ["13", 30],
                ["14", 22],
                ["15", 28]
            ]
        }, {
            "label": "Overall",
            "color": "#3a3f51",
            "data": [
                ["1", 16],
                ["2", 18],
                ["3", 17],
                ["4", 16],
                ["5", 30],
                ["6", 110],
                ["7", 19],
                ["8", 18],
                ["9", 110],
                ["10", 19],
                ["11", 16],
                ["12", 10],
                ["13", 20],
                ["14", 10],
                ["15", 20]
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

        // VectorMap
        series: {
            regions: [{
                values: RegionValues,
                scale: defaultColors.scaleColors,
                normalizeFunction: 'polynomial'
            }]
        },
        markers: [
            { latLng:[41.90, 12.45],  name:'Vatican City'          },
            { latLng:[43.73, 7.41],   name:'Monaco'                },
            { latLng:[-0.52, 166.93], name:'Nauru'                 },
            { latLng:[-8.51, 179.21], name:'Tuvalu'                },
            { latLng:[7.11,171.06],   name:'Marshall Islands'      },
            { latLng:[17.3,-62.73],   name:'Saint Kitts and Nevis' },
            { latLng:[3.2,73.22],     name:'Maldives'              },
            { latLng:[35.88,14.5],    name:'Malta'                 },
            { latLng:[41.0,-71.06],   name:'New England'           },
            { latLng:[12.05,-61.75],  name:'Grenada'               },
            { latLng:[13.16,-59.55],  name:'Barbados'              },
            { latLng:[17.11,-61.85],  name:'Antigua and Barbuda'   },
            { latLng:[-4.61,55.45],   name:'Seychelles'            },
            { latLng:[7.35,134.46],   name:'Palau'                 },
            { latLng:[42.5,1.51],     name:'Andorra'               }
        ],
        options: {
            map: 'world_mill_en',
            backgroundColor: defaultColors.bgColor,
            zoomMin: 1,
            zoomMax: 8,
            zoomOnScroll: false,
            regionStyle: {
                initial: {
                    'fill': defaultColors.regionFill,
                    'fill-opacity': 1,
                    'stroke': 'none',
                    'stroke-width': 1.5,
                    'stroke-opacity': 1
                },
                hover: {
                    'fill-opacity': 0.8
                },
                selected: {
                    fill: 'blue'
                },
                selectedHover: {}
            },
            focusOn: {
                x: 0.4,
                y: 0.6,
                scale: 1
            },
            markerStyle: {
                initial: {
                    fill: defaultColors.markerColor,
                    stroke: defaultColors.markerColor
                }
            },
            onRegionLabelShow: (e, el, code) => {
                if (RegionValues[code])
                    el.html(el.html() + ': ' + RegionValues[code] + ' visitors');
            }
        },

        dropdownTranslateOpen: false,
        activeTab: 'tasks',

    }

    toggleDDTranslate = () => {
        this.setState({
            dropdownTranslateOpen: !this.state.dropdownTranslateOpen
        });
    }

    toggleTab = tab => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    componentDidMount() {

        // EasyPieChar
        let pieOptions1 = {
             animate: {duration: 800, enabled: true},
             barColor:"#23b7e5",
             trackColor:"rgba(200,200,200,0.4)",
             scaleColor:false,
             lineWidth:10,
             lineCap:'round',
             size:145
        };
        new EasyPieChart(this.refs.easypiechart, pieOptions1);
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
                    <div className="col-xl-3 col-md-6">
                        {/* START widget */}
                        <div className="card bg-info-light pt-2 b0">
                            <div className="px-2">
                                <em className="icon-cloud-upload fa-lg float-right"></em>
                                <div className="h2 mt0">1700</div>
                                <div className="text-uppercase">Uploads</div>
                            </div>
                            <Sparkline options={{
                                    type:"line",
                                    width:"100%",
                                    height:"75px",
                                    lineColor:"#23b7e5",
                                    chartRangeMin:"0",
                                    fillColor:"#23b7e5",
                                    spotColor:"#23b7e5",
                                    minSpotColor:"#23b7e5",
                                    maxSpotColor:"#23b7e5",
                                    highlightSpotColor:"#23b7e5",
                                    highlightLineColor:"#23b7e5",
                                    resize:true
                                }}
                                values="2,5,3,7,4,5"
                                style={{ marginBottom: "-2px"}}
                            />
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        {/* START widget */}
                        <div className="card bg-purple-light pt-2 b0">
                            <div className="px-2">
                                <em className="icon-globe fa-lg float-right"></em>
                                <div className="h2 mt0">700
                                    <span className="text-sm text-white">GB</span>
                                </div>
                                <div className="text-uppercase">Quota</div>
                            </div>
                            <Sparkline options={{
                                    type:"line",
                                    width:"100%",
                                    height:"75px",
                                    lineColor:"#7266ba",
                                    chartRangeMin:"0",
                                    fillColor:"#7266ba",
                                    spotColor:"#7266ba",
                                    minSpotColor:"#7266ba",
                                    maxSpotColor:"#7266ba",
                                    highlightSpotColor:"#7266ba",
                                    highlightLineColor:"#7266ba",
                                    resize:true
                                }}
                                values="1,4,5,4,8,7,10"
                                style={{ marginBottom: "-2px"}}
                            />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-12">
                        {/* START widget */}
                        <div className="card bg-info-light pt-2 b0">
                            <div className="px-2">
                                <em className="icon-bubbles fa-lg float-right"></em>
                                <div className="h2 mt0">500</div>
                                <div className="text-uppercase">Reviews</div>
                            </div>
                            <Sparkline options={{
                                    type:"line",
                                    width:"100%",
                                    height:"75px",
                                    lineColor:"#23b7e5",
                                    chartRangeMin:"0",
                                    fillColor:"#23b7e5",
                                    spotColor:"#23b7e5",
                                    minSpotColor:"#23b7e5",
                                    maxSpotColor:"#23b7e5",
                                    highlightSpotColor:"#23b7e5",
                                    highlightLineColor:"#23b7e5",
                                    resize:true
                                }}
                                values="4,5,3,10,7,15"
                                style={{ marginBottom: "-2px"}}
                            />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-12">
                        {/* START widget */}
                        <div className="card bg-purple-light pt-2 b0">
                            <div className="px-2">
                                <em className="icon-pencil fa-lg float-right"></em>
                                <div className="h2 mt0">35</div>
                                <div className="text-uppercase">Annotations</div>
                            </div>
                            <Sparkline options={{
                                    type:"line",
                                    width:"100%",
                                    height:"75px",
                                    lineColor:"#7266ba",
                                    chartRangeMin:"0",
                                    fillColor:"#7266ba",
                                    spotColor:"#7266ba",
                                    minSpotColor:"#7266ba",
                                    maxSpotColor:"#7266ba",
                                    highlightSpotColor:"#7266ba",
                                    highlightLineColor:"#7266ba",
                                    resize:true
                                }}
                                values="1,3,4,5,7,8"
                                style={{ marginBottom: "-2px"}}
                            />
                        </div>
                    </div>
                </Row>

                { /* START chart*/ }
                <Row>
                    <div className="col-xl-12">
                        <div className="card card-default" id="cardChart9">
                            <div className="card-header">
                                <div className="card-title">Website Performance</div>
                            </div>
                            <div className="card-body">
                                <FlotChart data={this.state.splineData} options={this.state.splineOptions} height="250px" />
                            </div>
                        </div>
                    </div>
                </Row>
                { /* END chart*/ }
                <Row>
                    <Col lg={ 6 }>
                        { /* START panel tab */ }
                        <div className="card card-transparent">
                            <Nav tabs justified>
                                <NavItem>
                                    <NavLink className={ this.state.activeTab === 'tasks' ? 'active':'' }
                                        onClick={() => { this.toggleTab('tasks'); }}
                                    >
                                        <em className="far fa-clock fa-fw"></em>Tasks card
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={ this.state.activeTab === 'trans' ? 'active':'' }
                                        onClick={() => { this.toggleTab('trans'); }}
                                    >
                                        <em className="far fa-money-bill-alt fa-fw"></em>Transactions card
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={this.state.activeTab} className="bg-white p-0">
                                <TabPane tabId="tasks">
                                    {/* START list group */}
                                    <div className="list-group mb0">
                                        <div className="list-group-item bt0">
                                            <span className="badge badge-purple float-right">just now</span>
                                            <em className="fa-fw fas fa-calendar-alt mr-2"></em>Calendar updated
                                        </div>
                                        <div className="list-group-item">
                                            <span className="badge badge-purple float-right">4 minutes ago</span>
                                            <em className="fa-fw fa fa-comment mr-2"></em>Commented on a post
                                        </div>
                                        <div className="list-group-item">
                                            <span className="badge badge-purple float-right">23 minutes ago</span>
                                            <em className="fa-fw fa fa-truck mr-2"></em>Order 392 shipped
                                        </div>
                                        <div className="list-group-item">
                                            <span className="badge badge-purple float-right">46 minutes ago</span>
                                            <em className="fa-fw far fa-money-bill-alt mr-2"></em>Invoice 653 has been paid
                                        </div>
                                        <div className="list-group-item">
                                            <span className="badge badge-purple float-right">1 hour ago</span>
                                            <em className="fa-fw fa fa-user mr-2"></em>A new user has been added
                                        </div>
                                        <div className="list-group-item">
                                            <span className="badge badge-purple float-right">2 hours ago</span>
                                            <em className="fa-fw fa fa-check mr-2"></em>Completed task: "pick up dry cleaning"
                                        </div>
                                        <div className="list-group-item">
                                            <span className="badge badge-purple float-right">yesterday</span>
                                            <em className="fa-fw fa fa-globe mr-2"></em>Saved the world
                                        </div>
                                        <div className="list-group-item">
                                            <span className="badge badge-purple float-right">two days ago</span>
                                            <em className="fa-fw fa fa-check mr-2"></em>Completed task: "fix error on sales page"
                                        </div>
                                        <div className="list-group-item">
                                            <span className="badge badge-purple float-right">two days ago</span>
                                            <em className="fa-fw fa fa-check mr-2"></em>Completed task: "fix error on sales page"
                                        </div>
                                    </div>
                                    {/* END list group */}
                                    <div className="card-footer text-right">
                                        <button className="btn btn-secondary btn-sm" type="button">View All Activity</button>
                                    </div>
                                </TabPane>
                                <TabPane tabId="trans">
                                    {/* START table responsive */}
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-hover table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Order #</th>
                                                    <th>Order Date</th>
                                                    <th>Order Time</th>
                                                    <th>Amount (USD)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>3326</td>
                                                    <td>10/21/2013</td>
                                                    <td>3:29 PM</td>
                                                    <td>$321.33</td>
                                                </tr>
                                                <tr>
                                                    <td>3325</td>
                                                    <td>10/21/2013</td>
                                                    <td>3:20 PM</td>
                                                    <td>$234.34</td>
                                                </tr>
                                                <tr>
                                                    <td>3324</td>
                                                    <td>10/21/2013</td>
                                                    <td>3:03 PM</td>
                                                    <td>$724.17</td>
                                                </tr>
                                                <tr>
                                                    <td>3323</td>
                                                    <td>10/21/2013</td>
                                                    <td>3:00 PM</td>
                                                    <td>$23.71</td>
                                                </tr>
                                                <tr>
                                                    <td>3322</td>
                                                    <td>10/21/2013</td>
                                                    <td>2:49 PM</td>
                                                    <td>$8345.23</td>
                                                </tr>
                                                <tr>
                                                    <td>3321</td>
                                                    <td>10/21/2013</td>
                                                    <td>2:23 PM</td>
                                                    <td>$245.12</td>
                                                </tr>
                                                <tr>
                                                    <td>3320</td>
                                                    <td>10/21/2013</td>
                                                    <td>2:15 PM</td>
                                                    <td>$5663.54</td>
                                                </tr>
                                                <tr>
                                                    <td>3319</td>
                                                    <td>10/21/2013</td>
                                                    <td>2:13 PM</td>
                                                    <td>$943.45</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* END table responsive */}
                                    <div className="card-footer text-right">
                                        <a className="btn btn-secondary btn-sm" href="">View All Transactions</a>
                                    </div>
                                </TabPane>
                            </TabContent>
                        </div>
                        { /* END panel tab */ }
                    </Col>
                    <Col lg={ 6 }>
                        <div className="card card-transparent">
                            <VectorMap height="450px" options={this.state.options} series={this.state.series} markers={this.state.markers}/>
                        </div>
                    </Col>
                </Row>
                { /* START Widgets*/ }
                <Row>
                    <Col lg={ 3 }>
                        { /* START loader widget*/ }
                        <div className="card card-default">
                            <div className="card-body">
                                <a className="text-muted float-right" href="">
                                    <em className="fa fa-arrow-right"></em>
                                </a>
                                <div className="text-info">Average Monthly Uploads</div>
                                <div className="text-center py-4">
                                    <div ref="easypiechart" data-percent="70" className="easypie-chart easypie-chart-lg">
                                        <span>70%</span>
                                    </div>
                                </div>
                                <Sparkline options={{
                                        barColor:"#23b7e5",
                                        height:"30",
                                        barWidth:"5",
                                        barSpacing:"2"
                                    }}
                                    values="5,4,8,7,8,5,4,6,5,5,9,4,6,3,4,7,5,4,7"
                                    className="text-center"/>
                            </div>
                            <div className="card-footer">
                                <p className="text-muted">
                                    <em className="fa fa-upload fa-fw"></em>
                                    <span>This Month</span>
                                    <span className="text-dark">1000 Gb</span>
                                </p>
                            </div>
                        </div>
                        { /* END loader widget*/ }
                    </Col>
                    <Col lg={ 3 }>
                        { /* START messages and activity*/ }
                        <div className="card card-default">
                            <div className="card-header">
                                <div className="card-title">Latest activities</div>
                            </div>
                            {/* START list group */}
                            <div className="list-group">
                                {/* START list group item */}
                                <div className="list-group-item">
                                    <div className="media">
                                        <div className="align-self-start mr-2">
                                            <span className="fa-stack">
                                                <em className="fa fa-circle fa-stack-2x text-purple"></em>
                                                <em className="fas fa-cloud-upload-alt fa-stack-1x fa-inverse text-white"></em>
                                             </span>
                                        </div>
                                        <div className="media-body text-truncate">
                                            <p className="mb-1"><a className="text-purple m-0" href="">NEW FILE</a>
                                            </p>
                                            <p className="m-0">
                                                <small><a href="">Bootstrap.xls</a>
                                                    </small>
                                            </p>
                                        </div>
                                        <div className="ml-auto">
                                            <small className="text-muted ml-2">15m</small>
                                        </div>
                                    </div>
                                </div>
                                {/* END list group item */}
                                {/* START list group item */}
                                <div className="list-group-item">
                                    <div className="media">
                                        <div className="align-self-start mr-2">
                                            <span className="fa-stack">
                                                <em className="fa fa-circle fa-stack-2x text-info"></em>
                                                <em className="far fa-file-alt fa-stack-1x fa-inverse text-white"></em>
                                             </span>
                                        </div>
                                        <div className="media-body text-truncate">
                                            <p className="mb-1"><a className="text-info m-0" href="">NEW DOCUMENT</a>
                                            </p>
                                            <p className="m-0">
                                                <small><a href="">Bootstrap.doc</a>
                                                    </small>
                                            </p>
                                        </div>
                                        <div className="ml-auto">
                                            <small className="text-muted ml-2">2h</small>
                                        </div>
                                    </div>
                                </div>
                                {/* END list group item */}
                                {/* START list group item */}
                                <div className="list-group-item">
                                    <div className="media">
                                        <div className="align-self-start mr-2">
                                            <span className="fa-stack">
                                                <em className="fa fa-circle fa-stack-2x text-danger"></em>
                                                <em className="fa fa-exclamation fa-stack-1x fa-inverse text-white"></em>
                                             </span>
                                        </div>
                                        <div className="media-body text-truncate">
                                            <p className="mb-1"><a className="text-danger m-0" href="">BROADCAST</a>
                                            </p>
                                            <p className="m-0"><a href="">Read</a>
                                            </p>
                                        </div>
                                        <div className="ml-auto">
                                            <small className="text-muted ml-2">5h</small>
                                        </div>
                                    </div>
                                </div>
                                {/* END list group item */}
                                {/* START list group item */}
                                <div className="list-group-item">
                                    <div className="media">
                                        <div className="align-self-start mr-2">
                                            <span className="fa-stack">
                                                <em className="fa fa-circle fa-stack-2x text-success"></em>
                                                <em className="far fa-clock fa-stack-1x fa-inverse text-white"></em>
                                             </span>
                                        </div>
                                        <div className="media-body text-truncate">
                                            <p className="mb-1"><a className="text-success m-0" href="">NEW MEETING</a>
                                            </p>
                                            <p className="m-0">
                                                <small>On
                                                       <em>10/12/2015 09:00 am</em>
                                                    </small>
                                            </p>
                                        </div>
                                        <div className="ml-auto">
                                            <small className="text-muted ml-2">15h</small>
                                        </div>
                                    </div>
                                </div>
                                {/* END list group item */}
                            </div>
                            {/* END list group */}
                            {/* START card footer */}
                            <div className="card-footer"><a className="text-sm" href="">Load more</a>
                            </div>
                            {/* END card-footer */}
                        </div>
                        { /* END messages and activity*/ }
                    </Col>
                    <Col lg={ 6 }>
                        <div className="card card-default">
                            <div className="card-header">
                                <div className="px-2 float-right badge badge-danger">5</div>
                                <div className="px-2 mr-2 float-right badge badge-success">12</div>
                                <div className="card-title">Team messages</div>
                            </div>
                            {/* START list group */}
                            <Scrollable className="list-group" height="230">
                                {/* START list group item */}
                                <div className="list-group-item list-group-item-action">
                                    <div className="media">
                                        <img className="align-self-start mx-2 circle thumb32" src="img/user/02.jpg" alt="Avatar" />
                                        <div className="media-body text-truncate">
                                            <p className="mb-1">
                                                <strong className="text-primary">
                                                    <span className="circle bg-success circle-lg text-left"></span>
                                                    <span>Catherine Ellis</span>
                                                </strong>
                                            </p>
                                            <p className="mb-1 text-sm">Cras sit amet nibh libero, in gravida nulla. Nulla...</p>
                                        </div>
                                        <div className="ml-auto">
                                            <small className="text-muted ml-2">2h</small>
                                        </div>
                                    </div>
                                </div>
                                {/* END list group item */}
                                {/* START list group item */}
                                <div className="list-group-item list-group-item-action">
                                    <div className="media">
                                        <img className="align-self-start mx-2 circle thumb32" src="img/user/03.jpg" alt="Avatar" />
                                        <div className="media-body text-truncate">
                                            <p className="mb-1">
                                                <strong className="text-primary">
                                                    <span className="circle bg-success circle-lg text-left"></span>
                                                    <span>Jessica Silva</span>
                                                </strong>
                                            </p>
                                            <p className="mb-1 text-sm">Cras sit amet nibh libero, in gravida nulla. Nulla...</p>
                                        </div>
                                        <div className="ml-auto">
                                            <small className="text-muted ml-2">3h</small>
                                        </div>
                                    </div>
                                </div>
                                {/* END list group item */}
                                {/* START list group item */}
                                <div className="list-group-item list-group-item-action">
                                    <div className="media">
                                        <img className="align-self-start mx-2 circle thumb32" src="img/user/09.jpg" alt="Avatar" />
                                        <div className="media-body text-truncate">
                                            <p className="mb-1">
                                                <strong className="text-primary">
                                                    <span className="circle bg-danger circle-lg text-left"></span>
                                                    <span>Jessie Wells</span>
                                                </strong>
                                            </p>
                                            <p className="mb-1 text-sm">Cras sit amet nibh libero, in gravida nulla. Nulla...</p>
                                        </div>
                                        <div className="ml-auto">
                                            <small className="text-muted ml-2">4h</small>
                                        </div>
                                    </div>
                                </div>
                                {/* END list group item */}
                                {/* START list group item */}
                                <div className="list-group-item list-group-item-action">
                                    <div className="media">
                                        <img className="align-self-start mx-2 circle thumb32" src="img/user/12.jpg" alt="Avatar" />
                                        <div className="media-body text-truncate">
                                            <p className="mb-1">
                                                <strong className="text-primary">
                                                    <span className="circle bg-danger circle-lg text-left"></span>
                                                    <span>Rosa Burke</span>
                                                </strong>
                                            </p>
                                            <p className="mb-1 text-sm">Cras sit amet nibh libero, in gravida nulla. Nulla...</p>
                                        </div>
                                        <div className="ml-auto">
                                            <small className="text-muted ml-2">1d</small>
                                        </div>
                                    </div>
                                </div>
                                {/* END list group item */}
                                {/* START list group item */}
                                <div className="list-group-item list-group-item-action">
                                    <div className="media">
                                        <img className="align-self-start mx-2 circle thumb32" src="img/user/10.jpg" alt="Avatar" />
                                        <div className="media-body text-truncate">
                                            <p className="mb-1">
                                                <strong className="text-primary">
                                                    <span className="circle bg-danger circle-lg text-left"></span>
                                                    <span>Michelle Lane</span>
                                                </strong>
                                            </p>
                                            <p className="mb-1 text-sm">Mauris eleifend, libero nec cursus lacinia...</p>
                                        </div>
                                        <div className="ml-auto">
                                            <small className="text-muted ml-2">2d</small>
                                        </div>
                                    </div>
                                </div>
                                {/* END list group item */}
                            </Scrollable>
                            {/* END list group */}
                            {/* START card footer */}
                            <div className="card-footer clearfix">
                                <div className="input-group">
                                    <input className="form-control form-control-sm" type="text" placeholder="Search message .." />
                                    <span className="input-group-btn">
                                        <button className="btn btn-secondary btn-sm" type="submit"><i className="fa fa-search"></i>
                                        </button>
                                     </span>
                                </div>
                            </div>
                            {/* END card-footer */}
                        </div>
                    </Col>
                    { /* END dashboard sidebar*/ }
                </Row>
                { /* END Widgets*/ }
            </ContentWrapper>
            );
    }

}

export default withNamespaces('translations')(DashboardV3);
