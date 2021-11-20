import React from 'react';
import style from "./profile.module.css";
import Details from "./Details/Details"
import Photo from "./Photo/Photo"

function Profile() {
    return (
      <div className={style.profilebody}>
        <div>
          <Details />
        </div>
        <div>
          <Photo />
        </div>
      </div>
    );
}

export default Profile
