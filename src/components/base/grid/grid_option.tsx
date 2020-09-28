import React from 'react';
import '../grid.scss';

function Metric(match: { title: string, number_of_columns:number, column_width:number, gutter_width:number, max_container_width:number }) {
  return (
    <div className="grid-option">
        <h3>{match.title} : Grid options</h3>
        <ul>
          <li>
              <span>Number of Columns:</span>
              <h4>{match.number_of_columns}</h4>
          </li>
          <li>
              <span>Column width:</span>
              <h4>{match.column_width}px</h4>
          </li>
          <li>
              <span>Gutter width:</span>
              <h4>{match.gutter_width}px(15px on each side of a column)</h4>
          </li>
          <li>
              <span>Max. container width:</span>
              <h4>{match.max_container_width}px</h4>
          </li>
        </ul>
    </div>
  );
}

export default Metric;