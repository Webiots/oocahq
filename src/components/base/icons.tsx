import React from 'react';
import { Col, Container, Row} from 'reactstrap';

import { Home, HelpCircle, CheckCircle, AlertTriangle, Star,
Edit, Image, Bell, Upload, Download, Map, MessageSquare, Share, 
MessageCircle, CreditCard, ShoppingCart, MapPin, Calendar, User, Clock,
BarChart2, Inbox, Filter, Search, ChevronLeft, ChevronRight } from 'react-feather';

import iconW from '../../assets/images/icons/1.png';

// bold icon
import Bold1 from '../../assets/svg/Bold_Icon/1.svg';
import Bold2 from '../../assets/svg/Bold_Icon/2.svg';
import Bold3 from '../../assets/svg/Bold_Icon/3.svg';
import Bold4 from '../../assets/svg/Bold_Icon/4.svg';
import Bold5 from '../../assets/svg/Bold_Icon/5.svg';
import Bold6 from '../../assets/svg/Bold_Icon/6.svg';
import Bold7 from '../../assets/svg/Bold_Icon/7.svg';
import Bold8 from '../../assets/svg/Bold_Icon/8.svg';
import Bold9 from '../../assets/svg/Bold_Icon/9.svg';
import Bold10 from '../../assets/svg/Bold_Icon/10.svg';
import Bold11 from '../../assets/svg/Bold_Icon/11.svg';
import Bold12 from '../../assets/svg/Bold_Icon/12.svg';
import Bold13 from '../../assets/svg/Bold_Icon/13.svg';
import Bold14 from '../../assets/svg/Bold_Icon/14.svg';
import Bold15 from '../../assets/svg/Bold_Icon/15.svg';
import Bold16 from '../../assets/svg/Bold_Icon/16.svg';
import Bold17 from '../../assets/svg/Bold_Icon/17.svg';
import Bold18 from '../../assets/svg/Bold_Icon/18.svg';
import Bold19 from '../../assets/svg/Bold_Icon/19.svg';
import Bold20 from '../../assets/svg/Bold_Icon/20.svg';
import Bold21 from '../../assets/svg/Bold_Icon/21.svg';
import Bold22 from '../../assets/svg/Bold_Icon/22.svg';
import Bold23 from '../../assets/svg/Bold_Icon/23.svg';
import Bold24 from '../../assets/svg/Bold_Icon/24.svg';
import Bold25 from '../../assets/svg/Bold_Icon/25.svg';
import Bold26 from '../../assets/svg/Bold_Icon/26.svg';
import Bold27 from '../../assets/svg/Bold_Icon/27.svg';
import Bold28 from '../../assets/svg/Bold_Icon/28.svg';
import Bold29 from '../../assets/svg/Bold_Icon/29.svg';
import Bold30 from '../../assets/svg/Bold_Icon/30.svg';

// flag icons
import flag1 from '../../assets/images/flag-icon/1.png';
import flag2 from '../../assets/images/flag-icon/2.png';
import flag3 from '../../assets/images/flag-icon/3.png';
import flag4 from '../../assets/images/flag-icon/4.png';
import flag5 from '../../assets/images/flag-icon/5.png';
import flag6 from '../../assets/images/flag-icon/6.png';
import flag7 from '../../assets/images/flag-icon/7.png';
import flag8 from '../../assets/images/flag-icon/8.png';
import flag9 from '../../assets/images/flag-icon/9.png';
import flag10 from '../../assets/images/flag-icon/10.png';

import './icons.scss'

