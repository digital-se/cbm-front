import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Card, CardHeader, CardBody, CardColumns } from 'reactstrap';
import $ from 'jquery';
// JQ Cloud
import 'jqcloud2/dist/jqcloud.css';
import 'jqcloud2/dist/jqcloud.js';

class BlogList extends Component {

    state = {
        //Create an array of word objects, each representing a word in the cloud
        word_array: [
            { text: 'Lorem', weight: 13 /*link: 'http://themicon.co'*/},
            { text: 'Ipsum', weight: 10.5},
            { text: 'Dolor', weight: 9.4},
            { text: 'Sit', weight: 8},
            { text: 'Amet', weight: 6.2},
            { text: 'Consectetur', weight: 5},
            { text: 'Adipiscing', weight: 5},
            { text: 'Sit', weight: 8},
            { text: 'Amet', weight: 6.2},
            { text: 'Consectetur', weight: 5},
            { text: 'Adipiscing', weight: 5
        }]
    }

    componentDidMount() {
        $(this.refs.jqcloud).jQCloud(this.state.word_array, {
            width: 240,
            height: 200,
            steps: 7
        });
    }

    render() {
        return (
            <ContentWrapper>
                <Row>
                    {/* Blog Content */}
                    <Col xl="9">
                        <CardColumns>
                            <Card>
                                <a href="">
                                    <img className="img-fluid" src="img/bg1.jpg" alt="Demo"/>
                                </a>
                                <CardBody>
                                    <p className="d-flex">
                                        <span>
                                            <small className="mr-1">By
                                                <a className="ml-1" href="">Erica Castro</a>
                                            </small>
                                            <small className="mr-1">May 03, 2015</small>
                                        </span>
                                        <span className="ml-auto">
                                            <small>
                                                <strong>56</strong>
                                                <span> Comments</span>
                                            </small>
                                        </span>
                                    </p>
                                    <h4>
                                        <a href="">Trip down the river</a>
                                    </h4>
                                    <p>Aenean in sollicitudin velit. Nam sem magna, tristique non facilisis a, porta ut elit. Aliquam luctus nulla in justo euismod blandit. Aliquam condimentum enim a risus cursus blandit.</p>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody className="bg-primary">
                                    <h3 className="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                                </CardBody>
                                <CardBody>
                                    <p className="d-flex">
                                        <span>
                                            <small className="mr-1">By
                                                <a className="ml-1" href="">Erica Castro</a>
                                            </small>
                                            <small className="mr-1">May 03, 2015</small>
                                        </span>
                                        <span className="ml-auto">
                                            <small>
                                                <strong>56</strong>
                                                <span> Comments</span>
                                            </small>
                                        </span>
                                    </p>
                                </CardBody>
                            </Card>
                            <Card>
                                <a href="">
                                    <img className="img-fluid" src="img/bg10.jpg" alt="Demo"/>
                                </a>
                                <CardBody>
                                    <p className="d-flex">
                                        <span>
                                            <small className="mr-1">By
                                                <a className="ml-1" href="">Erin Clark</a>
                                            </small>
                                            <small className="mr-1">Apr 13, 2015</small>
                                        </span>
                                        <span className="ml-auto">
                                            <small>
                                                <strong>1000</strong>
                                                <span> Comments</span>
                                            </small>
                                        </span>
                                    </p>
                                    <h4>
                                        <a href="">New camera</a>
                                    </h4>
                                    <p>Nullam posuere euismod volutpat. Quisque in ligula eget libero tristique varius sed euismod dolor. Sed ultrices, diam varius pellentesque porta, nulla neque auctor elit, quis tempus orci massa eget odio. Duis eleifend elementum commodo. Donec volutpat tristique laoreet. Cras vitae turpis enim, eget malesuada erat. Suspendisse quam leo, gravida a ullamcorper a, interdum id odio. Nullam eu lacus in nibh rutrum ornare at eget tellus.</p>
                                </CardBody>
                            </Card>
                            <Card>
                                <a href="">
                                    <img className="img-fluid" src="img/bg2.jpg" alt="Demo"/>
                                </a>
                                <CardBody>
                                    <p className="d-flex">
                                        <span>
                                            <small className="mr-1">By
                                                <a className="ml-1" href="">Erica Castro</a>
                                            </small>
                                            <small className="mr-1">May 03, 2015</small>
                                        </span>
                                        <span className="ml-auto">
                                            <small>
                                                <strong>56</strong>
                                                <span> Comments</span>
                                            </small>
                                        </span>
                                    </p>
                                    <h4>
                                        <a href="">Reviewing latests phones</a>
                                    </h4>
                                    <p>Aenean in sollicitudin velit. Nam sem magna, tristique non facilisis a, porta ut elit. Aliquam luctus nulla in justo euismod blandit. Aliquam condimentum enim a risus cursus blandit.</p>
                                </CardBody>
                            </Card>
                            <Card>
                                <a href="">
                                    <img className="img-fluid" src="img/bg8.jpg" alt="Demo"/>
                                </a>
                                <CardBody>
                                    <p className="d-flex">
                                        <span>
                                            <small className="mr-1">By
                                                <a className="ml-1" href="">Allen Step</a>
                                            </small>
                                            <small className="mr-1">May 03, 2015</small>
                                        </span>
                                        <span className="ml-auto">
                                            <small>
                                                <strong>5600</strong>
                                                <span> Comments</span>
                                            </small>
                                        </span>
                                    </p>
                                    <h4>
                                        <a href="">Workspace showcase</a>
                                    </h4>
                                    <p>Aenean iaculis diam lectus. Morbi quis purus velit. Maecenas tincidunt tempus sapien id ultrices. Vivamus fermentum libero vel felis aliquet interdum.</p>
                                </CardBody>
                            </Card>
                            <Card>
                                <a href="">
                                    <img className="img-fluid" src="img/bg3.jpg" alt="Demo"/>
                                </a>
                                <CardBody>
                                    <p className="d-flex">
                                        <span>
                                            <small className="mr-1">By
                                                <a className="ml-1" href="">Erica Castro</a>
                                            </small>
                                            <small className="mr-1">May 03, 2015</small>
                                        </span>
                                        <span className="ml-auto">
                                            <small>
                                                <strong>56</strong>
                                                <span> Comments</span>
                                            </small>
                                        </span>
                                    </p>
                                    <h4>
                                        <a href="">Incredible panoramic</a>
                                    </h4>
                                    <p>Aenean in sollicitudin velit. Nam sem magna, tristique non facilisis a, porta ut elit. Aliquam luctus nulla in justo euismod blandit. Aliquam condimentum enim a risus cursus blandit.</p>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody className="bg-purple">
                                    <h3 className="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                                </CardBody>
                                <CardBody>
                                    <p className="d-flex m-0">
                                        <span>
                                            <small className="mr-1">By
                                                <a className="ml-1" href="">Ava Chavez</a>
                                            </small>
                                            <small className="mr-1">May 03, 2015</small>
                                        </span>
                                        <span className="ml-auto">
                                            <small>
                                                <strong>999</strong>
                                                <span> Comments</span>
                                            </small>
                                        </span>
                                    </p>
                                </CardBody>
                            </Card>
                            <Card>
                                <a href="">
                                    <img className="img-fluid" src="img/bg4.jpg" alt="Demo"/>
                                </a>
                                <CardBody>
                                    <p className="d-flex">
                                        <span>
                                            <small className="mr-1">By
                                                <a className="ml-1" href="">Danny Ford</a>
                                            </small>
                                            <small className="mr-1">May 03, 2015</small>
                                        </span>
                                        <span className="ml-auto">
                                            <small>
                                                <strong>1000</strong>
                                                <span> Comments</span>
                                            </small>
                                        </span>
                                    </p>
                                    <h4>
                                        <a href="">Sunset in the forest</a>
                                    </h4>
                                </CardBody>
                            </Card>
                            <Card>
                                <a href="">
                                    <img className="img-fluid" src="img/bg5.jpg" alt="Demo"/>
                                </a>
                                <CardBody>
                                    <p className="d-flex">
                                        <span>
                                            <small className="mr-1">By
                                                <a className="ml-1" href="">Danny Ford</a>
                                            </small>
                                            <small className="mr-1">May 03, 2015</small>
                                        </span>
                                        <span className="ml-auto">
                                            <small>
                                                <strong>1000</strong>
                                                <span> Comments</span>
                                            </small>
                                        </span>
                                    </p>
                                    <h4>
                                        <a href="">Tech review</a>
                                    </h4>
                                </CardBody>
                            </Card>
                        </CardColumns>
                    </Col>
                    {/* Blog Sidebar */}
                    <Col xl="3">
                        {/* Search */}
                        <Card className="card-default">
                            <CardHeader>Search</CardHeader>
                            <CardBody>
                                <form className="form-horizontal">
                                    <div className="input-group">
                                        <input className="form-control" type="text" placeholder="Search for..."/>
                                        <span className="input-group-btn">
                                            <button className="btn btn-secondary" type="button">
                                                <em className="fa fa-search"></em>
                                            </button>
                                        </span>
                                    </div>
                                </form>
                            </CardBody>
                        </Card>
                        {/* Categories */}
                        <Card className="card-default">
                            <CardHeader>Categories</CardHeader>
                            <CardBody>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="">
                                            <em className="fa fa-angle-right fa-fw"></em>Smartphones</a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <em className="fa fa-angle-right fa-fw"></em>Mobiles</a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <em className="fa fa-angle-right fa-fw"></em>Tech</a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <em className="fa fa-angle-right fa-fw"></em>Inpiration</a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <em className="fa fa-angle-right fa-fw"></em>Workspace</a>
                                    </li>
                                </ul>
                            </CardBody>
                        </Card>
                        {/* Tag Cloud */}
                        <Card className="card-default">
                            <CardHeader>Tag Cloud</CardHeader>
                            <CardBody>
                                <div ref="jqcloud" className="mw-100"></div>
                            </CardBody>
                        </Card>
                        {/* Ads */}
                        <Card className="card-default">
                            <CardHeader>Ads</CardHeader>
                            <CardBody className="ie-fix-flex">
                                <a href="">
                                    <img className="img-fluid img-thumbnail" src="img/mockup.png" alt="Demo"/>
                                </a>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </ContentWrapper>
            );
    }

}

export default BlogList;

