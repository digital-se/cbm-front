import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';

import Datatable from '../Tables/Datatable';

class EcommerceOrders extends Component {

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
                <div className="content-heading">Orders</div>
                <Datatable options={this.state.dtOptions}>
                    <table className="table table-striped table-hover b0">
                        <thead>
                            <tr>
                                <th style={{width: '80px'}}>
                                    <strong>ORDER ID</strong>
                                </th>
                                <th>
                                    <strong>PURCHASED ON</strong>
                                </th>
                                <th>
                                    <strong>CLIENT NAME</strong>
                                </th>
                                <th>
                                    <strong>AMOUNT</strong>
                                </th>
                                <th>
                                    <strong>QUANTITY</strong>
                                </th>
                                <th>
                                    <strong>SHIPMENT</strong>
                                </th>
                                <th className="text-center">
                                    <strong>STATUS</strong>
                                </th>
                                <th className="text-center">
                                    <strong>VIEW</strong>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0001</td>
                                <td>03/11/2015</td>
                                <td>Addison Nichols</td>
                                <td>$ 515.20</td>
                                <td>547</td>
                                <td>04/10/2015</td>
                                <td className="text-center">
                                    <span className="badge badge-info">Standby</span>
                                </td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-secondary">
                                        <em className="fa fa-search"></em>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>0002</td>
                                <td>05/11/2015</td>
                                <td>Albert Watkins</td>
                                <td>$ 22.30</td>
                                <td>122</td>
                                <td>06/10/2015</td>
                                <td className="text-center">
                                    <span className="badge badge-success">Paid</span>
                                </td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-secondary">
                                        <em className="fa fa-search"></em>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>0003</td>
                                <td>07/09/2015</td>
                                <td>Johnny Fernandez</td>
                                <td>$ 31.4</td>
                                <td>68</td>
                                <td>28/09/2015</td>
                                <td className="text-center">
                                    <span className="badge badge-info">Standby</span>
                                </td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-secondary">
                                        <em className="fa fa-search"></em>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>00011</td>
                                <td>19/08/2015</td>
                                <td>Gilbert Edwards</td>
                                <td>$ 5115.12</td>
                                <td>51</td>
                                <td>-</td>
                                <td className="text-center">
                                    <span className="badge badge-inverse">Canceled</span>
                                </td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-secondary">
                                        <em className="fa fa-search"></em>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>00012</td>
                                <td>20/07/2015</td>
                                <td>Norman Hill</td>
                                <td>$ 5124.13</td>
                                <td>41</td>
                                <td>-</td>
                                <td className="text-center">
                                    <span className="badge badge-purple">Shipped</span>
                                </td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-secondary">
                                        <em className="fa fa-search"></em>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>00013</td>
                                <td>22/07/2015</td>
                                <td>Samantha Murphy</td>
                                <td>$ 513.214</td>
                                <td>54</td>
                                <td>-</td>
                                <td className="text-center">
                                    <span className="badge badge-inverse">Canceled</span>
                                </td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-secondary">
                                        <em className="fa fa-search"></em>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>00014</td>
                                <td>30/07/2015</td>
                                <td>Nora Lambert</td>
                                <td>$ 147.15</td>
                                <td>65</td>
                                <td>023/11/2015</td>
                                <td className="text-center">
                                    <span className="badge badge-success">Paid</span>
                                </td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-secondary">
                                        <em className="fa fa-search"></em>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>00015</td>
                                <td>29/07/2015</td>
                                <td>Shelly Robertson</td>
                                <td>$ 15.016</td>
                                <td>12</td>
                                <td>-</td>
                                <td className="text-center">
                                    <span className="badge badge-inverse">Canceled</span>
                                </td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-secondary">
                                        <em className="fa fa-search"></em>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>00016</td>
                                <td>15/12/2015</td>
                                <td>Carrie Cruz</td>
                                <td>$ 164.17</td>
                                <td>123</td>
                                <td>-</td>
                                <td className="text-center">
                                    <span className="badge badge-info">Standby</span>
                                </td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-secondary">
                                        <em className="fa fa-search"></em>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>00017</td>
                                <td>16/07/2015</td>
                                <td>Kyle Fleming</td>
                                <td>$ 174.18</td>
                                <td>1</td>
                                <td>027/03/2015</td>
                                <td className="text-center">
                                    <span className="badge badge-purple">Shipped</span>
                                </td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-secondary">
                                        <em className="fa fa-search"></em>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>00018</td>
                                <td>12/07/2015</td>
                                <td>Everett Garcia</td>
                                <td>$ 188.19</td>
                                <td>65</td>
                                <td>029/11/2015</td>
                                <td className="text-center">
                                    <span className="badge badge-success">Paid</span>
                                </td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-secondary">
                                        <em className="fa fa-search"></em>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>00019</td>
                                <td>10/07/2015</td>
                                <td>Mae Harper</td>
                                <td>$ 195.20</td>
                                <td>45</td>
                                <td>-</td>
                                <td className="text-center">
                                    <span className="badge badge-success">Paid</span>
                                </td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-secondary">
                                        <em className="fa fa-search"></em>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>0004</td>
                                <td>09/09/2015</td>
                                <td>Chloe Rodriquez</td>
                                <td>$ 4.55</td>
                                <td>21</td>
                                <td>10/10/2015</td>
                                <td className="text-center">
                                    <span className="badge badge-purple">Shipped</span>
                                </td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-secondary">
                                        <em className="fa fa-search"></em>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>0005</td>
                                <td>01/09/2015</td>
                                <td>Stanley Austin</td>
                                <td>$ 55.6</td>
                                <td>57</td>
                                <td>-</td>
                                <td className="text-center">
                                    <span className="badge badge-purple">Shipped</span>
                                </td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-secondary">
                                        <em className="fa fa-search"></em>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>0006</td>
                                <td>212/08/2015</td>
                                <td>Ethel Torres</td>
                                <td>$ 62.7</td>
                                <td>115</td>
                                <td>13/11/2015</td>
                                <td className="text-center">
                                    <span className="badge badge-success">Paid</span>
                                </td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-secondary">
                                        <em className="fa fa-search"></em>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>0007</td>
                                <td>24/08/2015</td>
                                <td>Ronnie Nelson</td>
                                <td>$ 78.8</td>
                                <td>154</td>
                                <td>-</td>
                                <td className="text-center">
                                    <span className="badge badge-danger">Rejected</span>
                                </td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-secondary">
                                        <em className="fa fa-search"></em>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>0008</td>
                                <td>25/08/2015</td>
                                <td>Stanley Olson</td>
                                <td>$ 85.9</td>
                                <td>74</td>
                                <td>-</td>
                                <td className="text-center">
                                    <span className="badge badge-info">Standby</span>
                                </td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-secondary">
                                        <em className="fa fa-search"></em>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>0009</td>
                                <td>16/08/2015</td>
                                <td>Jennie Cooper</td>
                                <td>$ 97.10</td>
                                <td>332</td>
                                <td>017/03/2015</td>
                                <td className="text-center">
                                    <span className="badge badge-purple">Shipped</span>
                                </td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-secondary">
                                        <em className="fa fa-search"></em>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>00010</td>
                                <td>18/03/2015</td>
                                <td>Fernando Morrison</td>
                                <td>$ 5108.11</td>
                                <td>123</td>
                                <td>-</td>
                                <td className="text-center">
                                    <span className="badge badge-inverse">Canceled</span>
                                </td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-secondary">
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

export default EcommerceOrders;

