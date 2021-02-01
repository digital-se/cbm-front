import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';

import Datatable from '../Tables/Datatable';

class EcommerceProducts extends Component {

    state = {
        dtOptions: {
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
    }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">Products</div>
                <Datatable options={this.state.dtOptions}>
                    <table className="table table-striped table-hover w-100">
                        <thead>
                            <tr>
                                <th style={{width: "80px"}}>
                                    <strong>ID</strong>
                                </th>
                                <th>
                                    <strong>NAME</strong>
                                </th>
                                <th>
                                    <strong>DESCRIPTION</strong>
                                </th>
                                <th>
                                    <strong>PRICE</strong>
                                </th>
                                <th style={{width: "80px"}}>
                                    <strong>QUANTITY</strong>
                                </th>
                                <th className="text-center">
                                    <strong>STATUS</strong>
                                </th>
                                <th>
                                    <strong>ADDED</strong>
                                </th>
                                <th className="text-center">
                                    <strong>VIEW</strong>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0001</td>
                                <td>Product 1</td>
                                <td>Description for Product</td>
                                <td>$ 12.20</td>
                                <td>233</td>
                                <td className="text-center">
                                    <span className="badge badge-success">Stock</span>
                                </td>
                                <td>04/10/2015</td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-secondary">
                                        <em className="fa fa-search"></em>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>0002</td>
                                <td>Product 2</td>
                                <td>Description for Product</td>
                                <td>$ 13.20</td>
                                <td>243</td>
                                <td className="text-center">
                                    <span className="badge badge-success">Stock</span>
                                </td>
                                <td>04/10/2015</td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-secondary">
                                        <em className="fa fa-search"></em>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>0003</td>
                                <td>Product 3</td>
                                <td>Description for Product</td>
                                <td>$ 14.20</td>
                                <td>253</td>
                                <td className="text-center">
                                    <span className="badge badge-danger">Removed</span>
                                </td>
                                <td>04/10/2015</td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-secondary">
                                        <em className="fa fa-search"></em>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>0004</td>
                                <td>Product 4</td>
                                <td>Description for Product</td>
                                <td>$ 15.20</td>
                                <td>263</td>
                                <td className="text-center">
                                    <span className="badge badge-warning">Out of Stock</span>
                                </td>
                                <td>04/10/2015</td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-secondary">
                                        <em className="fa fa-search"></em>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>0005</td>
                                <td>Product 5</td>
                                <td>Description for Product</td>
                                <td>$ 16.20</td>
                                <td>273</td>
                                <td className="text-center">
                                    <span className="badge badge-danger">Removed</span>
                                </td>
                                <td>04/10/2015</td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-secondary">
                                        <em className="fa fa-search"></em>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>0006</td>
                                <td>Product 6</td>
                                <td>Description for Product</td>
                                <td>$ 17.20</td>
                                <td>283</td>
                                <td className="text-center">
                                    <span className="badge badge-success">Stock</span>
                                </td>
                                <td>04/10/2015</td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-secondary">
                                        <em className="fa fa-search"></em>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>0007</td>
                                <td>Product 7</td>
                                <td>Description for Product</td>
                                <td>$ 18.20</td>
                                <td>293</td>
                                <td className="text-center">
                                    <span className="badge badge-danger">Removed</span>
                                </td>
                                <td>04/10/2015</td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-secondary">
                                        <em className="fa fa-search"></em>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>0008</td>
                                <td>Product 8</td>
                                <td>Description for Product</td>
                                <td>$ 19.20</td>
                                <td>2103</td>
                                <td className="text-center">
                                    <span className="badge badge-warning">Out of Stock</span>
                                </td>
                                <td>04/10/2015</td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-secondary">
                                        <em className="fa fa-search"></em>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>0009</td>
                                <td>Product 9</td>
                                <td>Description for Product</td>
                                <td>$ 110.20</td>
                                <td>2113</td>
                                <td className="text-center">
                                    <span className="badge badge-danger">Removed</span>
                                </td>
                                <td>04/10/2015</td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-secondary">
                                        <em className="fa fa-search"></em>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>00010</td>
                                <td>Product 10</td>
                                <td>Description for Product</td>
                                <td>$ 111.20</td>
                                <td>2123</td>
                                <td className="text-center">
                                    <span className="badge badge-success">Stock</span>
                                </td>
                                <td>04/10/2015</td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-secondary">
                                        <em className="fa fa-search"></em>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>00011</td>
                                <td>Product 11</td>
                                <td>Description for Product</td>
                                <td>$ 112.20</td>
                                <td>2133</td>
                                <td className="text-center">
                                    <span className="badge badge-success">Stock</span>
                                </td>
                                <td>04/10/2015</td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-secondary">
                                        <em className="fa fa-search"></em>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>00012</td>
                                <td>Product 12</td>
                                <td>Description for Product</td>
                                <td>$ 113.20</td>
                                <td>2143</td>
                                <td className="text-center">
                                    <span className="badge badge-warning">Out of Stock</span>
                                </td>
                                <td>04/10/2015</td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-secondary">
                                        <em className="fa fa-search"></em>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>00013</td>
                                <td>Product 13</td>
                                <td>Description for Product</td>
                                <td>$ 114.20</td>
                                <td>2153</td>
                                <td className="text-center">
                                    <span className="badge badge-success">Stock</span>
                                </td>
                                <td>04/10/2015</td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-default">
                                        <em className="fa fa-search"></em>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>00014</td>
                                <td>Product 14</td>
                                <td>Description for Product</td>
                                <td>$ 115.20</td>
                                <td>2163</td>
                                <td className="text-center">
                                    <span className="badge badge-success">Stock</span>
                                </td>
                                <td>04/10/2015</td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-default">
                                        <em className="fa fa-search"></em>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>00015</td>
                                <td>Product 15</td>
                                <td>Description for Product</td>
                                <td>$ 116.20</td>
                                <td>2173</td>
                                <td className="text-center">
                                    <span className="badge badge-success">Stock</span>
                                </td>
                                <td>04/10/2015</td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-default">
                                        <em className="fa fa-search"></em>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Datatable>
            </ContentWrapper>
            );
    }

}

export default EcommerceProducts;
