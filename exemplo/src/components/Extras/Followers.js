import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

const FollowerCard = props => (
    <Card className="b text-center">
        {props.user ? (
            <CardBody>
                <p className="h4 text-bold mb-0">This is you</p>
            </CardBody>
            ) : null
        }
        <CardBody>
            <img className="rounded-circle thumb64 mb-2" src={props.imgsrc} alt="User"/>
            <p className="h4 text-bold mb-0">{props.name}</p>
            <p>{props.location}</p>
            {props.user ?
                (<p>Joined on {props.joined}</p>)
                :
                props.following ?
                    (<button className="btn btn-info btn-oval" type="button">Following</button>)
                    :
                    (<button className="btn btn-success btn-oval" type="button">Follow</button>)
            }
        </CardBody>
        <CardBody className="bt">
            <Row>
                <Col col="4" className="br">
                    <em className="fab fa-facebook-f fa-fw text-primary"></em>
                    <strong>+700</strong>
                </Col>
                <Col col="4" className="br">
                    <em className="fab fa-twitter fa-fw text-info"></em>
                    <strong>+300</strong>
                </Col>
                <Col xs="4">
                    <em className="fa fa-heart fa-fw text-danger"></em>
                    <strong>+150</strong>
                </Col>
            </Row>
        </CardBody>
    </Card>
)

class Followers extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">Followers</div>
                <Row>
                    {/* Aside card */}
                    <Col xl="3" lg="4">

                        <FollowerCard user name="Todd Evans" location="Rome, Italy" imgsrc="img/user/02.jpg" joined="Feb, 2015"/>

                        <Card className="b">
                            <CardHeader><h5>Who may interest you</h5></CardHeader>
                            <CardBody>
                                <div className="media align-items-center">
                                    <a className="mr-2" href="">
                                        <img className="rounded-circle img-thumbnail thumb48" src="img/user/04.jpg" alt="Contact"/>
                                    </a>
                                    <div className="media-body pt-1">
                                        <div className="float-right">
                                            <button className="btn btn-secondary btn-sm" type="button">Follow</button>
                                        </div>
                                        <div className="text-bold">Floyd Ortiz
                                            <div className="text-sm text-muted">125k followers</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media align-items-center">
                                    <a className="mr-2" href="">
                                        <img className="rounded-circle img-thumbnail thumb48" src="img/user/05.jpg" alt="Contact"/>
                                    </a>
                                    <div className="media-body pt-1">
                                        <div className="float-right">
                                            <button className="btn btn-secondary btn-sm" type="button">Follow</button>
                                        </div>
                                        <div className="text-bold">Luis Vasquez
                                            <div className="text-sm text-muted">+30k followers</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media align-items-center">
                                    <a className="mr-2" href="">
                                        <img className="rounded-circle img-thumbnail thumb48" src="img/user/06.jpg" alt="Contact"/>
                                    </a>
                                    <div className="media-body pt-1">
                                        <div className="float-right">
                                            <button className="btn btn-secondary btn-sm" type="button">Follow</button>
                                        </div>
                                        <div className="text-bold">Duane Mckinney
                                            <div className="text-sm text-muted">+100k followers</div>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                            <CardBody>
                                <a className="link-unstyled text-muted" href="">Find more friends</a>
                            </CardBody>
                        </Card>
                        <div className="text-sm text-muted mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </Col>
                    {/* end Aside card */}
                    {/* Main cards */}
                    <Col xl="9" lg="8">
                        <Row>
                            <Col xl="4" lg="6">
                                <FollowerCard name="Savannah Ramirez" location="Rome, Italy" imgsrc="img/user/01.jpg"/>
                            </Col>
                            <Col xl="4" lg="6">
                                <FollowerCard name="Warren Watts" location="Rome, Italy" imgsrc="img/user/03.jpg" following/>
                            </Col>
                            <Col xl="4" lg="6">
                                <FollowerCard name="Charlie Price" location="Rome, Italy" imgsrc="img/user/04.jpg"/>
                            </Col>
                            <Col xl="4" lg="6">
                                <FollowerCard name="Vickie Alvarez" location="Rome, Italy" imgsrc="img/user/05.jpg"/>
                            </Col>
                            <Col xl="4" lg="6">
                                <FollowerCard name="Marjorie Miller" location="Rome, Italy" imgsrc="img/user/06.jpg" following/>
                            </Col>
                            <Col xl="4" lg="6">
                                <FollowerCard name="Tracy Reynolds" location="Rome, Italy" imgsrc="img/user/07.jpg"/>
                            </Col>
                            <Col xl="4" lg="6">
                                <FollowerCard name="Lori Lewis" location="Rome, Italy" imgsrc="img/user/08.jpg"/>
                            </Col>
                            <Col xl="4" lg="6">
                                <FollowerCard name="Judy Shelton" location="Rome, Italy" imgsrc="img/user/09.jpg"/>
                            </Col>
                        </Row>
                    </Col>
                    {/* end Main cards */}
                </Row>
            </ContentWrapper>
            );
    }

}

export default Followers;
