import React from 'react';
import { Card, CardBody } from 'reactstrap';

import '../card.scss';

function Timezone(match: { url: string, time: string, class:string }) {
  return (
  	<Card className="timezone-card card-shadow">
      <CardBody>
          <div className="media">
              <div className={`zone-icon ${match.class}`}>
                  <img src={match.url} className="img-fluid" alt=""/>
              </div>
              <div className="media-body">
                    <h4>{match.time}</h4>
              </div>
          </div>
      </CardBody>
   </Card>
  );
}

export default Timezone;