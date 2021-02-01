import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Progress } from 'reactstrap';

import Sparkline from '../Common/Sparklines';
import Scrollable from '../Common/Scrollable'

class ProjectDetails extends Component {

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>Project #1 Management
                        <small>In lacinia tellus vitae nisl consectetur pellentesque.</small>
                    </div>
                </div>
                <Row>
                    <Col xl="8">
                        {/* Main card */}
                        <div className="card b">
                            <div className="card-header">
                                <div className="float-right mt-2">
                                    <div className="badge badge-info">started</div>
                                </div>
                                <h4 className="my-2">
                                    <span>Project #1</span>
                                </h4>
                            </div>
                            <div className="card-body bb bt">
                                <a className="inline" href="">
                                    <img className="rounded-circle thumb48" src="img/user/03.jpg" alt="project member"/>
                                </a>
                                <a className="inline" href="">
                                    <img className="rounded-circle thumb24" src="img/user/02.jpg" alt="project member"/>
                                </a>
                                <a className="inline" href="">
                                    <img className="rounded-circle thumb24" src="img/user/04.jpg" alt="project member"/>
                                </a>
                                <a className="inline" href="">
                                    <img className="rounded-circle thumb24" src="img/user/05.jpg" alt="project member"/>
                                </a>
                                <a className="inline" href="">
                                    <img className="rounded-circle thumb24" src="img/user/06.jpg" alt="project member"/>
                                </a>
                                <a className="inline" href="">
                                    <img className="rounded-circle thumb24" src="img/user/07.jpg" alt="project member"/>
                                </a>
                                <a className="inline" href="">
                                    <img className="rounded-circle thumb24" src="img/user/08.jpg" alt="project member"/>
                                </a>
                                <a className="inline" href="">
                                    <img className="rounded-circle thumb24" src="img/user/09.jpg" alt="project member"/>
                                </a>
                                <div className="float-right mt-2">
                                    <button className="btn btn-secondary" type="button">Add Member</button>
                                </div>
                            </div>
                            <div className="card-body">
                                <h4>Description</h4>
                                <p>Nam eget risus tellus. Vestibulum pretium mollis ligula, at ultrices quam egestas et. Sed mattis tincidunt ligula, ac porttitor lectus porttitor condimentum. Ut et ligula ante, nec mollis lacus. Aliquam erat volutpat. Aliquam auctor diam ut urna lacinia faucibus. Proin est sapien, convallis non hendrerit nec, laoreet ut ipsum. Aenean vehicula, nulla vel pharetra accumsan, elit risus pretium arcu, nec ultrices urna ligula vel nunc. Cras porttitor orci eget nibh pharetra mollis.</p>
                                <p>Maecenas at porta purus. Ut eu aliquam orci. Praesent in libero at neque gravida venenatis auctor nec arcu.</p>
                                <p className="text-right">
                                    <button className="btn btn-secondary" type="button">View all documents</button>
                                </p>
                            </div>
                            <div className="card-body">
                                <p>
                                    <small className="float-left">Activity over time</small>
                                    <Sparkline tag="span" options={{
                                            type:"line",
                                            height:"100",
                                            width:"100%",
                                            lineWidth:"3",
                                            lineColor:"#23b7e5",
                                            chartRangeMin:"0",
                                            spotColor:"#888",
                                            minSpotColor:"#23b7e5",
                                            maxSpotColor:"#23b7e5",
                                            fillColor:"#e5f2fa",
                                            highlightLineColor:"#fff",
                                            spotRadius:"5",
                                            resize:true
                                        }}
                                        values="2,4,5,6,10,7,8,5,7,7,11,8,6,9,11,9,13,14,12,16"
                                        className="sparkline text-center"/>
                                </p>
                            </div>
                            <div className="card-body">
                                <Row className="text-center">
                                    <Col xs="4">
                                        <Sparkline options={{
                                                type:"pie",
                                                height:"60",
                                                sliceColors:['#edf1f2', '#23b7e5']
                                            }}
                                            values="20,80"
                                            className="sparkline"/>
                                        <p className="mt-3">Issues</p>
                                    </Col>
                                    <Col xs="4">
                                        <Sparkline options={{
                                                type:"pie",
                                                height:"60",
                                                sliceColors:['#edf1f2', '#27c24c']
                                            }}
                                            values="60,40"
                                            className="sparkline"/>
                                        <p className="mt-3">Commits</p>
                                    </Col>
                                    <Col xs="4">
                                        <Sparkline options={{
                                                type:"pie",
                                                height:"60",
                                                sliceColors:['#edf1f2', '#ff902b']
                                            }}
                                            values="90,10"
                                            className="sparkline"/>
                                        <p className="mt-3">Files</p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        {/* End Main card */}
                        {/* Team messages */}
                        <div className="card card-default">
                            <div className="card-header">
                                <div className="px-2 float-right badge badge-danger">5</div>
                                <div className="px-2 mr-2 float-right badge badge-success">12</div>
                                <div className="card-title">Team messages</div>
                            </div>
                            {/* START list group */}
                            <Scrollable height="180" className="list-group">
                                {/* START list group item */}
                                <div className="list-group-item list-group-item-action">
                                    <div className="media">
                                        <img className="align-self-start mx-2 circle thumb32" src="img/user/02.jpg" alt="Avatar"/>
                                        <div className="media-body text-truncate">
                                            <p className="mb-1">
                                                <strong className="text-primary">
                                                    <span className="circle bg-success circle-lg text-left"></span>
                                                    <span>Catherine Ellis</span>
                                                </strong>
                                            </p>
                                            <p className="mb-1 text-sm">Cras sit amet nibh libero, in gravida nulla. Nulla...</p>
                                        </div>
                                        <div className="ml-auto">
                                            <small className="text-muted ml-2">2h</small>
                                        </div>
                                    </div>
                                </div>
                                {/* END list group item */}
                                {/* START list group item */}
                                <div className="list-group-item list-group-item-action">
                                    <div className="media">
                                        <img className="align-self-start mx-2 circle thumb32" src="img/user/03.jpg" alt="Avatar"/>
                                        <div className="media-body text-truncate">
                                            <p className="mb-1">
                                                <strong className="text-primary">
                                                    <span className="circle bg-success circle-lg text-left"></span>
                                                    <span>Jessica Silva</span>
                                                </strong>
                                            </p>
                                            <p className="mb-1 text-sm">Cras sit amet nibh libero, in gravida nulla. Nulla...</p>
                                        </div>
                                        <div className="ml-auto">
                                            <small className="text-muted ml-2">3h</small>
                                        </div>
                                    </div>
                                </div>
                                {/* END list group item */}
                                {/* START list group item */}
                                <div className="list-group-item list-group-item-action">
                                    <div className="media">
                                        <img className="align-self-start mx-2 circle thumb32" src="img/user/09.jpg" alt="Avatar"/>
                                        <div className="media-body text-truncate">
                                            <p className="mb-1">
                                                <strong className="text-primary">
                                                    <span className="circle bg-danger circle-lg text-left"></span>
                                                    <span>Jessie Wells</span>
                                                </strong>
                                            </p>
                                            <p className="mb-1 text-sm">Cras sit amet nibh libero, in gravida nulla. Nulla...</p>
                                        </div>
                                        <div className="ml-auto">
                                            <small className="text-muted ml-2">4h</small>
                                        </div>
                                    </div>
                                </div>
                                {/* END list group item */}
                                {/* START list group item */}
                                <div className="list-group-item list-group-item-action">
                                    <div className="media">
                                        <img className="align-self-start mx-2 circle thumb32" src="img/user/12.jpg" alt="Avatar"/>
                                        <div className="media-body text-truncate">
                                            <p className="mb-1">
                                                <strong className="text-primary">
                                                    <span className="circle bg-danger circle-lg text-left"></span>
                                                    <span>Rosa Burke</span>
                                                </strong>
                                            </p>
                                            <p className="mb-1 text-sm">Cras sit amet nibh libero, in gravida nulla. Nulla...</p>
                                        </div>
                                        <div className="ml-auto">
                                            <small className="text-muted ml-2">1d</small>
                                        </div>
                                    </div>
                                </div>
                                {/* END list group item */}
                                {/* START list group item */}
                                <div className="list-group-item list-group-item-action">
                                    <div className="media">
                                        <img className="align-self-start mx-2 circle thumb32" src="img/user/10.jpg" alt="Avatar"/>
                                        <div className="media-body text-truncate">
                                            <p className="mb-1">
                                                <strong className="text-primary">
                                                    <span className="circle bg-danger circle-lg text-left"></span>
                                                    <span>Michelle Lane</span>
                                                </strong>
                                            </p>
                                            <p className="mb-1 text-sm">Mauris eleifend, libero nec cursus lacinia...</p>
                                        </div>
                                        <div className="ml-auto">
                                            <small className="text-muted ml-2">2d</small>
                                        </div>
                                    </div>
                                </div>
                                {/* END list group item */}
                            </Scrollable>
                            {/* END list group */}
                            {/* START card footer */}
                            <div className="card-footer">
                                <div className="input-group">
                                    <input className="form-control form-control-sm" type="text" placeholder="Search message .."/>
                                    <span className="input-group-btn">
                                        <button className="btn btn-secondary btn-sm" type="submit">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                            {/* END card-footer */}
                        </div>
                        {/* End Team messages */}
                    </Col>
                    <Col xl="4">
                        {/* Aside card */}
                        <div className="card b">
                            <div className="card-body bb">
                                <div className="clearfix">
                                    <div className="float-left">
                                        <button className="btn btn-secondary btn-oval" type="button">
                                            <em className="fa fa-play fa-fw text-muted"></em>
                                            <span>Start</span>
                                        </button>
                                        <button className="btn btn-secondary btn-oval" type="button">
                                            <em className="fa fa-pause fa-fw text-muted"></em>
                                            <span>Pause</span>
                                        </button>
                                    </div>
                                    <div className="float-right">
                                        <button className="btn btn-danger btn-oval" type="button">Cancel</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body bb">
                                <div className="d-flex align-items-center">
                                    <div className="w-100">
                                        <Progress className="progress-xs m-0" color="info" value="48"/>
                                    </div>
                                    <div className="wd-xxs text-right">
                                        <div className="text-bold text-muted">48%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul className="list-inline my-2">
                                    <li className="list-inline-item">
                                        <div className="badge p-1 bg-warning">priority</div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="badge p-1 bg-gray">angularjs</div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="badge p-1 bg-gray">jquery</div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="badge p-1 bg-gray">gulp</div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="badge p-1 bg-gray">git</div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="badge p-1 bg-gray">ios</div>
                                    </li>
                                </ul>
                            </div>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>Start date</strong>
                                        </td>
                                        <td>02/01/2016</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Estimated Hours</strong>
                                        </td>
                                        <td>122hs</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Time Consumed</strong>
                                        </td>
                                        <td>62hs</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Commits</strong>
                                        </td>
                                        <td>140</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Issues</strong>
                                        </td>
                                        <td>39</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Files</strong>
                                        </td>
                                        <td>87</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Members</strong>
                                        </td>
                                        <td>
                                            <p>Tara Sanders</p>
                                            <p>Alan Smith</p>
                                            <p>Priscilla Peters</p>
                                            <p>Madison Willis</p>
                                            <p>Lesa Marshall</p>
                                            <p>Kylie Freeman</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Recent files</strong>
                                        </td>
                                        <td>
                                            <Scrollable height="120" className="list-group">
                                                <table className="table table-bordered bg-transparent">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <em className="fa-lg far fa-file-code"></em>
                                                            </td>
                                                            <td>
                                                                <a className="text-muted" href="">database.controller.js</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <em className="fa-lg far fa-file-image"></em>
                                                            </td>
                                                            <td>
                                                                <a className="text-muted" href="">baground-lg.png</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <em className="fa-lg far fa-file-code"></em>
                                                            </td>
                                                            <td>
                                                                <a className="text-muted" href="">picture.controller.js</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <em className="fa-lg far fa-file-word"></em>
                                                            </td>
                                                            <td>
                                                                <a className="text-muted" href="">applicat-diagrams.docx</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <em className="fa-lg far fa-file-code"></em>
                                                            </td>
                                                            <td>
                                                                <a className="text-muted" href="">database.controller.js</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <em className="fa-lg far fa-file-code"></em>
                                                            </td>
                                                            <td>
                                                                <a className="text-muted" href="">database.controller.js</a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </Scrollable>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="text-right">
                                <a className="btn btn-link" href="">Open repository</a>
                            </p>
                        </div>
                        {/* end Aside card */}
                    </Col>
                </Row>
            </ContentWrapper>
            );
    }

}

export default ProjectDetails;
