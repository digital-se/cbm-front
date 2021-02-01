import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Card, CardBody, CardHeader } from 'reactstrap';

import Datatable from '../Tables/Datatable';

const dtOptions = {
    'paging': true, // Table pagination
    'ordering': true, // Column ordering
    'info': true, // Bottom left status text
    responsive: true,
    // Text translation options
    // Note the required keywords between underscores (e.g _MENU_)
    oLanguage: {
        sSearch: '<em class="fa fa-search"></em>',
        sLengthMenu: '_MENU_ records per page',
        info: 'Showing page _PAGE_ of _PAGES_',
        zeroRecords: 'Nothing found - sorry',
        infoEmpty: 'No records available',
        infoFiltered: '(filtered from _MAX_ total records)',
        oPaginate: {
            sNext: '<em class="fa fa-caret-right"></em>',
            sPrevious: '<em class="fa fa-caret-left"></em>'
        }
    }
}

const BlogArticles = () => (
    <ContentWrapper>
        <div className="content-heading">Articles</div>
        <Card className="card-default">
            <CardHeader>Blog articles manager</CardHeader>
            <CardBody>
                <Datatable options={dtOptions}>
                    <table className="table table-striped my-4 w-100">
                        <thead>
                            <tr>
                                <th data-priority="1">Post title</th>
                                <th>Author</th>
                                <th>Categories</th>
                                <th>Tags</th>
                                <th>Created</th>
                                <th>Updated</th>
                                <th>Comments</th>
                                <th data-priority="2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <a href="">AngularJS</a>
                                </td>
                                <td>
                                    <a href="">Keith Gutierrez</a>
                                </td>
                                <td>
                                    <a className="mr-2" href="">HTML5</a>
                                    <a href="">JAVASCRIPT</a>
                                </td>
                                <td>
                                    <a className="mr-1 badge badge-primary" href="">angularjs</a>
                                    <a className="mr-1 badge badge-primary" href="">mvc</a>
                                </td>
                                <td>10/05/2015</td>
                                <td>10/05/2015</td>
                                <td>1251</td>
                                <td>
                                    <a className="mr-1 badge badge-success" href="">Public</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="">MeteorJs and Angularjs</a>
                                </td>
                                <td>
                                    <a href="">Carlos Wilson</a>
                                </td>
                                <td>
                                    <a className="mr-2" href="">WEB</a>
                                    <a href="">JAVASCRIPT</a>
                                </td>
                                <td>
                                    <a className="mr-1 badge badge-primary" href="">angularjs</a>
                                    <a className="mr-1 badge badge-primary" href="">node</a>
                                    <a className="mr-1 badge badge-primary" href="">meteor</a>
                                </td>
                                <td>10/05/2015</td>
                                <td>10/05/2015</td>
                                <td>1361</td>
                                <td>
                                    <a className="mr-1 badge badge-warning" href="">Pending</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="">Working with ExpressJS</a>
                                </td>
                                <td>
                                    <a href="">Carlos Wilson</a>
                                </td>
                                <td>
                                    <a className="mr-2" href="">SERVER</a>
                                    <a href="">JAVASCRIPT</a>
                                </td>
                                <td>
                                    <a className="mr-1 badge badge-primary" href="">expressJS</a>
                                    <a className="mr-1 badge badge-primary" href="">node</a>
                                </td>
                                <td>10/05/2015</td>
                                <td>10/05/2015</td>
                                <td>125</td>
                                <td>
                                    <a className="mr-1 badge badge-success" href="">Public</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="">Abstract object styles</a>
                                </td>
                                <td>
                                    <a href="">Carlos Wilson</a>
                                </td>
                                <td>
                                    <a href="">JAVASCRIPT</a>
                                </td>
                                <td>
                                    <a className="mr-1 badge badge-primary" href="">coding</a>
                                    <a className="mr-1 badge badge-primary" href="">node</a>
                                </td>
                                <td>10/05/2015</td>
                                <td>10/05/2015</td>
                                <td>125</td>
                                <td>
                                    <a className="mr-1 badge badge-success" href="">Public</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="">Animating progress bars</a>
                                </td>
                                <td>
                                    <a href="">Clyde Bailey</a>
                                </td>
                                <td>
                                    <a className="mr-2" href="">BOOTSTRAP</a>
                                    <a href="">WEB</a>
                                </td>
                                <td>
                                    <a className="mr-1 badge badge-primary" href="">coding</a>
                                    <a className="mr-1 badge badge-primary" href="">css</a>
                                </td>
                                <td>10/05/2015</td>
                                <td>10/05/2015</td>
                                <td>125</td>
                                <td>
                                    <a className="mr-1 badge badge-danger" href="">Deleted</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="">Contextual alternatives</a>
                                </td>
                                <td>
                                    <a href="">Tracy Black</a>
                                </td>
                                <td>
                                    <a className="mr-2" href="">BOOTSTRAP</a>
                                    <a href="">WEB</a>
                                </td>
                                <td>
                                    <a className="mr-1 badge badge-primary" href="">coding</a>
                                    <a className="mr-1 badge badge-primary" href="">less</a>
                                    <a className="mr-1 badge badge-primary" href="">sass</a>
                                </td>
                                <td>10/05/2015</td>
                                <td>10/05/2015</td>
                                <td>125</td>
                                <td>
                                    <a className="mr-1 badge badge-warning" href="">Pending</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="">Responsive embed</a>
                                </td>
                                <td>
                                    <a href="">Brittany Harrison</a>
                                </td>
                                <td>
                                    <a className="mr-2" href="">FOUNDATION</a>
                                    <a href="">WEB</a>
                                </td>
                                <td>
                                    <a className="mr-1 badge badge-primary" href="">coding</a>
                                    <a className="mr-1 badge badge-primary" href="">techniques</a>
                                </td>
                                <td>10/05/2015</td>
                                <td>10/05/2015</td>
                                <td>125</td>
                                <td>
                                    <a className="mr-1 badge" href="">Draft</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="">Digging into AngularJS</a>
                                </td>
                                <td>
                                    <a href="">Keith Gutierrez</a>
                                </td>
                                <td>
                                    <a className="mr-2" href="">HTML5</a>
                                    <a href="">JAVASCRIPT</a>
                                </td>
                                <td>
                                    <a className="mr-1 badge badge-primary" href="">angularjs</a>
                                    <a className="mr-1 badge badge-primary" href="">mvc</a>
                                </td>
                                <td>10/05/2015</td>
                                <td>10/05/2015</td>
                                <td>125</td>
                                <td>
                                    <a className="mr-1 badge badge-success" href="">Public</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="">Application with MeteorJs and Angularjs</a>
                                </td>
                                <td>
                                    <a href="">Nevaeh Hunter</a>
                                </td>
                                <td>
                                    <a className="mr-2" href="">WEB</a>
                                    <a href="">SERVER</a>
                                </td>
                                <td>
                                    <a className="mr-1 badge badge-primary" href="">angularjs</a>
                                    <a className="mr-1 badge badge-primary" href="">node</a>
                                    <a className="mr-1 badge badge-primary" href="">meteor</a>
                                </td>
                                <td>10/05/2015</td>
                                <td>10/05/2015</td>
                                <td>125</td>
                                <td>
                                    <a className="mr-1 badge badge-warning" href="">Pending</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="">Introduction to ExpressJS</a>
                                </td>
                                <td>
                                    <a href="">Carlos Wilson</a>
                                </td>
                                <td>
                                    <a className="mr-2" href="">SERVER</a>
                                    <a href="">JAVASCRIPT</a>
                                </td>
                                <td>
                                    <a className="mr-1 badge badge-primary" href="">expressJS</a>
                                    <a className="mr-1 badge badge-primary" href="">node</a>
                                </td>
                                <td>10/05/2015</td>
                                <td>10/05/2015</td>
                                <td>125</td>
                                <td>
                                    <a className="mr-1 badge badge-success" href="">Public</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="">Optional classes</a>
                                </td>
                                <td>
                                    <a href="">Peter Lucas</a>
                                </td>
                                <td>
                                    <a href="">WEB</a>
                                </td>
                                <td>
                                    <a className="mr-1 badge badge-primary" href="">coding</a>
                                    <a className="mr-1 badge badge-primary" href="">node</a>
                                </td>
                                <td>10/05/2015</td>
                                <td>10/05/2015</td>
                                <td>125</td>
                                <td>
                                    <a className="mr-1 badge badge-success" href="">Public</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="">Typical user actions</a>
                                </td>
                                <td>
                                    <a href="">Clyde Bailey</a>
                                </td>
                                <td>
                                    <a className="mr-2" href="">BOOTSTRAP</a>
                                    <a href="">WEB</a>
                                </td>
                                <td>
                                    <a className="mr-1 badge badge-primary" href="">coding</a>
                                    <a className="mr-1 badge badge-primary" href="">css</a>
                                </td>
                                <td>10/05/2015</td>
                                <td>10/05/2015</td>
                                <td>1471</td>
                                <td>
                                    <a className="mr-1 badge badge-danger" href="">Deleted</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="">A lightweight, flexible component</a>
                                </td>
                                <td>
                                    <a href="">Brittany Harrison</a>
                                </td>
                                <td>
                                    <a className="mr-2" href="">BOOTSTRAP</a>
                                    <a href="">WEB</a>
                                </td>
                                <td>
                                    <a className="mr-1 badge badge-primary" href="">coding</a>
                                    <a className="mr-1 badge badge-primary" href="">less</a>
                                    <a className="mr-1 badge badge-primary" href="">sass</a>
                                </td>
                                <td>10/05/2015</td>
                                <td>10/05/2015</td>
                                <td>1581</td>
                                <td>
                                    <a className="mr-1 badge badge-warning" href="">Pending</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="">Highlight new or unread items</a>
                                </td>
                                <td>
                                    <a href="">Abigail Phillips</a>
                                </td>
                                <td>
                                    <a className="mr-2" href="">FOUNDATION</a>
                                    <a href="">WEB</a>
                                </td>
                                <td>
                                    <a className="mr-1 badge badge-primary" href="">coding</a>
                                    <a className="mr-1 badge badge-primary" href="">techniques</a>
                                </td>
                                <td>10/05/2015</td>
                                <td>10/05/2015</td>
                                <td>1691</td>
                                <td>
                                    <a className="mr-1 badge" href="">Draft</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Datatable>
            </CardBody>
        </Card>
    </ContentWrapper>
);

export default BlogArticles;
