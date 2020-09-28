import React from 'react';
import '../grid.scss';

function Metric(match: { digit: number }) {
  return (
  	<div className="metric-boxes">
        <div>
            <div className={`metric-${match.digit}`}></div>
        </div>
        <h3>{match.digit}px</h3>
    </div>
  );
}

export default Metric;