import './icon.css'
import {instagram_icon, twitter_icon} from './icons';

function Icon({type}) {

    const handleClick = (e) => {
        e.preventDefault();
    }

    const generateIcon = () => {
        let src_url=''

        switch(type) {          
            case 'instagram':
                src_url=instagram_icon;
                break;
            case 'twitter':
                src_url=twitter_icon;
                break;
            default:
                throw new Error('invalid icon type!');
        }

        return (
            <a href='' onClick={handleClick}><svg width="24" height="24" viewBox="0 0 24 24" className='icon'><path d={src_url}></path></svg></a>
        )
    }

    return (
        <>
            {generateIcon()}
        </>
    )
}

export default Icon;