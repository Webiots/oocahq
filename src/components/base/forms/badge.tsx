import React, { Fragment } from 'react';

function Badge(match:{img_url:string}) {
    
    return (
        <Fragment>
            <a href="javascript" id="TooltipExample">
                <img src={match.img_url} className="img-fluid" alt="" />
            </a>
        </Fragment>
    );
}

export default Badge;