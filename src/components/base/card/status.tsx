import React, { Fragment } from 'react';
import {Card,CardBody} from 'reactstrap'

function Status(match:{title:string,img_url:string,status_level:string,class:string}) {
    return (
        <Fragment>
        <span>{match.title}</span>
        <Card className={`status-card ${match.class ? match.class : ''} card-shadow`}>
            <CardBody>
                <img src={match.img_url} className="img-fluid" alt=""/>
                <span className="tag p-t-16">{match.status_level}</span>
            </CardBody>
        </Card>
        </Fragment>
    );
}

export default Status;