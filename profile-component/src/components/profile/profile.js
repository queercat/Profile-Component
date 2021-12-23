import './profile.css'

import Icon from './../icon/icon'
import {useEffect, useState} from 'react';
import Tilty from 'react-tilty';

function Profile() {
    const [profileObj, setProfileObj] = useState({})
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(json => {
            setProfileObj(json.results[0]);
        });

        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, []);

    const generateProfile = () => {
        var name, picture, email, titles;
        
        if (Object.keys(profileObj) != 0) {
            [name, picture, email] = [
                profileObj.name,
                profileObj.picture.large,            
                profileObj.email
            ]
        } else {
            [name, picture, email] = [
                {first: '', last: ''},
                '',           
                []
            ]
        }

        return (
            <div className='profile-content'>
                <div className='header'>
                    <img className='pfp' alt='pfp' src={picture}/>
                    <div className='name-bar'>
                        <h1 className='name'>{name.first + ' ' + name.last}</h1>
                        <div className='socials'>
                            <Icon type='twitter'/>
                            <Icon type='instagram'/>
                        </div>
                    </div>
                    {}
                </div>

                <div className='description'>
                    <p className='email'>{email}</p>
                </div>
            </div>
        )
    }

    return (
        <>
        {isMobile ? 
            (<div className='profile-container'>{generateProfile()}</div>) 
            : 
            (<Tilty className="profile-container">{generateProfile()}</Tilty>)
        }
        </>
    )
}

export default Profile;