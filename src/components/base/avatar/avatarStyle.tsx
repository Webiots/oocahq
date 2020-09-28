import React from 'react';
import AvatarBox from './avatar_box';
import user from '../../../assets/images/user.png';

function AvatarStyle() {
    return (
        <div className="avatar-box">
        <h6 className="label-dark">Style</h6>
        <ul>
          <li>
            <AvatarBox 
              src={user}
              class="user-image"
              status=""
            />
          </li>
          <li>
            <AvatarBox 
              src={user}
              class="avatar-184"
              status=""
            />
          </li>
          <li>
            <AvatarBox 
              src={user}
              class="metric-80"
              status=""
            />
          </li>
          <li>
            <AvatarBox 
              src={user}
              class="metric-32"
              status=""
            />
          </li>
        </ul>
      </div>
    );
}

export default AvatarStyle;