import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/actions/actions';

import { Link } from 'react-router-dom';

import { Button } from 'reactstrap'

import { withKeycloak } from '@react-keycloak/web';

class Header extends Component {

    componentDidMount() {
        // HeaderRun();
    }

    toggleUserblock = e => {
        e.preventDefault();
        this.props.actions.toggleSetting('showUserBlock');
    }

    toggleOffsidebar = e => {
        e.preventDefault()
        this.props.actions.toggleSetting('offsidebarOpen');
    }

    toggleCollapsed = e => {
        e.preventDefault()
        this.props.actions.toggleSetting('isCollapsed');
        this.resize()
    }

    resize() {
        // all IE friendly dispatchEvent
        var evt = document.createEvent('UIEvents');
        evt.initUIEvent('resize', true, false, window, 0);
        window.dispatchEvent(evt);
    }

    render() {
        return (
            <header className="topnavbar-wrapper">
                { /* START Top Navbar */}
                <nav className="navbar topnavbar">
                    { /* START navbar header */}
                    <div className="navbar-header">
                        <Link to={"/"} className="navbar-brand">
                            <div className="brand-logo">
                                <img className="img-fluid" src="img/logobomb.png" alt="App Logo" width={45} />
                            </div>
                            <div className="brand-logo-collapsed">
                                <img className="img-fluid" src="img/logobomb.png" alt="App Logo" width={45} />
                            </div>
                        </Link>
                    </div>
                    { /* END navbar header */}

                    { /* START Left navbar */}
                    <ul className="navbar-nav mr-auto flex-row">
                        <li className="nav-item">
                            <Link  to={"/busca/"} className="nav-link d-none d-md-block d-lg-block d-xl-block" >
                                <em className="fas fa-search"></em>
                            </Link>
                        </li>
                    </ul>
                    { /* END Left navbar */}

                    { /* START Right Navbar */}
                    <ul className="navbar-nav flex-row">
                        { /* Search icon */}
                        <li className="nav-item">
                            <a className="nav-link" href="" data-search-open="">
                                {this.props.keycloak?.authenticated ?
                                    (<Button style={{ backgroundColor: '#ffff' }} onClick={(e) => { e.preventDefault(); this.props.keycloak.logout() }}>Logout ({this.props.keycloak.tokenParsed.preferred_username}) <em className="icon-user"></em></Button>)
                                    :
                                    (<Button style={{ backgroundColor: '#ffff' }}  onClick={(e) => { e.preventDefault(); this.props.keycloak.login() }}>Login <em className="icon-user"></em></Button>)}
                            </a>
                        </li>
                    </ul>
                    { /* END Right Navbar */}
                </nav>
                { /* END Top Navbar */}
            </header>
        );
    }

}

Header.propTypes = {
    actions: PropTypes.object,
    settings: PropTypes.object,
    keycloak: PropTypes.object
};

const mapStateToProps = state => ({ settings: state.settings })
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withKeycloak(Header));
