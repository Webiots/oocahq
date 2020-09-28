import React from 'react';
import {Col} from 'reactstrap'

function Inputbox(match:{title:string,border:string,box_shadow1:string,box_shadow2:string,box_shadow3:string,box_shadow4:string,box_shadow5:string,box_shadow6:string}) {
    return (
        <Col sm="6">
            <div className="shadow-detail">
                <h5>{match.title}</h5>
                <span className="caption d-block">{match.border}</span>
                <span className="caption">{match.box_shadow1}
                    <br />{match.box_shadow2}
                    <br />{match.box_shadow3}
                    <br />{match.box_shadow4} 
                    <br />{match.box_shadow5} 
                    <br />{match.box_shadow6}</span>
            </div>
        </Col>
    );
}

export default Inputbox;