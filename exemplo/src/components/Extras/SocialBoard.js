import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class SocialBoard extends Component {

    state = {
        dropdownOpen: false,
        dropdownOpen2: false
    }

    toggle = () => this.setState({
        dropdownOpen: !this.state.dropdownOpen
    })

    toggle2 = () => this.setState({
        dropdownOpen2: !this.state.dropdownOpen2
    })

    render = () => (
        <ContentWrapper>
            <div className="card b text-white">
                <div className="card-body bg-cover clearfix" style={{backgroundImage: 'url(img/profile-bg.jpg)'}}>
                    <div className="media mt-0 align-items-center">
                        <img className="mr-3 img-thumbnail rounded-circle thumb96" src="img/user/06.jpg" alt="Demo"/>
                        <div className="media-body">
                            <div className="d-flex">
                                <div>
                                    <h4 className="m-0">Claire Beck</h4>
                                    <p>Team lead</p>
                                    <button className="btn btn-info btn-xs" type="button">"Following"</button>
                                </div>
                                <div className="ml-auto">
                                    <div className="inline text-center mr-2">
                                        <div className="h3 m-0">
                                            <strong>1.4k</strong>
                                        </div>
                                        <small>followers</small>
                                    </div>
                                    <div className="inline text-center mr-2">
                                        <div className="h3 m-0">
                                            <strong>350</strong>
                                        </div>
                                        <small>pictures</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-columns card-columns-2">
                <div className="card b">
                    <div className="card-body">
                        <form className="mb-2 mt-2" method="post" action="">
                            <textarea className="form-control" rows="4" placeholder="Post a new comment.."></textarea>
                        </form>
                        <div className="clearfix">
                            <div className="float-left">
                                <ul className="nav nav-pills">
                                    <li className="nav-item">
                                        <a className="nav-link" href="">
                                            <em className="fa fa-location-arrow"></em>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">
                                            <em className="far fa-image"></em>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">
                                            <em className="fas fa-video"></em>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="float-right">
                                <button className="btn btn-success" type="button">Post</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card b">
                    <div className="card-header">
                        <div className="float-right">
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle color="link">
                                    <em className="fa fa-ellipsis-v fa-lg text-muted"></em>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-right-forced animated fadeInLeft">
                                    <DropdownItem>
                                        <span>Hide this</span>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <span>Share</span>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <span>Block user</span>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                        <div className="media mt-0">
                            <img className="mr-2 img-thumbnail rounded-circle thumb32" src="img/user/03.jpg" alt="Demo"/>
                            <div className="media-body">
                                <h5 className="m-0 text-bold">Raymond Clark</h5>
                                <div className="text-sm text-muted">yesterday</div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-xl-4 text-center mb-3">
                                <a href="">
                                    <img className="img-fluid img-thumbnail" src="img/bg8.jpg" alt="Demo"/>
                                </a>
                            </div>
                            <div className="col-xl-8">
                                <h4>Lorem Ipsum</h4>
                                <p>Fusce at enim eget nibh convallis elementum. Duis a neque odio, at varius elit. Suspendisse ullamcorper eros eget augue ultrices feugiat. Phasellus dictum nisi eu ipsum fermentum rhoncus. Mauris eu lacus massa, vel condimentum lectus..
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <form className="mt-2" method="post" action="">
                            <textarea className="form-control no-resize" placeholder="Comment..." rows="1"></textarea>
                        </form>
                    </div>
                </div>
                <div className="card b">
                    <div className="card-header">
                        <div className="float-right">
                            <a className="text-muted" href="">
                                <em className="far fa-thumbs-up fa-fw"></em>
                                <span>(32)</span>
                            </a>
                        </div>
                        <div className="media mt-0">
                            <img className="mr-2 img-thumbnail rounded-circle thumb32" src="img/user/08.jpg" alt="Demo"/>
                            <div className="media-body">
                                <h5 className="m-0 text-bold">Kelly Vargas</h5>
                                <div className="text-sm text-muted">3 days</div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <p>Curabitur dignissim dapibus nisl sed iaculis.</p>
                        <p>
                            <a href="">
                                <img className="img-fluid img-thumbnail" src="img/bg10.jpg" alt="Demo"/>
                            </a>
                        </p>
                        <p>
                            <em className="far fa-comment fa-fw"></em>
                            <span>(9)</span>
                        </p>
                        <div className="media mb-2">
                            <img className="mr-2 rounded-circle thumb32" src="img/user/05.jpg" alt="Demo"/>
                            <div className="media-body">
                                <span>
                                    <p className="m-0">
                                        <a href="">
                                            <strong>Aiden Curtis</strong>
                                        </a>
                                    </p>
                                    <p className="m-0 text-muted">Hey looks great!</p>
                                </span>
                            </div>
                            <small className="ml-auto text-muted">12m ago</small>
                        </div>
                        <div className="media mb-2">
                            <img className="mr-2 rounded-circle thumb32" src="img/user/08.jpg" alt="Demo"/>
                            <div className="media-body">
                                <span>
                                    <p className="m-0">
                                        <a href="">
                                            <strong>William Stevens</strong>
                                        </a>
                                    </p>
                                    <p className="m-0 text-muted">Excellento shot!</p>
                                </span>
                            </div>
                            <small className="ml-auto text-muted">30m ago</small>
                        </div>
                        <div className="media mb-2">
                            <img className="mr-2 rounded-circle thumb32" src="img/user/04.jpg" alt="Demo"/>
                            <div className="media-body">
                                <span>
                                    <p className="m-0">
                                        <a href="">
                                            <strong>James Payne</strong>
                                        </a>
                                    </p>
                                    <p className="m-0 text-muted">Nice shot!</p>
                                </span>
                            </div>
                            <small className="ml-auto text-muted">30m ago</small>
                        </div>
                    </div>
                    <div className="card-body bg-gray-lighter">
                        <a className="link-unstyled" href="">Load (6) more comments</a>
                    </div>
                    <div className="card-body">
                        <form className="mt-2" method="post" action="">
                            <textarea className="form-control no-resize" placeholder="Comment..." rows="1"></textarea>
                        </form>
                    </div>
                </div>
                <div className="card b">
                    <div className="card-header">
                        <div className="float-right">
                            <a className="inline" href="">
                                <img className="rounded-circle thumb24" src="img/user/05.jpg" alt="member"/>
                            </a>
                            <a className="inline" href="">
                                <img className="rounded-circle thumb24" src="img/user/06.jpg" alt="member"/>
                            </a>
                            <a className="inline" href="">
                                <img className="rounded-circle thumb24" src="img/user/07.jpg" alt="member"/>
                            </a>
                        </div>
                        <div className="media mt-0">
                            <img className="mr-2 img-thumbnail rounded-circle thumb32" src="img/user/04.jpg" alt="Demo"/>
                            <div className="media-body">
                                <h5 className="m-0 text-bold">Travis Horton</h5>
                                <div className="text-sm text-muted">3 minutes</div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <blockquote>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu odio vitae augue elementum molestie sed quis turpis.</p>
                            <footer>Someone famous in
                                <cite title="Source Title">Source Title</cite>
                            </footer>
                        </blockquote>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="card b">
                    <div className="card-header">
                        <div className="media">
                            <img className="mr-2 img-thumbnail rounded-circle thumb32" src="img/user/08.jpg" alt="Demo"/>
                            <div className="media-body">
                                <h5 className="m-0 text-bold">Kelly Vargas</h5>
                                <div className="text-sm text-muted">3 days</div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <p>
                            <a href="">
                                <img className="img-fluid img-thumbnail" src="img/bg3.jpg" alt="Demo"/>
                            </a>
                        </p>
                        <p>Curabitur dignissim dapibus nisl sed iaculis.</p>
                    </div>
                </div>
                <div className="card b">
                    <div className="card-header">
                        <div className="float-right">
                            <Dropdown isOpen={this.state.dropdownOpen2} toggle={this.toggle2}>
                                <DropdownToggle color="link">
                                    <em className="fa fa-ellipsis-v fa-lg text-muted"></em>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-right-forced animated fadeInLeft">
                                    <DropdownItem>
                                        <span>Hide this</span>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <span>Share</span>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <span>Block user</span>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                        <div className="media mt-0">
                            <img className="mr-2 img-thumbnail rounded-circle thumb32" src="img/user/03.jpg" alt="Demo"/>
                            <div className="media-body">
                                <h5 className="m-0 text-bold">Elmer Thomas</h5>
                                <div className="text-sm text-muted">3 minutes</div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <p>I'm the big picture guy! xD</p>
                    </div>
                    <div className="card-body">
                        <a className="inline" href="">
                            <img className="rounded-circle thumb48" src="img/user/03.jpg" alt="member"/>
                        </a>
                        <a className="inline" href="">
                            <img className="rounded-circle thumb24" src="img/user/02.jpg" alt="member"/>
                        </a>
                        <a className="inline" href="">
                            <img className="rounded-circle thumb24" src="img/user/06.jpg" alt="member"/>
                        </a>
                        <a className="inline" href="">
                            <img className="rounded-circle thumb24" src="img/user/07.jpg" alt="member"/>
                        </a>
                        <a className="inline" href="">
                            <img className="rounded-circle thumb24" src="img/user/08.jpg" alt="member"/>
                        </a>
                        <a className="inline" href="">
                            <img className="rounded-circle thumb24" src="img/user/09.jpg" alt="member"/>
                        </a>
                    </div>
                    <div className="card-body">
                        <form className="mb-2 mt-2" method="post" action="">
                            <textarea className="form-control no-resize" placeholder="Comment..." rows="1"></textarea>
                        </form>
                        <div className="clearfix">
                            <div className="float-left">
                                <ul className="nav nav-pills">
                                    <li className="nav-item">
                                        <a className="nav-link" href="">
                                            <em className="fa fa-location-arrow"></em>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">
                                            <em className="far fa-image"></em>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">
                                            <em className="fas fa-video"></em>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="float-right">
                                <button className="btn btn-success btn-sm" type="button">Post</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card b">
                    <div className="card-header">
                        <div className="media">
                            <img className="mr-2 img-thumbnail rounded-circle thumb32" src="img/user/08.jpg" alt="Demo"/>
                            <div className="media-body">
                                <h5 className="m-0 text-bold">Kelly Vargas</h5>
                                <div className="text-sm text-muted">3 days</div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <p>Sharing some ideas of what we could do with flexbox</p>
                        <div className="row row-flush">
                            <div className="col-6">
                                <div className="row row-flush">
                                    <div className="row row-flush">
                                        <div className="col-6">
                                            <a href="">
                                                <img className="img-fluid img-thumbnail" src="img/bg7.jpg" alt="Demo"/>
                                            </a>
                                        </div>
                                        <div className="col-6">
                                            <a href="">
                                                <img className="img-fluid img-thumbnail" src="img/bg8.jpg" alt="Demo"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <a href="">
                                            <img className="img-fluid img-thumbnail" src="img/lock-bg.jpg" alt="Demo"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row row-flush">
                                    <div className="col-12">
                                        <a href="">
                                            <img className="img-fluid img-thumbnail" src="img/lock-bg.jpg" alt="Demo"/>
                                        </a>
                                    </div>
                                    <div className="row row-flush">
                                        <div className="col-6">
                                            <a href="">
                                                <img className="img-fluid img-thumbnail" src="img/bg4.jpg" alt="Demo"/>
                                            </a>
                                        </div>
                                        <div className="col-6">
                                            <a href="">
                                                <img className="img-fluid img-thumbnail" src="img/bg5.jpg" alt="Demo"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center my-3">
                <button className="btn btn-secondary btn-oval btn-lg" type="button">Load more..</button>
            </div>
        </ContentWrapper>
    );
}

export default SocialBoard;
