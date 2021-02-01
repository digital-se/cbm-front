import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { ListGroup, ListGroupItem } from 'reactstrap';
// Sortable
import sortable from 'html5sortable/dist/html5sortable.es.js';

class Sortable extends Component {

    componentDidMount() {
        sortable('.sortable', {
            forcePlaceholderSize: true,
            placeholder: '<div class="box-placeholder p0 m0"><div></div></div>'
        });
    }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>Sortable
                        <small>Lightweight jQuery plugin to create sortable lists and grids using native HTML5 drag and drop API.</small>
                    </div>
                </div>
                <ListGroup className="sortable">
                    <ListGroupItem>
                        <em className="fas fa-bars fa-fw text-muted mr-lg"></em>Donald Hoffman
                    </ListGroupItem>
                    <ListGroupItem>
                        <em className="fas fa-bars fa-fw text-muted mr-lg"></em>Wallace Barrett
                    </ListGroupItem>
                    <ListGroupItem>
                        <em className="fas fa-bars fa-fw text-muted mr-lg"></em>Marsha Hicks
                    </ListGroupItem>
                    <ListGroupItem>
                        <em className="fas fa-bars fa-fw text-muted mr-lg"></em>Roland Brown
                    </ListGroupItem>
                </ListGroup>
            </ContentWrapper>
            );
    }

}

export default Sortable;