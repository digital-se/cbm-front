import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Progress, Tooltip } from 'reactstrap';

import Sparkline from '../Common/Sparklines';


/**
 * Wrap an element and assign automatically an ID,
 * creates handler for show/hide tooltips without
 * the hassle of creating new states and class methods.
 * Support only one child and simple text.
 */
class BSTooltip extends Component {
    // static propTypes { content: PropTypes.string }
    state = {
        _id: 'id4tooltip_'+new Date().getUTCMilliseconds(),
        tooltipOpen: false
    }
    toggle = () => this.setState({tooltipOpen: !this.state.tooltipOpen})
    render() {
        return [
            <Tooltip {...this.props} isOpen={this.state.tooltipOpen} toggle={this.toggle} target={this.state._id} key='1'>
                {this.props.content}
            </Tooltip>,
            React.cloneElement(React.Children.only(this.props.children), {
                id: this.state._id,
                key: '2'
            })
        ]
    }
}

class TeamViewer extends Component {

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">Team viewer
                    <div className="ml-auto">
                        <em className="fas fa-exclamation-triangle text-warning"></em>
                    </div>
                </div>
                <Row>
                    <Col xl="4" lg="6">
                        {/* Team Card */}
                        <div className="card card-default">
                            <div className="card-header">
                                <div className="float-right">
                                    <div className="badge badge-success">free</div>
                                </div>
                                <div className="card-title">Team #1</div>
                            </div>
                            <div className="card-body bt">
                                <BSTooltip content="Team leader">
                                    <img className="rounded-circle thumb48" src="img/user/03.jpg" alt="project member"/>
                                </BSTooltip>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/02.jpg" alt="project member"/>
                                </a>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/04.jpg" alt="project member"/>
                                </a>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/05.jpg" alt="project member"/>
                                </a>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/06.jpg" alt="project member"/>
                                </a>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/07.jpg" alt="project member"/>
                                </a>
                            </div>
                            <div className="card-body bb text-center">
                                <BSTooltip content="Progress of asigned tasks">
                                    <Progress className="progress-xs m-0" value="50" color="info"/>
                                </BSTooltip>
                            </div>
                            <div className="card-body bb">
                                <div className="row text-center">
                                    <div className="col-4">
                                        <p className="text-bold">BUDGET</p>
                                        <Sparkline values="60,40"
                                            options={{
                                                type:"pie",
                                                height:"24",
                                                sliceColors:["#edf1f2", "#ff902b"]
                                            }}
                                            className="sparkline inline mr-2"/>
                                    </div>
                                    <div className="col-4">
                                        <p className="text-bold">TASKS</p>
                                        <div className="h3 m-0">26</div>
                                    </div>
                                    <div className="col-4">
                                        <p className="text-bold">AVAILABITY</p>
                                        <Sparkline values="70,30"
                                            options={{
                                                type:"pie",
                                                height:"24",
                                                sliceColors:["#edf1f2", "#ff902b"]
                                            }}
                                            className="sparkline inline mr-2"/>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul className="list-inline m-0">
                                    <li className="list-inline-item">
                                        <div className="badge bg-gray">angularjs</div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="badge bg-gray">jquery</div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="badge bg-gray">gulp</div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="badge bg-gray">git</div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="badge p-1 bg-gray">ios</div>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-footer text-center">
                                <button type="button" className="btn btn-secondary btn-oval">Manage Team</button>
                            </div>
                        </div>
                        {/* end Team Card */}
                    </Col>
                    <Col xl="4" lg="6">
                        {/* Team Card */}
                        <div className="card card-default">
                            <div className="card-header">
                                <div className="float-right">
                                    <div className="badge bg-gray">asigned</div>
                                </div>
                                <div className="card-title">Team #2</div>
                            </div>
                            <div className="card-body bt">
                                <BSTooltip content="Team leader">
                                    <img className="rounded-circle thumb48" src="img/user/03.jpg" alt="project member"/>
                                </BSTooltip>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/02.jpg" alt="project member"/>
                                </a>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/04.jpg" alt="project member"/>
                                </a>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/05.jpg" alt="project member"/>
                                </a>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/09.jpg" alt="project member"/>
                                </a>
                            </div>
                            <div className="card-body bb text-center">
                                <BSTooltip content="Progress of asigned tasks">
                                    <Progress className="progress-xs m-0" value="90" color="info"/>
                                </BSTooltip>
                            </div>
                            <div className="card-body bb">
                                <div className="row text-center">
                                    <div className="col-4">
                                        <p className="text-bold">BUDGET</p>
                                        <Sparkline values="10,90"
                                            options={{
                                                type:"pie",
                                                height:"24",
                                                sliceColors:["#edf1f2", "#f05050"]
                                            }}
                                            className="sparkline inline mr-2"/>
                                    </div>
                                    <div className="col-4">
                                        <p className="text-bold">TASKS</p>
                                        <div className="h3 m-0">145</div>
                                    </div>
                                    <div className="col-4">
                                        <p className="text-bold">AVAILABITY</p>
                                        <Sparkline values="40,60"
                                            options={{
                                                type:"pie",
                                                height:"24",
                                                sliceColors:["#edf1f2", "#27c24c"]
                                            }}
                                            className="sparkline inline mr-2"/>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul className="list-inline m-0">
                                    <li className="list-inline-item">
                                        <div className="badge bg-gray">angularjs</div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="badge bg-gray">jquery</div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="badge bg-gray">gulp</div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="badge bg-gray">git</div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="badge p-1 bg-gray">ios</div>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-footer text-center">
                                <button type="button" className="btn btn-secondary btn-oval">Manage Team</button>
                            </div>
                        </div>
                        {/* end Team Card */}
                    </Col>
                    <Col xl="4" lg="6">
                        {/* Team Card */}
                        <div className="card card-default">
                            <div className="card-header">
                                <div className="float-right">
                                    <div className="badge badge-success">free</div>
                                </div>
                                <div className="card-title">Team #3</div>
                            </div>
                            <div className="card-body bt">
                                <BSTooltip content="Team leader">
                                    <img className="rounded-circle thumb48" src="img/user/03.jpg" alt="project member"/>
                                </BSTooltip>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/02.jpg" alt="project member"/>
                                </a>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/04.jpg" alt="project member"/>
                                </a>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/05.jpg" alt="project member"/>
                                </a>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/06.jpg" alt="project member"/>
                                </a>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/07.jpg" alt="project member"/>
                                </a>
                            </div>
                            <div className="card-body bb text-center">
                                <BSTooltip content="Progress of asigned tasks">
                                    <Progress className="progress-xs m-0" value="50" color="info"/>
                                </BSTooltip>
                            </div>
                            <div className="card-body bb">
                                <div className="row text-center">
                                    <div className="col-4">
                                        <p className="text-bold">BUDGET</p>
                                        <Sparkline values="60,40"
                                            options={{
                                                type:"pie",
                                                height:"24",
                                                sliceColors:["#edf1f2", "#ff902b"]
                                            }}
                                            className="sparkline inline mr-2"/>
                                    </div>
                                    <div className="col-4">
                                        <p className="text-bold">TASKS</p>
                                        <div className="h3 m-0">98</div>
                                    </div>
                                    <div className="col-4">
                                        <p className="text-bold">AVAILABITY</p>
                                        <Sparkline values="40,60"
                                            options={{
                                                type:"pie",
                                                height:"24",
                                                sliceColors:["#edf1f2", "#27c24c"]
                                            }}
                                            className="sparkline inline mr-2"/>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul className="list-inline m-0">
                                    <li className="list-inline-item">
                                        <div className="badge bg-gray">angularjs</div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="badge bg-gray">jquery</div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="badge bg-gray">gulp</div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="badge bg-gray">git</div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="badge p-1 bg-gray">ios</div>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-footer text-center">
                                <button type="button" className="btn btn-secondary btn-oval">Manage Team</button>
                            </div>
                        </div>
                        {/* end Team Card */}
                    </Col>
                    <Col xl="4" lg="6">
                        {/* Team Card */}
                        <div className="card card-default">
                            <div className="card-header">
                                <div className="float-right">
                                    <div className="badge bg-gray">asigned</div>
                                </div>
                                <div className="card-title">Team #4</div>
                            </div>
                            <div className="card-body bt">
                                <BSTooltip content="Team leader">
                                    <img className="rounded-circle thumb48" src="img/user/03.jpg" alt="project member"/>
                                </BSTooltip>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/02.jpg" alt="project member"/>
                                </a>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/04.jpg" alt="project member"/>
                                </a>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/05.jpg" alt="project member"/>
                                </a>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/06.jpg" alt="project member"/>
                                </a>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/07.jpg" alt="project member"/>
                                </a>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/08.jpg" alt="project member"/>
                                </a>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/09.jpg" alt="project member"/>
                                </a>
                            </div>
                            <div className="card-body bb text-center">
                                <BSTooltip content="Progress of asigned tasks">
                                    <Progress className="progress-xs m-0" value="25" color="info"/>
                                </BSTooltip>
                            </div>
                            <div className="card-body bb">
                                <div className="row text-center">
                                    <div className="col-4">
                                        <p className="text-bold">BUDGET</p>
                                        <Sparkline values="60,40"
                                            options={{
                                                type:"pie",
                                                height:"24",
                                                sliceColors:["#edf1f2", "#ff902b"]
                                            }}
                                            className="sparkline inline mr-2"/>
                                    </div>
                                    <div className="col-4">
                                        <p className="text-bold">TASKS</p>
                                        <div className="h3 m-0">145</div>
                                    </div>
                                    <div className="col-4">
                                        <p className="text-bold">AVAILABITY</p>
                                        <Sparkline values="40,60"
                                            options={{
                                                type:"pie",
                                                height:"24",
                                                sliceColors:["#edf1f2", "#27c24c"]
                                            }}
                                            className="sparkline inline mr-2"/>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul className="list-inline m-0">
                                    <li className="list-inline-item">
                                        <div className="badge bg-gray">angularjs</div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="badge bg-gray">jquery</div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="badge bg-gray">gulp</div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="badge bg-gray">git</div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="badge p-1 bg-gray">ios</div>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-footer text-center">
                                <button type="button" className="btn btn-secondary btn-oval">Manage Team</button>
                            </div>
                        </div>
                        {/* end Team Card */}
                    </Col>
                    <Col xl="4" lg="6">
                        {/* Team Card */}
                        <div className="card card-default">
                            <div className="card-header">
                                <div className="float-right">
                                    <div className="badge bg-gray">asigned</div>
                                </div>
                                <div className="card-title">Team #5</div>
                            </div>
                            <div className="card-body bt">
                                <BSTooltip content="Team leader">
                                    <img className="rounded-circle thumb48" src="img/user/03.jpg" alt="project member"/>
                                </BSTooltip>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/02.jpg" alt="project member"/>
                                </a>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/04.jpg" alt="project member"/>
                                </a>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/05.jpg" alt="project member"/>
                                </a>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/06.jpg" alt="project member"/>
                                </a>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/07.jpg" alt="project member"/>
                                </a>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/08.jpg" alt="project member"/>
                                </a>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/09.jpg" alt="project member"/>
                                </a>
                            </div>
                            <div className="card-body bb text-center">
                                <BSTooltip content="Progress of asigned tasks">
                                    <Progress className="progress-xs m-0" value="50" color="info"/>
                                </BSTooltip>
                            </div>
                            <div className="card-body bb">
                                <div className="row text-center">
                                    <div className="col-4">
                                        <p className="text-bold">BUDGET</p>
                                        <Sparkline values="60,40"
                                            options={{
                                                type:"pie",
                                                height:"24",
                                                sliceColors:["#edf1f2", "#ff902b"]
                                            }}
                                            className="sparkline inline mr-2"/>
                                    </div>
                                    <div className="col-4">
                                        <p className="text-bold">TASKS</p>
                                        <div className="h3 m-0">500</div>
                                    </div>
                                    <div className="col-4">
                                        <p className="text-bold">AVAILABITY</p>
                                        <Sparkline values="40,60"
                                            options={{
                                                type:"pie",
                                                height:"24",
                                                sliceColors:["#edf1f2", "#27c24c"]
                                            }}
                                            className="sparkline inline mr-2"/>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul className="list-inline m-0">
                                    <li className="list-inline-item">
                                        <div className="badge bg-gray">angularjs</div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="badge bg-gray">jquery</div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="badge bg-gray">gulp</div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="badge bg-gray">git</div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="badge p-1 bg-gray">ios</div>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-footer text-center">
                                <button type="button" className="btn btn-secondary btn-oval">Manage Team</button>
                            </div>
                        </div>
                        {/* end Team Card */}
                    </Col>
                    <Col xl="4" lg="6">
                        {/* Team Card */}
                        <div className="card card-default">
                            <div className="card-header">
                                <div className="float-right">
                                    <div className="badge badge-success">free</div>
                                </div>
                                <div className="card-title">Team #6</div>
                            </div>
                            <div className="card-body bt">
                                <BSTooltip content="Team leader">
                                    <img className="rounded-circle thumb48" src="img/user/03.jpg" alt="project member"/>
                                </BSTooltip>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/02.jpg" alt="project member"/>
                                </a>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/04.jpg" alt="project member"/>
                                </a>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/05.jpg" alt="project member"/>
                                </a>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/06.jpg" alt="project member"/>
                                </a>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/07.jpg" alt="project member"/>
                                </a>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/08.jpg" alt="project member"/>
                                </a>
                                <a className="inline mr-1" href="">
                                    <img className="rounded-circle thumb24" src="img/user/09.jpg" alt="project member"/>
                                </a>
                            </div>
                            <div className="card-body bb text-center">
                                <BSTooltip content="Progress of asigned tasks">
                                    <Progress className="progress-xs m-0" value="50" color="info"/>
                                </BSTooltip>
                            </div>
                            <div className="card-body bb">
                                <div className="row text-center">
                                    <div className="col-4">
                                        <p className="text-bold">BUDGET</p>
                                        <Sparkline values="5,95"
                                            options={{
                                                type:"pie",
                                                height:"24",
                                                sliceColors:["#edf1f2", "#f05050"]
                                            }}
                                            className="sparkline inline mr-2"/>
                                    </div>
                                    <div className="col-4">
                                        <p className="text-bold">TASKS</p>
                                        <div className="h3 m-0">145</div>
                                    </div>
                                    <div className="col-4">
                                        <p className="text-bold">AVAILABITY</p>
                                        <Sparkline values="70,30"
                                            options={{
                                                type:"pie",
                                                height:"24",
                                                sliceColors:["#edf1f2", "#ff902b"]
                                            }}
                                            className="sparkline inline mr-2"/>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul className="list-inline m-0">
                                    <li className="list-inline-item">
                                        <div className="badge bg-gray">angularjs</div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="badge bg-gray">jquery</div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="badge bg-gray">gulp</div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="badge bg-gray">git</div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="badge p-1 bg-gray">ios</div>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-footer text-center">
                                <button type="button" className="btn btn-secondary btn-oval">Manage Team</button>
                            </div>
                        </div>
                        {/* end Team Card */}
                    </Col>
                </Row>
            </ContentWrapper>
            );
    }

}

export default TeamViewer;
