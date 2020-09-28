import React from 'react';
import AvatarBox from './avatar_box';
import user from '../../../assets/images/user.png';

function AvatarStatus() {
    return (
        <div className="avatar-box">
            <h6 className="label-dark">State</h6>
            <ul>
                <li>
                <AvatarBox 
                    src={user}
                    class="user-image"
                    status="status available"
                />
                </li>
                <li>
                <AvatarBox 
                    src={user}
                    class="user-image"
                    status="status busy"
                />
                </li>
                <li>
                <AvatarBox 
                    src={user}
                    class="user-image"
                    status="status offline"
                />
                </li>
                <li>
                <AvatarBox 
                    src={user}
                    class="user-image"
                    status="status away"
                />
                </li>
            </ul>
        </div>
    );
}

export default AvatarStatus;