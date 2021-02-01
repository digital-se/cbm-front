import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import Sparkline from '../Common/Sparklines';

// required props for HOCs (withScriptjs and withGoogleMap)
const requiredProps = {
    googleMapURL: '//maps.google.com/maps/api/js?key=AIzaSyBNs42Rt_CyxAqdbIBK0a5Ut83QiauESPA', // &libraries=geometry,drawing,places
    loadingElement: <div className='gmap gmap-sm'>Loading...</div>,
    containerElement: <div className='gmap gmap-sm'/>,
    mapElement: <div style={{ height: `100%` }}/>
}

// Demo classic
const DemoMapClassic = compose(
  withProps(requiredProps),
  withScriptjs,
  withGoogleMap
)(props => (
    <GoogleMap defaultZoom={14} defaultCenter={props.location}>
        <Marker position={props.location} />
    </GoogleMap>
))

class Widgets extends Component {

    state = {
        // default location used for all demos
        location: { lat: 33.7906731, lng: -117.8357194 },
        activeTab: 'tasks'
    }

    toggleTab = tab => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">Widgets</div>
                {/* START row */}
                <Row>
                    <div className="col-xl-4">
                        {/* START card */}
                        <div className="card">
                            <div className="card-body">
                                <div className="text-right text-muted">
                                    <em className="fa fa-gamepad fa-2x"></em>
                                </div>
                                <h3 className="mt-0">99.999</h3>
                                <p className="text-muted">Games played last month</p>
                                <div className="progress progress-xs mb-3">
                                    <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="70" style={{width: '60%'}}>
                                        <span className="sr-only">60% Complete</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END card */}
                    </div>
                    <div className="col-xl-4">
                        {/* START card */}
                        <div className="card">
                            <div className="card-body">
                                <div className="text-right text-muted">
                                    <em className="fa fa-coffee fa-2x"></em>
                                </div>
                                <h3 className="mt-0">300</h3>
                                <p className="text-muted">Coffee cups per day</p>
                                <div className="progress progress-xs mb-3">
                                    <div className="progress-bar progress-bar-striped bg-green" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}>
                                        <span className="sr-only">80% Complete</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END card */}
                    </div>
                    <div className="col-xl-4">
                        {/* START card */}
                        <div className="card">
                            <div className="card-body">
                                <div className="text-right text-muted">
                                    <em className="fa fa-upload fa-2x"></em>
                                </div>
                                <h3 className="mt-0">1000 Gb</h3>
                                <p className="text-muted">Average Monthly Uploads</p>
                                <div className="progress progress-xs mb-3">
                                    <div className="progress-bar progress-bar-striped bg-info" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}}>
                                        <span className="sr-only">40% Complete</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END card */}
                    </div>
                </Row>
                {/* END row */}
                {/* START row */}
                <div className="row">
                    <div className="col-xl-4">
                        {/* START card */}
                        <div className="card">
                            <div className="d-flex">
                                <div className="w-50 bb br px-3">
                                    <div className="d-flex align-items-center">
                                        <em className="fa fa-users fa-2x text-info"></em>
                                        <div className="ml-auto">
                                            <div className="card-body text-right">
                                                <h4 className="mt-0">10k</h4>
                                                <p className="mb-0 text-muted">VISITORS</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-50 bb px-3">
                                    <div className="d-flex align-items-center">
                                        <em className="fa fa-music fa-2x text-danger"></em>
                                        <div className="ml-auto">
                                            <div className="card-body text-right">
                                                <h4 className="mt-0">100%</h4>
                                                <p className="mb-0 text-muted">VOLUME</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="w-50 br px-3">
                                    <div className="d-flex align-items-center">
                                        <em className="fas fa-code-branch fa-2x text-inverse"></em>
                                        <div className="ml-auto">
                                            <div className="card-body text-right">
                                                <h4 className="mt-0">150</h4>
                                                <p className="mb-0 text-muted">FORKS</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-50 px-3">
                                    <div className="d-flex align-items-center">
                                        <em className="fa fa-inbox fa-2x text-success"></em>
                                        <div className="ml-auto">
                                            <div className="card-body text-right">
                                                <h4 className="mt-0">10</h4>
                                                <p className="mb-0 text-muted">MESSAGES</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END card */}
                        {/* START card */}
                        <div className="card">
                            <div className="d-flex">
                                <div className="w-50 bb br px-3">
                                    <div className="d-flex align-items-center">
                                        {/* Bar chart */}
                                        <Sparkline options={{
                                            barColor:"#5d9cec",
                                            height:"20",
                                            barWidth:"3",
                                            barSpacing:"2",
                                        }}
                                        values="5,9,4,1,3,4,7,5"/>
                                        <div className="ml-auto">
                                            <div className="card-body text-right">
                                                <h4 className="mt-0">10k</h4>
                                                <p className="mb-0 text-muted">VISITORS</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-50 bb px-3">
                                    <div className="d-flex align-items-center">
                                        {/* Bar chart */}
                                        <Sparkline options={{
                                            barColor:"#5d9cec",
                                            height:"20",
                                            barWidth:"3",
                                            barSpacing:"2"
                                        }}
                                        values="1,2,3,4,5,6,7,8,9"/>
                                        <div className="ml-auto">
                                            <div className="card-body text-right">
                                                <h4 className="mt-0">100%</h4>
                                                <p className="mb-0 text-muted">CONVERSIONS</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="w-50 br px-3">
                                    <div className="d-flex align-items-center">
                                        {/* Bar chart */}
                                        <Sparkline options={{
                                            barColor:"#5d9cec",
                                            height:"20",
                                            barWidth:"3",
                                            barSpacing:"2"
                                        }}
                                        values="1,0,4,9,5,7,8,4,7"/>
                                        <div className="ml-auto">
                                            <div className="card-body text-right">
                                                <h4 className="mt-0">150</h4>
                                                <p className="mb-0 text-muted">RETURNS</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-50 px-3">
                                    <div className="d-flex align-items-center">
                                        {/* Bar chart */}
                                        <Sparkline options={{
                                            barColor:"#5d9cec",
                                            height:"20",
                                            barWidth:"3",
                                            barSpacing:"2"
                                        }}
                                        values="1,5,2,2,8,4,4,8"/>
                                        <div className="ml-auto">
                                            <div className="card-body text-right">
                                                <h4 className="mt-0">10</h4>
                                                <p className="mb-0 text-muted">UNIQUES</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END card */}
                   </div>
                   <div className="col-xl-4">
                        {/* START card */}
                        <div className="card">
                            <div className="half-float ie-fix-flex">
                                <img className="img-fluid" src="img/bg3.jpg" alt="Demo" />
                                <div className="half-float-bottom">
                                    <img className="img-thumbnail circle thumb128" src="img/user/09.jpg" alt="Demo" />
                                </div>
                            </div>
                            <div className="card-body text-center">
                                <h3 className="m-0">Ted Berry</h3>
                                <p className="text-muted">Lead director</p>
                                <p>Proin metus justo, commodo in ultrices at, lobortis sit amet dui. Fusce dolor purus, adipiscing a tempus at, gravida vel purus.</p>
                            </div>
                            <div className="card-body text-center bg-gray-dark">
                                <div className="row">
                                    <div className="col-4">
                                        <h3 className="m-0">400</h3>
                                        <p className="m-0">Photos</p>
                                    </div>
                                    <div className="col-4">
                                        <h3 className="m-0">2000</h3>
                                        <p className="m-0">Likes</p>
                                    </div>
                                    <div className="col-4">
                                        <h3 className="m-0">500</h3>
                                        <p className="m-0">Following</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                      {/* END card */}
                   </div>
                   <div className="col-xl-4">
                        {/* START card */}
                        <div className="card">
                            <div className="card-body text-center bg-center" style={{backgroundImage: "url('img/bg4.jpg')"}}>
                                <div className="row">
                                    <div className="col-12 text-white">
                                        <img className="img-thumbnail circle thumb128" src="img/user/06.jpg" alt="Demo" />
                                        <h3 className="m-0">Chris</h3>
                                        <p className="m-0">
                                            <em className="fab fa-twitter fa-fw"></em>@chris</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body text-center bg-gray-darker">
                                <div className="row">
                                    <div className="col-4">
                                        <a className="text-white" href="">
                                            <em className="fab fa-twitter fa-2x"></em>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a className="text-white" href="">
                                            <em className="fab fa-facebook-f fa-2x"></em>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a className="text-white" href="">
                                            <em className="fa fa-comments fa-2x"></em>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="list-group">
                                <a className="list-group-item" href="">
                                           <span className="badge badge-primary float-right">15</span>
                                           <em className="fa-fw far fa-clock text-muted"></em>Recent Activity</a>
                                <a className="list-group-item" href="">
                                           <span className="badge badge-primary float-right">100</span>
                                           <em className="fa-fw fa fa-user text-muted"></em>Following</a>
                                <a className="list-group-item" href="">
                                           <span className="badge badge-primary float-right">300</span>
                                           <em className="fa-fw far fa-folder-open text-muted"></em>Photos</a>
                            </div>
                        </div>
                        {/* END card */}
                    </div>
                </div>
                {/* END row */}
                {/* START row */}
                <div className="row">
                    <div className="col-xl-4 col-lg-6">
                        {/* START card */}
                        <div className="card bg-success-dark border-0">
                            <div className="row align-items-center mx-0">
                                <div className="col-4 text-center">
                                    <em className="icon-share fa-3x"></em>
                                </div>
                                <div className="col-8 py-4 bg-success rounded-right">
                                    <div className="h1 m-0 text-bold">150</div>
                                    <div className="text-uppercase">New connections</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                        {/* START card */}
                        <div className="card bg-danger-dark border-0">
                            <div className="row align-items-center mx-0">
                                <div className="col-4 text-center">
                                    <em className="icon-star fa-3x"></em>
                                </div>
                                <div className="col-8 py-4 bg-danger rounded-right">
                                    <div className="h1 m-0 text-bold">7000</div>
                                    <div className="text-uppercase">Ratings received</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-12">
                        {/* START card */}
                        <div className="card bg-warning-dark border-0">
                            <div className="row align-items-center mx-0">
                                <div className="col-4 text-center">
                                    <em className="icon-trophy fa-3x"></em>
                                </div>
                                <div className="col-8 py-4 bg-warning rounded-right">
                                    <div className="h1 m-0 text-bold">10</div>
                                    <div className="text-uppercase">Achievements</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END row */}
                {/* START row */}
                <div className="row">
                    <div className="col-xl-4">
                        {/* START card */}
                        <div className="card border-0">
                            <div className="card-body bg-success">
                                <div className="h5 mt-0">Received all time</div>
                                {/* Line chart */}
                                <Sparkline values="1,3,4,7,5,9,4,4,7,5,9,6,4"
                                    options={{
                                        type:"line",
                                        height:"80",
                                        width:"100%",
                                        lineWidth:"2",
                                        lineColor:"#dddddd",
                                        spotColor:"#bbbbbb",
                                        fillColor:"",
                                        highlightLineColor:"#fff",
                                        spotRadius:"3",
                                        resize:true
                                    }}/>
                                {/* Bar chart */}
                                <div className="text-center">
                                   <Sparkline options={{
                                            barColor:"#fff",
                                            height:"50",
                                            barWidth:"6",
                                            barSpacing:"6"
                                        }}
                                        values="1,3,4,7,5,9,4,4,7,5,9,6,4"/>
                                </div>
                            </div>
                            <div className="card-body bg-inverse">
                                <div className="row text-center">
                                    <div className="col-4">
                                        <p className="m-0 h3">15080</p>
                                        <p className="m-0 text-muted">Shots</p>
                                    </div>
                                    <div className="col-4">
                                        <p className="m-0 h3">12000</p>
                                        <p className="m-0 text-muted">Likes</p>
                                    </div>
                                    <div className="col-4">
                                        <p className="m-0 h3">5100</p>
                                        <p className="m-0 text-muted">Comments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                      {/* END card */}
                    </div>
                    <div className="col-xl-4">
                        {/* START card */}
                        <div className="card">
                            <div className="card-body bg-primary">
                                <div className="h5 mt-0">Monthly incomes</div>
                                {/* Line chart */}
                                <Sparkline options={{
                                        type:"line",
                                        height:"80",
                                        width:"100%",
                                        lineWidth:"2",
                                        lineColor:"#dddddd",
                                        spotColor:"#bbbbbb",
                                        fillColor:"",
                                        highlightLineColor:"#fff",
                                        spotRadius:"3",
                                        resize:true
                                    }}
                                    values="1,3,4,7,5,9,4,4,7,5,9,6,4"/>
                            </div>
                            <div className="card-body bg-inverse">
                                <div className="row text-center">
                                    <div className="col-6">
                                        {/* Bar chart */}
                                        <Sparkline options={{
                                                barColor:"#5d9cec",
                                                height:"30",
                                                barWidth:"6",
                                                barSpacing:"6"
                                            }}
                                            values="1,3,4,7,5,9,4,4,7,5,9,6,4"/>
                                    </div>
                                    <div className="col-6">
                                        <h4 className="m-0">+150</h4>
                                        <p className="m-0 text-muted">
                                            <small>From last month</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row text-center">
                                    <div className="col-6">
                                        <p className="m-0 text-muted">Gross income</p>
                                        <h4 className="m-0">12000</h4>
                                    </div>
                                    <div className="col-6">
                                        <p className="m-0 text-muted">Net income</p>
                                        <h4 className="m-0">5100</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                      {/* END card */}
                    </div>
                    <div className="col-xl-4">
                        {/* START widget */}
                        <div className="card">
                            <div className="row row-flush" style={{minHeight: '100%'}}>
                                <div className="col-8">
                                    <img className="img-fluid" src="img/bg1.jpg" alt="Demo" />
                                </div>
                                <div className="col-4 bg-info d-flex align-items-center justify-content-center">
                                    <div className="text-center">
                                        <div className="text-lg mt-0">11&deg;</div>
                                        <p>Cold</p>
                                        <em className="far fa-sun fa-2x"></em>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END widget */}
                    </div>
                </div>
                {/* END row */}
                {/* START row */}
                <div className="row">
                    <div className="col-xl-3">
                        {/* START card- */}
                        <div className="card border-0">
                            <div className="row row-flush">
                                <div className="col-4 bg-info text-center d-flex align-items-center justify-content-center rounded-left">
                                    <em className="fa fa-users fa-2x"></em>
                                </div>
                                <div className="col-8">
                                    <div className="card-body text-center">
                                        <h4 className="mt-0">10k</h4>
                                        <p className="mb-0 text-muted">VISITORS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END card- */}
                    </div>
                    <div className="col-xl-3">
                        {/* START card- */}
                        <div className="card border-0">
                            <div className="row row-flush">
                                <div className="col-4 bg-danger text-center d-flex align-items-center justify-content-center rounded-left">
                                    <em className="fa fa-music fa-2x"></em>
                                </div>
                                <div className="col-8">
                                    <div className="card-body text-center">
                                        <h4 className="mt-0">100%</h4>
                                        <p className="mb-0 text-muted">VOLUME</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END card- */}
                    </div>
                    <div className="col-xl-3">
                        {/* START card- */}
                        <div className="card border-0">
                            <div className="row row-flush">
                                <div className="col-4 bg-inverse text-center d-flex align-items-center justify-content-center rounded-left">
                                    <em className="fas fa-code-branch fa-2x"></em>
                                </div>
                                <div className="col-8">
                                    <div className="card-body text-center">
                                        <h4 className="mt-0">150</h4>
                                        <p className="mb-0 text-muted">FORKS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END card- */}
                    </div>
                    <div className="col-xl-3">
                        {/* START card- */}
                        <div className="card border-0">
                            <div className="row row-flush">
                                <div className="col-4 bg-green text-center d-flex align-items-center justify-content-center rounded-left">
                                    <em className="fa fa-inbox fa-2x"></em>
                                </div>
                                <div className="col-8">
                                    <div className="card-body text-center">
                                        <h4 className="mt-0">10</h4>
                                        <p className="mb-0 text-muted">NEW MESSAGES</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END card- */}
                    </div>
                </div>
                {/* END row */}
                {/* START row */}
                <div className="row">
                    <div className="col-xl-4">
                        {/* START card */}
                        <div className="card">
                            <div className="row row-flush">
                                <div className="col-5 d-flex align-items-center justify-content-center" style={{background: "url('img/bg2.jpg')", backgroundSize: 'cover'}}></div>
                                <div className="col-7">
                                    <div className="p-3">
                                        <div className="float-right"><a className="btn btn-primary btn-sm" href="">Register</a>
                                        </div>
                                        <p>
                                            <span className="text-lg">16</span>Aug</p>
                                        <p>
                                            <strong>EVENT INVITATION</strong>
                                        </p>
                                        <p>Donec posuere neque in elit luctus tempor consequat enim egestas. Nulla dictum egestas leo at lobortis.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END card */}
                    </div>
                    <div className="col-xl-4">
                        {/* START card */}
                        <div className="card">
                            <div className="card-body bg-danger text-center">
                                <div className="d-flex">
                                    <div>200 Following</div>
                                    <div className="ml-auto">150 Followers</div>
                                </div>
                                <img className="img-thumbnail circle thumb96" src="img/user/06.jpg" alt="Demo" />
                                <h4 className="mt-0">Lois Berry</h4>
                                <p className="m-0">
                                    <em className="fa-fw fas fa-map-marker-alt"></em>San Francisco, California</p>
                                <div className="d-flex">
                                    <div>15k Likes</div>
                                    <div className="ml-auto">100 Feeds</div>
                                </div>
                            </div>
                        </div>
                        {/* END card */}
                    </div>
                    <div className="col-xl-4">
                        {/* START card */}
                        <div className="card">
                            <DemoMapClassic location={this.state.location}/>
                            <div className="card-body bg-inverse">
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="h2 m-0">Find Us!</div>
                                    <div className="ml-auto">
                                        <div className="d-flex">
                                            <em className="fas fa-map-marker-alt fa-3x mr-3"></em>
                                            <p className="m-0">Street 123
                                                <br/>
                                                Location, Unknow
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END card */}
                    </div>
                </div>
                {/* END row */}
                {/* START row */}
                <div className="row">
                    <div className="col-xl-4">
                        {/* START card- */}
                        <div className="card">
                            <img className="img-fluid ie-fix-flex" src="img/bg1.jpg" alt="Demo" />
                            <div className="card-body">
                                <div className="row text-center">
                                    <div className="col-4">
                                        <p>Comments</p>
                                        <h3 className="m-0 text-primary">700</h3>
                                    </div>
                                    <div className="col-4">
                                        <p>Likes</p>
                                        <h3 className="m-0 text-primary">1500</h3>
                                    </div>
                                    <div className="col-4">
                                        <p>Shots</p>
                                        <h3 className="m-0 text-primary">300</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END card- */}
                    </div>
                    <div className="col-xl-4">
                        {/* START card- */}
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-6 text-center">
                                        <img className="circle thumb96" src="img/user/09.jpg" alt="Demo" />
                                    </div>
                                    <div className="col-6">
                                        <h3 className="mt-0">Peggy Peters</h3>
                                        <ul className="list-unstyled mb-0">
                                            <li className="mb-1">
                                                <em className="fas fa-map-marker-alt fa-fw"></em>ASD, Qwerty</li>
                                            <li className="mb-1">
                                                <em className="fab fa-twitter fa-fw"></em>@asdasd</li>
                                            <li className="mb-1">
                                                <em className="fa fa-envelope fa-fw"></em>asdasd@mail.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body bg-inverse">
                                <div className="row text-center">
                                    <div className="col-4">
                                        <p className="m-0 h3">700</p>
                                        <p className="m-0 text-muted">Followers</p>
                                    </div>
                                    <div className="col-4">
                                        <p className="m-0 h3">1500</p>
                                        <p className="m-0 text-muted">Following</p>
                                    </div>
                                    <div className="col-4">
                                        <p className="m-0 h3">510</p>
                                        <p className="m-0 text-muted">Loved</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END card- */}
                        {/* START card- */}
                        <div className="card">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-5 text-center">
                                        <img className="img-thumbnail circle img-fluid thumb96" src="img/user/06.jpg" alt="Demo" />
                                    </div>
                                    <div className="col-7">
                                        <div className="text-right"><a className="btn btn-success btn-sm" href="">Follow</a>
                                        </div>
                                        <div className="d-flex">
                                            <div className="text-left">
                                                <h3 className="mt-0">Sarah Pierce</h3>
                                                <p className="text-muted">150 Following / 100 Followers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END card- */}
                    </div>
                    <div className="col-xl-4">
                        <div className="row">
                            <div className="col-md-6">
                                {/* START card- */}
                                <div className="card bg-info">
                                    <div className="card-body text-center">
                                        <div className="text-lg m-0">300</div>
                                        <p>Re-Tweets</p>
                                        <div className="mb-3"></div>
                                        <em className="fab fa-twitter text-alpha"></em>
                                    </div>
                                </div>
                                {/* END card- */}
                            </div>
                            <div className="col-md-6">
                                {/* START card- */}
                                <div className="card bg-primary">
                                    <div className="card-body text-center">
                                        <div className="text-lg m-0">12&deg;</div>
                                        <p>Bariloche</p>
                                        <div className="mb-3"></div>
                                        <em className="far fa-sun"></em>
                                    </div>
                                </div>
                                {/* END card- */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                {/* START card- */}
                                <div className="card bg-danger">
                                    <div className="card-body text-center">
                                        <div className="radial-bar radial-bar-40 radial-bar radial-bar-danger m-0">
                                            <img src="img/user/03.jpg" alt="Demo" />
                                        </div>
                                        <p>
                                            <strong>40%</strong>
                                            <span>complete</span>
                                        </p>
                                    </div>
                                </div>
                                {/* END card- */}
                            </div>
                            <div className="col-md-6">
                                {/* START card- */}
                                <div className="card bg-purple">
                                    <div className="card-body text-center">
                                        <p className="mb-3">
                                            <img className="rounded thumb64" src="img/user/08.jpg" alt="Demo" />
                                        </p>
                                        <p className="m-0">
                                            <strong>Mika</strong>
                                            <span>is now following you</span>
                                        </p>
                                    </div>
                                </div>
                                {/* END card- */}
                            </div>
                        </div>
                        <div className="row"></div>
                        {/* START card- */}
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="text-center">
                                        <img className="img-thumbnail circle img-fluid thumb64" src="img/user/06.jpg" alt="Demo" />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="m-0">Sylvia Morris</h3>
                                    </div>
                                    <div className="ml-auto align-self-start">
                                        <a className="btn btn-purple btn-sm" href="">
                                            <em className="far fa-hand-point-right"></em>
                                            <span>Touch</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END card- */}
                    </div>
                </div>
                {/* END row */}
                {/* START row */}
                <div className="row">
                    <div className="col-xl-3 col-lg-6">
                        {/* START card- */}
                        <div className="card bg-primary border-0">
                            <div className="card-header">
                                <div className="row align-items-center">
                                    <div className="col-3">
                                        <em className="fa fa-comments fa-5x"></em>
                                    </div>
                                    <div className="col-9 text-right">
                                        <div className="text-lg">26</div>
                                        <p className="m-0">New Comments!</p>
                                    </div>
                                </div>
                            </div>
                            <a className="card-footer bg-gray-dark bt0 clearfix btn-block d-flex" href="">
                                <span>View Details</span>
                                <span className="ml-auto">
                                    <em className="fa fa-chevron-circle-right"></em>
                                </span>
                            </a>
                            {/* END card- */}
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6">
                        {/* START card- */}
                        <div className="card bg-green border-0">
                            <div className="card-header">
                                <div className="row align-items-center">
                                    <div className="col-3">
                                        <em className="fa fa-tasks fa-5x"></em>
                                    </div>
                                    <div className="col-9 text-right">
                                        <div className="text-lg">12</div>
                                        <p className="m-0">New Tasks!</p>
                                    </div>
                                </div>
                            </div>
                            <a className="card-footer bg-gray-dark bt0 clearfix btn-block d-flex" href="">
                                <span>View Details</span>
                                <span className="ml-auto">
                                    <em className="fa fa-chevron-circle-right"></em>
                                </span>
                            </a>
                        </div>
                        {/* END card- */}
                    </div>
                    <div className="col-xl-3 col-lg-6">
                        {/* START card- */}
                        <div className="card bg-warning border-0">
                            <div className="card-header">
                                <div className="row align-items-center">
                                    <div className="col-3">
                                        <em className="fa fa-shopping-cart fa-5x"></em>
                                    </div>
                                    <div className="col-9 text-right">
                                        <div className="text-lg">124</div>
                                        <p className="m-0">New Orders!</p>
                                    </div>
                                </div>
                            </div>
                            <a className="card-footer bg-gray-dark bt0 clearfix btn-block d-flex" href="">
                                <span>View Details</span>
                                <span className="ml-auto">
                                    <em className="fa fa-chevron-circle-right"></em>
                                </span>
                            </a>
                        </div>
                        {/* END card- */}
                    </div>
                    <div className="col-xl-3 col-lg-6">
                        {/* START card- */}
                        <div className="card bg-danger border-0">
                            <div className="card-header">
                                <div className="row align-items-center">
                                    <div className="col-3">
                                        <em className="far fa-life-ring fa-5x"></em>
                                    </div>
                                    <div className="col-9 text-right">
                                        <div className="text-lg">13</div>
                                        <p className="m-0">Support Tickets!</p>
                                    </div>
                                </div>
                            </div>
                            <a className="card-footer bg-gray-dark bt0 clearfix btn-block d-flex" href="">
                                <span>View Details</span>
                                <span className="ml-auto">
                                    <em className="fa fa-chevron-circle-right"></em>
                                </span>
                            </a>
                        </div>
                        {/* END card- */}
                    </div>
                </div>
                {/* END row */}
                {/* START panel tab */}
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
                {/* END panel tab */}
            </ContentWrapper>
        );
    }

}

export default Widgets;
