import React, { Component } from 'react';
import { withNamespaces, Trans } from 'react-i18next';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import EasyPieChart from 'easy-pie-chart';

import CardTool from '../Common/CardTool'
import Sparkline from '../Common/Sparklines';
import Scrollable from '../Common/Scrollable'
import FlotChart from '../Charts/Flot';
import Now from '../Common/Now';

class DashboardV1 extends Component {

    state = {
        flotData: [{
            "label": "Uniques",
            "color": "#768294",
            "data": [
                ["Mar", 70],["Apr", 85],["May", 59],["Jun", 93],["Jul", 66],["Aug", 86],["Sep", 60]
            ]
        }, {
            "label": "Recurrent",
            "color": "#1f92fe",
            "data": [
                ["Mar", 21],["Apr", 12],["May", 27],["Jun", 24],["Jul", 16],["Aug", 39],["Sep", 15]
            ]
        }],

        flotOptions: {
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
                tickFormatter: v => v /* + ' visitors'*/
            },
            shadowSize: 0
        },

        dropdownOpen: false

    }

    componentDidMount() {
        // Easy pie
        let pieOptions1 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: '#23b7e5',
            trackColor: 'rgba(200,200,200,0.4)',
            scaleColor: false,
            lineWidth: 10,
            lineCap: 'round',
            size: 145
        };
        new EasyPieChart(this.refs.easypie, pieOptions1);
    }

    changeLanguage = lng => {
        this.props.i18n.changeLanguage(lng);
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        // Usse t function instead of Trans component
        // const { t } = this.props;

        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>Dashboard
                        <small><Trans i18nKey='dashboard.WELCOME'></Trans></small>
                    </div>
                    { /* START Language list */ }
                    <div className="ml-auto">
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
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
                { /* START cards box */ }
                <Row>
                    <Col xl={ 3 } md={ 6 }>
                        { /* START card */ }
                        <div className="card flex-row align-items-center align-items-stretch border-0">
                            <div className="col-4 d-flex align-items-center bg-primary-dark justify-content-center rounded-left">
                                <em className="icon-cloud-upload fa-3x"></em>
                            </div>
                            <div className="col-8 py-3 bg-primary rounded-right">
                                <div className="h2 mt-0">1700</div>
                                <div className="text-uppercase">Uploads</div>
                            </div>
                        </div>
                    </Col>
                    <Col xl={ 3 } md={ 6 }>
                        { /* START card */ }
                        <div className="card flex-row align-items-center align-items-stretch border-0">
                            <div className="col-4 d-flex align-items-center bg-purple-dark justify-content-center rounded-left">
                                <em className="icon-globe fa-3x"></em>
                            </div>
                            <div className="col-8 py-3 bg-purple rounded-right">
                                <div className="h2 mt-0">700
                                    <small>GB</small>
                                </div>
                                <div className="text-uppercase">Quota</div>
                            </div>
                        </div>
                    </Col>
                    <Col xl={ 3 } lg={ 6 } md={ 12 }>
                        { /* START card */ }
                        <div className="card flex-row align-items-center align-items-stretch border-0">
                            <div className="col-4 d-flex align-items-center bg-green-dark justify-content-center rounded-left">
                                <em className="icon-bubbles fa-3x"></em>
                            </div>
                            <div className="col-8 py-3 bg-green rounded-right">
                                <div className="h2 mt-0">500</div>
                                <div className="text-uppercase">Reviews</div>
                            </div>
                        </div>
                    </Col>
                    <Col xl={ 3 } lg={ 6 } md={ 12 }>
                        { /* START date card */ }
                        <div className="card flex-row align-items-center align-items-stretch border-0">
                            <div className="col-4 d-flex align-items-center bg-green justify-content-center rounded-left">
                                <div className="text-center">
                                    <Now format="MMMM" className="text-sm" />
                                    <br />
                                    <Now format="D" className="h2 mt0" />
                                </div>
                            </div>
                            <div className="col-8 py-3 rounded-right">
                                <Now format="dddd" className="text-uppercase" />
                                <br />
                                <Now format="h:mm" className="h2 mt0 mr-sm" />
                                <Now format="a" className="text-muted text-sm" />
                            </div>
                        </div>
                        { /* END date card */ }
                    </Col>
                </Row>
                { /* END cards box */ }
                <Row>
                    { /* START dashboard main content */ }
                    <Col xl={ 9 }>
                        { /* START chart */ }
                        <Row>
                            <Col xl={ 12 }>
                                { /* START card */ }
                                <div className="card card-default">
                                    <div className="card-header">
                                        <CardTool refresh onRefresh={(_,done) => setTimeout(done,2000)}/>
                                        <div className="card-title">Inbound visitor statistics</div>
                                    </div>
                                    <div className="card-body">
                                        <FlotChart data={this.state.flotData} options={this.state.flotOptions} height="250px" />
                                    </div>
                                </div>
                                { /* END widget */ }
                            </Col>
                        </Row>
                        { /* END chart */ }
                        <Row>
                            <Col xl={ 12 }>
                                <div className="card border-0">
                                    <div className="row row-flush">
                                        <div className="col-lg-2 col-md-3 col-6 bg-info py-4 d-flex align-items-center justify-content-center rounded-left">
                                            <em className="wi wi-day-sunny fa-4x"></em>
                                        </div>
                                        <div className="col-lg-2 col-md-3 col-6 py-2 br d-flex align-items-center justify-content-center">
                                            <div>
                                                <div className="h1 m-0 text-bold">32&deg;</div>
                                                <div className="text-uppercase">Clear</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-3 d-none d-md-block py-2 text-center br">
                                            <div className="text-info text-sm">10 AM</div>
                                            <div className="text-muted text-md">
                                                <em className="wi wi-day-cloudy"></em>
                                            </div>
                                            <div className="text-info">
                                                <span className="text-muted">20%</span>
                                            </div>
                                            <div className="text-muted">27&deg;</div>
                                        </div>
                                        <div className="col-lg-2 col-md-3 d-none d-md-block py-2 text-center br">
                                            <div className="text-info text-sm">11 AM</div>
                                            <div className="text-muted text-md">
                                                <em className="wi wi-day-cloudy"></em>
                                            </div>
                                            <div className="text-info">
                                                <span className="text-muted">30%</span>
                                            </div>
                                            <div className="text-muted">28&deg;</div>
                                        </div>
                                        <div className="col-lg-2 py-2 text-center br d-none d-lg-block">
                                            <div className="text-info text-sm">12 PM</div>
                                            <div className="text-muted text-md">
                                                <em className="wi wi-day-cloudy"></em>
                                            </div>
                                            <div className="text-info">
                                                <span className="text-muted">20%</span>
                                            </div>
                                            <div className="text-muted">30&deg;</div>
                                        </div>
                                        <div className="col-lg-2 py-2 text-center d-none d-lg-block">
                                            <div className="text-info text-sm">1 PM</div>
                                            <div className="text-muted text-md">
                                                <em className="wi wi-day-sunny-overcast"></em>
                                            </div>
                                            <div className="text-info">
                                                <span className="text-muted">0%</span>
                                            </div>
                                            <div className="text-muted">30&deg;</div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={ 4 }>
                                { /* START card */ }
                                <div className="card border-0">
                                    <div className="card-body">
                                        <div className="d-flex">
                                            <h3 className="text-muted mt-0">300</h3>
                                            <em className="ml-auto text-muted fa fa-coffee fa-2x"></em>
                                        </div>
                                        <Sparkline options={{
                                                type:'line',
                                                height:80,
                                                width:'100%',
                                                lineWidth:2,
                                                lineColor:'#7266ba',
                                                spotColor:'#888',
                                                fillColor: 'transparent',
                                                minSpotColor:'#7266ba',
                                                maxSpotColor:'#7266ba',
                                                highlightLineColor:'#fff',
                                                spotRadius:3,
                                                resize:true
                                            }}
                                            values={[1,3,4,7,5,9,4,4,7,5,9,6,4]}
                                            className="pv-lg"/>
                                        <p>
                                            <small className="text-muted">Actual progress</small>
                                        </p>
                                        <div className="progress progress-xs">
                                            <div role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}} className="progress-bar progress-bar-info progress-bar-striped">
                                                <span className="sr-only">80% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                { /* END widget */ }
                            </Col>
                            <Col xl={ 8 }>
                                <div className="card card-default">
                                    <div className="card-header">
                                        <div className="px-2 float-right badge badge-danger">5</div>
                                        <div className="px-2 mr-2 float-right badge badge-success">12</div>
                                        <div className="card-title">Team messages</div>
                                    </div>
                                    {/* START list group */}
                                    <Scrollable className="list-group" height="180">
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
                                                <button className="btn btn-secondary btn-sm" type="submit">
                                                    <i className="fa fa-search"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                    {/* END card-footer */}
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    { /* END dashboard main content */ }
                    { /* START dashboard sidebar */ }
                    <Col xl={ 3 }>
                        { /* START loader widget */ }
                        <div className="card card-default">
                            <div className="card-body">
                                <a className="text-muted float-right" href="">
                                    <em className="fa fa-arrow-right"></em>
                                </a>
                                <div className="text-info">Average Monthly Uploads</div>
                                <div className="text-center py-4">
                                    <div ref="easypie" data-percent="70" className="easypie-chart easypie-chart-lg">
                                        <span>70%</span>
                                    </div>
                                </div>
                                <Sparkline options={{
                                        barColor:'#23b7e5',
                                        height:30,
                                        barWidth:5,
                                        barSpacing:2
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
                        { /* END loader widget */ }
                        { /* START messages and activity */ }
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
                                {/* START list group item */}
                                <div className="list-group-item">
                                   <div className="media">
                                      <div className="align-self-start mr-2">
                                         <span className="fa-stack">
                                            <em className="fa fa-circle fa-stack-2x text-warning"></em>
                                            <em className="fa fa-tasks fa-stack-1x fa-inverse text-white"></em>
                                         </span>
                                      </div>
                                      <div className="media-body text-truncate">
                                         <p className="mb-1"><a className="text-warning m-0" href="">TASKS COMPLETION</a>
                                         </p>
                                         <div className="progress progress-xs m-0">
                                            <div className="progress-bar bg-warning progress-bar-striped" role="progressbar" aria-valuenow="22" aria-valuemin="0" aria-valuemax="100" style={{width: '22%'}}>
                                               <span className="sr-only">22% Complete</span>
                                            </div>
                                         </div>
                                      </div>
                                      <div className="ml-auto">
                                         <small className="text-muted ml-2">1w</small>
                                      </div>
                                   </div>
                                </div>
                                {/* END list group item */}
                             </div>
                             {/* END list group */}
                            {/* START card footer */}
                            <div className="card-footer"><a className="text-sm" href="">Load more</a></div>
                            {/* END card-footer */}
                        </div>
                        { /* END messages and activity */ }
                    </Col>
                    { /* END dashboard sidebar */ }
                </Row>
            </ContentWrapper>
            );

    }

}

export default withNamespaces('translations')(DashboardV1);
