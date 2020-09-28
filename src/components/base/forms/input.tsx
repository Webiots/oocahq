import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

function Inputbox(match: { focus?: boolean, hover?: boolean, disabled?: boolean, error?: boolean, warning?: boolean, success?: boolean, wi?: boolean, icon?: boolean }) {
  return (
    <FormGroup className={`input-shadow ${match.focus ? 'focus' : ''} ${match.hover ? 'hover' : ''}
                 ${match.disabled ? 'disabled' : ''} 
                 ${match.error ? 'is-invalid' : ''} 
                 ${match.warning ? ' valid-warning' : ''}
                 ${match.success ? ' is-valid' : ''}
                 ${!match.wi?'with-icon':''}`} >
      <Label>Label</Label>
      {!match.disabled ?
        <Input placeholder="Input Text"
          className={`${match.error ? 'is-invalid' : match.wi ? 'without-icon' : ''}
                ${match.warning ? 'is-invalid' : match.wi ? 'without-icon' : ''}
                ${match.success ? 'is-valid' : match.wi ? 'without-icon' : ''}`} /> :
        <Input placeholder="Input Text" disabled
          className={`${match.disabled ? 'disabled' : ''} 
                ${match.error ? 'is-invalid' : match.wi ? 'without-icon' : ''}
                ${match.warning ? 'is-invalid' : match.wi ? 'without-icon' : ''}
                ${match.success ? 'is-valid' : match.wi ? 'without-icon' : ''}`} />}
      {match.warning ? <span className="warning">Warning Message</span> : ''}
      {match.error ? <span className="invalid-feedback">Error Message</span> : ''}
      {match.success ? <span className="valid-feedback">Success Message</span> : ''}
      {match.icon ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M19.5,9.5h-.75V6.75a6.75,6.75,0,0,0-13.5,0V9.5H4.5a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h15a2,2,0,0,0,2-2V11.5A2,2,0,0,0,19.5,9.5Zm-9.5,6a2,2,0,1,1,3,1.723V19.5a1,1,0,0,1-2,0V17.223A1.994,1.994,0,0,1,10,15.5ZM7.75,6.75a4.25,4.25,0,0,1,8.5,0V9a.5.5,0,0,1-.5.5H8.25a.5.5,0,0,1-.5-.5Z" />
      </svg> : ''}
    </FormGroup>
  );
}

export default Inputbox;