import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import $ from 'jquery';
// JQ Cloud
import 'jqcloud2/dist/jqcloud.css';
import 'jqcloud2/dist/jqcloud.js';

class BlogPost extends Component {

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
                        <Card className="card-default">
                            <CardHeader>
                                <div className="bb">
                                    <h2 className="text-lg mt-3">Maecenas rutrum fringilla vehicula.</h2>
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
                                                <span>Comments</span>
                                            </small>
                                        </span>
                                    </p>
                                </div>
                            </CardHeader>
                            <CardBody className="text-md">
                                <p>Praesent bibendum eros urna, in mattis est. Curabitur a purus urna, sit amet auctor erat. Praesent pellentesque augue eu tellus facilisis pretium. Aenean sollicitudin facilisis tortor eu mollis. Vivamus feugiat faucibus enim. Sed ut semper leo. Etiam feugiat risus massa. Nunc et magna in metus pharetra ultricies ac sit amet justo. Donec eu dolor sem, non auctor sapien. Suspendisse nisl nulla, interdum at fermentum eget, adipiscing in elit.</p>
                                <p>Proin est sapien, convallis non hendrerit nec, laoreet ut ipsum. Praesent blandit venenatis mauris ac cursus. Nulla commodo interdum magna consectetur lacinia. Maecenas vitae adipiscing mauris. Nam sodales sollicitudin adipiscing.</p>
                                <br/>
                                <Row>
                                    <Col xs="3">
                                        <a href="">
                                            <img className="img-fluid" src="img/bg4.jpg" alt="Demo"/>
                                        </a>
                                    </Col>
                                    <Col xs="3">
                                        <a href="">
                                            <img className="img-fluid" src="img/bg5.jpg" alt="Demo"/>
                                        </a>
                                    </Col>
                                    <Col xs="3">
                                        <a href="">
                                            <img className="img-fluid" src="img/bg7.jpg" alt="Demo"/>
                                        </a>
                                    </Col>
                                    <Col xs="3">
                                        <a href="">
                                            <img className="img-fluid" src="img/bg8.jpg" alt="Demo"/>
                                        </a>
                                    </Col>
                                </Row>
                                <br/>
                                <p>Praesent tristique dui eu nunc fringilla et iaculis magna ornare. Proin sed erat sit amet metus rhoncus tincidunt. Vivamus commodo, tortor ut interdum posuere, urna risus aliquet purus, eu fringilla dui neque quis nisi. Proin posuere gravida ipsum, a pretium augue commodo eget. In id elit nulla. Donec nec magna a diam eleifend facilisis non in urna. Nam enim libero, lacinia a tristique a, accumsan sed purus. Phasellus ullamcorper rhoncus sagittis.</p>
                                <p>Sed eu rhoncus magna. Morbi non dui elementum nisl ultrices tincidunt. Nullam sagittis hendrerit erat, sit amet gravida ante tristique non. Nam arcu quam, aliquet eget varius sed, placerat et elit. Morbi nec luctus eros. Cras rutrum scelerisque auctor. Praesent malesuada erat ut tellus egestas sagittis. Etiam feugiat risus massa. Aliquam eget turpis eget dui eleifend suscipit ac sed dolor. Sed accumsan adipiscing enim. Sed auctor dignissim fringilla. Sed id turpis tellus. Nam vel tristique dolor. Ut scelerisque ligula tellus. Duis accumsan, est vel convallis dignissim, est massa pharetra ipsum, eu auctor nunc mi ac libero. Integer fermentum molestie massa at congue. Vestibulum congue tempus odio ac posuere. Integer lorem metus, rutrum non rhoncus sed, fringilla interdum urna.</p>
                                <hr className="my-4"/>
                                <div className="btn-group" role="group" aria-label="...">
                                    <button className="btn btn-secondary" type="button">
                                        <em className="fab fa-facebook-f text-muted"></em>
                                    </button>
                                    <button className="btn btn-secondary" type="button">
                                        <em className="fab fa-twitter text-muted"></em>
                                    </button>
                                    <button className="btn btn-secondary" type="button">
                                        <em className="fab fa-google-plus-g text-muted"></em>
                                    </button>
                                    <button className="btn btn-secondary" type="button">
                                        <em className="fa fa-tumblr text-muted"></em>
                                    </button>
                                    <button className="btn btn-secondary" type="button">
                                        <em className="fa fa-pinterest text-muted"></em>
                                    </button>
                                    <button className="btn btn-secondary" type="button">
                                        <em className="fa fa-share-alt text-muted"></em>
                                    </button>
                                </div>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>3 Comments</CardHeader>
                            <CardBody>
                                <div className="media">
                                    <img className="mr-3 rounded-circle thumb64" src="img/user/01.jpg" alt="Demo"/>
                                    <div className="media-body">
                                        <h4 id="media-heading">
                                            <a href="">Susan Grant</a>
                                            <small> 10 min</small>
                                        </h4>
                                        <p>Donec ac massa tortor. In hac habitasse platea dictumst. Nam blandit fringilla faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget metus semper congue.</p>
                                        <p>Fusce ullamcorper placerat tortor, placerat consequat diam cursus posuere.</p>
                                    </div>
                                </div>
                                <hr/>
                                <div className="media">
                                    <img className="mr-3 rounded-circle thumb64" src="img/user/03.jpg" alt="Demo"/>
                                    <div className="media-body mb-3">
                                        <h4 id="media-heading">
                                            <a href="">Dustin Dunn</a>
                                            <small> 20 min</small>
                                        </h4>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        <hr/>
                                        <div className="media">
                                            <img className="mr-3 rounded-circle thumb64" src="img/user/06.jpg" alt="Demo"/>
                                            <div className="media-body">
                                                <h4 id="nested-media-heading">
                                                    <a href="">Marcus Gomez</a>
                                                    <small> 1 hour</small>
                                                </h4>Integer ac nisl et urna gravida malesuada. Vivamus fermentum libero vel felis aliquet interdum.</div>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <em className="fas fa-pencil-alt mr-2"></em>Add your Comment
                            </CardHeader>
                            <CardBody>
                                <form className="form-horizontal" action="/">
                                    <div className="form-group row">
                                        <Col xs="6">
                                            <input className="form-control" id="post-firstname" type="text" name="post-firstname" placeholder="Your firstname"/>
                                        </Col>
                                        <Col xs="6">
                                            <input className="form-control" id="post-lastname" type="text" name="post-lastname" placeholder="Your lastname"/>
                                        </Col>
                                    </div>
                                    <div className="form-group row">
                                        <Col xs="12">
                                            <textarea className="form-control" id="post-comment" name="post-comment" rows="4" placeholder="Comment here.."></textarea>
                                        </Col>
                                    </div>
                                    <div className="form-group row">
                                        <Col xs="12">
                                            <button className="btn btn-primary" type="button">Send Comment</button>
                                        </Col>
                                    </div>
                                </form>
                            </CardBody>
                        </Card>
                    </Col>
                    {/* Blog Sidebar */}
                    <Col xl="3">
                        <Row>
                            <Col xs="12">
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
                            </Col>
                            <Col xs="4" xl="12">
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
                            </Col>
                            <Col xs="4" xl="12">
                                {/* Tag Cloud */}
                                <Card className="card-default">
                                    <CardHeader>Tag Cloud</CardHeader>
                                    <CardBody>
                                        <div ref="jqcloud" className="mw-100"></div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs="4" xl="12">
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
                    </Col>
                </Row>
            </ContentWrapper>
            );
    }

}

export default BlogPost;
