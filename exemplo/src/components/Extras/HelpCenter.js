import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Container, Row, Col } from 'reactstrap';

class HelpCenter extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <ContentWrapper>
                <div className="unwrap">
                    <div className="bg-cover">
                        <Container className="container-md py-4">
                            <div className="text-center mb-3 pb-3">
                                <div className="h1 text-bold">Help Center</div>
                                <p>User our Help Center to quickly find answers</p>
                            </div>
                        </Container>
                    </div>
                </div>
                <Container className="container-md">
                    <form action="">
                        <div className="input-group input-group-lg">
                            <input className="form-control form-control-lg rounded-0" type="text" name="term" placeholder="Search"/>
                            <select className="form-control form-control-lg">
                                <option>All Products</option>
                                <option>Templates</option>
                                <option>Servers</option>
                                <option>Billing</option>
                                <option>Buyers</option>
                                <option>Sellers</option>
                                <option>Plans</option>
                                <option>Accounts</option>
                            </select>
                            <div className="input-group-append">
                                <button className="btn btn-info btn-lg b0 rounded-0" type="button">
                                    <strong>Search</strong>
                                </button>
                            </div>
                        </div>
                    </form>
                    <p className="my-3 py-4 text-muted text-center">
                        <small>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</small>
                    </p>
                    <Row>
                        <Col lg="4">
                            <div className="card b">
                                <div className="card-body text-center">
                                    <a className="link-unstyled text-primary" href="">
                                        <em className="fa-5x fas fa-tv mb-3"></em>
                                        <br/>
                                        <span className="h4">All Products</span>
                                        <br/>
                                        <div className="text-sm text-muted">View all &rarr;</div>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4">
                            <div className="card b">
                                <div className="card-body text-center">
                                    <a className="link-unstyled text-info" href="">
                                        <em className="fa-5x fa fa-object-group mb-3"></em>
                                        <br/>
                                        <span className="h4">Templates</span>
                                        <br/>
                                        <div className="text-sm text-muted">View all &rarr;</div>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4">
                            <div className="card b">
                                <div className="card-body text-center">
                                    <a className="link-unstyled text-purple" href="">
                                        <em className="fa-5x fa fa-cubes mb-3"></em>
                                        <br/>
                                        <span className="h4">Servers</span>
                                        <br/>
                                        <div className="text-sm text-muted">View all &rarr;</div>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4">
                            <div className="card b">
                                <div className="card-body text-center">
                                    <a className="link-unstyled text-warning" href="">
                                        <em className="fa-5x far fa-gem mb-3"></em>
                                        <br/>
                                        <span className="h4">Buyers</span>
                                        <br/>
                                        <div className="text-sm text-muted">View all &rarr;</div>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4">
                            <div className="card b">
                                <div className="card-body text-center">
                                    <a className="link-unstyled text-danger" href="">
                                        <em className="fa-5x far fa-building mb-3"></em>
                                        <br/>
                                        <span className="h4">Sellers</span>
                                        <br/>
                                        <div className="text-sm text-muted">View all &rarr;</div>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4">
                            <div className="card b">
                                <div className="card-body text-center">
                                    <a className="link-unstyled text-success" href="">
                                        <em className="fa-5x far fa-calendar-check mb-3"></em>
                                        <br/>
                                        <span className="h4">Billing</span>
                                        <br/>
                                        <div className="text-sm text-muted">View all &rarr;</div>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="2">
                        </Col>
                        <Col lg="4">
                            <div className="card b">
                                <div className="card-body text-center">
                                    <a className="link-unstyled text-dark" href="">
                                        <em className="fa-5x fa fa-recycle mb-3"></em>
                                        <br/>
                                        <span className="h4">Plans</span>
                                        <br/>
                                        <div className="text-sm text-muted">View all &rarr;</div>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4">
                            <div className="card b">
                                <div className="card-body text-center">
                                    <a className="link-unstyled text-dark" href="">
                                        <em className="fa-5x fa fa-street-view mb-3"></em>
                                        <br/>
                                        <span className="h4">Accounts</span>
                                        <br/>
                                        <div className="text-sm text-muted">View all &rarr;</div>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </ContentWrapper>
            );
    }

}

export default HelpCenter;
