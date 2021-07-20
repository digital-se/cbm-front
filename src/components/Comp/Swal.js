import React from 'react';
import PropTypes from 'prop-types';
// Sweet Alert
import sswal from 'sweetalert2';

import withReactContent from 'sweetalert2-react-content';

const swal = withReactContent(sswal);

/**
 * Wrapper component for sweetalert plugin
 */
const Swal = props => {

    const handleClick = e => {
        e.preventDefault();
        // pass swal reference so is possible to chain popups
        console.log(props.options)
        swal.fire(props.options).then(p => props.callback(p, swal));
    }

    const { ...rest } = props;
    return (
        <div {...rest} onClick={handleClick}>
            {props.children}
        </div>
    )
}

Swal.propTypes = {
    /** swal options object */
    options: PropTypes.object.isRequired,
    /** callback function for swal response */
    callback: PropTypes.func,
    children: PropTypes.node
}

Swal.defaultProps = {
    callback: () => { }
}

export default Swal;