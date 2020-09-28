import React from 'react';
import '../color.scss';

function ColorShades(match: { title: string, class: string }) {
	return (
		<div className="shade-list">
            <div className={match.class}>
              	<span>{match.title}</span>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
	);
 }
 export default ColorShades;