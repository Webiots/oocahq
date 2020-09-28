import React from 'react';
import { FormGroup, Input  } from 'reactstrap';

import '../shadow.scss';

function Textarea(match: { class: string, row: number, disable:boolean }) {
  return (
  <>
  	{match.disable ?
  	<FormGroup className={`${match.class} mb-0 `}>
        <Input type="textarea" rows={match.row} disabled/>
  	</FormGroup>
  	:
  	<FormGroup className={`${match.class} mb-0`}>
        <Input type="textarea" rows={match.row} />
  	</FormGroup>
  	}
  	</>
  );
}

export default Textarea;