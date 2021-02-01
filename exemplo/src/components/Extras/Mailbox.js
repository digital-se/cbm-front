import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Collapse } from 'reactstrap';

class Mailbox extends Component {

    state = {
        collapse: false
    }

    toggleCollapse = () => {
        this.setState({
            collapse: !this.state.collapse
        })
    }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">MailBox</div>
                <div className="row">
                    <div className="col-xl-3 col-lg-4">
                        <div className="d-flex mb-2">
                            <button className="btn btn-purple btn-sm mb-compose-button">
                                <em className="fas fa-pencil-alt mr-2"></em>
                                <span>Compose</span>
                            </button>
                            <button className="btn btn-sm btn-secondary mb-toggle-button ml-auto" type="button" onClick={this.toggleCollapse}>
                                <em className="fa fa-bars fa-fw fa-lg"></em>
                            </button>
                        </div>
                        {/* START mailbox list */}
                        <Collapse className="mb-boxes" isOpen={this.state.collapse}>
                            <div className="card card-default">
                                <div className="card-body">
                                    <ul className="nav nav-pills flex-column">
                                        <li className="nav-item p-2">
                                            <small className="text-muted">MAILBOXES</small>
                                        </li>
                                        <li className="nav-item active">
                                            <a className="nav-link d-flex align-items-center" href="#Inbox">
                                                <em className="fa-fw fa-lg fa fa-inbox mr-2"></em>
                                                <span>Inbox</span>
                                                <span className="ml-auto badge badge-green">42</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link d-flex align-items-center" href="#Starred">
                                                <em className="fa-fw fa-lg fa fa-star mr-2"></em>
                                                <span>Starred</span>
                                                <span className="ml-auto badge badge-green">10</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link d-flex align-items-center" href="#Sent">
                                                <em className="fa-fw fa-lg far fa-paper-plane mr-2"></em>
                                                <span>Sent</span>
                                                <span className="ml-auto badge badge-green">0</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link d-flex align-items-center" href="#Draft">
                                                <em className="fa-fw fa-lg fa fa-edit mr-2"></em>
                                                <span>Draft</span>
                                                <span className="ml-auto badge badge-green">5</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="nav-link d-flex align-items-center" href="#Trash">
                                                <em className="fa-fw fa-lg fas fa-trash-alt mr-2"></em>
                                                <span>Trash</span>
                                                <span className="ml-auto badge badge-green">0</span>
                                            </a>
                                        </li>
                                        <li className="p-2 nav-item">
                                            <small className="text-muted">LABELS</small>
                                        </li>
                                        <li className="nav-item">
                                            <a className="py-1 nav-link" href="#Red">
                                                <span className="circle bg-danger"></span>
                                                <span>Red</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="py-1 nav-link" href="#Pink">
                                                <span className="circle bg-pink"></span>
                                                <span>Pink</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="py-1 nav-link" href="#Blue">
                                                <span className="circle bg-info"></span>
                                                <span>Blue</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="py-1 nav-link" href="#Yellow">
                                                <span className="circle bg-warning"></span>
                                                <span>Yellow</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* END mailbox list */}
                        </Collapse>
                    </div>
                    <div className="col-xl-9 col-lg-8">
                        {/* START action buttons */}
                        <div className="d-flex mb-2">
                            <div className="btn-group">
                                <button className="btn btn-secondary btn-sm" type="button">
                                    <em className="fas fa-reply text-gray-dark"></em>
                                </button>
                                <button className="btn btn-secondary btn-sm" type="button">
                                    <em className="fas fa-reply-all text-gray-dark"></em>
                                </button>
                                <button className="btn btn-secondary btn-sm" type="button">
                                    <em className="fas fa-share text-gray-dark"></em>
                                </button>
                            </div>
                            <div className="btn-group ml-auto">
                                <button className="btn btn-secondary btn-sm" type="button">
                                    <em className="fa fa-exclamation text-gray-dark"></em>
                                </button>
                                <button className="btn btn-secondary btn-sm" type="button">
                                    <em className="fa fa-times text-gray-dark"></em>
                                </button>
                            </div>
                        </div>
                        {/* END action buttons */}
                        <div className="card card-default">
                            <div className="card-body">
                                {/* p.lead.text-centerNo mails here */}
                                <table className="table table-hover mb-mails">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="checkbox c-checkbox">
                                                    <label>
                                                        <input type="checkbox"/>
                                                        <span className="fa fa-check"></span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <em className="fa-lg far fa-star text-muted"></em>
                                            </td>
                                            <td>
                                                <div className="d-flex">
                                                    <img className="mb-mail-avatar mr-2" alt="Mail Avatar" src="img/user/01.jpg"/>
                                                    <div className="mb-mail-meta">
                                                        <div className="mb-mail-subject">Admin web application</div>
                                                        <div className="mb-mail-from">Evelyn Holmes</div>
                                                        <div className="mb-mail-preview">Fusce gravida, diam ac adipiscing pretium, sem nibh bibendum diam, non consequat quam metus non nunc</div>
                                                    </div>
                                                    <div className="mb-mail-date ml-auto">10m ago</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="checkbox c-checkbox">
                                                    <label>
                                                        <input type="checkbox"/>
                                                        <span className="fa fa-check"></span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <em className="fa-lg far fa-star text-muted"></em>
                                            </td>
                                            <td>
                                                <div className="d-flex">
                                                    <img className="mr-2 mb-mail-avatar" alt="Mail Avatar" src="img/user/02.jpg"/>
                                                    <div className="mb-mail-meta">
                                                        <div className="mb-mail-subject">Admin theme based on Bootstrap and AngularJS</div>
                                                        <div className="mb-mail-from">Allison Grant</div>
                                                        <div className="mb-mail-preview">Nunc eget lacinia felis. Pellentesque sollicitudin sollicitudin erat, in imperdiet tortor fringil</div>
                                                    </div>
                                                    <div className="ml-auto mb-mail-date">1 day ago</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="checkbox c-checkbox">
                                                    <label>
                                                        <input type="checkbox"/>
                                                        <span className="fa fa-check"></span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <em className="fa-lg far fa-star text-muted"></em>
                                            </td>
                                            <td>
                                                <div className="d-flex">
                                                    <img className="mr-2 mb-mail-avatar" alt="Mail Avatar" src="img/user/03.jpg"/>
                                                    <div className="mb-mail-meta">
                                                        <div className="mb-mail-subject">Nested route mailbox application</div>
                                                        <div className="mb-mail-from">Daryl Carlson</div>
                                                        <div className="mb-mail-preview">Nulla facilisi. Sed sit amet sem vel purus pulvinar venenatis. Class aptent taciti</div>
                                                    </div>
                                                    <div className="ml-auto mb-mail-date">2 days ago</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="checkbox c-checkbox">
                                                    <label>
                                                        <input type="checkbox"/>
                                                        <span className="fa fa-check"></span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <em className="fa-lg far fa-star text-muted"></em>
                                            </td>
                                            <td>
                                                <div className="d-flex">
                                                    <img className="mr-2 mb-mail-avatar" alt="Mail Avatar" src="img/user/04.jpg"/>
                                                    <div className="mb-mail-meta">
                                                        <div className="mb-mail-subject">Angular with lazy load components</div>
                                                        <div className="mb-mail-from">George Clark</div>
                                                        <div className="mb-mail-preview">Integer sit amet vulputate mauris. Proin purus nisl, tempor ut tempor at, ornare vel mauris. Ut ac l</div>
                                                    </div>
                                                    <div className="ml-auto mb-mail-date">3 days ago</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="checkbox c-checkbox">
                                                    <label>
                                                        <input type="checkbox"/>
                                                        <span className="fa fa-check"></span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <em className="fa-lg fa fa-star text-warning"></em>
                                            </td>
                                            <td>
                                                <div className="d-flex">
                                                    <img className="mr-2 mb-mail-avatar" alt="Mail Avatar" src="img/user/05.jpg"/>
                                                    <div className="mb-mail-meta">
                                                        <div className="mb-mail-subject">Translation ready and RTL support!</div>
                                                        <div className="mb-mail-from">Bonnie Bowman</div>
                                                        <div className="mb-mail-preview">Integer sit amet vulputate mauris. Proin purus nisl, tempor ut tempor at, ornare vel mauris. Ut ac l</div>
                                                    </div>
                                                    <div className="ml-auto mb-mail-date">4 days ago</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="checkbox c-checkbox">
                                                    <label>
                                                        <input type="checkbox"/>
                                                        <span className="fa fa-check"></span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <em className="fa-lg far fa-star text-muted"></em>
                                            </td>
                                            <td>
                                                <div className="d-flex">
                                                    <img className="mr-2 mb-mail-avatar" alt="Mail Avatar" src="img/user/06.jpg"/>
                                                    <div className="mb-mail-meta">
                                                        <div className="mb-mail-subject">Don&apos;t forget to check latest updates!</div>
                                                        <div className="mb-mail-from">Warren Watts</div>
                                                        <div className="mb-mail-preview">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In at conseq</div>
                                                    </div>
                                                    <div className="ml-auto mb-mail-date">5 days ago</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="checkbox c-checkbox">
                                                    <label>
                                                        <input type="checkbox"/>
                                                        <span className="fa fa-check"></span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <em className="fa-lg fa fa-star text-warning"></em>
                                            </td>
                                            <td>
                                                <div className="d-flex">
                                                    <img className="mr-2 mb-mail-avatar" alt="Mail Avatar" src="img/user/07.jpg"/>
                                                    <div className="mb-mail-meta">
                                                        <div className="mb-mail-subject">We have to meet someday</div>
                                                        <div className="mb-mail-from">Elijah Ward</div>
                                                        <div className="mb-mail-preview">Nunc hendrerit, neque ullamcorper eleifend ornare, arcu est bibendum ipsum, id malesuada sem justo v</div>
                                                    </div>
                                                    <div className="ml-auto mb-mail-date">6 days ago</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="checkbox c-checkbox">
                                                    <label>
                                                        <input type="checkbox"/>
                                                        <span className="fa fa-check"></span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <em className="fa-lg fa fa-star text-warning"></em>
                                            </td>
                                            <td>
                                                <div className="d-flex">
                                                    <img className="mr-2 mb-mail-avatar" alt="Mail Avatar" src="img/user/08.jpg"/>
                                                    <div className="mb-mail-meta">
                                                        <div className="mb-mail-subject">New issue found</div>
                                                        <div className="mb-mail-from">Colleen Payne</div>
                                                        <div className="mb-mail-preview">Integer sit amet vulputate mauris. Proin purus nisl, tempor ut tempor at, ornare vel mauris. Ut ac l</div>
                                                    </div>
                                                    <div className="ml-auto mb-mail-date">7 days ago</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="checkbox c-checkbox">
                                                    <label>
                                                        <input type="checkbox"/>
                                                        <span className="fa fa-check"></span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <em className="fa-lg far fa-star text-muted"></em>
                                            </td>
                                            <td>
                                                <div className="d-flex">
                                                    <img className="mr-2 mb-mail-avatar" alt="Mail Avatar" src="img/user/09.jpg"/>
                                                    <div className="mb-mail-meta">
                                                        <div className="mb-mail-subject">Issue #5478 awaiting reply</div>
                                                        <div className="mb-mail-from">Rose Fox</div>
                                                        <div className="mb-mail-preview">Sed eu felis nulla. Nunc malesuada sapien at risus eleifend ut lacinia sem pretium.</div>
                                                    </div>
                                                    <div className="ml-auto mb-mail-date">8 days ago</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="checkbox c-checkbox">
                                                    <label>
                                                        <input type="checkbox"/>
                                                        <span className="fa fa-check"></span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <em className="fa-lg fa fa-star text-warning"></em>
                                            </td>
                                            <td>
                                                <div className="d-flex">
                                                    <img className="mr-2 mb-mail-avatar" alt="Mail Avatar" src="img/user/10.jpg"/>
                                                    <div className="mb-mail-meta">
                                                        <div className="mb-mail-subject">Check Angle for your next startup project</div>
                                                        <div className="mb-mail-from">Jenny Knight</div>
                                                        <div className="mb-mail-preview">Morbi varius sem quis purus suscipit tempus. Integer fermentum accumsan metus, id sagittis ipsum mol</div>
                                                    </div>
                                                    <div className="ml-auto mb-mail-date">9 days ago</div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentWrapper>
            );
    }

}

export default Mailbox;

