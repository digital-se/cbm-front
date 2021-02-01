import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Container, Progress } from 'reactstrap';
import ReactDataGrid from 'react-data-grid';

// Custom Formatter component
const PercentCompleteFormatter = props => (
    <Progress color={props.value < 30 ? 'danger' : props.value < 60 ? 'warning' : 'success'}
        value={props.value}> {props.value}%
    </Progress>
)

const AssignedImageFormatter = props => (
    <div className="text-center py-2">
        <img src={props.value} className="img-fluid thumb32" alt="avatar"/>
    </div>
)

class DataGrid extends Component {
    constructor(props, context) {
        super(props, context);

        this._columns = [
            {
                key: 'id',
                name: 'ID',
                width: 80
            },
            {
                key: 'task',
                name: 'Title',
                sortable: true
            },
            {
                key: 'assigned',
                name: 'Assigned',
                width: 70,
                formatter: AssignedImageFormatter
            },
            {
                key: 'priority',
                name: 'Priority',
                sortable: true
            },
            {
                key: 'issueType',
                name: 'Issue Type',
                sortable: true
            },
            {
                key: 'complete',
                name: '% Complete',
                formatter: PercentCompleteFormatter,
                sortable: true
            },
            {
                key: 'startDate',
                name: 'Start Date',
                sortable: true
            },
            {
                key: 'completeDate',
                name: 'Expected Complete',
                sortable: true
            }
        ];

        let originalRows = this.createRows(1000);
        let rows = originalRows.slice(0);
        this.state = { originalRows, rows };
    }

    getRandomDate = (start, end) => {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
    };

    createRows = () => {
        let rows = [];
        for (let i = 1; i < 100; i++) {
            rows.push({
                id: i,
                task: 'Task ' + i,
                assigned: `img/user/0${(Math.floor(Math.random()*8) + 1)}.jpg`,
                complete: Math.min(100, Math.round(Math.random() * 110)),
                priority: ['Critical', 'High', 'Medium', 'Low'][Math.floor((Math.random() * 3) + 1)],
                issueType: ['Bug', 'Improvement', 'Epic', 'Story'][Math.floor((Math.random() * 3) + 1)],
                startDate: this.getRandomDate(new Date(2018, 3, 1), new Date()),
                completeDate: this.getRandomDate(new Date(), new Date(2021, 0, 1))
            });
        }

        return rows;
    };

    rowGetter = (i) => this.state.rows[i]

    handleGridSort = (sortColumn, sortDirection) => {
        const comparer = (a, b) => {
          if (sortDirection === 'ASC') {
            return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
          } else if (sortDirection === 'DESC') {
            return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
          }
        };

        const rows = sortDirection === 'NONE' ? this.state.originalRows.slice(0) : this.state.rows.sort(comparer);

        this.setState({ rows });
    };

    render() {
        return  (
            <ContentWrapper>
                <div className="content-heading">
                    <div>React Data Grid
                        <small>Excel-like grid component built with React</small>
                    </div>
                </div>
                <Container fluid>
                    <ReactDataGrid
                        onGridSort={this.handleGridSort}
                        columns={this._columns}
                        rowGetter={this.rowGetter}
                        rowsCount={this.state.rows.length}
                        minHeight={700} />
                </Container>
            </ContentWrapper>
        )
    }
}

export default DataGrid;