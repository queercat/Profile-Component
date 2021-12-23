import './next.css'

import {useEffect, useRef} from 'react';

function Next(props) {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    const changeState = (e, toChange) => {
        e.preventDefault();
        props.setState(toChange);      
    }

    useEffect(() => {
        var elements = [homeRef.current, aboutRef.current, contactRef.current];

        elements.map(element => {
            element.classList.remove('active');
        });

        elements[props.state].classList.add('active');
    }, [props.state])
    
    return (
        <div className='elements'>
            <a ref={homeRef} className='element' href='' onClick={(e) => {changeState(e, 0)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z"/></svg>
            </a>

            <a ref={aboutRef} className='element' href='' onClick={(e) => {changeState(e, 1)}}>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M14 0v10l2-1.518 2 1.518v-10h4v24h-17c-1.657 0-3-1.343-3-3v-18c0-1.657 1.343-3 3-3h9zm6 20h-14.505c-1.375 0-1.375 2 0 2h14.505v-2z"/></svg>
            </a>

            <a ref={contactRef} className='element' href='' onClick={(e) => {changeState(e, 2)}}>
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/></svg>
            </a>
        </div>
    )
}

export default Next;