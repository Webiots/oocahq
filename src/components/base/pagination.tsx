import React from 'react';
import { Col, Container, Row, Label  } from 'reactstrap';
import Paginations from './pagination/pagination'


function paginationExample() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
              <div className="common-space pt-0">
                <h6 className="label-dark">Paginations</h6>
                <div className="pagination-wrapper m-b-32">
                    <Paginations dot={false}/>
                 </div>
                <div className="pagination-wrapper">
                  <Row className="m-b-32">
                    <Col lg="2">
                      <Label>
                        Default
                      </Label>
                    </Col>
                    <Col lg="9">
                    <Paginations dot={false}/>
                    </Col>
                  </Row>
                  <Row className="m-b-32">
                    <Col lg="2">
                      <Label>
                        Active/Selected
                      </Label>
                    </Col>
                    <Col lg="9">
                    <Paginations active={true} dot={false}/>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="2">
                      <Label>
                        Hover
                      </Label>
                    </Col>
                    <Col lg="9">
                    <Paginations hover={true} dot={false}/>
                    </Col>
                  </Row>
                </div>
                <div className="pagination-wrapper m-t-64">
                  <h3 className="m-b-24">Example</h3>
                  <Paginations dot={false}/>
                </div>
                <div className="pagination-wrapper m-t-64">
                  <h6 className="label-dark">Paginations Dots</h6>
                  <Paginations active={true} dot={true}/>
                </div>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default paginationExample;
