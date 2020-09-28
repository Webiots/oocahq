import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './avatar.scss';
import AvatarStyle from './avatar/avatarStyle'
import AvatarStatus from './avatar/avatarStatus'

function Avatar() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
              <div className="common-space pt-0 avatar-wrapper">
                  <h2 className="common-header">Avatar</h2>
                  <AvatarStyle/>
                  <AvatarStatus/>
              </div>
          </Col>
        </Row>
      </Container>
          
    </div>
  );
}

export default Avatar;
