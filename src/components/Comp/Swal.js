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

    const { callback, ...rest } = props;
    return (
        <div {...rest} onClick={handleClick}>
            {props.children}
        </div>
    )
}

Swal.propType = {
    /** swal options object */
    options: PropTypes.object.isRequired,
    /** callback function for swal response */
    callback: PropTypes.func
}

Swal.defaultProps = {
    callback: () => {}
}

export default Swal;


// import React, { Component } from 'react';
// import { withSwalInstance } from 'sweetalert2-react';
// import swal from 'sweetalert2';

// const SweetAlert = withSwalInstance(swal);

// const Swal = props => {

//     state = {
//         show: false
//     };

//     const handleClick = e => {
//         e.preventDefault();
//         // pass swal reference so is possible to chain popups
//         swal(props.options).then(p => props.callback(p, swal));
//     }

//     const { callback, ...rest } = props;

//     return (
//         <div>
//             <button onClick={() => this.setState({ show: true })}>Alert</button>
//             <SweetAlert
//                 show={this.state.show}
//                 title="Demo"
//                 text="SweetAlert in React"
//                 onConfirm={() => this.setState({ show: false })}
//             />
//         </div>
//     );
// }
// export default Swal;