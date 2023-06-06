import { useRef } from 'react';
import Link from './Link';
import SocialMedia from './SocialMedia';
import image from '../assets/images/header-img.jpg';
import './Header.css';

const Header = () => {
    const scrollTo = useRef(null);

    const handleScroll = () => {
        scrollTo.current.scrollIntoView();
    }

    return (
        <header className="header">
            <span className='header__welcome'>Hello I'm</span>
            <h1 className='header__name'>Cleariza Look</h1>
            <p className='header__position'>DevOps Developer</p>
            <div className='header__links'>
                <Link label='Download CV' theme="outlined"/>
                <Link label="Let's Talk" theme="primary"/>
            </div>

            <div className='header__image'>
                <img src={image} alt='Cleariza Look profile'/>
            </div>

            <span
                className='header__scroll'
                onClick={handleScroll}
            >
                Scroll down
            </span>

            <div className='header-socials'>
                <SocialMedia/>
            </div>

            <div ref={scrollTo}></div>
        </header>
    )
}

export default Header;
