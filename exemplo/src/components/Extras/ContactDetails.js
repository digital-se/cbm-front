import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';

class ContactDetails extends Component {

    state = {
        dropdownOpen: false
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <ContentWrapper>
                <Row>
                    <Col lg="4">
                        <div className="card card-default">
                            <div className="card-body text-center">
                                <div className="py-4">
                                    <img className="img-fluid rounded-circle img-thumbnail thumb96" src="img/user/02.jpg" alt="Contact"/>
                                </div>
                                <h3 className="m-0 text-bold">Audrey Hunt</h3>
                                <div className="my-3">
                                    <p>Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!</p>
                                </div>
                                <div className="text-center">
                                    <button type="button" className="btn btn-primary">Send message</button>
                                </div>
                            </div>
                        </div>
                        <div className="card card-default d-none d-lg-block">
                            <div className="card-header">
                                <div className="card-title text-center">Recent contacts</div>
                            </div>
                            <div className="card-body">
                                <div className="media">
                                    <img className="align-self-center mr-2 rounded-circle img-thumbnail thumb48" src="img/user/04.jpg" alt="Contact"/>
                                    <div className="media-body py-2">
                                        <div className="text-bold">Floyd Ortiz
                                            <div className="text-sm text-muted">12m ago</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media">
                                    <img className="align-self-center mr-2 rounded-circle img-thumbnail thumb48" src="img/user/05.jpg" alt="Contact"/>
                                    <div className="media-body py-2">
                                        <div className="text-bold">Luis Vasquez
                                            <div className="text-sm text-muted">2h ago</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media">
                                    <img className="align-self-center mr-2 rounded-circle img-thumbnail thumb48" src="img/user/06.jpg" alt="Contact"/>
                                    <div className="media-body py-2">
                                        <div className="text-bold">Duane Mckinney
                                            <div className="text-sm text-muted">yesterday</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media">
                                    <img className="align-self-center mr-2 rounded-circle img-thumbnail thumb48" src="img/user/07.jpg" alt="Contact"/>
                                    <div className="media-body py-2">
                                        <div className="text-bold">Connie Lambert
                                            <div className="text-sm text-muted">2 weeks ago</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="8">
                        <div className="card card-default">
                            <div className="card-header d-flex align-items-center">
                                <div className="d-flex justify-content-center col">
                                    <div className="h4 m-0 text-center">Contact Information</div>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                        <DropdownToggle color="link">
                                            <em className="fa fa-ellipsis-v fa-lg text-muted"></em>
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu-right-forced animated fadeInLeft">
                                            <DropdownItem>
                                                <span>Send by message</span>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <span>Share contact</span>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <span>Block contact</span>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <span className="text-warning">Delete contact</span>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row py-4 justify-content-center">
                                    <div className="col-12 col-sm-10">
                                        <form className="form-horizontal">
                                            <div className="form-group row">
                                                <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputContact1">Name</label>
                                                <div className="col-xl-10 col-md-9 col-8">
                                                    <input className="form-control" id="inputContact1" type="text" placeholder="" defaultValue="Audrey Hunt"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputContact2">Email</label>
                                                <div className="col-xl-10 col-md-9 col-8">
                                                    <input className="form-control" id="inputContact2" type="email" defaultValue="mail@example.com"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputContact3">Phone</label>
                                                <div className="col-xl-10 col-md-9 col-8">
                                                    <input className="form-control" id="inputContact3" type="text" defaultValue="(123) 465 789"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputContact4">Mobile</label>
                                                <div className="col-xl-10 col-md-9 col-8">
                                                    <input className="form-control" id="inputContact4" type="text" defaultValue="(12) 123 987 465"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputContact5">Website</label>
                                                <div className="col-xl-10 col-md-9 col-8">
                                                    <input className="form-control" id="inputContact5" type="text" defaultValue="http://some.wesbite.com"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputContact6">Address</label>
                                                <div className="col-xl-10 col-md-9 col-8">
                                                    <textarea className="form-control" id="inputContact6" row="4" defaultValue="Some nice Street, 1234"></textarea>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputContact7">Social</label>
                                                <div className="col-xl-10 col-md-9 col-8">
                                                    <input className="form-control" id="inputContact7" type="text" defaultValue="@Social"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputContact8">Company</label>
                                                <div className="col-xl-10 col-md-9 col-8">
                                                    <input className="form-control" id="inputContact8" type="text" placeholder="No Company"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-xl-2 col-md-3 col-4"></div>
                                                <div className="col-xl-10 col-md-9 col-8">
                                                    <div className="custom-control custom-checkbox">
                                                        <input className="custom-control-input" id="customCheck1" type="checkbox"/>
                                                        <label className="custom-control-label" htmlFor="customCheck1">Favorite contact?</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-md-10">
                                                    <button className="btn btn-info" type="submit">Update</button>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="text-right">
                                            <a className="text-muted" href="">Delete this contact?</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </ContentWrapper>
            );
    }

}

export default ContactDetails;
