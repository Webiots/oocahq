import React from 'react';

function Radio(match: {id?:string, name?:string,checked?:boolean,focus?:boolean, hover?:boolean, disabled?:boolean, label?:string, lbl?:boolean, default?:boolean }) {
  return (
    <label className={`${!match.lbl?'d-inline-block m-r-16':'d-block m-b-16'}`}>
      {match.checked?
      match.disabled?
     <input value={match.id} name={match.name} disabled defaultChecked className={`radio_animated ${match.focus?'focus':''} ${match.disabled?'disabled':''}`} id={match.id} type="radio" />:
     <input value={match.id} name={match.name} defaultChecked className={`radio_animated ${match.focus?'focus':''} ${match.disabled?'disabled':''}`} id={match.id} type="radio" />:     
     match.disabled?
     <input value={match.id} name={match.name} disabled className={`radio_animated ${match.focus?'focus':''} ${match.disabled?'disabled':''}`} id={match.id} type="radio" />:
     <input value={match.id} name={match.name} className={`radio_animated ${match.focus?'focus':''}`} id={match.id} type="radio" />}
     {match.lbl && match.default?<span>{match.label}</span>:''}
     {match.lbl && match.focus?<span>Focus</span>:''}
     {match.lbl && match.disabled?<span>Disabled</span>:''}

    </label>
                
  );
}

export default Radio;