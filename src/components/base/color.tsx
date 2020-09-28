import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import './color.scss'
import ColorBox from './color/color_box';
import ColorShades from './color/color_shades';

function color() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
              <div className="color-shades common-space">
                  <h2 className="common-header">Colors</h2>
                  <Row>
                      <Col lg="8">
                        <div className="color-wrap">
                          <h6 className="label-dark">Primary color</h6>
                          <ul>
                            <li>
                              <ColorBox 
                                name="OOCA Turquoise"
                                class="default-primary2"
                                code="00C4B3"
                              />
                            </li>
                            <li>
                              <ColorBox 
                                name="OOCA Blue"
                                class="default-primary"
                                code="0055BB"
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="color-wrap">
                          <h6 className="label-dark">Accent color</h6>
                          <ul>
                            <li>
                              <ColorBox 
                                name="OOCA Marigo"
                                class="default-marigo"
                                code="E9A400"
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="color-wrap">
                          <h6 className="label-dark">Sematic Color</h6>
                          <ul>
                            <li>
                              <ColorBox 
                                name="OOCA Flamingo"
                                class="default-flamingo"
                                code="EF7773"
                              />
                            </li>
                            <li>
                              <ColorBox 
                                name="OOCA Sunshade"
                                class="default-sunshade"
                                code="FF8F4B"
                              />
                            </li>
                            <li>
                              <ColorBox 
                                name="OOCA Guava"
                                class="default-guava"
                                code="8AD866"
                              />
                            </li>
                            <li>
                              <ColorBox 
                                name="OOCA Bluee"
                                class="default-bluee"
                                code="4994EC"
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="color-wrap">
                          <h6 className="label-dark">Grey color</h6>
                          <ul>
                            <li>
                              <ColorBox 
                                name="OOCA Black"
                                class="default-blackk"
                                code="2B2B2B"
                              />
                            </li>
                            <li>
                              <ColorBox 
                                name="OOCA Gray1"
                                class="default-gray1"
                                code="474C55"
                              />
                            </li>
                            <li>
                              <ColorBox 
                                name="OOCA Gray2"
                                class="default-gray2"
                                code="788597"
                              />
                            </li>
                            <li>
                              <ColorBox 
                                name="OOCA Gray3"
                                class="default-gray3"
                                code="CBD6E0"
                              />
                            </li>
                            <li>
                              <ColorBox 
                                name="OOCA Gray4"
                                class="default-gray4"
                                code="DFEAF3"
                              />
                            </li>
                          </ul>
                        </div>
                      </Col>
                      <Col lg="4">
                        <Row className="with-shades">
                          <Col lg="12" md="6" className="shades-light">
                            <h6 className="label-dark">Tints</h6>
                            <h6 className="mb-0">Mixing base color with white</h6>
                            <ColorShades title="OOCA Blue" class="primary-color" />
                            <ColorShades title="OOCA Turquoise" class="primary-color2" />
                            <ColorShades title="OOCA Marigold" class="marigo-color" />
                            <ColorShades title="OOCA Guava" class="guava-color" />
                            <ColorShades title="OOCA Sunshade" class="sunshade-color" />
                            <ColorShades title="OOCA Flamingo" class="flamingo-color" />
                            <ColorShades title="OOCA Blue" class="blue-color" />
                          </Col>
                          <Col lg="12" md="6" className="shades-dark">
                            <h6 className="label-dark">Shades</h6>
                            <h6 className="mb-0">Mixing base color with black</h6>
                            <ColorShades title="OOCA Blue" class="primary-color" />
                            <ColorShades title="OOCA Turquoise" class="primary-color2" />
                            <ColorShades title="OOCA Marigold" class="marigo-color" />
                            <ColorShades title="OOCA Guava" class="guava-color" />
                            <ColorShades title="OOCA Sunshade" class="sunshade-color" />
                            <ColorShades title="OOCA Flamingo" class="flamingo-color" />
                            <ColorShades title="OOCA Blue" class="blue-color" />
                          </Col>
                        </Row>
                      </Col>
                  </Row>
              </div>
          </Col>
        </Row>
      </Container>
          
    </div>
  );
}

export default color;
