import React from 'react';
import PropTypes from 'prop-types';

const BasePage = props => (
    <div className="wrapper">
        {props.children}
    </div>
)
BasePage.propTypes = {
    children: PropTypes.node
}

export default BasePage;
