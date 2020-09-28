import React from 'react';
import { Col, Container, Row} from 'reactstrap';
import './spacing.scss'
import SpacingDetails from './spacing/spacing_details'

function spacing() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
              <div className="common-space pt-0">
                <h2 className="common-header">Spacing</h2>
                <h6 className="label-dark">Paragraph</h6>
                <Row className="spacing-content">
                  <Col lg="6">
                      <SpacingDetails
                        header="Header"
                        education="Education"
                        education_details={"Doctor of Philosophy in Counseling Psychology, Kasembundit University, TH (2015) <br /> Master Degree of Development Economics, <br /> National Institute Development Administration, TH (2003)"}
                        description="Description"
                        description_details={"Personality : Kind, Genuine, Looking at others with <br />greater understanding than judgment good listener, <br />Ready to listen and understand, Respect other Beliefs : <br />Believe in the potential of the person, Believe in the value <br />of all people, Every people are valuable and want others <br />to respect the values, Every problem has a solution. <br />Aspiration"}
                        txt1="Wachiraya Prachantasen"
                        txt2="Therapist"
                        txt3="“Every problem has a solution”"
                      />
                  </Col>
                  <Col lg="6">
                      <SpacingDetails
                        header="หัวข้อหลัก"
                        education="การศึกษา"
                        education_details={"ปรัชญาดุษฎีบัณฑิต สาขาวิชาจิตวิทยาการปรึกษา, มหาวิทยาลัยบูรพา, <br /> TH (2015) ศิลปศาสตรมหาบัณฑิต สาขาวิชาจิตวิทยาการศึกษา,<br /> มหาวิทยาลัยเกษตรศาสตร์, TH (2006)"}
                        description="ประวัติเพิ่มเติม"
                        description_details={"ความทุกข์ ความกลุ้มใจ ไม่สบายใจ เป็นสิ่งที่ไม่มีใครอยากพบเจอ <br />แต่ในสภาพสังคมปัจจุบันที่การแข่งขันสูง ความเครียด ความกดดัน <br />ส่งผลให้คนเราต้องเผชิญกับความทุกข์ ไม่สบายใจ บางครั้งก็ไม่รู้  <br />จะไปบ่นให้ใครฟัง บางครั้งก็ไม่มีใครช่วยคิด ดิฉันเป็นคนหนึ่งที่ยินดี <br />และมีความพร้อมที่จะรับฟังและเป็นเพื่อนที่ร่วมเผชิญกับความทุกข์ <br />ความไม่สบายใจเหล่านั้นเป็นเพื่อนคุณ"}
                        txt1="วชิรยา ประจันตเสร"
                        txt2="นักจิตวิทยา"
                        txt3="“ทุกปัญหาย่อมมีทางออก”"
                        />
                  </Col>
                </Row>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default spacing;
