import React from 'react';
import { Col, Container, Row, Card, CardBody } from 'reactstrap';

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import providerUser from '../../assets/images/provider-user.png';
import iconW from '../../assets/images/icons/1.png';

// flag icon
import flag1 from '../../assets/images/flag-icon/1.png';
import flag2 from '../../assets/images/flag-icon/2.png';
import flag3 from '../../assets/images/flag-icon/3.png';

import './grid.scss'
import Metric from './grid/metric';
import GridOption from './grid/grid_option';
import Buttons from './buttons/buttons';
import AvatarBox from './avatar/avatar_box';
function grid() {
  return (
    <div>
      <Container fluid={true}>
        <Row className="p-x-64 grid-wrapper">
          <Col lg="12">
              <div className="spacing-grid common-space">
                  <h2 className="common-header">Grids</h2>
                  <Row>
                      <Col>
                          <div className="spacing-equally">
                              <h6 className="label-dark">Spacing</h6>
                              <p>Layouts are visually balanced.Most measurements align to an 8dp applied,<br />
                                which aligns both spacing and the overall layout.
                              </p>
                              <p className="mb-0">Smaller components, such as icons and type, can align to 4dp grid.</p>
                              <div className="spacing-line">
                                  <ul>
                                    <li>
                                      <h4>0</h4>
                                      <div className="line"></div>
                                    </li>
                                    <li>
                                      <div className="line"></div>
                                      <h4>4</h4>
                                    </li>
                                    <li>
                                      <h4>8</h4>
                                      <div className="line"></div>
                                    </li>
                                    <li>
                                      <div className="line"></div>
                                      <h4>12</h4>
                                    </li>
                                    <li>
                                      <h4>16</h4>
                                      <div className="line"></div>
                                    </li>
                                    <li>
                                      <div className="line"></div>
                                      <h4>20</h4>
                                    </li>
                                    <li>
                                      <h4>24</h4>
                                      <div className="line"></div>
                                    </li>
                                    <li>
                                      <div className="line"></div>
                                      <h4>28</h4>
                                    </li>
                                    <li>
                                      <h4>32</h4>
                                      <div className="line"></div>
                                    </li>
                                    <li>
                                      <div className="line"></div>
                                      <h4>36</h4>
                                    </li>
                                    <li>
                                      <h4>40</h4>
                                      <div className="line"></div>
                                    </li>
                                    <li>
                                      <div className="line"></div>
                                      <h4>44</h4>
                                    </li>
                                    <li>
                                      <h4>48</h4>
                                      <div className="line"></div>
                                    </li>
                                    <li>
                                      <div className="line"></div>
                                      <h4>52</h4>
                                    </li>
                                    <li>
                                      <h4>56</h4>
                                      <div className="line"></div>
                                    </li>
                                    <li>
                                      <div className="line"></div>
                                      <h4>60</h4>
                                    </li>
                                    <li>
                                      <h4>64</h4>
                                      <div className="line"></div>
                                    </li>
                                    <li>
                                      <div className="line"></div>
                                      <h4>68</h4>
                                    </li>
                                    <li>
                                      <h4>72</h4>
                                      <div className="line"></div>
                                    </li>
                                    <li>
                                      <div className="line"></div>
                                      <h4>76</h4>
                                    </li>
                                    <li>
                                      <h4>80</h4>
                                      <div className="line"></div>
                                    </li>
                                  </ul>
                              </div>
                          </div>
                          <div className="metrics p-t-80">
                              <h6 className="label-dark">Metrics</h6>
                              <Row>
                                <Col sm="6">
                                    <Metric digit={8} />
                                    <Metric digit={16} />
                                    <Metric digit={24} />
                                    <Metric digit={32} />
                                    <Metric digit={40} />
                                    <Metric digit={48} />
                                    <Metric digit={56} />
                                    <Metric digit={64} />
                                    <Metric digit={72} />
                                </Col>
                                <Col sm="6">
                                    <Metric digit={80} />
                                    <Metric digit={88} />
                                    <Metric digit={104} />
                                    <Metric digit={112} />
                                </Col>
                              </Row>
                          </div>
                          <div className="device-space p-t-80">
                            <h6 className="label-dark">Desktop device</h6>
                            <div className="d-flex">
                              <GridOption
                                title="Desktop"
                                number_of_columns={12}
                                column_width={65}
                                gutter_width={30}
                                max_container_width={1140}
                              />
                              <GridOption
                                title="Teblet"
                                number_of_columns={4}
                                column_width={64}
                                gutter_width={30}
                                max_container_width={834}
                              />
                              <GridOption
                                title="Mobile"
                                number_of_columns={4}
                                column_width={64}
                                gutter_width={30}
                                max_container_width={375}
                              />
                            </div>
                          </div>
                          <div className="device-space p-t-80">
                              <div className="grid-option">
                                    <h3>8pt Grid style</h3>
                                    <ul>
                                      <li>
                                          <span>Device type:</span>
                                          <h4>All</h4>
                                      </li>
                                      <li>
                                          <span>Device:</span>
                                          <h4>All</h4>
                                      </li>
                                      <li>
                                          <span>Grid size:</span>
                                          <h4>Normal 8pt</h4>
                                      </li>
                                    </ul>
                              </div>
                          </div>
                      </Col>
                  </Row>
              </div>
          </Col>
          <Col lg="12">
            <div className="provider-card-width">
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
                <Card className="provider-card">
                  <CardBody>
                      <div className="provider-wrap">
                          <div className="card-shadow">
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
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default grid;
