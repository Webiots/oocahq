import React, { useState } from 'react';
import { Col, Container, Row, Card, Pagination, PaginationItem, PaginationLink, Dropdown, DropdownItem, DropdownToggle, DropdownMenu  } from 'reactstrap';
import './shadow.scss';
import InputBox from './shadow/input'
import Textarea from './elements/textarea';
import Buttons from './buttons/buttons';

function Shadow() {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div>
      <Container>
        <Row>
          <Col>
              <div className="common-space pt-0">
                <h2>Shadow</h2>
                <h6 className="label-dark">Text input</h6>
                <div className="shadow-wrapper">
                      <Row>
                        <Col lg="4" sm="6">
                          <Textarea
                            class="input-shadow hover"
                            row={6}
                            disable={false}
                          />
                        </Col>
                        <InputBox 
                          title="Default / Hover" 
                          border="border: 1px solid #CBD6E0"
                          box_shadow1="box-shadow: 1px 1px 2px rgba(253, 255, 255, 0.3),"
                          box_shadow2="-1px -1px 2px rgba(225, 230, 236, 0.5),"
                          box_shadow3="inset -3px 3px 6px rgba(225, 230, 236, 0.2),"
                          box_shadow4="inset 3px -3px 6px rgba(225, 230, 236, 0.2),"
                          box_shadow5="inset -3px -3px 6px rgba(253, 255, 255, 0.9),"
                          box_shadow6="inset 3px 3px 8px rgba(225, 230, 236, 0.9)"/>
                      </Row>
                      <Row>
                        <Col lg="4" sm="6">
                          <Textarea
                            class="input-shadow focus with-icon"
                            row={6}
                            disable={false}
                          />
                        </Col>
                        <InputBox 
                          title="Focus / Valid input" 
                          border="border: 1px solid #4994EC"
                          box_shadow1="box-shadow: 1px 1px 2px rgba(253, 255, 255, 0.3),"
                          box_shadow2="-1px -1px 2px rgba(0, 86, 187, 0.2),"
                          box_shadow3="inset -3px 3px 6px rgba(0, 86, 187, 0.2),"
                          box_shadow4="inset 3px -3px 6px rgba(0, 86, 187, 0.2),"
                          box_shadow5="inset -3px -3px 6px rgba(253, 255, 255, 0.9),"
                          box_shadow6="inset 3px 3px 8px rgba(225, 230, 236, 0.9)"/>
                      </Row>
                      <Row>
                        <Col lg="4" sm="6">
                          <Textarea
                            class="input-shadow disabled"
                            row={6}
                            disable={true}
                          />
                        </Col>
                        <InputBox 
                          title="Disabled"
                          border="" 
                          box_shadow1="box-shadow: 1px 1px 2px rgba(253, 255, 255, 0.3),"
                          box_shadow2="-1px -1px 2px rgba(225, 230, 236, 0.5)," 
                          box_shadow3="inset -3px 3px 6px rgba(225, 230, 236, 0.2)," 
                          box_shadow4="inset 3px -3px 6px rgba(225, 230, 236, 0.2)," 
                          box_shadow5="inset -3px -3px 6px rgba(253, 255, 255, 0.9)," 
                          box_shadow6="inset 3px 3px 8px rgba(225, 230, 236, 0.9)"/>
                      </Row>
                      <Row>
                        <Col lg="4" sm="6">
                          <Textarea
                            class="input-shadow is-invalid"
                            row={6}
                            disable={false}
                          />
                        </Col>
                        <InputBox 
                          title="Error"
                          border="border: 1px solid #EF7773" 
                          box_shadow1="box-shadow: 1px 1px 2px rgba(253, 255, 255, 0.3),"
                          box_shadow2="-1px -1px 2px rgba(225, 230, 236, 0.5)," 
                          box_shadow3="inset -3px 3px 6px rgba(239, 119, 115, 0.2)," 
                          box_shadow4="inset 3px -3px 6px rgba(239, 119, 115, 0.2)," 
                          box_shadow5="inset -3px -3px 6px rgba(239, 119, 115, 0.3)," 
                          box_shadow6="inset 3px 3px 8px rgba(239, 119, 115, 0.3)"/>
                      </Row>
                      <Row>
                        <Col lg="4" sm="6">
                          <Textarea
                            class="input-shadow valid-warning"
                            row={6}
                            disable={false}
                          />
                        </Col>
                        <InputBox 
                          title="Warning"
                          border="border: 1px solid #FF8F4B" 
                          box_shadow1="box-shadow: 1px 1px 2px rgba(253, 255, 255, 0.3),"
                          box_shadow2="-1px -1px 2px rgba(225, 230, 236, 0.5)," 
                          box_shadow3="inset -3px 3px 6px rgba(255, 143, 75, 0.2)," 
                          box_shadow4="inset 3px -3px 6px rgba(255, 143, 75, 0.2)," 
                          box_shadow5="inset -3px -3px 6px rgba(255, 143, 75, 0.3)," 
                          box_shadow6="inset 3px 3px 8px rgba(255, 143, 75, 0.3)"/>
                      </Row>
                      <Row>
                        <Col lg="4" sm="6">
                          <Textarea
                            class="input-shadow is-valid"
                            row={6}
                            disable={false}
                          />
                        </Col>
                        <InputBox 
                          title="Success"
                          border="border: 1px solid #8AD866" 
                          box_shadow1="box-shadow: 1px 1px 2px rgba(253, 255, 255, 0.3),"
                          box_shadow2="-1px -1px 2px rgba(225, 230, 236, 0.5)," 
                          box_shadow3="inset -3px 3px 6px rgba(138, 216, 102, 0.2)," 
                          box_shadow4="inset 3px -3px 6px rgba(138, 216, 102, 0.2)," 
                          box_shadow5="inset -3px -3px 6px rgba(138, 216, 102, 0.3)," 
                          box_shadow6="inset 3px 3px 8px rgba(138, 216, 102, 0.3)"/>
                      </Row>
                      <Row>
                        <Col sm="12">
                          <h6 className="label-dark">Text area</h6>
                        </Col>
                        <Col lg="4" sm="6">
                          <Textarea
                            class="textarea-shadow hover"
                            row={6}
                            disable={false}
                          />
                        </Col>
                        <InputBox 
                          title="Default / Hover" 
                          border="border: 1px solid #CBD6E0"
                          box_shadow1="box-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3),"
                          box_shadow2="-1px -1px 2px rgba(240, 240, 240, 0.5),"
                          box_shadow3="inset -3px 3px 6px rgba(240, 240, 240, 0.2),"
                          box_shadow4="inset 3px -3px 6px rgba(240, 240, 240, 0.2),"
                          box_shadow5="inset -3px -3px 6px rgba(255, 255, 255, 0.9),"
                          box_shadow6="inset 3px 3px 8px rgba(240, 240, 240, 0.9)"/>
                      </Row>
                      <Row>
                        <Col lg="4" sm="6">
                          <Textarea
                            class="textarea-shadow focus with-icon "
                            row={6}
                            disable={false}
                          />
                        </Col>
                        <InputBox 
                          title="Focus / Valid input" 
                          border="border: 1px solid #4994EC"
                          box_shadow1="box-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3),"
                          box_shadow2="-1px -1px 2px rgba(0, 86, 187, 0.2),"
                          box_shadow3="inset -3px 3px 6px rgba(0, 86, 187, 0.2),"
                          box_shadow4="inset 3px -3px 6px rgba(0, 86, 187, 0.2),"
                          box_shadow5="inset -3px -3px 6px rgba(253, 255, 255, 0.9),"
                          box_shadow6="inset 3px 3px 8px rgba(225, 230, 236, 0.9)"/>
                      </Row>
                      <Row>
                        <Col lg="4" sm="6">
                          <Textarea
                            class="textarea-shadow disabled"
                            row={6}
                            disable={true}
                          />
                        </Col>
                        <InputBox 
                          title="Disabled" 
                          border=""
                          box_shadow1="box-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3),"
                          box_shadow2="-1px -1px 2px rgba(240, 240, 240, 0.5),"
                          box_shadow3="inset -3px 3px 6px rgba(240, 240, 240, 0.2),"
                          box_shadow4="inset 3px -3px 6px rgba(240, 240, 240, 0.2),"
                          box_shadow5="inset -3px -3px 6px rgba(255, 255, 255, 0.9),"
                          box_shadow6="inset 3px 3px 8px rgba(240, 240, 240, 0.9)"/>
                      </Row>
                      <Row>
                        <Col lg="4" sm="6">
                          <Textarea
                            class="textarea-shadow is-invalid"
                            row={6}
                            disable={false}
                          />
                        </Col>
                        <InputBox 
                          title="Error" 
                          border="border: 1px solid #EF7773"
                          box_shadow1="box-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3),"
                          box_shadow2="-1px -1px 2px rgba(225, 230, 236, 0.5),"
                          box_shadow3="inset -3px 3px 6px rgba(239, 119, 115, 0.2),"
                          box_shadow4="inset 3px -3px 6px rgba(239, 119, 115, 0.2),"
                          box_shadow5="inset -3px -3px 6px rgba(239, 119, 115, 0.3),"
                          box_shadow6="inset 3px 3px 8px rgba(239, 119, 115, 0.3)"/>
                      </Row>
                      <Row>
                        <Col lg="4" sm="6">
                          <Textarea
                            class="textarea-shadow valid-warning"
                            row={6}
                            disable={false}
                          />
                        </Col>
                        <InputBox 
                          title="Warning" 
                          border="border: 1px solid #FF8F4B"
                          box_shadow1="box-shadow: 1px 1px 2px rgba(253, 255, 255, 0.3),"
                          box_shadow2="-1px -1px 2px rgba(225, 230, 236, 0.5),"
                          box_shadow3="inset -3px 3px 6px rgba(255, 143, 75, 0.2),"
                          box_shadow4="inset 3px -3px 6px rgba(255, 143, 75, 0.2),"
                          box_shadow5="inset -3px -3px 6px rgba(255, 143, 75, 0.3),"
                          box_shadow6="inset 3px 3px 8px rgba(255, 143, 75, 0.3)"/>
                      </Row>
                      <Row>
                        <Col lg="4" sm="6">
                          <Textarea
                            class="textarea-shadow is-valid"
                            row={6}
                            disable={false}
                          />
                        </Col>
                        <InputBox 
                          title="Success" 
                          border="border: 1px solid #8AD866"
                          box_shadow1="box-shadow: 1px 1px 2px rgba(253, 255, 255, 0.3),"
                          box_shadow2="-1px -1px 2px rgba(225, 230, 236, 0.5),"
                          box_shadow3="inset -3px 3px 6px rgba(138, 216, 102, 0.2),"
                          box_shadow4="inset 3px -3px 6px rgba(138, 216, 102, 0.2),"
                          box_shadow5="inset -3px -3px 6px rgba(138, 216, 102, 0.3),"
                          box_shadow6="inset 3px 3px 8px rgba(138, 216, 102, 0.3)"/>
                      </Row>
                      <Row>
                        <Col lg="12">
                          <h6 className="label-dark">Multiselect Buttons</h6>
                        </Col>
                        <Col lg="4" sm="6">
                          <Buttons 
                            outlineval=""
                            name=""
                            class="btn-block select-btn-shadow shadow-box"
                            colorval=""
                            icon="" 
                          />
                        </Col>
                        <InputBox 
                          title="Default" 
                          border=""
                          box_shadow1="box-shadow: 1px 1px 2px rgba(253, 255, 255, 0.3),"
                          box_shadow2="-1px -1px 2px rgba(225, 230, 236, 0.2),"
                          box_shadow3="inset -3px 3px 6px rgba(225, 230, 236, 0.2),"
                          box_shadow4="inset 3px -3px 6px rgba(225, 230, 236, 0.2),"
                          box_shadow5="inset -3px -3px 6px rgba(253, 255, 255, 0.9),"
                          box_shadow6="inset 3px 3px 8px rgba(225, 230, 236, 0.9)"/>
                      </Row>
                      <Row>
                        <Col lg="4" sm="6">
                          <Buttons 
                            outlineval=""
                            name=""
                            class="btn-block select-btn-shadow shadow-box selected"
                            colorval=""
                            icon="" 
                          />
                        </Col>
                        <InputBox 
                          title="Selected" 
                          border=""
                          box_shadow1="box-shadow: -2px 2px 4px rgba(230, 230, 230, 0.2),"
                          box_shadow2="2px -2px 4px rgba(230, 230, 230, 0.2),"
                          box_shadow3="-2px -2px 4px rgba(255, 255, 255, 0.9),"
                          box_shadow4="2px 2px 5px rgba(230, 230, 230, 0.9),"
                          box_shadow5="inset 1px 1px 2px rgba(255, 255, 255, 0.3),"
                          box_shadow6="inset -1px -1px 2px rgba(230, 230, 230, 0.5)"/>
                      </Row>
                      <Row>
                        <Col lg="4" sm="6">
                          <Buttons 
                            outlineval=""
                            name=""
                            class="btn-block select-btn-shadow shadow-box hover"
                            colorval=""
                            icon="" 
                          />
                        </Col>
                        <InputBox 
                          title="Hover" 
                          border=""
                          box_shadow1="box-shadow: 1px 1px 2px rgba(253, 255, 255, 0.3),"
                          box_shadow2="-1px -1px 2px rgba(225, 230, 236, 0.5),"
                          box_shadow3="inset -3px 3px 6px rgba(225, 230, 236, 0.2),"
                          box_shadow4="inset 3px -3px 6px rgba(225, 230, 236, 0.2),"
                          box_shadow5="inset -3px -3px 6px rgba(253, 255, 255, 0.9),"
                          box_shadow6="inset 3px 3px 8px rgba(225, 230, 236, 0.9)"/>
                      </Row>
                      <Row>
                        <Col lg="12">
                          <h6 className="label-dark">Card</h6>
                        </Col>
                        <Col lg="4" sm="6">
                          <Card className="card-shadow shadow-box">
                          </Card>
                        </Col>
                        <InputBox 
                          title="Default" 
                          border=""
                          box_shadow1="box-shadow: -4px 4px 8px rgba(242, 242, 242, 0.2),"
                          box_shadow2="4px -4px 8px rgba(242, 242, 242, 0.2),"
                          box_shadow3="-4px -4px 8px rgba(255, 255, 255, 0.9),"
                          box_shadow4="4px 4px 10px rgba(242, 242, 242, 0.9),"
                          box_shadow5="inset 1px 1px 2px rgba(255, 255, 255, 0.3),"
                          box_shadow6="inset -1px -1px 2px rgba(242, 242, 242, 0.5)"/>
                      </Row> 
                      <Row>
                        <Col lg="12">
                          <h6 className="label-dark">Pagination</h6>
                        </Col>
                        <Col lg="4" sm="6">
                          <Pagination aria-label="Page navigation example" className="pagination-shadow d-block">
                            <PaginationItem className="d-block">
                              <PaginationLink href="#" className="shadow-box">
                              </PaginationLink>
                            </PaginationItem>
                          </Pagination>
                        </Col>
                        <InputBox 
                          title="Default" 
                          border=""
                          box_shadow1="box-shadow: -3px 3px 6px rgba(225, 230, 236, 0.2),"
                          box_shadow2="3px -3px 6px rgba(225, 230, 236, 0.2),"
                          box_shadow3="-3px -3px 6px rgba(253, 255, 255, 0.9),"
                          box_shadow4="3px 3px 8px rgba(225, 230, 236, 0.9),"
                          box_shadow5="inset 1px 1px 2px rgba(253, 255, 255, 0.3),"
                          box_shadow6="inset -1px -1px 2px rgba(225, 230, 236, 0.5)"/>
                      </Row>
                      <Row>
                        <Col lg="4" sm="6">
                          <Pagination aria-label="Page navigation example" className="pagination-shadow d-block">
                            <PaginationItem className="d-block hover">
                              <PaginationLink href="#" className="shadow-box">
                              </PaginationLink>
                            </PaginationItem>
                          </Pagination>
                        </Col>
                        <InputBox 
                          title="Hover" 
                          border=""
                          box_shadow1="box-shadow: -4px 4px 8px rgba(0, 86, 187, 0.2),"
                          box_shadow2="4px -4px 8px rgba(0, 86, 187, 0.2),"
                          box_shadow3="-4px -4px 8px rgba(255, 255, 255, 0.9),"
                          box_shadow4="4px 4px 10px rgba(0, 86, 187, 0.2),"
                          box_shadow5="inset 1px 1px 2px rgba(255, 255, 255, 0.3),"
                          box_shadow6="inset -1px -1px 2px rgba(0, 86, 187, 0.3)"/>
                      </Row>
                      <Row>
                        <Col lg="12">
                          <h6 className="label-dark">Select input</h6>
                        </Col>
                        <Col lg="4" sm="6">
                          <div className="select-shadow shadow-box">
                          </div>
                        </Col>
                        <InputBox 
                          title="Default" 
                          border=""
                          box_shadow1="box-shadow: 1px 1px 2px rgba(253, 255, 255, 0.3),"
                          box_shadow2="-1px -1px 2px rgba(225, 230, 236, 0.5),"
                          box_shadow3="inset -3px 3px 6px rgba(225, 230, 236, 0.2),"
                          box_shadow4="inset 3px -3px 6px rgba(225, 230, 236, 0.2),"
                          box_shadow5="inset -3px -3px 6px rgba(253, 255, 255, 0.9),"
                          box_shadow6="inset 3px 3px 8px rgba(225, 230, 236, 0.9)"/>
                      </Row>
                      <Row>
                        <Col lg="4" sm="6">
                          <div className="select-shadow shadow-box focus">
                          </div>
                        </Col>
                        <InputBox 
                          title="Focus / Valid" 
                          border=""
                          box_shadow1="box-shadow: -3px 3px 6px rgba(225, 230, 236, 0.2),"
                          box_shadow2="3px -3px 6px rgba(225, 230, 236, 0.2),"
                          box_shadow3="-3px -3px 6px rgba(253, 255, 255, 0.9),"
                          box_shadow4="3px 3px 8px rgba(225, 230, 236, 0.9),"
                          box_shadow5="inset 1px 1px 2px rgba(253, 255, 255, 0.3),"
                          box_shadow6="inset -1px -1px 2px rgba(225, 230, 236, 0.5)"/>
                      </Row>
                      <Row>
                        <Col lg="12">
                          <h6 className="label-dark">Dropdown</h6>
                        </Col>
                        <Col lg="4" sm="6">
                          <Dropdown isOpen={dropdownOpen} toggle={toggle} className="dropdown-shadow shadow-box">
                            <DropdownToggle>
                              </DropdownToggle>
                          </Dropdown>
                        </Col>
                        <InputBox 
                          title="Default" 
                          border=""
                          box_shadow1="box-shadow: -3px 3px 6px rgba(225, 230, 236, 0.2),"
                          box_shadow2="3px -3px 6px rgba(225, 230, 236, 0.2),"
                          box_shadow3="-3px -3px 6px rgba(253, 255, 255, 0.9),"
                          box_shadow4="3px 3px 8px rgba(225, 230, 236, 0.9),"
                          box_shadow5="inset 1px 1px 2px rgba(253, 255, 255, 0.3),"
                          box_shadow6="inset -1px -1px 2px rgba(225, 230, 236, 0.5)"/>
                      </Row>
                      <Row>
                        <Col lg="12">
                          <h6 className="label-dark">Menu Dropdown</h6>
                        </Col>
                        <Col lg="4" sm="6">
                          <Dropdown  className="menudropdown-shadow shadow-box">
                            <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                              </DropdownMenu>
                          </Dropdown>
                        </Col>
                        <InputBox 
                          title="Default" 
                          border=""
                          box_shadow1="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)"
                          box_shadow2=""
                          box_shadow3=""
                          box_shadow4=""
                          box_shadow5=""
                          box_shadow6=""/>
                      </Row>
                </div>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Shadow;
