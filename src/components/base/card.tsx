import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

import providerUser from '../../assets/images/provider-user.png';
import user from '../../assets/images/user.png';
import iconW from '../../assets/images/icons/1.png';

// flag icon
import flag1 from '../../assets/images/flag-icon/1.png';
import flag2 from '../../assets/images/flag-icon/2.png';
import flag3 from '../../assets/images/flag-icon/3.png';

// timezone icon
import timezone from '../../assets/images/icons/2.png';
import timezone1 from '../../assets/images/icons/3.png';

// status icon
import status from '../../assets/images/status-icon.png';

import { faStar, faWalking } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './card.scss'
import Signin from './card/signin';
import Timezone from './card/timezone';
import Profile from './card/profile';
import Others from './card/others';
import Status from './card/status';
import AvatarBox from './avatar/avatar_box';
import Buttons from './buttons/buttons';

function card() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
              <div className="card-wrap common-space p-0">
                  <h2 className="common-header">Card</h2>
                  <Row className="cards">
                      <Col sm="12">
                        <h6 className="label-dark">Sign in card</h6>
                        <h2 className="m-b-48">Card example</h2>
                      </Col>
                      <Col xl="4" lg="5" md="6">
                        <Signin
                          title="Register"
                          buttonText1="Register with email"
                          buttonText2="Register with email"
                          inputtitle="Email"
                          inputplaceholder="Email Address"
                          link="Login"
                          linktext="Already register?"
                        />
                      </Col>
                      <Col xl="4" lg="5" md="6" className="offset-xl-1 login-card">
                        <Signin
                          title="Login"
                          buttonText1="Continue"
                          buttonText2="Login with Facebook"
                          inputtitle="Email"
                          inputplaceholder="Email or mobile number"
                          link="Register"
                          linktext="Have not a member yet?"
                        />
                      </Col>
                  </Row>
              </div>
              <div className="common-space pb-0">
                <h6 className="label-dark">Provider card</h6>
                <Row>
                  <Col lg="8">
                    <Card className="provider-card card-shadow">
                      <CardBody>
                          <div className="provider-wrap">
                              <div>
                                  <div className="media">
                                      <div className="with-status">
                                        <AvatarBox 
                                          src={providerUser}
                                          class=""
                                          status="status available"
                                        />
                                      </div>
                                      <div className="media-body">
                                          <h3>Thitapa Sintuchawet</h3>
                                          <span>Therapist</span>
                                          <ul className="badge-list">
                                            <li>
                                              <AvatarBox 
                                                src={iconW}
                                                class=""
                                                status=""
                                              />
                                            </li>
                                            <li>
                                              <div className="default-marigo badge-circle">
                                                  <span>D</span>
                                              </div>
                                            </li>
                                            <li>
                                              <div className="default-blackk badge-circle">
                                                <span>SK</span>
                                              </div>
                                            </li>
                                            <li>
                                              <div className="default-primary2 badge-circle">
                                                  <span>D</span>
                                              </div>
                                            </li>
                                            <li>
                                              <div className="default-sunshade badge-circle">
                                                <span>SK</span>
                                              </div>
                                            </li>
                                            <li>
                                              <span className="tag">+9</span>
                                            </li>
                                          </ul>
                                          <div className="labels">
                                            <span className="tag">Stress</span>
                                            <span className="tag">Stress</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="provider-right">
                                  <div className="d-flex">
                                    <h3><FontAwesomeIcon icon={faStar} />4.8</h3>
                                    <small>259
                                      <br />
                                      Review
                                    </small>
                                  </div>
                                  <ul>
                                    <li>
                                      <AvatarBox 
                                        src={flag1}
                                        class=""
                                        status=""
                                      />
                                    </li>
                                    <li>
                                      <AvatarBox 
                                        src={flag2}
                                        class=""
                                        status=""
                                      />
                                    </li>
                                    <li>
                                      <AvatarBox 
                                        src={flag3}
                                        class=""
                                        status=""
                                      />
                                    </li>
                                    <li><span className="tag">+9</span></li>
                                  </ul>
                                  <div className="btn-bottom">
                                     <Buttons 
                                        outlineval=""
                                        name="Make Appointment"
                                        class=""
                                        colorval="primary"
                                        icon="" 
                                      />
                                  </div>
                              </div>
                          </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </div>
              <div className="common-space pb-0">
                 <h6 className="label-dark">Timezone card</h6>
                 <Row>
                   <Col lg="4" md="6">
                    <Timezone
                      url={timezone}
                      time="00.00 (UTC +00:00)"
                      class="default-primary"
                    />
                    <Timezone
                      url={timezone1}
                      time="00.00 (UTC +00:00)"
                      class="default-primary2"
                    />
                   </Col>
                 </Row>
              </div>
              <div className="common-space pb-0">
                 <h6 className="label-dark">Profile card</h6>
                 <Row>
                   <Col lg="5" md="6">
                     <Card className="profile-card card-shadow">
                       <CardBody>
                        <Profile
                          img_url={user} 
                          title="Thitapa Sintuchawet"
                          pin="SUPPORT PIN 43921"
                          txt="HN 1234/56"
                          edit_profile_txt="Edit Profile"
                          btn1="Profile information"
                          btn2="Health information"
                        />
                       </CardBody>
                     </Card>
                   </Col>
                 </Row>
              </div>
              <div className="common-space pb-0">
                 <h6 className="label-dark">Others card</h6>
                 <Row className="other-card">
                   <Col lg="4" md="5">
                     <Card className="appoinment-card card-shadow">
                       <CardBody>
                          <FontAwesomeIcon icon={faWalking} />
                            <Others
                              txt="Start your first treatment"
                              progress_level={false}
                              btn="Make an appoinment"
                            />
                       </CardBody>
                     </Card>
                   </Col>
                   <Col xl="3" lg="4" md="5" className="offset-md-1">
                     <Card className="appoinment-card card-shadow">
                       <CardBody>
                            <Others
                              txt="42% Profile completed"
                              progress_level={true}
                              btn="Update Profile"
                            />
                       </CardBody>
                     </Card>
                   </Col>
                 </Row>
              </div>
              <div className="common-space">
                  <h2>Status</h2>
                  <div className="status-wrapper">
                      <Row>
                          <Col xl="2" md="3" sm="4" xs="6" className="status-box">
                            <Status 
                              title="Default" 
                              img_url={status} 
                              status_level="Stress" 
                              class=""/>
                          </Col>
                      </Row>
                      <Row>
                          <Col xl="2" md="3" sm="4" xs="6" className="status-box">
                            <Status 
                              title="Active" 
                              img_url={status} 
                              status_level="Depreesion" 
                              class="active"/>
                          </Col>
                      </Row>
                      <Row>
                          <Col xl="2" md="3" sm="4" xs="6" className="status-box">
                            <Status 
                              title="Hover" 
                              img_url={status} 
                              status_level="stress" 
                              class="hover"/>
                          </Col>
                      </Row>
                      <Row>
                          <Col xl="2" md="3" sm="4" xs="6" className="status-box">
                            <Status 
                              title="Focus" 
                              img_url={status} 
                              status_level="Mood Swing" 
                              class="focus"/>
                          </Col>
                      </Row>
                      <Row>
                          <Col xl="2" md="3" sm="4" xs="6" className="status-box">
                            <Status 
                              title="Selected" 
                              img_url={status} 
                              status_level="Mood Swing" 
                              class="selected"/>
                          </Col>
                      </Row>
                      <Row>
                          <Col xl="2" md="3" sm="4" xs="6" className="status-box">
                            <Status 
                              title="Disabled" 
                              img_url={status} 
                              status_level="Depreesion" 
                              class="disabled"/>
                          </Col>
                      </Row>
                  </div>
              </div>
          </Col>
        </Row>
      </Container>
          
    </div>
  );
}

export default card;
