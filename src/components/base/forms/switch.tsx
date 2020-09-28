import React, { Fragment } from 'react';

function Switch(match:{inputId:string, readOnly?:boolean}) {
    return (
        <Fragment>
            {match.readOnly ?
             <input
                type='checkbox'
                className={`custom-control-input`}
                id={match.inputId}
                readOnly
                />
            :
            <input
                type='checkbox'
                className={`custom-control-input`}
                id={match.inputId}
                defaultChecked
                />
            }
        </Fragment>
    );
}

export default Switch;