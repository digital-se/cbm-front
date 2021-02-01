import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

// required props for HOCs (withScriptjs and withGoogleMap)
const requiredProps = {
    googleMapURL: '//maps.google.com/maps/api/js?key=AIzaSyBNs42Rt_CyxAqdbIBK0a5Ut83QiauESPA', // &libraries=geometry,drawing,places
    loadingElement: <div className='gmap'>Loading...</div>,
    containerElement: <div className='gmap'/>,
    mapElement: <div style={{ height: `100%` }}/>
}

// Demo with custom style
const DemoMapCustomStyle = compose(
  withProps(requiredProps),
  withScriptjs,
  withGoogleMap
)(props => (
    <GoogleMap defaultZoom={14} defaultCenter={props.location} defaultOptions={{ styles: props.mapStyles }}>
        <Marker position={props.location} />
    </GoogleMap>
))

class Profile extends Component {

    state = {
        location: { lat: 33.7906731, lng: -117.8357194 },
        customStyle: [{featureType:'water',stylers:[{visibility:'on'},{color:'#bdd1f9'}]},{featureType:'all',elementType:'labels.text.fill',stylers:[{color:'#334165'}]},{featureType:'landscape',stylers:[{color:'#e9ebf1'}]},{featureType:'road.highway',elementType:'geometry',stylers:[{color:'#c5c6c6'}]},{featureType:'road.arterial',elementType:'geometry',stylers:[{color:'#fff'}]},{featureType:'road.local',elementType:'geometry',stylers:[{color:'#fff'}]},{featureType:'transit',elementType:'geometry',stylers:[{color:'#d8dbe0'}]},{featureType:'poi',elementType:'geometry',stylers:[{color:'#cfd5e0'}]},{featureType:'administrative',stylers:[{visibility:'on'},{lightness:33}]},{featureType:'poi.park',elementType:'labels',stylers:[{visibility:'on'},{lightness:20}]},{featureType:'road',stylers:[{color:'#d8dbe0',lightness:20}]}]
    }

