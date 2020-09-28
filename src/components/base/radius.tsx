import React from 'react';
import { Col, Container, Row} from 'reactstrap';
import './radius.scss'
import BorderRadius from './radius/border_radius'

function radius() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
              <div className="common-space p-0">
                <h2 className="common-header">Border Radius</h2>
                <Row className="radius-wrap">
                  <Col lg="4" md="6">
                    <BorderRadius title="For buttons" class="radius-box b-r-100"/>
                  </Col>
                  <Col lg="4" md="6" className="offset-lg-2">
                    <BorderRadius title="For card and images" class="radius-box b-r-8"/>
                  </Col>
                  <Col lg="4" md="6" className="m-t-64">
                    <BorderRadius title="For input field" class="radius-box b-r-8"/>
                  </Col>
                </Row>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default radius;
