import React from 'react';

function SpacingDetails(match:{header:string,education:string,education_details:string,description:string,description_details:string,txt1:string,txt2:string,txt3:string}) {
    return (
        <div className="details">
            <h1>{match.header}</h1>
            <h2>{match.education}</h2>
            <p className="caption m-b-16" dangerouslySetInnerHTML={{ __html: match.education_details }}></p>
            <h4 className="m-b-16">{match.description}</h4>
            <p className="caption m-b-16" dangerouslySetInnerHTML={{ __html: match.description_details }}></p>
            <h5 className="m-b-16">{match.txt1}</h5>
            <p className="m-b-16 caption">{match.txt2}</p>
            <h5>{match.txt3}</h5>
        </div>
    );
}

export default SpacingDetails;