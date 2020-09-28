import React from 'react';

function CheckBox(match: {checked?:boolean,focus?:boolean, hover?:boolean, disabled?:boolean,label?:string, lbl?:boolean, default?:boolean }) {
  return (
    <label className={`${!match.lbl?'d-inline-block m-r-16':'d-block m-b-16'}`}>
      {match.checked?
      match.disabled?
     <input disabled defaultChecked className={`checkbox_animated ${match.focus?'focus':''} ${match.disabled?'disabled':''}`} id="chk-ani" type="checkbox" />:
     <input defaultChecked className={`checkbox_animated ${match.focus?'focus':''} ${match.disabled?'disabled':''}`} id="chk-ani" type="checkbox" />:     
     match.disabled?
     <input disabled className={`checkbox_animated ${match.focus?'focus':''} ${match.disabled?'disabled':''}`} id="chk-ani" type="checkbox" />:
     <input className={`checkbox_animated ${match.focus?'focus':''}`} id="chk-ani" type="checkbox" />}
     {match.lbl && match.default?<span>{match.label}</span>:''}
     {match.lbl && match.focus?<span>Focus</span>:''}
     {match.lbl && match.disabled?<span>Disabled</span>:''}

    </label>
                
  );
}

export default CheckBox;