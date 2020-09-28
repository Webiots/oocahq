import React, { Fragment } from 'react';

function BorderRadius(match:{title:string,class:string}) {
    return (
        <Fragment>
            <h6 className="label-dark">{match.title}</h6>
            <div className={match.class}></div>  
        </Fragment>
    );
}

export default BorderRadius;