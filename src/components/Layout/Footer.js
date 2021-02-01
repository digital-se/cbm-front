import React, { Component } from 'react';

class Footer extends Component {

    render() {
        const year = new Date().getFullYear()
        return (
            <footer className="footer-container">
                <center> <span>&copy; {year} - CBMSE</span> </center>
            </footer>
        );
    }

}

export default Footer;
