import React from 'react';
import './ProfileCards.css';

function ProfileCard({avatar, name, occupation, hobbies}){
    return(
        <div className="profile-card">
            <img src={avatar} alt={`${name} avatar`} className="profile-avatar"/>
            <h2 className="profile-name">{name}</h2>
            <p className="profile-occupation">Род деятельности: {occupation}</p>
            <p className="profile-hobbies">Хобби: {hobbies}</p>
        </div>
    );
}

export default ProfileCard;