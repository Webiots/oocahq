import React, { Fragment } from 'react';
import { Button } from 'reactstrap';

function Profile(match: { img_url: string, title: string, pin:string,txt:String,edit_profile_txt:String,btn1:String,btn2:String }) {
    return (
        <Fragment>
            <img src={match.img_url} className="img-fluid user-image" alt="" />
            <h3 className="m-y-16">{match.title}</h3>
            <a href="javascript" className="m-y-16 d-block">{match.pin}<br />{match.txt}</a>
            <a href="javascript" className="d-block m-b-16 edit-link">{match.edit_profile_txt}</a>
            <Button color="primary" className="btn-block m-b-16">{match.btn1}</Button>
            <Button outline color="primary" className="btn-block">{match.btn2}</Button>
        </Fragment>
    );
}

export default Profile;