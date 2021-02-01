import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Timeline extends Component {

    state = {
        dropdownOpen: false
    }

    toggleDD = () => this.setState({
        dropdownOpen: !this.state.dropdownOpen
    })

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">Timeline</div>
                {/* START timeline */}
                {/* ul.timeline-alt */}
                <ul className="timeline">
                    <li className="timeline-separator" data-datetime="Now"></li>
                    {/* START timeline item */}
                    <li>
                        <div className="timeline-badge primary">
                            <em className="fa fa-users"></em>
                        </div>
                        <div className="timeline-card">
                            <div className="popover left">
                                <h4 className="popover-header">Client Meeting</h4>
                                <div className="arrow"></div>
                                <div className="popover-body">
                                    <p>Av 123 St - Floor 2
                                        <br/>
                                        <small>Pellentesque ut diam velit, eget porttitor risus. Nullam posuere euismod volutpat.</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/* END timeline item */}
                    {/* START timeline item */}
                    <li className="timeline-inverted">
                        <div className="timeline-badge warning">
                            <em className="fa fa-phone"></em>
                        </div>
                        <div className="timeline-card">
                            <div className="popover right">
                                <h4 className="popover-header">Call</h4>
                                <div className="arrow"></div>
                                <div className="popover-body">
                                    <p>Michael
                                        <a href="tel:+011654524578">(+011) 6545 24578 ext. 132</a>
                                        <br/>
                                        <small>Pellentesque ut diam velit, eget porttitor risus. Nullam posuere euismod volutpat.</small>
                                    </p>
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
                        <div className="timeline-badge danger">
                            <em className="fas fa-video"></em>
                        </div>
                        <div className="timeline-card">
                            <div className="popover left">
                                <h4 className="popover-header">Conference</h4>
                                <div className="arrow"></div>
                                <div className="popover-body">
                                    <p>Join development group</p>
                                    <small>
                                        <a href="skype:echo123?call">
                                            <em className="fa fa-phone mr-2"></em>Call the Skype Echo</a>
                                    </small>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/* END timeline item */}
                    {/* START timeline item */}
                    <li className="timeline-inverted">
                        <div className="timeline-card">
                            <div className="popover right">
                                <h4 className="popover-header">Appointment</h4>
                                <div className="arrow"></div>
                                <div className="popover-body">
                                    <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam.</p>
                                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDD}>
                                        <DropdownToggle caret color="link">
                                            <em className="fa fa-paperclip"></em>
                                        </DropdownToggle>
                                        <DropdownMenu className="animated fadeInUpShort">
                                            <DropdownItem>
                                                <em className="fa fa-download mr-2"></em>Download
                                            </DropdownItem>
                                            <DropdownItem>
                                                <em className="fa fa-share mr-2"></em>Send to
                                            </DropdownItem>
                                            <DropdownItem>
                                                <em className="fa fa-times mr-2"></em>Delete
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/* END timeline item */}
                    {/* START timeline item */}
                    <li>
                        <div className="timeline-badge info">
                            <em className="fa fa-plane"></em>
                        </div>
                        <div className="timeline-card">
                            <div className="popover left">
                                <h4 className="popover-header">Fly</h4>
                                <div className="arrow"></div>
                                <div className="popover-body">
                                    <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/* END timeline item */}
                    {/* START timeline item */}
                    <li>
                        <div className="timeline-card">
                            <div className="popover left">
                                <h4 className="popover-header">Appointment</h4>
                                <div className="arrow"></div>
                                <div className="popover-body">
                                    <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/* END timeline item */}
                    {/* START timeline separator */}
                    <li className="timeline-separator" data-datetime="2014-05-21"></li>
                    {/* END timeline separator */}
                    {/* START timeline item */}
                    <li className="timeline-inverted">
                        <div className="timeline-badge success">
                            <em className="fa fa-music"></em>
                        </div>
                        <div className="timeline-card">
                            <div className="popover right">
                                <h4 className="popover-header">Relax</h4>
                                <div className="arrow"></div>
                                <div className="popover-body">
                                    <p>Listen some music</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/* END timeline item */}
                    {/* START timeline item */}
                    <li className="timeline-end">
                        <a className="timeline-badge" href="#more">
                            <em className="fa fa-plus"></em>
                        </a>
                    </li>
                    {/* END timeline item */}
                </ul>
                {/* END timeline */}
            </ContentWrapper>
            );
    }

}

export default Timeline;
