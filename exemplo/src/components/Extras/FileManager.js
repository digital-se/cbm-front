import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Dropdown, DropdownMenu, DropdownToggle, DropdownItem, CustomInput } from 'reactstrap';

class FileManager extends Component {

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
                <div className="content-heading">File manager
                    <div className="ml-auto">
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle color="link">
                                <img className="thumb32 rounded-circle" src="img/user/02.jpg" alt="user"/>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-right-forced animated fadeInUp">
                                <DropdownItem>
                                    <span>Settings</span>
                                </DropdownItem>
                                <DropdownItem>
                                    <span>Get more Storage</span>
                                </DropdownItem>
                                <DropdownItem>
                                    <span>Manage permissions</span>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
                <Row>
                    <Col lg="3">
                        <div className="mb-3">
                            <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" />
                        </div>
                        <div className="card b">
                            <div className="card-body">
                                <strong className="text-muted">FOLDERS</strong>
                            </div>
                            <div className="list-group">
                                <div className="active list-group-item list-group-item-action d-flex justify-content-between align-items-center rounded-0">
                                    <span className="circle bg-white mr-2"></span>
                                    <span>All</span>
                                    <span className="ml-auto badge">49</span>
                                </div>
                                <div className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                    <span className="circle bg-green mr-2"></span>
                                    <span>Audio</span>
                                    <span className="ml-auto badge">5</span>
                                </div>
                                <div className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                    <span className="circle bg-danger mr-2"></span>
                                    <span>Movie</span>
                                    <span className="ml-auto badge">12</span>
                                </div>
                                <div className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                    <span className="circle bg-warning mr-2"></span>
                                    <span>Image</span>
                                    <span className="ml-auto badge">22</span>
                                </div>
                                <div className="list-group-item list-group-item-action d-flex justify-content-between align-items-center rounded-0">
                                    <span className="circle bg-purple mr-2"></span>
                                    <span>Code</span>
                                    <span className="ml-auto badge">9</span>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="d-flex text-sm">
                                    <p>Storage</p>
                                    <p className="ml-auto">
                                        <strong>25 GB / 100 GB</strong>
                                    </p>
                                </div>
                                <div className="progress progress-xs m-0">
                                    <div className="progress-bar bg-info" style={{width:'25%'}}></div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="9">
                        <Row>
                            <Col lg="4" md="6">
                                <div className="card" data-filter-group="audio">
                                    <div className="card-body text-center">
                                        <div className="d-flex">
                                            <div className="ml-auto">
                                                <a className="text-muted mr-1" href="" title="Download">
                                                    <em className="fa fa-download fa-fw"></em>
                                                </a>
                                            </div>
                                        </div>
                                        <a className="px-4" href="">
                                            <em className="fa-5x far fa-file-audio text-primary"></em>
                                        </a>
                                        <p>
                                            <small className="text-dark">A good song.ogg</small>
                                        </p>
                                        <div className="d-flex m-0 text-muted">
                                            <small>6.3MB</small>
                                            <small className="ml-auto">10m ago</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6">
                                <div className="card" data-filter-group="movie">
                                    <div className="card-body text-center">
                                        <div className="d-flex">
                                            <div className="ml-auto">
                                                <a className="text-muted mr-1" href="" title="Download">
                                                    <em className="fa fa-download fa-fw"></em>
                                                </a>
                                            </div>
                                        </div>
                                        <a className="px-4" href="">
                                            <em className="fa-5x far fa-file-video text-danger"></em>
                                        </a>
                                        <p>
                                            <small className="text-dark">Movie.avi</small>
                                        </p>
                                        <div className="d-flex m-0 text-muted">
                                            <small>6.3GB</small>
                                            <small className="ml-auto">50m ago</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6">
                                <div className="card" data-filter-group="audio">
                                    <div className="card-body text-center">
                                        <div className="d-flex">
                                            <div className="ml-auto">
                                                <a className="text-muted mr-1" href="" title="Download">
                                                    <em className="fa fa-download fa-fw"></em>
                                                </a>
                                            </div>
                                        </div>
                                        <a className="px-4" href="">
                                            <em className="fa-5x far fa-file-audio text-primary"></em>
                                        </a>
                                        <p>
                                            <small className="text-dark">Similar - Chosen.mp3</small>
                                        </p>
                                        <div className="d-flex m-0 text-muted">
                                            <small>12MB</small>
                                            <small className="ml-auto">20h ago</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6">
                                <div className="card" data-filter-group="image">
                                    <div className="card-body text-center">
                                        <div className="d-flex">
                                            <div className="ml-auto">
                                                <a className="text-muted mr-1" href="" title="Download">
                                                    <em className="fa fa-download fa-fw"></em>
                                                </a>
                                            </div>
                                        </div>
                                        <a className="px-4" href="">
                                            <em className="fa-5x far fa-file-image text-success"></em>
                                        </a>
                                        <p>
                                            <small className="text-dark">El-Capitan.jpg</small>
                                        </p>
                                        <div className="d-flex m-0 text-muted">
                                            <small>300KB</small>
                                            <small className="ml-auto">1d ago</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6">
                                <div className="card" data-filter-group="archive">
                                    <div className="card-body text-center">
                                        <div className="d-flex">
                                            <div className="ml-auto">
                                                <a className="text-muted mr-1" href="" title="Download">
                                                    <em className="fa fa-download fa-fw"></em>
                                                </a>
                                            </div>
                                        </div>
                                        <a className="px-4" href="">
                                            <em className="fa-5x far fa-file-archive text-warning"></em>
                                        </a>
                                        <p>
                                            <small className="text-dark">report-2016.txt</small>
                                        </p>
                                        <div className="d-flex m-0 text-muted">
                                            <small>1MB</small>
                                            <small className="ml-auto">15h ago</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6">
                                <div className="card" data-filter-group="audio">
                                    <div className="card-body text-center">
                                        <div className="d-flex">
                                            <div className="ml-auto">
                                                <a className="text-muted mr-1" href="" title="Download">
                                                    <em className="fa fa-download fa-fw"></em>
                                                </a>
                                            </div>
                                        </div>
                                        <a className="px-4" href="">
                                            <em className="fa-5x far fa-file-audio text-primary"></em>
                                        </a>
                                        <p>
                                            <small className="text-dark">Song for you.ogg</small>
                                        </p>
                                        <div className="d-flex m-0 text-muted">
                                            <small>4.5MB</small>
                                            <small className="ml-auto">5m ago</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6">
                                <div className="card" data-filter-group="code">
                                    <div className="card-body text-center">
                                        <div className="d-flex">
                                            <div className="ml-auto">
                                                <a className="text-muted mr-1" href="" title="Download">
                                                    <em className="fa fa-download fa-fw"></em>
                                                </a>
                                            </div>
                                        </div>
                                        <a className="px-4" href="">
                                            <em className="fa-5x far fa-file-code text-purple"></em>
                                        </a>
                                        <p>
                                            <small className="text-dark">bypass.c</small>
                                        </p>
                                        <div className="d-flex m-0 text-muted">
                                            <small>3KB</small>
                                            <small className="ml-auto">2h ago</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6">
                                <div className="card" data-filter-group="image">
                                    <div className="card-body text-center">
                                        <div className="d-flex">
                                            <div className="ml-auto">
                                                <a className="text-muted mr-1" href="" title="Download">
                                                    <em className="fa fa-download fa-fw"></em>
                                                </a>
                                            </div>
                                        </div>
                                        <a className="px-4" href="">
                                            <em className="fa-5x far fa-file-image text-success"></em>
                                        </a>
                                        <p>
                                            <small className="text-dark">Sunset_red.png</small>
                                        </p>
                                        <div className="d-flex m-0 text-muted">
                                            <small>450KB</small>
                                            <small className="ml-auto">3d ago</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6">
                                <div className="card" data-filter-group="image">
                                    <div className="card-body text-center">
                                        <div className="d-flex">
                                            <div className="ml-auto">
                                                <a className="text-muted mr-1" href="" title="Download">
                                                    <em className="fa fa-download fa-fw"></em>
                                                </a>
                                            </div>
                                        </div>
                                        <a className="px-4" href="">
                                            <em className="fa-5x far fa-file-image text-success"></em>
                                        </a>
                                        <p>
                                            <small className="text-dark">Sunset_red.png</small>
                                        </p>
                                        <div className="d-flex m-0 text-muted">
                                            <small>450KB</small>
                                            <small className="ml-auto">3d ago</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6">
                                <div className="card" data-filter-group="code">
                                    <div className="card-body text-center">
                                        <div className="d-flex">
                                            <div className="ml-auto">
                                                <a className="text-muted mr-1" href="" title="Download">
                                                    <em className="fa fa-download fa-fw"></em>
                                                </a>
                                            </div>
                                        </div>
                                        <a className="px-4" href="">
                                            <em className="fa-5x far fa-file-code text-purple"></em>
                                        </a>
                                        <p>
                                            <small className="text-dark">angular.controller.js</small>
                                        </p>
                                        <div className="d-flex m-0 text-muted">
                                            <small>5KB</small>
                                            <small className="ml-auto">23h ago</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6">
                                <div className="card" data-filter-group="audio">
                                    <div className="card-body text-center">
                                        <div className="d-flex">
                                            <div className="ml-auto">
                                                <a className="text-muted mr-1" href="" title="Download">
                                                    <em className="fa fa-download fa-fw"></em>
                                                </a>
                                            </div>
                                        </div>
                                        <a className="px-4" href="">
                                            <em className="fa-5x far fa-file-audio text-primary"></em>
                                        </a>
                                        <p>
                                            <small className="text-dark">Song 4 you.ogg</small>
                                        </p>
                                        <div className="d-flex m-0 text-muted">
                                            <small>4.5MB</small>
                                            <small className="ml-auto">5m ago</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6">
                                <div className="card" data-filter-group="audio">
                                    <div className="card-body text-center">
                                        <div className="d-flex">
                                            <div className="ml-auto">
                                                <a className="text-muted mr-1" href="" title="Download">
                                                    <em className="fa fa-download fa-fw"></em>
                                                </a>
                                            </div>
                                        </div>
                                        <a className="px-4" href="">
                                            <em className="fa-5x far fa-file-audio text-primary"></em>
                                        </a>
                                        <p>
                                            <small className="text-dark">Similar - Chosen.mp3</small>
                                        </p>
                                        <div className="d-flex m-0 text-muted">
                                            <small>12MB</small>
                                            <small className="ml-auto">20h ago</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6">
                                <div className="card" data-filter-group="audio">
                                    <div className="card-body text-center">
                                        <div className="d-flex">
                                            <div className="ml-auto">
                                                <a className="text-muted mr-1" href="" title="Download">
                                                    <em className="fa fa-download fa-fw"></em>
                                                </a>
                                            </div>
                                        </div>
                                        <a className="px-4" href="">
                                            <em className="fa-5x far fa-file-audio text-primary"></em>
                                        </a>
                                        <p>
                                            <small className="text-dark">Song 4 you.ogg</small>
                                        </p>
                                        <div className="d-flex m-0 text-muted">
                                            <small>4.5MB</small>
                                            <small className="ml-auto">5m ago</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6">
                                <div className="card" data-filter-group="code">
                                    <div className="card-body text-center">
                                        <div className="d-flex">
                                            <div className="ml-auto">
                                                <a className="text-muted mr-1" href="" title="Download">
                                                    <em className="fa fa-download fa-fw"></em>
                                                </a>
                                            </div>
                                        </div>
                                        <a className="px-4" href="">
                                            <em className="fa-5x far fa-file-code text-purple"></em>
                                        </a>
                                        <p>
                                            <small className="text-dark">ng.components.css</small>
                                        </p>
                                        <div className="d-flex m-0 text-muted">
                                            <small>78KB</small>
                                            <small className="ml-auto">12h ago</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6">
                                <div className="card" data-filter-group="image">
                                    <div className="card-body text-center">
                                        <div className="d-flex">
                                            <div className="ml-auto">
                                                <a className="text-muted mr-1" href="" title="Download">
                                                    <em className="fa fa-download fa-fw"></em>
                                                </a>
                                            </div>
                                        </div>
                                        <a className="px-4" href="">
                                            <em className="fa-5x far fa-file-image text-success"></em>
                                        </a>
                                        <p>
                                            <small className="text-dark">Sunset_red.png</small>
                                        </p>
                                        <div className="d-flex m-0 text-muted">
                                            <small>450KB</small>
                                            <small className="ml-auto">3d ago</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6">
                                <div className="card" data-filter-group="archive">
                                    <div className="card-body text-center">
                                        <div className="d-flex">
                                            <div className="ml-auto">
                                                <a className="text-muted mr-1" href="" title="Download">
                                                    <em className="fa fa-download fa-fw"></em>
                                                </a>
                                            </div>
                                        </div>
                                        <a className="px-4" href="">
                                            <em className="fa-5x far fa-file-archive text-warning"></em>
                                        </a>
                                        <p>
                                            <small className="text-dark">report-2016.txt</small>
                                        </p>
                                        <div className="d-flex m-0 text-muted">
                                            <small>1MB</small>
                                            <small className="ml-auto">15h ago</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6">
                                <div className="card" data-filter-group="audio">
                                    <div className="card-body text-center">
                                        <div className="d-flex">
                                            <div className="ml-auto">
                                                <a className="text-muted mr-1" href="" title="Download">
                                                    <em className="fa fa-download fa-fw"></em>
                                                </a>
                                            </div>
                                        </div>
                                        <a className="px-4" href="">
                                            <em className="fa-5x far fa-file-audio text-primary"></em>
                                        </a>
                                        <p>
                                            <small className="text-dark">A good song.ogg</small>
                                        </p>
                                        <div className="d-flex m-0 text-muted">
                                            <small>6.3MB</small>
                                            <small className="ml-auto">10m ago</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6">
                                <div className="card" data-filter-group="movie">
                                    <div className="card-body text-center">
                                        <div className="d-flex">
                                            <div className="ml-auto">
                                                <a className="text-muted mr-1" href="" title="Download">
                                                    <em className="fa fa-download fa-fw"></em>
                                                </a>
                                            </div>
                                        </div>
                                        <a className="px-4" href="">
                                            <em className="fa-5x far fa-file-video text-danger"></em>
                                        </a>
                                        <p>
                                            <small className="text-dark">Movie.avi</small>
                                        </p>
                                        <div className="d-flex m-0 text-muted">
                                            <small>6.3GB</small>
                                            <small className="ml-auto">50m ago</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6">
                                <div className="card" data-filter-group="audio">
                                    <div className="card-body text-center">
                                        <div className="d-flex">
                                            <div className="ml-auto">
                                                <a className="text-muted mr-1" href="" title="Download">
                                                    <em className="fa fa-download fa-fw"></em>
                                                </a>
                                            </div>
                                        </div>
                                        <a className="px-4" href="">
                                            <em className="fa-5x far fa-file-audio text-primary"></em>
                                        </a>
                                        <p>
                                            <small className="text-dark">Similar - Chosen.mp3</small>
                                        </p>
                                        <div className="d-flex m-0 text-muted">
                                            <small>12MB</small>
                                            <small className="ml-auto">20h ago</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6">
                                <div className="card" data-filter-group="image">
                                    <div className="card-body text-center">
                                        <div className="d-flex">
                                            <div className="ml-auto">
                                                <a className="text-muted mr-1" href="" title="Download">
                                                    <em className="fa fa-download fa-fw"></em>
                                                </a>
                                            </div>
                                        </div>
                                        <a className="px-4" href="">
                                            <em className="fa-5x far fa-file-image text-success"></em>
                                        </a>
                                        <p>
                                            <small className="text-dark">El-Capitan.jpg</small>
                                        </p>
                                        <div className="d-flex m-0 text-muted">
                                            <small>300KB</small>
                                            <small className="ml-auto">1d ago</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6">
                                <div className="card" data-filter-group="audio">
                                    <div className="card-body text-center">
                                        <div className="d-flex">
                                            <div className="ml-auto">
                                                <a className="text-muted mr-1" href="" title="Download">
                                                    <em className="fa fa-download fa-fw"></em>
                                                </a>
                                            </div>
                                        </div>
                                        <a className="px-4" href="">
                                            <em className="fa-5x far fa-file-audio text-primary"></em>
                                        </a>
                                        <p>
                                            <small className="text-dark">Song 4 you.ogg</small>
                                        </p>
                                        <div className="d-flex m-0 text-muted">
                                            <small>4.5MB</small>
                                            <small className="ml-auto">5m ago</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6">
                                <div className="card" data-filter-group="code">
                                    <div className="card-body text-center">
                                        <div className="d-flex">
                                            <div className="ml-auto">
                                                <a className="text-muted mr-1" href="" title="Download">
                                                    <em className="fa fa-download fa-fw"></em>
                                                </a>
                                            </div>
                                        </div>
                                        <a className="px-4" href="">
                                            <em className="fa-5x far fa-file-code text-purple"></em>
                                        </a>
                                        <p>
                                            <small className="text-dark">ng.components.css</small>
                                        </p>
                                        <div className="d-flex m-0 text-muted">
                                            <small>78KB</small>
                                            <small className="ml-auto">12h ago</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6">
                                <div className="card" data-filter-group="image">
                                    <div className="card-body text-center">
                                        <div className="d-flex">
                                            <div className="ml-auto">
                                                <a className="text-muted mr-1" href="" title="Download">
                                                    <em className="fa fa-download fa-fw"></em>
                                                </a>
                                            </div>
                                        </div>
                                        <a className="px-4" href="">
                                            <em className="fa-5x far fa-file-image text-success"></em>
                                        </a>
                                        <p>
                                            <small className="text-dark">Sunset_red.png</small>
                                        </p>
                                        <div className="d-flex m-0 text-muted">
                                            <small>450KB</small>
                                            <small className="ml-auto">3d ago</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6">
                                <div className="card" data-filter-group="archive">
                                    <div className="card-body text-center">
                                        <div className="d-flex">
                                            <div className="ml-auto">
                                                <a className="text-muted mr-1" href="" title="Download">
                                                    <em className="fa fa-download fa-fw"></em>
                                                </a>
                                            </div>
                                        </div>
                                        <a className="px-4" href="">
                                            <em className="fa-5x far fa-file-archive text-warning"></em>
                                        </a>
                                        <p>
                                            <small className="text-dark">report-2016.txt</small>
                                        </p>
                                        <div className="d-flex m-0 text-muted">
                                            <small>1MB</small>
                                            <small className="ml-auto">15h ago</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6">
                                <div className="card" data-filter-group="image">
                                    <div className="card-body text-center">
                                        <div className="d-flex">
                                            <div className="ml-auto">
                                                <a className="text-muted mr-1" href="" title="Download">
                                                    <em className="fa fa-download fa-fw"></em>
                                                </a>
                                            </div>
                                        </div>
                                        <a className="px-4" href="">
                                            <em className="fa-5x far fa-file-image text-success"></em>
                                        </a>
                                        <p>
                                            <small className="text-dark">Sunset_red.png</small>
                                        </p>
                                        <div className="d-flex m-0 text-muted">
                                            <small>450KB</small>
                                            <small className="ml-auto">3d ago</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6">
                                <div className="card" data-filter-group="code">
                                    <div className="card-body text-center">
                                        <div className="d-flex">
                                            <div className="ml-auto">
                                                <a className="text-muted mr-1" href="" title="Download">
                                                    <em className="fa fa-download fa-fw"></em>
                                                </a>
                                            </div>
                                        </div>
                                        <a className="px-4" href="">
                                            <em className="fa-5x far fa-file-code text-purple"></em>
                                        </a>
                                        <p>
                                            <small className="text-dark">angular.controller.js</small>
                                        </p>
                                        <div className="d-flex m-0 text-muted">
                                            <small>5KB</small>
                                            <small className="ml-auto">23h ago</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6">
                                <div className="card" data-filter-group="audio">
                                    <div className="card-body text-center">
                                        <div className="d-flex">
                                            <div className="ml-auto">
                                                <a className="text-muted mr-1" href="" title="Download">
                                                    <em className="fa fa-download fa-fw"></em>
                                                </a>
                                            </div>
                                        </div>
                                        <a className="px-4" href="">
                                            <em className="fa-5x far fa-file-audio text-primary"></em>
                                        </a>
                                        <p>
                                            <small className="text-dark">Song 4 you.ogg</small>
                                        </p>
                                        <div className="d-flex m-0 text-muted">
                                            <small>4.5MB</small>
                                            <small className="ml-auto">5m ago</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6">
                                <div className="card" data-filter-group="audio">
                                    <div className="card-body text-center">
                                        <div className="d-flex">
                                            <div className="ml-auto">
                                                <a className="text-muted mr-1" href="" title="Download">
                                                    <em className="fa fa-download fa-fw"></em>
                                                </a>
                                            </div>
                                        </div>
                                        <a className="px-4" href="">
                                            <em className="fa-5x far fa-file-audio text-primary"></em>
                                        </a>
                                        <p>
                                            <small className="text-dark">Similar - Chosen.mp3</small>
                                        </p>
                                        <div className="d-flex m-0 text-muted">
                                            <small>12MB</small>
                                            <small className="ml-auto">20h ago</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </ContentWrapper>
            );
    }

}

export default FileManager;
