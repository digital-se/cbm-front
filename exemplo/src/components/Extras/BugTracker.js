import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Progress } from 'reactstrap';

import Sparkline from '../Common/Sparklines';
import Scrollable from '../Common/Scrollable'
import Datatable from '../Tables/Datatable';

class BugTracker extends Component {

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">Bug tracker</div>
                <Row>
                    <Col lg="4">
                        {/* Aside card */}
                        <div className="card b">
                            <div className="card-body bb">
                                <p>Overvall progress</p>
                                <div className="d-flex align-items-center mb-2">
                                    <div className="w-100">
                                        <Progress className="progress-xs m0" color="info" value={ 48 } />
                                    </div>
                                    <div className="ml-auto">
                                        <div className="col wd-xxs text-right">
                                            <div className="text-bold text-muted">48%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <p>Metrics</p>
                                <div className="row text-center">
                                    <div className="col-3 col-lg-6 col-xl-3">
                                     <Sparkline values="20,80"
                                        options={{
                                            type:"pie",
                                            height:"50",
                                            sliceColors:["#edf1f2", "#23b7e5"]
                                        }}
                                        className="sparkline"/>
                                        <p className="mt-3">Issues</p>
                                    </div>
                                    <div className="col-3 col-lg-6 col-xl-3">
                                     <Sparkline values="60,40"
                                        options={{
                                            type:"pie",
                                            height:"50",
                                            sliceColors:["#edf1f2", "#27c24c"]
                                        }}
                                        className="sparkline"/>
                                        <p className="mt-3">Bugs</p>
                                    </div>
                                    <div className="col-3 col-lg-6 col-xl-3">
                                     <Sparkline values="20,80"
                                        options={{
                                            type:"pie",
                                            height:"50",
                                            sliceColors:["#edf1f2", "#ff902b"]
                                        }}
                                        className="sparkline"/>
                                        <p className="mt-3">Hours</p>
                                    </div>
                                    <div className="col-3 col-lg-6 col-xl-3">
                                     <Sparkline values="30,70"
                                        options={{
                                            type:"pie",
                                            height:"50",
                                            sliceColors:["#edf1f2", "#f05050"]
                                        }}
                                        className="sparkline"/>
                                        <p className="mt-3">Assigned</p>
                                    </div>
                                </div>
                            </div>
                            <table className="table bb">
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>Assigned Hours</strong>
                                        </td>
                                        <td>68 hs</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Time Consumed</strong>
                                        </td>
                                        <td>32 hs</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Issues</strong>
                                        </td>
                                        <td>19</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Bugs</strong>
                                        </td>
                                        <td>16</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Health</strong>
                                        </td>
                                        <td>
                                            <em className="far fa-smile fa-lg text-warning"></em>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Commits</strong>
                                        </td>
                                        <td>140</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Recently closed</strong>
                                        </td>
                                        <td>
                                            <Scrollable height="120" className="list-group">
                                                <table className="table table-bordered bg-transparent">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <a className="text-muted" href="">BI:54678</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a className="text-muted" href="">BI:55778</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a className="text-muted" href="">BI:56878</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a className="text-muted" href="">BI:57978</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a className="text-muted" href="">BI:1107</a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </Scrollable>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Last closed on</strong>
                                        </td>
                                        <td>12/01/2016</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* end Aside card */}
                    </Col>
                    <Col lg="8">
                        <div className="mb-3 d-flex">
                            <div>
                                <button className="btn btn-sm btn-info" type="button">New ticket</button>
                                <button className="btn btn-sm btn-secondary" type="button">
                                    <em className="fa fa-user-plus"></em>
                                </button>
                                <button className="btn btn-sm btn-secondary" type="button">
                                    <em className="fas fa-pencil-alt"></em>
                                </button>
                                <button className="btn btn-sm btn-secondary" type="button">
                                    <em className="fas fa-share"></em>
                                </button>
                                <button className="btn btn-sm btn-secondary" type="button">
                                    <em className="fa fa-print"></em>
                                </button>
                            </div>
                            <div className="ml-auto">
                                <p className="mb-0 mt-1">19 bugs / 16 issues</p>
                            </div>
                        </div>
                        <div className="card b">
                            <div className="card-body">
                                <Datatable options={{responsive: true}}>
                                    <table className="table w-100">
                                        <thead>
                                            <tr>
                                                <th>Type</th>
                                                <th>#ID</th>
                                                <th>Description</th>
                                                <th>Created</th>
                                                <th>Priority</th>
                                                <th>Asigned</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">bug</div>
                                                </td>
                                                <td>BI:54678</td>
                                                <td className="text-nowrap">
                                                    <small>Maecenas mollis egestas convallis.</small>
                                                </td>
                                                <td>01/01/2016</td>
                                                <td>
                                                    <div className="circle circle-lg bg-warning" data-title="normal"></div>
                                                </td>
                                                <td>
                                                    <a href="">Sylvia Daniels</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-success">open</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">bug</div>
                                                </td>
                                                <td>BI:55778</td>
                                                <td className="text-nowrap">
                                                    <small>Aliquam felis nibh, ultrices non elementum</small>
                                                </td>
                                                <td>01/05/2016</td>
                                                <td>
                                                    <div className="circle circle-lg" data-title="low"></div>
                                                </td>
                                                <td>
                                                    <a href="">Sherry Carroll</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-success">open</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">issue</div>
                                                </td>
                                                <td>BI:56878</td>
                                                <td className="text-nowrap">
                                                    <small>Aliquam condimentum enim a risus cursus blandit.</small>
                                                </td>
                                                <td>05/01/2016</td>
                                                <td>
                                                    <div className="circle circle-lg bg-warning" data-title="normal"></div>
                                                </td>
                                                <td>
                                                    <a href="">Mitchell Jones</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-warning">pending</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">issue</div>
                                                </td>
                                                <td>BI:57978</td>
                                                <td className="text-nowrap">
                                                    <small>Sed at libero augue, in euismod tellus.</small>
                                                </td>
                                                <td>01/11/2016</td>
                                                <td>
                                                    <div className="circle circle-lg bg-warning" data-title="normal"></div>
                                                </td>
                                                <td>
                                                    <a href="">Tracey Parker</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-warning">pending</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">bug</div>
                                                </td>
                                                <td>BI:1107</td>
                                                <td className="text-nowrap">
                                                    <small>Praesent lacinia ultricies neque.</small>
                                                </td>
                                                <td>01/01/2015</td>
                                                <td>
                                                    <div className="circle circle-lg bg-danger" data-title="high"></div>
                                                </td>
                                                <td>
                                                    <a href="">Warren Gray</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-danger">closed</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">issue</div>
                                                </td>
                                                <td>BI:1117</td>
                                                <td className="text-nowrap">
                                                    <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
                                                </td>
                                                <td>11/05/2013</td>
                                                <td>
                                                    <div className="circle circle-lg bg-warning" data-title="normal"></div>
                                                </td>
                                                <td>
                                                    <a href="">Jackson Ramos</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-success">open</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">bug</div>
                                                </td>
                                                <td>BI:10127</td>
                                                <td className="text-nowrap">
                                                    <small>Pellentesque habitant morbi tristique</small>
                                                </td>
                                                <td>05/02/2014</td>
                                                <td>
                                                    <div className="circle circle-lg bg-warning" data-title="normal"></div>
                                                </td>
                                                <td>
                                                    <a href="">Ernest Berry</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-danger">closed</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">bug</div>
                                                </td>
                                                <td>BI:54678</td>
                                                <td className="text-nowrap">
                                                    <small>Integer venenatis ultrices vulputate.</small>
                                                </td>
                                                <td>01/01/2016</td>
                                                <td>
                                                    <div className="circle circle-lg bg-warning" data-title="normal"></div>
                                                </td>
                                                <td>
                                                    <a href="">Sylvia Daniels</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-success">open</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">issue</div>
                                                </td>
                                                <td>BI:55778</td>
                                                <td className="text-nowrap">
                                                    <small>Maecenas mollis egestas convallis.</small>
                                                </td>
                                                <td>01/05/2016</td>
                                                <td>
                                                    <div className="circle circle-lg" data-title="low"></div>
                                                </td>
                                                <td>
                                                    <a href="">Sherry Carroll</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-success">open</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">bug</div>
                                                </td>
                                                <td>BI:56878</td>
                                                <td className="text-nowrap">
                                                    <small>Maecenas mollis egestas convallis.</small>
                                                </td>
                                                <td>05/01/2016</td>
                                                <td>
                                                    <div className="circle circle-lg bg-warning" data-title="normal"></div>
                                                </td>
                                                <td>
                                                    <a href="">Mitchell Jones</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-warning">pending</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">issue</div>
                                                </td>
                                                <td>BI:57978</td>
                                                <td className="text-nowrap">
                                                    <small>Maecenas mollis egestas convallis.</small>
                                                </td>
                                                <td>01/11/2016</td>
                                                <td>
                                                    <div className="circle circle-lg bg-warning" data-title="normal"></div>
                                                </td>
                                                <td>
                                                    <a href="">Tracey Parker</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-warning">pending</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">bug</div>
                                                </td>
                                                <td>BI:1107</td>
                                                <td className="text-nowrap">
                                                    <small>Maecenas mollis egestas convallis.</small>
                                                </td>
                                                <td>01/01/2015</td>
                                                <td>
                                                    <div className="circle circle-lg bg-danger" data-title="high"></div>
                                                </td>
                                                <td>
                                                    <a href="">Warren Gray</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-danger">closed</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">issue</div>
                                                </td>
                                                <td>BI:1117</td>
                                                <td className="text-nowrap">
                                                    <small>Maecenas mollis egestas convallis.</small>
                                                </td>
                                                <td>11/05/2013</td>
                                                <td>
                                                    <div className="circle circle-lg bg-warning" data-title="normal"></div>
                                                </td>
                                                <td>
                                                    <a href="">Jackson Ramos</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-success">open</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">issue</div>
                                                </td>
                                                <td>BI:10127</td>
                                                <td className="text-nowrap">
                                                    <small>Maecenas mollis egestas convallis.</small>
                                                </td>
                                                <td>05/02/2014</td>
                                                <td>
                                                    <div className="circle circle-lg bg-warning" data-title="normal"></div>
                                                </td>
                                                <td>
                                                    <a href="">Ernest Berry</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-danger">closed</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">bug</div>
                                                </td>
                                                <td>BI:54678</td>
                                                <td className="text-nowrap">
                                                    <small>Maecenas mollis egestas convallis.</small>
                                                </td>
                                                <td>01/01/2016</td>
                                                <td>
                                                    <div className="circle circle-lg bg-warning" data-title="normal"></div>
                                                </td>
                                                <td>
                                                    <a href="">Sylvia Daniels</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-success">open</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">bug</div>
                                                </td>
                                                <td>BI:55778</td>
                                                <td className="text-nowrap">
                                                    <small>Maecenas mollis egestas convallis.</small>
                                                </td>
                                                <td>01/05/2016</td>
                                                <td>
                                                    <div className="circle circle-lg" data-title="low"></div>
                                                </td>
                                                <td>
                                                    <a href="">Sherry Carroll</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-success">open</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">bug</div>
                                                </td>
                                                <td>BI:56878</td>
                                                <td className="text-nowrap">
                                                    <small>Maecenas mollis egestas convallis.</small>
                                                </td>
                                                <td>05/01/2016</td>
                                                <td>
                                                    <div className="circle circle-lg bg-warning" data-title="normal"></div>
                                                </td>
                                                <td>
                                                    <a href="">Mitchell Jones</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-warning">pending</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">bug</div>
                                                </td>
                                                <td>BI:57978</td>
                                                <td className="text-nowrap">
                                                    <small>Maecenas mollis egestas convallis.</small>
                                                </td>
                                                <td>01/11/2016</td>
                                                <td>
                                                    <div className="circle circle-lg bg-warning" data-title="normal"></div>
                                                </td>
                                                <td>
                                                    <a href="">Tracey Parker</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-warning">pending</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">bug</div>
                                                </td>
                                                <td>BI:1107</td>
                                                <td className="text-nowrap">
                                                    <small>Maecenas mollis egestas convallis.</small>
                                                </td>
                                                <td>01/01/2015</td>
                                                <td>
                                                    <div className="circle circle-lg bg-danger" data-title="high"></div>
                                                </td>
                                                <td>
                                                    <a href="">Warren Gray</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-danger">closed</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">bug</div>
                                                </td>
                                                <td>BI:1117</td>
                                                <td className="text-nowrap">
                                                    <small>Maecenas mollis egestas convallis.</small>
                                                </td>
                                                <td>11/05/2013</td>
                                                <td>
                                                    <div className="circle circle-lg bg-warning" data-title="normal"></div>
                                                </td>
                                                <td>
                                                    <a href="">Jackson Ramos</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-success">open</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">issue</div>
                                                </td>
                                                <td>BI:10127</td>
                                                <td className="text-nowrap">
                                                    <small>Maecenas mollis egestas convallis.</small>
                                                </td>
                                                <td>05/02/2014</td>
                                                <td>
                                                    <div className="circle circle-lg bg-warning" data-title="normal"></div>
                                                </td>
                                                <td>
                                                    <a href="">Ernest Berry</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-danger">closed</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">issue</div>
                                                </td>
                                                <td>BI:54678</td>
                                                <td className="text-nowrap">
                                                    <small>Maecenas mollis egestas convallis.</small>
                                                </td>
                                                <td>01/01/2016</td>
                                                <td>
                                                    <div className="circle circle-lg bg-warning" data-title="normal"></div>
                                                </td>
                                                <td>
                                                    <a href="">Sylvia Daniels</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-success">open</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">issue</div>
                                                </td>
                                                <td>BI:55778</td>
                                                <td className="text-nowrap">
                                                    <small>Maecenas mollis egestas convallis.</small>
                                                </td>
                                                <td>01/05/2016</td>
                                                <td>
                                                    <div className="circle circle-lg" data-title="low"></div>
                                                </td>
                                                <td>
                                                    <a href="">Sherry Carroll</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-success">open</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">bug</div>
                                                </td>
                                                <td>BI:56878</td>
                                                <td className="text-nowrap">
                                                    <small>Maecenas mollis egestas convallis.</small>
                                                </td>
                                                <td>05/01/2016</td>
                                                <td>
                                                    <div className="circle circle-lg bg-warning" data-title="normal"></div>
                                                </td>
                                                <td>
                                                    <a href="">Mitchell Jones</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-warning">pending</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">bug</div>
                                                </td>
                                                <td>BI:57978</td>
                                                <td className="text-nowrap">
                                                    <small>Maecenas mollis egestas convallis.</small>
                                                </td>
                                                <td>01/11/2016</td>
                                                <td>
                                                    <div className="circle circle-lg bg-warning" data-title="normal"></div>
                                                </td>
                                                <td>
                                                    <a href="">Tracey Parker</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-warning">pending</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">bug</div>
                                                </td>
                                                <td>BI:1107</td>
                                                <td className="text-nowrap">
                                                    <small>Maecenas mollis egestas convallis.</small>
                                                </td>
                                                <td>01/01/2015</td>
                                                <td>
                                                    <div className="circle circle-lg bg-danger" data-title="high"></div>
                                                </td>
                                                <td>
                                                    <a href="">Warren Gray</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-danger">closed</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">issue</div>
                                                </td>
                                                <td>BI:1117</td>
                                                <td className="text-nowrap">
                                                    <small>Maecenas mollis egestas convallis.</small>
                                                </td>
                                                <td>11/05/2013</td>
                                                <td>
                                                    <div className="circle circle-lg bg-warning" data-title="normal"></div>
                                                </td>
                                                <td>
                                                    <a href="">Jackson Ramos</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-success">open</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">issue</div>
                                                </td>
                                                <td>BI:10127</td>
                                                <td className="text-nowrap">
                                                    <small>Maecenas mollis egestas convallis.</small>
                                                </td>
                                                <td>05/02/2014</td>
                                                <td>
                                                    <div className="circle circle-lg bg-warning" data-title="normal"></div>
                                                </td>
                                                <td>
                                                    <a href="">Ernest Berry</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-danger">closed</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">bug</div>
                                                </td>
                                                <td>BI:54678</td>
                                                <td className="text-nowrap">
                                                    <small>Maecenas mollis egestas convallis.</small>
                                                </td>
                                                <td>01/01/2016</td>
                                                <td>
                                                    <div className="circle circle-lg bg-warning" data-title="normal"></div>
                                                </td>
                                                <td>
                                                    <a href="">Sylvia Daniels</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-success">open</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">issue</div>
                                                </td>
                                                <td>BI:55778</td>
                                                <td className="text-nowrap">
                                                    <small>Maecenas mollis egestas convallis.</small>
                                                </td>
                                                <td>01/05/2016</td>
                                                <td>
                                                    <div className="circle circle-lg" data-title="low"></div>
                                                </td>
                                                <td>
                                                    <a href="">Sherry Carroll</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-success">open</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">issue</div>
                                                </td>
                                                <td>BI:56878</td>
                                                <td className="text-nowrap">
                                                    <small>Maecenas mollis egestas convallis.</small>
                                                </td>
                                                <td>05/01/2016</td>
                                                <td>
                                                    <div className="circle circle-lg bg-warning" data-title="normal"></div>
                                                </td>
                                                <td>
                                                    <a href="">Mitchell Jones</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-warning">pending</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">issue</div>
                                                </td>
                                                <td>BI:57978</td>
                                                <td className="text-nowrap">
                                                    <small>Maecenas mollis egestas convallis.</small>
                                                </td>
                                                <td>01/11/2016</td>
                                                <td>
                                                    <div className="circle circle-lg bg-warning" data-title="normal"></div>
                                                </td>
                                                <td>
                                                    <a href="">Tracey Parker</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-warning">pending</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">bug</div>
                                                </td>
                                                <td>BI:1107</td>
                                                <td className="text-nowrap">
                                                    <small>Maecenas mollis egestas convallis.</small>
                                                </td>
                                                <td>01/01/2015</td>
                                                <td>
                                                    <div className="circle circle-lg bg-danger" data-title="high"></div>
                                                </td>
                                                <td>
                                                    <a href="">Warren Gray</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-danger">closed</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">bug</div>
                                                </td>
                                                <td>BI:1117</td>
                                                <td className="text-nowrap">
                                                    <small>Maecenas mollis egestas convallis.</small>
                                                </td>
                                                <td>11/05/2013</td>
                                                <td>
                                                    <div className="circle circle-lg bg-warning" data-title="normal"></div>
                                                </td>
                                                <td>
                                                    <a href="">Jackson Ramos</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-success">open</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-gray-lighter">issue</div>
                                                </td>
                                                <td>BI:10127</td>
                                                <td className="text-nowrap">
                                                    <small>Maecenas mollis egestas convallis.</small>
                                                </td>
                                                <td>05/02/2014</td>
                                                <td>
                                                    <div className="circle circle-lg bg-warning" data-title="normal"></div>
                                                </td>
                                                <td>
                                                    <a href="">Ernest Berry</a>
                                                </td>
                                                <td>
                                                    <div className="inline wd-xxs badge badge-danger">closed</div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Datatable>
                            </div>
                        </div>
                    </Col>
                </Row>
            </ContentWrapper>
            );
    }

}

export default BugTracker;