    render() {
        return (
            <ContentWrapper unwrap>
                <div className="bg-cover" style={{backgroundImage: 'url(img/profile-bg.jpg)'}}>
                    <div className="p-4 text-center text-white">
                        <img className="img-thumbnail rounded-circle thumb128" src="img/user/09.jpg" alt="Avatar"/>
                        <h3 className="m-0">Ted Berry</h3>
                        <p>Lead director</p>
                        <p>Proin metus justo, commodo in ultrices at, lobortis sit amet dui. Fusce dolor purus, adipiscing a tempus at, gravida vel purus.</p>
                    </div>
                </div>
                <div className="text-center bg-gray-dark p-3 mb-4">
                    <Row>
                        <Col xs="4" className="br">
                            <h3 className="m-0">400</h3>
                            <p className="m-0">
                                <span className="d-none d-md-inline">Profile</span>
                                <span>Views</span>
                            </p>
                        </Col>
                        <Col xs="4" className="br">
                            <h3 className="m-0">2000</h3>
                            <p className="m-0">Likes</p>
                        </Col>
                        <Col xs="4">
                            <h3 className="m-0">100</h3>
                            <p className="m-0">Following</p>
                        </Col>
                    </Row>
                </div>
                <div className="p-3">
                    <Row>
                        <Col xl="9">
                            {/* START timeline */}
                            <ul className="timeline">
                                <li className="timeline-separator" data-datetime="Today"></li>
                                {/* START timeline item */}
                                <li>
                                    <div className="timeline-badge primary">
                                        <em className="fa fa-comment"></em>
                                    </div>
                                    <div className="timeline-card">
                                        <div className="popover left">
                                            <div className="arrow"></div>
                                            <div className="popover-body">
                                                <div className="d-flex align-items-center mb-3">
                                                    <img className="mr-3 rounded-circle thumb48" src="img/user/05.jpg" alt="Avatar"/>
                                                    <p className="m-0">
                                                        <a className="text-muted" href="">
                                                            <strong>Aiden Curtis</strong>
                                                        </a>
                                                        <br/>posted a comment</p>
                                                </div>
                                                <p>
                                                    <em>"Fusce pellentesque congue justo in rutrum. Praesent non nulla et ligula luctus mattis eget at lacus."</em>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* END timeline item */}
                                {/* START timeline item */}
                                <li className="timeline-inverted">
                                    <div className="timeline-badge green">
                                        <em className="far fa-image"></em>
                                    </div>
                                    <div className="timeline-card">
                                        <div className="popover right">
                                            <div className="arrow"></div>
                                            <div className="popover-body">
                                                <div className="d-flex align-items-center mb-3">
                                                    <img className="mr-3 rounded-circle thumb48" src="img/user/04.jpg" alt="Avatar"/>
                                                    <p className="m-0">
                                                        <a className="text-muted" href="">
                                                            <strong>James Payne</strong>
                                                        </a>
                                                        <br/>shared a new idea</p>
                                                </div>
                                                <a href="">
                                                    <img className="img-fluid img-thumbnail" src="img/mockup.png" alt="Img"/>
                                                </a>
                                                <p className="text-muted my-2">3 Comments</p>
                                                <div className="media bb p-2">
                                                    <img className="mr-2 rounded-circle thumb32" src="img/user/05.jpg" alt="Avatar"/>
                                                    <div className="media-body">
                                                        <p className="m-0">
                                                            <a href="">
                                                                <strong>Aiden Curtis</strong>
                                                            </a>
                                                        </p>
                                                        <div className="text-sm text-muted">Hey looks great!</div>
                                                    </div>
                                                    <small className="ml-auto text-muted">12m ago</small>
                                                </div>
                                                <div className="media bb p-2">
                                                    <img className="mr-2 rounded-circle thumb32" src="img/user/08.jpg" alt="Avatar"/>
                                                    <div className="media-body">
                                                        <p className="m-0">
                                                            <a href="">
                                                                <strong>Samantha Murphy</strong>
                                                            </a>
                                                        </p>
                                                        <div className="text-sm text-muted">Excellento job!</div>
                                                    </div>
                                                    <small className="ml-auto text-muted">30m ago</small>
                                                </div>
                                                <div className="media bb p-2">
                                                    <img className="mr-2 rounded-circle thumb32" src="img/user/04.jpg" alt="Avatar"/>
                                                    <div className="media-body">
                                                        <p className="m-0">
                                                            <a href="">
                                                                <strong>James Payne</strong>
                                                            </a>
                                                        </p>
                                                        <div className="text-sm text-muted">WIP guys :)</div>
                                                    </div>
                                                    <small className="ml-auto text-muted">30m ago</small>
                                                </div>
                                                <form className="mt-2" method="post" action="#">
                                                    <textarea className="form-control no-resize" placeholder="Comment..." rows="1"></textarea>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* START timeline item */}
                                <li>
                                    <div className="timeline-badge info">
                                        <em className="far fa-file"></em>
                                    </div>
                                    <div className="timeline-card">
                                        <div className="popover left">
                                            <div className="arrow"></div>
                                            <div className="popover-body">
                                                <div className="d-flex align-items-center mb-3">
                                                    <img className="mr-3 rounded-circle thumb48" src="img/user/08.jpg" alt="Avatar"/>
                                                    <p className="m-0">
                                                        <a className="text-muted" href="">
                                                            <strong>Samantha Murphy</strong>
                                                        </a>
                                                        <br/>shared new files</p>
                                                </div>
                                                <a className="mb-2 text-info d-flex align-items-center link-unstyled" href="">
                                                    <span>
                                                        <em className="far fa-file fa-fw mr-2 text-inverse"></em>
                                                        <span>framework-docs-part1.pdf</span>
                                                    </span>
                                                    <em className="ml-auto fa fa-download fa-fw text-info"></em>
                                                </a>
                                                <a className="mb-2 text-info d-flex align-items-center link-unstyled" href="">
                                                    <span>
                                                        <em className="far fa-file fa-fw mr-2 text-inverse"></em>
                                                        <span>framework-docs-part2.pdf</span>
                                                    </span>
                                                    <em className="ml-auto fa fa-download fa-fw text-info"></em>
                                                </a>
                                                <a className="mb-2 text-info d-flex align-items-center link-unstyled" href="">
                                                    <span>
                                                        <em className="far fa-file fa-fw mr-2 text-inverse"></em>
                                                        <span>framework-docs-part3.pdf</span>
                                                    </span>
                                                    <em className="ml-auto fa fa-download fa-fw text-info"></em>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* END timeline item */}
                                {/* START timeline item */}
                                <li>
                                    <div className="timeline-badge purple">
                                        <em className="fas fa-map-marker-alt"></em>
                                    </div>
                                    <div className="timeline-card">
                                        <div className="popover left">
                                            <div className="arrow"></div>
                                            <div className="popover-body">
                                                <div className="d-flex align-items-center mb-3">
                                                    <img className="mr-3 rounded-circle thumb48" src="img/user/08.jpg" alt="Avatar"/>
                                                    <p className="m-0">
                                                        <a className="text-muted" href="">
                                                            <strong>Samantha Murphy</strong>
                                                        </a>
                                                        <br/>shared new location</p>
                                                </div>
                                                <p>
                                                    <em>"Hey guys! Please check the new location for tomorrows's meeting."</em>
                                                </p>
                                                <DemoMapCustomStyle location={this.state.location} mapStyles={this.state.customStyle}/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* END timeline item */}
                                {/* START timeline separator */}
                                <li className="timeline-separator" data-datetime="Yesterday"></li>
                                {/* END timeline separator */}
                                {/* START timeline item */}
                                <li>
                                    <div className="timeline-badge success">
                                        <em className="fas fa-ticket-alt"></em>
                                    </div>
                                    <div className="timeline-card">
                                        <div className="popover left">
                                            <div className="arrow"></div>
                                            <div className="popover-body">
                                                <div className="d-flex align-items-center mb-3">
                                                    <img className="mr-3 rounded-circle thumb48" src="img/user/12.jpg" alt="Avatar"/>
                                                    <p className="m-0">
                                                        <a className="text-muted" href="">
                                                            <strong>Dennis Green</strong>
                                                        </a>
                                                        <br/>closed issue
                                                        <a className="ml-2" href="">#548795</a>
                                                    </p>
                                                </div>
                                                <p>
                                                    <em>&mdash; bootstrap.js needs update</em>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* END timeline item */}
                                <li className="timeline-inverted">
                                    <div className="timeline-badge warning">
                                        <em className="fas fa-ticket-alt"></em>
                                    </div>
                                    <div className="timeline-card">
                                        <div className="popover right">
                                            <div className="arrow"></div>
                                            <div className="popover-body">
                                                <div className="d-flex align-items-center mb-3">
                                                    <img className="mr-3 rounded-circle thumb48" src="img/user/09.jpg" alt="Avatar"/>
                                                    <p className="m-0">
                                                        <a className="text-muted" href="">
                                                            <strong>Ted Berry</strong>
                                                        </a>
                                                        <br/>assigned
                                                        <a className="text-muted" href="">
                                                            <strong>Dennis Green</strong>
                                                        </a>to issue
                                                        <a className="ml-2" href="">#548795</a>
                                                    </p>
                                                </div>
                                                <p className="m-0">
                                                    <em>&mdash; bootstrap.js needs update</em>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* END timeline item */}
                                {/* START timeline item */}
                                <li>
                                    <div className="timeline-badge danger">
                                        <em className="fas fa-ticket-alt"></em>
                                    </div>
                                    <div className="timeline-card">
                                        <div className="popover left">
                                            <div className="arrow"></div>
                                            <div className="popover-body">
                                                <div className="d-flex align-items-center mb-3">
                                                    <img className="mr-3 rounded-circle thumb48" src="img/user/10.jpg" alt="Avatar"/>
                                                    <p className="m-0">
                                                        <a className="text-muted" href="">
                                                            <strong>Jon Perry</strong>
                                                        </a>
                                                        <br/>opened issue
                                                        <a className="ml-2" href="">#548795</a>
                                                    </p>
                                                </div>
                                                <p>
                                                    <em>&mdash; bootstrap.js needs update</em>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* END timeline item */}
                                {/* START timeline item */}
                                <li className="timeline-end">
                                    <a className="timeline-badge" href="">
                                        <em className="fa fa-plus"></em>
                                    </a>
                                </li>
                                {/* END timeline item */}
                            </ul>
                            {/* END timeline */}
                        </Col>
                        <Col xl="3">
                            <div className="card card-default">
                                <div className="card-body">
                                    <div className="text-center">
                                        <h3 className="mt-0">Ted Berry</h3>
                                        <p>Lead director</p>
                                    </div>
                                    <hr/>
                                    <ul className="list-unstyled px-4">
                                        <li>
                                            <em className="fa fa-home fa-fw mr-3"></em>Somewhere, Neverland</li>
                                        <li>
                                            <em className="fa fa-briefcase fa-fw mr-3"></em>
                                            <a href="">Themicon.co</a>
                                        </li>
                                        <li>
                                            <em className="fa fa-graduation-cap fa-fw mr-3"></em>Master Designer</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card card-default">
                                <div className="card-header">
                                    <a className="float-right" href="">
                                        <em className="icon-plus text-muted"></em>
                                    </a>Contacts</div>
                                <ListGroup>
                                    {/* START User status */}
                                    <ListGroupItem className="p-2 mt-0 d-flex">
                                        {/* Contact avatar */}
                                        <img className="mr-3 rounded-circle thumb32" src="img/user/05.jpg" alt="Avatar"/>
                                        {/* Contact info */}
                                        <span>
                                            <strong>Juan Sims</strong>
                                            <br/>
                                            <div className="text-sm text-muted">Designeer</div>
                                        </span>
                                        <span className="ml-auto circle bg-success circle-lg"></span>
                                    </ListGroupItem>
                                    {/* END User status */}
                                    {/* START User status */}
                                    <ListGroupItem className="p-2 mt-0 d-flex">
                                        {/* Contact avatar */}
                                        <img className="mr-3 rounded-circle thumb32" src="img/user/06.jpg" alt="Avatar"/>
                                        {/* Contact info */}
                                        <span>
                                            <strong>Maureen Jenkins</strong>
                                            <br/>
                                            <div className="text-sm text-muted">Designeer</div>
                                        </span>
                                        <span className="ml-auto circle bg-success circle-lg"></span>
                                    </ListGroupItem>
                                    {/* END User status */}
                                    {/* START User status */}
                                    <ListGroupItem className="p-2 mt-0 d-flex">
                                        {/* Contact avatar */}
                                        <img className="mr-3 rounded-circle thumb32" src="img/user/07.jpg" alt="Avatar"/>
                                        {/* Contact info */}
                                        <span>
                                            <strong>Billie Dunn</strong>
                                            <br/>
                                            <div className="text-sm text-muted">Designeer</div>
                                        </span>
                                        <span className="ml-auto circle bg-danger circle-lg"></span>
                                    </ListGroupItem>
                                    {/* END User status */}
                                    {/* START User status */}
                                    <ListGroupItem className="p-2 mt-0 d-flex">
                                        {/* Contact avatar */}
                                        <img className="mr-3 rounded-circle thumb32" src="img/user/08.jpg" alt="Avatar"/>
                                        {/* Contact info */}
                                        <span>
                                            <strong>Tomothy Roberts</strong>
                                            <br/>
                                            <div className="text-sm text-muted">Designer</div>
                                        </span>
                                        <span className="ml-auto circle bg-warning circle-lg"></span>
                                    </ListGroupItem>
                                    {/* END User status */}
                                    <ListGroupItem action className="media p-2 mt-0 text-center text-muted">View all contacts</ListGroupItem>
                                </ListGroup>
                            </div>
                            <div className="card card-default">
                                <ListGroup>
                                    <ListGroupItem className="d-flex">
                                        <span>
                                            <h4>1000</h4>
                                            <span>Friends</span>
                                        </span>
                                        <em className="ml-auto fa fa-users fa-lg fa-fw text-muted mt-2"></em>
                                    </ListGroupItem>
                                    <ListGroupItem className="d-flex">
                                        <span>
                                            <h4>3000</h4>
                                            <span>Subscriptions</span>
                                        </span>
                                        <em className="ml-auto fa fa-rss fa-lg fa-fw text-muted mt-2"></em>
                                    </ListGroupItem>
                                    <ListGroupItem className="d-flex">
                                        <span>
                                            <h4>100</h4>
                                            <span>Places</span>
                                        </span>
                                        <em className="ml-auto fas fa-map-marker-alt fa-lg fa-fw text-muted mt-2"></em>
                                    </ListGroupItem>
                                    <ListGroupItem className="d-flex">
                                        <span>
                                            <h4>400</h4>
                                            <span>Projects</span>
                                        </span>
                                        <em className="ml-auto fa fa-briefcase fa-lg fa-fw text-muted mt-2"></em>
                                    </ListGroupItem>
                                    <ListGroupItem className="d-flex">
                                        <span>
                                            <h4>17300</h4>
                                            <span>Twees</span>
                                        </span>
                                        <em className="ml-auto fab fa-twitter fa-lg fa-fw text-muted mt-2"></em>
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                        </Col>
                    </Row>
                </div>
            </ContentWrapper>
            );
    }

}

export default Profile;

