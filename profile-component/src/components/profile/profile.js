import './profile.css'

import Icon from './../icon/icon'
import {useEffect, useState} from 'react';
import Tilty from 'react-tilty';

function Profile() {
    const [profileObj, setProfileObj] = useState({})

    useEffect(() => {
        fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(json => {
            setProfileObj(json.results[0]);
        });
    }, []);

    const generateProfile = () => {
        const [name, picture, email] = [
            profileObj.name,
            profileObj.picture.large,            
            profileObj.email
        ]

        return (
            <div className='profile-content'>
                <div className='header'>
                    <img className='pfp' src={picture}/>
                    <div className='name-bar'>
                        <h1 className='name'>{name.first + ' ' + name.last}</h1>
                        <div className='socials'>
                            <Icon type='twitter'/>
                            <Icon type='instagram'/>
                        </div>
                    </div>
                    <p className='title'>Software Engineer</p>
                </div>

                <div className='description'>
                    <p className='email'>{email}</p>
                    <p className=''></p>
                </div>
            </div>
        )
    }

    return (
        <Tilty className="profile-container">
            {Object.keys(profileObj) != 0 ? (generateProfile()) : <></>}
        </Tilty>
    )
}

export default Profile;