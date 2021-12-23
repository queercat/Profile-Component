import './profile.css'

import Icon from './../icon/icon'
import {useEffect, useState} from 'react';
import Tilty from 'react-tilty';

function Profile({profileObj, children}) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, []);

    const generateProfile = () => {
        const {name, picture, email, titles} = profileObj;
        
        return (
            <div className='profile-content'>
                <div className='header'>
                    <img className='pfp' alt='pfp' src={picture}/>
                    <div className='name-bar'>
                        <h1 className='name'>{name.first + ' '}<span className='last'>{name.last}</span></h1>
                        <div className='socials'>
                            <Icon type='twitter'/>
                            <Icon type='instagram'/>
                            <Icon type='linkedin'/>
                        </div>
                    </div>
                    {titles.map(title => <p className='title' key={title.first}>{title.first + ' '}<span className='last2'>{title.last}</span></p>)}
                </div>

                <div className='description'>
                    {children}
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