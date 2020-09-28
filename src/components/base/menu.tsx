import React, { useState } from 'react';
import { Col, Container, Row, Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { faBell, faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from '../../assets/images/logo.png';
import user from '../../assets/images/user.png';

import flag1 from '../../assets/images/flag-icon/1.png';
import flag2 from '../../assets/images/flag-icon/2.png';
import flag3 from '../../assets/images/flag-icon/3.png';
import flag4 from '../../assets/images/flag-icon/4.png';
import flag7 from '../../assets/images/flag-icon/7.png';
import flag8 from '../../assets/images/flag-icon/8.png';

import './menu.scss'

function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [dropdownOpenbasic, setDropdownOpen] = useState(false);

  const toggledropdown = () => setDropdownOpen(prevState => !prevState);

  // menubar collapse
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggle1 = () => setIsOpen1(!isOpen1);
  const toggle2 = () => setIsOpen2(!isOpen2);
  const toggle3 = () => setIsOpen3(!isOpen3);
  
  // dropdown
  const [dropdownOpenbasic1, setDropdownOpen1] = useState(false);
  const [dropdownOpenbasic2, setDropdownOpen2] = useState(false);
  const [dropdownOpenbasic3, setDropdownOpen3] = useState(false);

  const toggledropdown1 = () => setDropdownOpen1(prevState1 => !prevState1);
  const toggledropdown2 = () => setDropdownOpen2(prevState2 => !prevState2);
  const toggledropdown3 = () => setDropdownOpen3(prevState3 => !prevState3);
  

  return (
    <div>
      <Container>
        <Row>
          <Col>
              <div className="common-space">
                <h2 className="common-header">Navigation</h2>
                <h6 className="label-dark">Menu bar</h6>
                <Navbar color="primary" dark expand="lg">
                    <NavbarToggler onClick={toggle}>
                        <FontAwesomeIcon icon={faBars} />
                    </NavbarToggler>
                  <NavbarBrand href="/">
                    <img src={logo} className="img-fluid" alt=""/>
                  </NavbarBrand>
                  <div className="notification-icon">
                        <a href="javascript">
                            <FontAwesomeIcon icon={faBell} />
                            <span className="notification-status"></span>
                        </a>
                  </div>
                  <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                      <NavItem active>
                        <NavLink href="/">Home</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/">My appointment</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/">My wallet</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/">stress test</NavLink>
                      </NavItem>
                    </Nav>
                    <ul className="navbar-right">
                      <li className="user-media">
                        <div className="media">
                            <img src={user} className="img-fluid metric-32 b-r-100" alt=""/>
                            <div className="media-body d-lg-none d-block">
                                <span>Thitapa Sin</span>
                            </div>
                            <span>0.00 THB</span>
                        </div>
                      </li>
                      <li className="language-dropdown">
                        <div className="media">
                          <div className="media-body d-lg-none d-block">
                            <span>Language Settings</span>
                          </div>
                          <Dropdown isOpen={dropdownOpenbasic} toggle={toggledropdown}>
                            <DropdownToggle>
                              <img src={flag1} className="img-fluid" alt=""/>
                                <FontAwesomeIcon icon={faChevronDown} />
                              </DropdownToggle>
                            <DropdownMenu className="menudropdown-shadow">
                            <DropdownItem>
                              <img src={flag1} className="img-fluid" alt=""/>
                              <span>English</span>
                            </DropdownItem>
                            <DropdownItem>
                              <img src={flag3} className="img-fluid" alt=""/>
                              <span>Thai</span>
                            </DropdownItem>
                            <DropdownItem>
                              <img src={flag2} className="img-fluid" alt=""/>
                              <span>Chinese</span>
                            </DropdownItem>
                            <DropdownItem>
                              <img src={flag8} className="img-fluid" alt=""/>
                              <span>Malaysian</span>
                            </DropdownItem>
                            <DropdownItem>
                              <img src={flag7} className="img-fluid" alt=""/>
                              <span>Indonesian</span>
                            </DropdownItem>
                            <DropdownItem>
                              <img src={flag4} className="img-fluid" alt=""/>
                              <span>Korean</span>
                            </DropdownItem>
                          </DropdownMenu>
                          </Dropdown>
                        </div>
                      </li>
                      <li className="d-lg-none d-block">
                        <a href="javascript">
                          Account Settings
                        </a>
                      </li>
                      <li className="d-lg-none d-block">
                        <a href="javascript">
                          Sign Out
                        </a>
                      </li>
                    </ul>
                  </Collapse>
                </Navbar>
                <Navbar color="primary" dark expand="lg" className="m-t-16">
                  <NavbarToggler onClick={toggle1}>
                        <FontAwesomeIcon icon={faBars} />
                    </NavbarToggler>
                  <NavbarBrand href="/">
                    <img src={logo} className="img-fluid" alt=""/>
                  </NavbarBrand>
                  <div className="notification-icon">
                        <a href="javascript">
                            <FontAwesomeIcon icon={faBell} />
                            <span className="notification-status"></span>
                        </a>
                  </div>
                  <Collapse isOpen={isOpen1} navbar>
                    <Nav className="mr-auto" navbar>
                      <NavItem>
                        <NavLink href="/">Home</NavLink>
                      </NavItem>
                      <NavItem active>
                        <NavLink href="/">My appointment</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/">My wallet</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/">stress test</NavLink>
                      </NavItem>
                    </Nav>
                    <ul className="navbar-right">
                      <li className="user-media">
                        <div className="media">
                            <img src={user} className="img-fluid metric-32 b-r-100" alt=""/>
                            <div className="media-body d-lg-none d-block">
                                <span>Thitapa Sin</span>
                            </div>
                            <span>0.00 THB</span>
                        </div>
                      </li>
                      <li className="language-dropdown">
                        <div className="media">
                          <div className="media-body d-lg-none d-block">
                            <span>Language Settings</span>
                          </div>
                          <Dropdown isOpen={dropdownOpenbasic1} toggle={toggledropdown1}>
                            <DropdownToggle>
                                <img src={flag1} className="img-fluid" alt=""/>
                                <FontAwesomeIcon icon={faChevronDown} />
                              </DropdownToggle>
                              <DropdownMenu className="menudropdown-shadow">
                            <DropdownItem>
                              <img src={flag1} className="img-fluid" alt=""/>
                              <span>English</span>
                            </DropdownItem>
                            <DropdownItem>
                              <img src={flag3} className="img-fluid" alt=""/>
                              <span>Thai</span>
                            </DropdownItem>
                            <DropdownItem>
                              <img src={flag2} className="img-fluid" alt=""/>
                              <span>Chinese</span>
                            </DropdownItem>
                            <DropdownItem>
                              <img src={flag8} className="img-fluid" alt=""/>
                              <span>Malaysian</span>
                            </DropdownItem>
                            <DropdownItem>
                              <img src={flag7} className="img-fluid" alt=""/>
                              <span>Indonesian</span>
                            </DropdownItem>
                            <DropdownItem>
                              <img src={flag4} className="img-fluid" alt=""/>
                              <span>Korean</span>
                            </DropdownItem>
                          </DropdownMenu>
                          </Dropdown>
                        </div>
                      </li>
                      <li className="d-lg-none d-block">
                        <a href="javascript">
                          Account Settings
                        </a>
                      </li>
                      <li className="d-lg-none d-block">
                        <a href="javascript">
                          Sign Out
                        </a>
                      </li>
                    </ul>
                  </Collapse>
                </Navbar>
                <Navbar color="primary" dark expand="lg" className="m-t-16">
                  <NavbarToggler onClick={toggle2}>
                        <FontAwesomeIcon icon={faBars} />
                    </NavbarToggler>
                  <NavbarBrand href="/">
                    <img src={logo} className="img-fluid" alt=""/>
                  </NavbarBrand>
                  <div className="notification-icon">
                        <a href="javascript">
                            <FontAwesomeIcon icon={faBell} />
                            <span className="notification-status"></span>
                        </a>
                  </div>
                  <Collapse isOpen={isOpen2} navbar>
                    <Nav className="mr-auto" navbar>
                      <NavItem>
                        <NavLink href="/">Home</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/">My appointment</NavLink>
                      </NavItem>
                      <NavItem active>
                        <NavLink href="/">My wallet</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/">stress test</NavLink>
                      </NavItem>
                    </Nav>
                    <ul className="navbar-right">
                      <li className="user-media">
                        <div className="media">
                            <img src={user} className="img-fluid metric-32 b-r-100" alt=""/>
                            <div className="media-body d-lg-none d-block">
                                <span>Thitapa Sin</span>
                            </div>
                            <span>0.00 THB</span>
                        </div>
                      </li>
                      <li className="language-dropdown">
                        <div className="media">
                          <div className="media-body d-lg-none d-block">
                            <span>Language Settings</span>
                          </div>
                          <Dropdown isOpen={dropdownOpenbasic2} toggle={toggledropdown2}>
                            <DropdownToggle>
                                <img src={flag1} className="img-fluid" alt=""/>
                                <FontAwesomeIcon icon={faChevronDown} />
                              </DropdownToggle>
                              <DropdownMenu className="menudropdown-shadow">
                            <DropdownItem>
                              <img src={flag1} className="img-fluid" alt=""/>
                              <span>English</span>
                            </DropdownItem>
                            <DropdownItem>
                              <img src={flag3} className="img-fluid" alt=""/>
                              <span>Thai</span>
                            </DropdownItem>
                            <DropdownItem>
                              <img src={flag2} className="img-fluid" alt=""/>
                              <span>Chinese</span>
                            </DropdownItem>
                            <DropdownItem>
                              <img src={flag8} className="img-fluid" alt=""/>
                              <span>Malaysian</span>
                            </DropdownItem>
                            <DropdownItem>
                              <img src={flag7} className="img-fluid" alt=""/>
                              <span>Indonesian</span>
                            </DropdownItem>
                            <DropdownItem>
                              <img src={flag4} className="img-fluid" alt=""/>
                              <span>Korean</span>
                            </DropdownItem>
                          </DropdownMenu>
                          </Dropdown>
                        </div>
                      </li>
                      <li className="d-lg-none d-block">
                        <a href="javascript">
                          Account Settings
                        </a>
                      </li>
                      <li className="d-lg-none d-block">
                        <a href="javascript">
                          Sign Out
                        </a>
                      </li>
                    </ul>
                  </Collapse>
                </Navbar>
                <Navbar color="primary" dark expand="lg" className="m-t-16">
                  <NavbarToggler onClick={toggle3}>
                        <FontAwesomeIcon icon={faBars} />
                    </NavbarToggler>
                  <NavbarBrand href="/">
                    <img src={logo} className="img-fluid" alt=""/>
                  </NavbarBrand>
                  <div className="notification-icon">
                        <a href="javascript">
                            <FontAwesomeIcon icon={faBell} />
                            <span className="notification-status"></span>
                        </a>
                  </div>
                  <Collapse isOpen={isOpen3} navbar>
                    <Nav className="mr-auto" navbar>
                      <NavItem>
                        <NavLink href="/">Home</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/">My appointment</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/">My wallet</NavLink>
                      </NavItem>
                      <NavItem active>
                        <NavLink href="/">stress test</NavLink>
                      </NavItem>
                    </Nav>
                    <ul className="navbar-right">
                      <li className="user-media">
                        <div className="media">
                            <img src={user} className="img-fluid metric-32 b-r-100" alt=""/>
                            <div className="media-body d-lg-none d-block">
                                <span>Thitapa Sin</span>
                            </div>
                            <span>0.00 THB</span>
                        </div>
                      </li>
                      <li className="language-dropdown">
                        <div className="media">
                          <div className="media-body d-lg-none d-block">
                            <span>Language Settings</span>
                          </div>
                          <Dropdown isOpen={dropdownOpenbasic3} toggle={toggledropdown3}>
                            <DropdownToggle>
                                <img src={flag1} className="img-fluid" alt=""/>
                                <FontAwesomeIcon icon={faChevronDown} />
                              </DropdownToggle>
                              <DropdownMenu className="menudropdown-shadow">
                            <DropdownItem>
                              <img src={flag1} className="img-fluid" alt=""/>
                              <span>English</span>
                            </DropdownItem>
                            <DropdownItem>
                              <img src={flag3} className="img-fluid" alt=""/>
                              <span>Thai</span>
                            </DropdownItem>
                            <DropdownItem>
                              <img src={flag2} className="img-fluid" alt=""/>
                              <span>Chinese</span>
                            </DropdownItem>
                            <DropdownItem>
                              <img src={flag8} className="img-fluid" alt=""/>
                              <span>Malaysian</span>
                            </DropdownItem>
                            <DropdownItem>
                              <img src={flag7} className="img-fluid" alt=""/>
                              <span>Indonesian</span>
                            </DropdownItem>
                            <DropdownItem>
                              <img src={flag4} className="img-fluid" alt=""/>
                              <span>Korean</span>
                            </DropdownItem>
                          </DropdownMenu>
                          </Dropdown>
                        </div>
                      </li>
                      <li className="d-lg-none d-block">
                        <a href="javascript">
                          Account Settings
                        </a>
                      </li>
                      <li className="d-lg-none d-block">
                        <a href="javascript">
                          Sign Out
                        </a>
                      </li>
                    </ul>
                  </Collapse>
                </Navbar>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MenuBar;