function icons() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
              <div className="common-space pt-0">
                <h2 className="common-header">Icons</h2>
                <Row className="icons-list">
                    <Col lg="6">
                        <div className="icons-wrap">
                          <h6 className="label-dark">Regular</h6>
                          <Row>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                  <Home />
                                  <h6 className="caption mb-0">Home</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                  <HelpCircle />
                                  <h6 className="caption mb-0">Explain</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                  <CheckCircle />
                                  <h6 className="caption mb-0">Checked</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                  <AlertTriangle />
                                  <h6 className="caption mb-0">Warning</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                  <Star />
                                  <h6 className="caption mb-0">Rating</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                  <Edit />
                                  <h6 className="caption mb-0">Edit</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                  <Image />
                                  <h6 className="caption mb-0">Picture</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                  <Bell />
                                  <h6 className="caption mb-0">Notification</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                  <Upload />
                                  <h6 className="caption mb-0">Upload</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                  <Download />
                                  <h6 className="caption mb-0">Save</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                  <Map />
                                  <h6 className="caption mb-0">Map</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                  <MessageSquare />
                                  <h6 className="caption mb-0">Message</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                  <Share />
                                  <h6 className="caption mb-0">Share</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                  <MessageCircle />
                                  <h6 className="caption mb-0">Talk</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                  <CreditCard />
                                  <h6 className="caption mb-0">Card</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                  <ShoppingCart />
                                  <h6 className="caption mb-0">Cart</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                  <MapPin />
                                  <h6 className="caption mb-0">Location</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                  <Calendar />
                                  <h6 className="caption mb-0">Calendar</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                  <User />
                                  <h6 className="caption mb-0">Person</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                  <Clock />
                                  <h6 className="caption mb-0">Time</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                  <BarChart2 />
                                  <h6 className="caption mb-0">Statistic</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                  <Inbox />
                                  <h6 className="caption mb-0">Box</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                  <Filter />
                                  <h6 className="caption mb-0">Filter</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                  <Search />
                                  <h6 className="caption mb-0">Search</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                  <ChevronLeft />
                                  <h6 className="caption mb-0">Previous/Back</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                  <ChevronRight />
                                  <h6 className="caption mb-0">Next</h6>
                                </div>
                              </Col>
                          </Row>
                        </div>
                    </Col>
                    <Col lg="6" className="bold-icons">
                        <div className="icons-wrap">
                          <h6 className="label-dark">Bold</h6>
                          <Row>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                    <div>
                                      <img src={Bold1} className="img-fluid" alt="" />
                                    </div>
                                  <h6 className="caption mb-0">Home</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                    <div>
                                      <img src={Bold2} className="img-fluid" alt="" />
                                    </div>
                                  <h6 className="caption mb-0">Information</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                    <div>
                                      <img src={Bold3} className="img-fluid" alt="" />
                                    </div>
                                  <h6 className="caption mb-0">Alert</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                    <div>
                                      <img src={Bold4} className="img-fluid" alt="" />
                                    </div>
                                  <h6 className="caption mb-0">Star</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                    <div>
                                      <img src={Bold5} className="img-fluid" alt="" />
                                    </div>
                                  <h6 className="caption mb-0">Reward</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                    <div>
                                      <img src={Bold6} className="img-fluid" alt="" />
                                    </div>
                                  <h6 className="caption mb-0">Password</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                    <div>
                                      <img src={Bold7} className="img-fluid" alt="" />
                                    </div>
                                  <h6 className="caption mb-0">Location</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                    <div>
                                      <img src={Bold8} className="img-fluid" alt="" />
                                    </div>
                                  <h6 className="caption mb-0">Notification</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                    <div>
                                      <img src={Bold9} className="img-fluid" alt="" />
                                    </div>
                                  <h6 className="caption mb-0">Filter</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                    <div>
                                      <img src={Bold10} className="img-fluid" alt="" />
                                    </div>
                                  <h6 className="caption mb-0">Account</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                    <div>
                                      <img src={Bold11} className="img-fluid" alt="" />
                                    </div>
                                  <h6 className="caption mb-0">My <br/>Appointment</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                    <div>
                                      <img src={Bold12} className="img-fluid" alt="" />
                                    </div>
                                  <h6 className="caption mb-0">Add</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                    <div>
                                      <img src={Bold13} className="img-fluid" alt="" />
                                    </div>
                                  <h6 className="caption mb-0">Share</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                    <div>
                                      <img src={Bold14} className="img-fluid" alt="" />
                                    </div>
                                  <h6 className="caption mb-0">Message</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                    <div>
                                      <img src={Bold15} className="img-fluid" alt="" />
                                    </div>
                                  <h6 className="caption mb-0">Card</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                    <div>
                                      <img src={Bold16} className="img-fluid" alt="" />
                                    </div>
                                  <h6 className="caption mb-0">Video Call</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                    <div>
                                      <img src={Bold17} className="img-fluid" alt="" />
                                    </div>
                                  <h6 className="caption mb-0">Apple<br />Account</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                    <div>
                                      <img src={Bold18} className="img-fluid" alt="" />
                                    </div>
                                  <h6 className="caption mb-0">Line<br />Account</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                    <div>
                                      <img src={Bold19} className="img-fluid" alt="" />
                                    </div>
                                  <h6 className="caption mb-0">Facebook<br />Account</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                    <div>
                                      <img src={Bold20} className="img-fluid" alt="" />
                                    </div>
                                  <h6 className="caption mb-0">Twitter<br />Account</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                    <div>
                                      <img src={Bold21} className="img-fluid" alt="" />
                                    </div>
                                  <h6 className="caption mb-0">Logout</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                    <div>
                                      <img src={Bold22} className="img-fluid" alt="" />
                                    </div>
                                  <h6 className="caption mb-0">Choose<br />Picture</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                    <div>
                                      <img src={Bold30} className="img-fluid" alt="" />
                                    </div>
                                  <h6 className="caption mb-0">Menu</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                    <div>
                                      <img src={Bold23} className="img-fluid" alt="" />
                                    </div>
                                  <h6 className="caption mb-0">Favorite</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                    <div>
                                      <img src={Bold24} className="img-fluid" alt="" />
                                    </div>
                                  <h6 className="caption mb-0">Walkin</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                    <div>
                                      <img src={Bold25} className="img-fluid" alt="" />
                                    </div>
                                  <h6 className="caption mb-0">Email</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                    <div>
                                      <img src={Bold26} className="img-fluid" alt="" />
                                    </div>
                                  <h6 className="caption mb-0">Make an<br />Appointment</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                    <div>
                                      <img src={Bold27} className="img-fluid" alt="" />
                                    </div>
                                  <h6 className="caption mb-0">Medicine</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                    <div>
                                      <img src={Bold28} className="img-fluid" alt="" />
                                    </div>
                                  <h6 className="caption mb-0">Setting</h6>
                                </div>
                              </Col>
                              <Col sm="2" xs="4">
                                <div className="text-center">
                                    <div>
                                      <img src={Bold29} className="img-fluid" alt="" />
                                    </div>
                                  <h6 className="caption mb-0">Customer <br />Service</h6>
                                </div>
                              </Col>
                          </Row>
                        </div>
                    </Col>
                    <Col lg="6">
                      <div className="flag-icons">
                        <h6 className="label-dark">Flags icon</h6>
                        <Row>
                          <Col xs="6">
                            <div className="flag-box">
                             <div>
                                <img src={flag1} className="img-fluid" alt=""/>
                             </div>
                              <h6 className="caption mb-0">England</h6>
                            </div>
                            <div className="flag-box">
                             <div>
                                <img src={flag2} className="img-fluid" alt=""/>
                             </div>
                              <h6 className="caption mb-0">China</h6>
                            </div>
                            <div className="flag-box">
                             <div>
                                <img src={flag3} className="img-fluid" alt=""/>
                             </div>
                              <h6 className="caption mb-0">Thailand</h6>
                            </div>
                            <div className="flag-box">
                             <div>
                                <img src={flag4} className="img-fluid" alt=""/>
                             </div>
                              <h6 className="caption mb-0">South Korean</h6>
                            </div>
                            <div className="flag-box">
                             <div>
                                <img src={flag5} className="img-fluid" alt=""/>
                             </div>
                              <h6 className="caption mb-0">Singapore</h6>
                            </div>
                            <div className="flag-box">
                             <div>
                                <img src={flag6} className="img-fluid" alt=""/>
                             </div>
                              <h6 className="caption mb-0">Hongkong</h6>
                            </div>
                          </Col>
                          <Col xs="6">
                            <div className="flag-box">
                              <div>
                                  <img src={flag7} className="img-fluid" alt=""/>
                              </div>
                                <h6 className="caption mb-0">Indonesia</h6>
                              </div>
                              <div className="flag-box">
                              <div>
                                  <img src={flag8} className="img-fluid" alt=""/>
                              </div>
                                <h6 className="caption mb-0">Malaysia</h6>
                              </div>
                              <div className="flag-box">
                              <div>
                                  <img src={flag9} className="img-fluid" alt=""/>
                              </div>
                                <h6 className="caption mb-0">Philippine</h6>
                              </div>
                              <div className="flag-box">
                              <div>
                                  <img src={flag10} className="img-fluid" alt=""/>
                              </div>
                                <h6 className="caption mb-0">Taiwan</h6>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="flag-icons">
                        <h6 className="label-dark">Badge icon</h6>
                        <Row>
                          <Col xs="6">
                            <div className="flag-box">
                             <div>
                                <img src={iconW} className="img-fluid" alt=""/>
                             </div>
                              <h6 className="caption mb-0">Wall of sharing</h6>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                </Row>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default icons;
