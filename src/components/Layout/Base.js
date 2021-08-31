import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header'

const Base = props => (
    <div className="wrapper">
        <Header />
        <section className="section-container">
            {props.children}
        </section>

    </div>
)
Base.propTypes = {
    children: PropTypes.node.isRequired
}

export default Base;
