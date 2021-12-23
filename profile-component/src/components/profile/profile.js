import './profile.css'

import Icon from './../icon/icon'
import {useEffect, useState, useRef} from 'react';
import Tilty from 'react-tilty';
import Card from './card';

function Profile({profileObj, aboutObj, children, contactObj}) {
    const [isMobile, setIsMobile] = useState(false);
    const loadRef = useRef(null)
    const giantRef = useRef(null)

    useEffect(() => {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, []);

    useEffect(() => {
        setTimeout(() => {
            let element = loadRef.current;
            element.classList.add('seen');
        }, 0);
        
    }, [loadRef])

    const generateProfile = () => {
        const {name, picture, email, titles} = profileObj;
        
        return (
            <div ref={loadRef} className='profile-content hidden'>
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

    const generateAbout = () => {
        return (
            <div ref={loadRef} className='profile-content hidden'>
                <Card giantRef={giantRef} title='B & R Autowrecking' subtitle='Fullstack Developer'/>
                <Card giantRef={giantRef} title='ChickTech' subtitle='Educational Mentor'/>
            </div>
        )
    }

    if (profileObj !== undefined) {
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

    if (aboutObj !== undefined) {
        return (
            <>
                <div ref={giantRef} className='giant-page-container hidden'/>
                {isMobile ? 
                    (<div className='profile-container'>{generateAbout()}</div>) 
                    : 
                    (<Tilty className="profile-container">{generateAbout()}</Tilty>)
                }
            </>
        )
    }

    if (contactObj !== undefined) {
        return (
            <>
            {isMobile ? 
                (<div className='profile-container'>{}</div>) 
                : 
                (<Tilty className="profile-container">{}</Tilty>)
            }
            </>
        )
    }
}

export default Profile;