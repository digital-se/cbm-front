import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

// required props for HOCs (withScriptjs and withGoogleMap)
const requiredProps = {
    googleMapURL: '//maps.google.com/maps/api/js?key=AIzaSyBNs42Rt_CyxAqdbIBK0a5Ut83QiauESPA', // &libraries=geometry,drawing,places
    loadingElement: <div className='gmap'>Loading...</div>,
    containerElement: <div className='gmap'/>,
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
// Demo with custom zoon
const DemoMapCustomZoom = compose(
  withProps(requiredProps),
  withScriptjs,
  withGoogleMap
)(props => (
    <GoogleMap defaultZoom={props.customZoom} defaultCenter={props.location}>
        <Marker position={props.location} />
    </GoogleMap>
))
// Demo with custom map type
const DemoMapCustomType = compose(
  withProps(requiredProps),
  withScriptjs,
  withGoogleMap
)(props => (
    <GoogleMap defaultZoom={14} defaultCenter={props.location} defaultMapTypeId={window.google.maps.MapTypeId[props.mapType]}>
        <Marker position={props.location} />
    </GoogleMap>
))

// Demo with multiple markers
const DemoMapCustomMarkers = compose(
  withProps(requiredProps),
  withScriptjs,
  withGoogleMap
)(props => (
    props.customMarkers.length ?
        <GoogleMap defaultZoom={14} defaultCenter={props.customMarkers[0]}>
            {props.customMarkers.map((loc, i) =>
                <Marker key={i} position={loc} />
            )}
        </GoogleMap>
    :
        null
))

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

class MapsGoogle extends Component {

    state = {
        // default location used for all demos
        location:  { lat: 33.7906731, lng: -117.8357194 },
        location2: { lat: 33.7928273, lng: -117.8360953 },

        // Get more styles from http://snazzymaps.com/style/29/light-monochrome
        // - Just replace and assign to 'MapStyles' the new style array
        customStyle: [{featureType:'water',stylers:[{visibility:'on'},{color:'#bdd1f9'}]},{featureType:'all',elementType:'labels.text.fill',stylers:[{color:'#334165'}]},{featureType:'landscape',stylers:[{color:'#e9ebf1'}]},{featureType:'road.highway',elementType:'geometry',stylers:[{color:'#c5c6c6'}]},{featureType:'road.arterial',elementType:'geometry',stylers:[{color:'#fff'}]},{featureType:'road.local',elementType:'geometry',stylers:[{color:'#fff'}]},{featureType:'transit',elementType:'geometry',stylers:[{color:'#d8dbe0'}]},{featureType:'poi',elementType:'geometry',stylers:[{color:'#cfd5e0'}]},{featureType:'administrative',stylers:[{visibility:'on'},{lightness:33}]},{featureType:'poi.park',elementType:'labels',stylers:[{visibility:'on'},{lightness:20}]},{featureType:'road',stylers:[{color:'#d8dbe0',lightness:20}]}]
    }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>Google Maps
                        <small>Easy usage directly from data attribute</small>
                    </div>
                </div>
                <Row>
                    <Col md={ 6 }>
                        <Card className="card-default">
                            <CardHeader>Classic Map</CardHeader>
                            <CardBody>
                                <DemoMapClassic location={this.state.location}/>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={ 6 }>
                        <Card className="card-default">
                            <CardHeader>Custom zoom</CardHeader>
                            <CardBody>
                                <DemoMapCustomZoom location={this.state.location} customZoom={19}/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={ 6 }>
                        <Card className="card-default">
                            <CardHeader>Different Map Type</CardHeader>
                            <CardBody>
                                <DemoMapCustomType location={this.state.location} mapType='SATELLITE'/>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={ 6 }>
                        <Card className="card-default">
                            <CardHeader>Multiple Addresses</CardHeader>
                            <CardBody>
                                <DemoMapCustomMarkers customMarkers={[this.state.location, this.state.location2]}/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={ 12 }>
                        <Card className="card-default">
                            <CardHeader>Styled Maps</CardHeader>
                            <CardBody>
                                <DemoMapCustomStyle location={this.state.location} mapStyles={this.state.customStyle}/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </ContentWrapper>
            );
    }

}

export default MapsGoogle;

