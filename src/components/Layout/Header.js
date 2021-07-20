import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/actions/actions';


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

    toggleAside = e => {
        e.preventDefault()
        this.props.actions.toggleSetting('asideToggled');
    }

    resize() {
        // all IE friendly dispatchEvent
        var evt = document.createEvent('UIEvents');
        evt.initUIEvent('resize', true, false, window, 0);
        window.dispatchEvent(evt);
        // modern dispatchEvent way
        // window.dispatchEvent(new Event('resize'));
    }

    render() {
        return (
            <header className="topnavbar-wrapper">
                { /* START Top Navbar */}
                <nav className="navbar topnavbar">
                    { /* START navbar header */}
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#/">
                            <div className="brand-logo">
                                <img className="img-fluid" src="img/logobomb.png" alt="App Logo" width={45} />
                            </div>
                            <div className="brand-logo-collapsed">
                                <img className="img-fluid" src="img/logobomb.png" alt="App Logo" width={45} />
                            </div>
                        </a>
                    </div>
                    { /* END navbar header */}

                    { /* START Left navbar */}
                    <ul className="navbar-nav mr-auto flex-row">
                        <li className="nav-item">
                            { /* Button used to collapse the left sidebar. Only visible on tablet and desktops */}
                            <a href="" className="nav-link d-none d-md-block d-lg-block d-xl-block" onClick={this.toggleCollapsed}>
                                <em className="fas fa-bars"></em>
                            </a>
                            { /* Button to show/hide the sidebar on mobile. Visible on mobile only. */}
                            <a href="" className="nav-link sidebar-toggle d-md-none" onClick={this.toggleAside}>
                                <em className="fas fa-bars"></em>
                            </a>
                        </li>
                    </ul>
                    { /* END Left navbar */}

                    { /* START Right Navbar */}
                    <ul className="navbar-nav flex-row">
                        { /* Search icon */}
                        <li className="nav-item">
                            <a className="nav-link" href="" data-search-open="">
                                {this.props.keycloak?.authenticated ?
                                    (<Button onClick={(e) => { e.preventDefault(); this.props.keycloak.logout() }}>Logout ({this.props.keycloak.tokenParsed.preferred_username}) <em className="icon-user"></em></Button>)
                                    :
                                    (<Button onClick={(e) => { e.preventDefault(); this.props.keycloak.login() }}>Login <em className="icon-user"></em></Button>)}
                            </a>
                        </li>
                        { /* START Offsidebar button */}
                        <li className="nav-item" style={{ display: "none" }}>
                            <a className="nav-link" href="" onClick={this.toggleOffsidebar}>
                                <em className="icon-notebook"></em>
                            </a>
                        </li>
                        { /* END Offsidebar menu */}
                    </ul>
                    { /* END Right Navbar */}

                    { /* START Search form */}
                    {/* <form className="navbar-form" role="search" action="search.html">
                        <div className="form-group">
                            <input className="form-control" type="text" placeholder="digite aqui ..." />
                            <div className="fa fa-times navbar-form-close" data-search-dismiss=""></div>
                        </div>
                        <button className="d-none" type="submit">Submit</button>
                    </form> */}
                    { /* END Search form */}
                    { /* ADD o status de funcionario logado, como? descubra nos próximos capitulos */}
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
