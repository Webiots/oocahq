import React, { Fragment } from 'react';

import '../avatar.scss'

function AvatarBox(match: { src: string, class: string, status: string }) {
  return (
    <Fragment>
      {match.status ? 
        <div className="with-status">
            <img src={match.src} className={`img-fluid ${match.class}`} alt="" />
            <div className={match.status}></div>
        </div>
       : 
        <img src={match.src} className={`img-fluid ${match.class}`} alt="" />
      }
    </Fragment>
  );
}

export default AvatarBox;