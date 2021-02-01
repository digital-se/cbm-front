import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
// jquery Vector Map
import 'ika.jvectormap/jquery-jvectormap-1.2.2.min.js';
import 'ika.jvectormap/jquery-jvectormap-world-mill-en.js';
import 'ika.jvectormap/jquery-jvectormap-us-mill-en.js';
import 'ika.jvectormap/jquery-jvectormap-1.2.2.css';

/** Wrapper component for jquery-vectormap plugin */
class VectorMap extends Component {

    static propTypes = {
        /** series entry of options object */
        series: PropTypes.object.isRequired,
        /** markers entry of options object */
        markers: PropTypes.array.isRequired,
        /** jvectormap options object */
        options: PropTypes.object.isRequired,
        /** height of the container element */
        height: PropTypes.string
    }

    static defaultProps = {
        height: '300px'
    }

    componentDidMount() {
        this.props.options.markers = this.props.markers;
        this.props.options.series = this.props.series;
        $(this.mapElement).vectorMap(this.props.options);
    }

    componentWillUnmount() {
        const map = $(this.mapElement).vectorMap('get', 'mapObject');
        map.remove()
    }

    setRef = node => this.mapElement = node

    render() {
        return (
            <div ref={this.setRef} style={{height: this.props.height}}/>
        )
    }
}

export default VectorMap;