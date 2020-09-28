import React from 'react';
import { Button } from 'reactstrap';
import { Upload } from 'react-feather';

import '../buttons.scss'

function Buttons(match: { outlineval: string, name: string, class?: string, disabledval?: boolean, colorval: string, icon: string }) {
  return (
  <>{match.outlineval ?
        match.disabledval ?
      <Button outline disabled   color={match.colorval} className={`${match.class} ${match.disabledval? 'disabled' : ''}`}>
      {match.icon ? <Upload />:''}
      {match.name}
    </Button>
      :
    <Button outline  color={match.colorval} className={`${match.class} ${match.disabledval? 'disabled' : ''}`}>
      {match.icon ? <Upload />:''}
      {match.name}
    </Button> 
    :
    match.disabledval?
    <Button disabled   color={match.colorval} className={`${match.class} ${match.disabledval? 'disabled' : ''}`}>
      {match.icon ? <Upload />:''}
      {match.name}
    </Button>
    :
    <Button  color={match.colorval} className={`${match.class} ${match.disabledval? 'disabled' : ''}`} >
      {match.icon ? <Upload />:''}
      {match.name}
    </Button>
  
    }
   </>
  );
}

export default Buttons;