import React from 'react';
import { Card, CardBody, Form, FormGroup, Label, Input } from 'reactstrap';
import '../card.scss';
import Buttons from '../buttons/buttons';
import CheckBox from '../forms/checkbox';

function Signin(match: { title: string, buttonText1: string, buttonText2: string, inputtitle: string, inputplaceholder: string, link: string, linktext: string }) {
  return (
  	<div className="card-wrapper">
        <Card className="signin-card card-shadow">
          <CardBody>
              <h2>{match.title}</h2>
              <Form>
                <FormGroup className="input-shadow">
                  <Label for="exampleEmail">{match.inputtitle}</Label>
                  <Input type="email" id="exampleEmail" placeholder={match.inputplaceholder} />
                </FormGroup>
                <CheckBox checked lbl label="I agree with ooca Terms of use and Conditions and Privacy Policy" default/>
                <Buttons 
                  outlineval=""
                  name={match.buttonText1} 
                  class="btn-block"
                  colorval="primary"
                  icon="" 
                />
                <div className="divider">Or</div>
                <Buttons 
                  outlineval="true"
                  name={match.buttonText2} 
                  class="btn-block"
                  colorval="primary"
                  icon="" 
                />
                <div className="text-center">
                  <span>{match.linktext} <a href="javascript">{match.link}</a></span>
                </div>
              </Form>
          </CardBody>
        </Card>
    </div>
  );
}

export default Signin;