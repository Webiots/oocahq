import React from 'react';
import '../color.scss';

function ColorBox(match: { name: string, class: string, code: string }) {
  return (
  	<div className="color-box">
	  <div className={`square-box ${match.class}`}></div>
	  <h6>{match.name}</h6>
	  <span>{match.code}</span>
	</div>
  );
}

export default ColorBox;