import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContentWrapper from '../Layout/ContentWrapper';
import { Card, Table, Nav, NavItem, NavLink, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

/**
 * A simple card component to reuse code.
 * See usage below in VoteLinks component.
 * (add more props to fully customize component)
 */
class VoteCard extends Component {
    static propTypes = {
        /** current number of votes */
        votes: PropTypes.number.isRequired,
        /** topic of entry */
        topic: PropTypes.string.isRequired,
        /** title of the entry */
        title: PropTypes.string.isRequired,
        /** post date in string format */
        posted: PropTypes.string.isRequired,
        /** name of the author */
        author: PropTypes.string.isRequired
    }
    state = { votes: this.props.votes }
    sumVote = () => this.setState({ votes: this.state.votes + 1 })
    subVote = () => this.setState({ votes: this.state.votes - 1 })
    render  = () => (
        <Card>
            <Table responsive>
                <tbody>
                    <tr>
                        <td className="b0 wd-xxs text-center">
                            <p>
                                <button type="button" className="btn btn-link" onClick={this.sumVote}>
                                    <em className="fa fa-angle-up fa-lg"></em>
                                </button>
                            </p>
                            <p>{this.state.votes}</p>
                            <p className="mb-0" >
                                <button type="button" className="btn btn-link" onClick={this.subVote}>
                                    <em className="fa fa-angle-down fa-lg"></em>
                                </button>
                            </p>
                        </td>
                        <td className="b0 wd-xs d-none d-md-table-cell">
                            <a href="#dummy">
                                <img className="img-fluid thumb64" src="img/dummy.png" alt="Dummy"/>
                            </a>
                        </td>
                        <td className="b0">
                            <p className="h4 mt-0">
                                <span className="rounded badge bg-gray-lighter px-4 mr-2 text-sm d-none d-lg-inline">
                                    <span className="text-muted">{this.props.topic}</span>
                                </span>
                                <a className="align-middle text-bold link-unstyled" href="#title">
                                    {this.props.title}
                                </a>
                            </p>
                            <div className="text-sm text-muted">
                                {this.props.children}
                                <br/>{this.props.posted}
                                <span> - </span>
                                <a className="text-bold" href="#author">{this.props.author}</a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Card>
    )
}


class VoteLinks extends Component {

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>User links
                        <small>Vestibulum pretium aliquam scelerisque.</small>
                    </div>
                </div>

                <Nav pills className="my-3">
                    <NavItem>
                        <NavLink href="#popular" active className="py-1">Popular</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#new" className="py-1">New</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#recent" className="py-1">Recent</NavLink>
                    </NavItem>
                </Nav>

                <VoteCard votes={10} posted="5 hours ago" author="harperray" topic="question" title="[Lorem Ipsum] Phasellus ullamcorper rhoncus sagittis.">
                    In ac turpis vitae ante pretium cursus. Suspendisse nisl arcu, venenatis elementum lacinia sed.
                </VoteCard>
                <VoteCard votes={20} posted="yesterday" author="harperray" topic="culture" title="Donec volutpat tristique laoreet Pellentesque sed purus libero.">
                    In ac turpis vitae ante pretium cursus. Suspendisse nisl arcu, venenatis elementum lacinia sed.
                </VoteCard>
                <VoteCard votes={27} posted="3 days ago" author="harperray" topic="peding" title="Suspendisse ullamcorper eros eget augue ultrices feugiat.">
                    In ac turpis vitae ante pretium cursus. Suspendisse nisl arcu, venenatis elementum lacinia sed.
                </VoteCard>
                <VoteCard votes={10} posted="last week" author="harperray" topic="news" title="Sed porta fermentum felis in molestie.">
                    In ac turpis vitae ante pretium cursus. Suspendisse nisl arcu, venenatis elementum lacinia sed.
                </VoteCard>
                <VoteCard votes={5}  posted="2 weeks ago" author="harperray"topic="education" title="Aenean eu odio vitae augue elementum molestie sed quis turpis.">
                    In ac turpis vitae ante pretium cursus. Suspendisse nisl arcu, venenatis elementum lacinia sed.
                </VoteCard>
                <VoteCard votes={10} posted="2 months ago" author="harperray" topic="programming" title="Sed tempor lacinia tempus. Curabitur sit amet lacus id odio volutpat faucibus nec quis enim.">
                    In ac turpis vitae ante pretium cursus. Suspendisse nisl arcu, venenatis elementum lacinia sed.
                </VoteCard>
                <VoteCard votes={-1} posted="2 months ago" author="harperray" topic="tech" title="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi in leo odio.">
                    In ac turpis vitae ante pretium cursus. Suspendisse nisl arcu, venenatis elementum lacinia sed.
                </VoteCard>
                <VoteCard votes={300} posted="5 months ago" author="harperray" topic="question" title="Quisque risus ante, laoreet a sagittis quis, dignissim luctus purus.">
                    In ac turpis vitae ante pretium cursus. Suspendisse nisl arcu, venenatis elementum lacinia sed.
                </VoteCard>

                <Pagination size="sm">
                    <PaginationItem>
                        <PaginationLink href="">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink next href="" />
                    </PaginationItem>
                </Pagination>

            </ContentWrapper>
        );
    }

}

export default VoteLinks;
