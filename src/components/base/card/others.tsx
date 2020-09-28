import React, { Fragment } from 'react';
import {Button,Progress} from 'reactstrap'

function Others(match : {txt:String,btn:String,progress_level:Boolean}) {
    return (
        <Fragment>
            <h5 className="p-y-16">{match.txt}</h5>
                {match.progress_level ?
                    <div className="p-b-16">
                        <Progress value="42" color="primary" />
                    </div>
                    :""
                }
            <Button color="primary" className="btn-block">{match.btn}</Button>
        </Fragment>
    );
}

export default Others;