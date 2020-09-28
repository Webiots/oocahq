import React, { useState } from 'react';
import { Col, Container, Form, Row, Tooltip} from 'reactstrap';
import Inputbox from './forms/input'
import TextArea from './forms/textarea'
import Dropdownbox from './forms/dropdown'
import SelectBox from './forms/select'
import CheckBox from './forms/checkbox'
import Radio from './forms/radio'
import Badge from './forms/badge'
import Switch from './forms/switch'

import iconW from '../../assets/images/icons/1.png';


import './form.scss'

const Forms = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggletooltip = () => setTooltipOpen(!tooltipOpen);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="common-space pt-0 default-form">
              <h2 className="common-header">Forms</h2>
              <div className="form-box">
                  <h6 className="label-dark">Text input</h6>
                  <Form>
                    <Row>
                      <Col lg="3" sm="4">
                          <span>Default</span>
                      </Col>
                      <Col lg="4" sm="6">
                      <Inputbox/>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="3" sm="4">
                          <span>Focus / Valid input </span>
                      </Col>
                      <Col lg="4" sm="6">
                      <Inputbox wi focus/>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="3" sm="4">
                          <span>Hover </span>
                      </Col>
                      <Col lg="4" sm="6">
                        <Inputbox wi hover/>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="3" sm="4">
                          <span>Disabled </span>
                      </Col>
                      <Col lg="4" sm="6">
                      <Inputbox disabled={true}/>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="3" sm="4">
                          <span>Error </span>
                      </Col>
                      <Col lg="4" sm="6">
                      <Inputbox wi error={true}/>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="3" sm="4">
                          <span>Warning </span>
                      </Col>
                      <Col lg="4" sm="6">
                      <Inputbox wi warning={true}/>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="3" sm="4">
                          <span>Success </span>
                      </Col>
                      <Col lg="4" sm="6">
                      <Inputbox wi success={true}/>
                      </Col>
                    </Row>
                  </Form>
              </div>
              <div className="form-box">
                  <h6 className="label-dark">Text input with icon</h6>
                  <Form>
                    <Row>
                      <Col lg="3" sm="4">
                          <span>Default</span>
                      </Col>
                      <Col lg="4" sm="6">
                      <Inputbox icon/>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="3" sm="4">
                          <span>Focus / Valid input </span>
                      </Col>
                      <Col lg="4" sm="6">
                      <Inputbox focus icon/>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="3" sm="4">
                          <span>Hover </span>
                      </Col>
                      <Col lg="4" sm="6">
                      <Inputbox hover icon/>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="3" sm="4">
                          <span>Disabled </span>
                      </Col>
                      <Col lg="4" sm="6">
                      <Inputbox disabled icon/>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="3" sm="4">
                          <span>Error </span>
                      </Col>
                      <Col lg="4" sm="6">
                      <Inputbox error/>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="3" sm="4">
                          <span>Warning </span>
                      </Col>
                      <Col lg="4" sm="6">
                      <Inputbox warning/>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="3" sm="4">
                          <span>Success </span>
                      </Col>
                      <Col lg="4" sm="6">
                      <Inputbox success/>
                      </Col>
                    </Row>
                  </Form>
              </div>
              <div className="form-box textarea-inputs">
                  <h6 className="label-dark">Text area</h6>
                  <Form>
                      <Row>
                        <Col lg="4" sm="6">
                          <span className="d-block p-b-24">Default</span>
                          <TextArea/>
                        </Col>
                        <Col lg="4" sm="6" className="offset-lg-2">
                          <span className="d-block p-b-24">Focus / Valid input</span>
                          <TextArea focus/>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4" sm="6">
                          <span className="d-block p-b-24">Hover</span>
                          <TextArea hover/>
                        </Col>
                        <Col lg="4" sm="6" className="offset-lg-2">
                          <span className="d-block p-b-24">Disable</span>
                          <TextArea disabled/>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4" sm="6">
                          <span className="d-block p-b-24">Error</span>
                          <TextArea error wi/>
                        </Col>
                        <Col lg="4" sm="6" className="offset-lg-2">
                          <span className="d-block p-b-24">Warning</span>
                          <TextArea warning wi/>
                        </Col>
                      </Row>
                  </Form>
              </div>
              <div className="form-box">
                <h6 className="label-dark">Dropdown</h6>
                <Row>
                    <Col lg="3" sm="5" xs="7">
                    <Dropdownbox/>
                    </Col>
                </Row>
              </div>
              <div className="form-box">
                <h6 className="label-dark">Select input</h6>
                <Form>
                    <Row>
                      <Col lg="3" sm="4">
                          <span>Default</span>
                      </Col>
                      <Col lg="4" sm="6">
                      <SelectBox/>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="3" sm="4">
                          <span>Focus / Valid select input </span>
                      </Col>
                      <Col lg="4" sm="6">
                        <SelectBox focus/>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="3" sm="4">
                          <span>Select date </span>
                      </Col>
                      <Col lg="4" sm="6">
                      <SelectBox focus calender/>
                      </Col>
                    </Row>
                </Form>
              </div>
              <div className="form-box">
                <h6 className="label-dark">Calendar selector</h6>
                <Row>
                  <Col lg="4" sm="6">
                    <SelectBox focus calender/>
                  </Col>
                </Row>
              </div>
              <div className="form-box">
                <h6 className="label-dark">Checkbox</h6>
                <div className="checkbox-input m-b-24">
                  <CheckBox/>
                  <CheckBox focus/>
                   <CheckBox disabled/>
                   <CheckBox checked default/>
                </div>
                <div className="checkbox-input">
                <CheckBox lbl label="label" default/>
                <CheckBox lbl focus/>
                <CheckBox lbl disabled/>
                <CheckBox lbl label="selected" checked default/>
                </div>
              </div>
              <div className="form-box">
                <h6 className="label-dark">Radio</h6>
                <div className="checkbox-input m-b-24">
                    <Radio id="r1" name="rb1"/>
                    <Radio id="r2" name="rb1" checked/>
                    <Radio id="r3" name="rb1" disabled/>
                </div>
                <div className="checkbox-input m-b-24">
                <Radio id="r1" name="rb2" default/>
                <Radio id="r2" name="rb2" checked/>
                </div>
                <div className="checkbox-input">
                    <Radio id="r1" name="rb3"  lbl label="Default" default/>
                    <Radio id="r2" name="rb3" lbl label="Label" default checked />
                    <Radio id="r3" name="rb3" lbl disabled/>
                </div>
              </div>
              <div className="form-box">
                <h6 className="label-dark">Badge</h6>
                <div className="m-b-32">
                  <div className="badge">
                    <Badge img_url={iconW} />
                  </div>
                </div>
                <div>
                  <h5 className="m-b-16">Hover on badge shows tooltip</h5>
                  <div className="badge m-r-8">
                    <Badge img_url={iconW}  />
                  </div>
                  <div className="badge m-r-8">
                    <Badge img_url={iconW} />
                  </div>
                  <div className="badge">
                    <Badge img_url={iconW} />
                    <Tooltip placement="bottom-start" isOpen={tooltipOpen} offset="0 8px" target="TooltipExample" toggle={toggletooltip}>
                      <a href="javascript">badge name</a> description Lorem Ipsum dolor sit amet, consectetur adipiscing
                    </Tooltip>
                  </div>
                </div>
              </div>
              <div className="form-box">
                <h6 className="label-dark">Switch</h6>
                <div className="switch-box m-b-32">
                  <div className='custom-control custom-switch'>
                    <Switch inputId="customSwitches" readOnly={true} />
                    <label className='custom-control-label' htmlFor="customSwitches"></label>
                  </div>
                  <div className='custom-control custom-switch'>
                    <Switch inputId="customSwitchesChecked" readOnly={false} />
                    <label className='custom-control-label' htmlFor="customSwitchesChecked"></label>
                  </div>
                </div>
                <div className="switch-box m-b-32">
                  <div className='custom-control custom-switch'>
                    <Switch inputId="customSwitches1" readOnly={true}  />
                    <label className='custom-control-label' htmlFor='customSwitches1'>
                      Label
                    </label>
                  </div>
                  <div className='custom-control custom-switch'>
                    <Switch inputId="customSwitchesChecked1" readOnly={false} />
                    <label className='custom-control-label' htmlFor='customSwitchesChecked1'>
                      Label
                    </label>
                  </div>
                </div>
                <div className="switch-box states">
                  <div className='custom-control custom-switch'>
                    <label className='custom-control-label-left'>
                        Label
                    </label>
                    <Switch inputId="customSwitches2" readOnly={true} />
                    <label className='custom-control-label' htmlFor='customSwitches2'>
                        Label
                    </label>
                  </div>
                  <div className='custom-control custom-switch'>
                    <label className='custom-control-label-left'>
                        Off
                    </label>
                    <Switch inputId="customSwitchesChecked2" readOnly={false} />
                    <label className='custom-control-label' htmlFor='customSwitchesChecked2'>
                      On
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
          
    </div>
  );
}

export default Forms;
