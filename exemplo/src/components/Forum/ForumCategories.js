import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Link } from 'react-router-dom';
import { Table, Card } from 'reactstrap';

class ForumCategories extends Component {

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">Forum - Categories</div>
                {/* First category table */}
                <Card className="card-default">
                    <Table striped>
                        <thead>
                            <tr>
                                <th className="h4" style={{width: '50%'}}>Starting</th>
                                <th className="h4 text-center d-none d-lg-table-cell">Topics</th>
                                <th className="h4 text-center d-none d-lg-table-cell">Posts</th>
                                <th className="h4 d-none d-lg-table-cell">Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h4>
                                        <Link to="/forum/topics/113">
                                            <strong>Welcome</strong>
                                        </Link>
                                    </h4>
                                    <div className="text-muted">Feel free to come inside and introduce yourself!</div>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>789</strong>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>254</strong>
                                </td>
                                <td className="d-none d-lg-table-cell">
                                    <a href="">Arnold Gray</a>
                                    <br/>
                                    <small>March 10, 2015</small>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <Link to="/forum/topics/224">
                                            <strong>Forum Rules</strong>
                                        </Link>
                                    </h4>
                                    <div className="text-muted">Please read the rules before post</div>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>15</strong>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>28</strong>
                                </td>
                                <td className="d-none d-lg-table-cell">
                                    <a href="">Erika Mckinney</a>
                                    <br/>
                                    <small>March 10, 2015</small>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <Link to="/forum/topics/335">
                                            <strong>Announcements</strong>
                                        </Link>
                                    </h4>
                                    <div className="text-muted">Latest udpates and news about this forum</div>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>300</strong>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>561</strong>
                                </td>
                                <td className="d-none d-lg-table-cell">
                                    <a href="">Annette Ruiz</a>
                                    <br/>
                                    <small>March 10, 2015</small>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
                {/* Second category table */}
                <Card className="card-default">
                    <Table striped>
                        <thead>
                            <tr>
                                <th className="h4" style={{width: '50%'}}>Application</th>
                                <th className="h4 text-center d-none d-lg-table-cell">Topics</th>
                                <th className="h4 text-center d-none d-lg-table-cell">Posts</th>
                                <th className="h4 d-none d-lg-table-cell">Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h4>
                                        <Link to="/forum/topics/446">
                                            <strong>Getting Started</strong>
                                        </Link>
                                    </h4>
                                    <div className="text-muted">Donec id lectus tortor.</div>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>789</strong>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>254</strong>
                                </td>
                                <td className="d-none d-lg-table-cell">
                                    <a href="">Arnold Gray</a>
                                    <br/>
                                    <small>March 10, 2015</small>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <Link to="/forum/topics/557">
                                            <strong>API</strong>
                                        </Link>
                                    </h4>
                                    <div className="text-muted">Etiam pharetra, orci sit amet lobortis malesuada.</div>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>15</strong>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>28</strong>
                                </td>
                                <td className="d-none d-lg-table-cell">
                                    <a href="">Erika Mckinney</a>
                                    <br/>
                                    <small>March 10, 2015</small>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <Link to="/forum/topics/668">
                                            <strong>Updates</strong>
                                        </Link>
                                    </h4>
                                    <div className="text-muted">Etiam porttitor consectetur lectus, in adipiscing nisi bibendum eu.</div>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>300</strong>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>561</strong>
                                </td>
                                <td className="d-none d-lg-table-cell">
                                    <a href="">Annette Ruiz</a>
                                    <br/>
                                    <small>March 10, 2015</small>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <Link to="/forum/topics/779">
                                            <strong>Modules</strong>
                                        </Link>
                                    </h4>
                                    <div className="text-muted">Sed viverra rutrum hendrerit.</div>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>300</strong>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>561</strong>
                                </td>
                                <td className="d-none d-lg-table-cell">
                                    <a href="">Floyd Porter</a>
                                    <br/>
                                    <small>March 10, 2015</small>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <Link to="/forum/topics/8810">
                                            <strong>Migration</strong>
                                        </Link>
                                    </h4>
                                    <div className="text-muted">Cum sociis natoque penatibus.</div>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>300</strong>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>561</strong>
                                </td>
                                <td className="d-none d-lg-table-cell">
                                    <a href="">Pedro Fox</a>
                                    <br/>
                                    <small>March 10, 2015</small>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
                {/* Third category table */}
                <Card className="card-default">
                    <Table striped>
                        <thead>
                            <tr>
                                <th className="h4" style={{width: '50%'}}>Support</th>
                                <th className="h4 text-center d-none d-lg-table-cell">Topics</th>
                                <th className="h4 text-center d-none d-lg-table-cell">Posts</th>
                                <th className="h4 d-none d-lg-table-cell">Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h4>
                                        <Link to="/forum/topics/9911">
                                            <strong>F.A.Q.'s</strong>
                                        </Link>
                                    </h4>
                                    <div className="text-muted">Frequently asked questions here</div>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>789</strong>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>254</strong>
                                </td>
                                <td className="d-none d-lg-table-cell">
                                    <a href="">Arnold Gray</a>
                                    <br/>
                                    <small>March 10, 2015</small>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <Link to="/forum/topics/101012">
                                            <strong>Guides</strong>
                                        </Link>
                                    </h4>
                                    <div className="text-muted">How to guides here</div>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>15</strong>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>28</strong>
                                </td>
                                <td className="d-none d-lg-table-cell">
                                    <a href="">Erika Mckinney</a>
                                    <br/>
                                    <small>March 10, 2015</small>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <Link to="/forum/topics/111113">
                                            <strong>Updates</strong>
                                        </Link>
                                    </h4>
                                    <div className="text-muted">Latest news about latests updates</div>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>300</strong>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>561</strong>
                                </td>
                                <td className="d-none d-lg-table-cell">
                                    <a href="">Annette Ruiz</a>
                                    <br/>
                                    <small>March 10, 2015</small>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <Link to="/forum/topics/121214">
                                            <strong>Questions</strong>
                                        </Link>
                                    </h4>
                                    <div className="text-muted">Ask for help here</div>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>300</strong>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>561</strong>
                                </td>
                                <td className="d-none d-lg-table-cell">
                                    <a href="">Floyd Porter</a>
                                    <br/>
                                    <small>March 10, 2015</small>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
            </ContentWrapper>
            );
    }

}

export default ForumCategories;

