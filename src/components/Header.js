import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';
import Link from './Link';
import SocialMedia from './SocialMedia';
import image from '../assets/images/header-img.jpg';
import './Header.css';

const Header = () => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
    });
    const scrollTo = useRef(null);

    const handleScroll = () => {
        scrollTo.current.scrollIntoView({
            behavior: 'smooth'
        });
    }

    const scrollEl = document.querySelector('.js-header__scroll');
    if(scrollEl) {
        if (inView) {
            scrollEl.removeAttribute('style');
        } else {
            scrollEl.style.opacity = 0;
        }
    }

    return (
        <header ref={ref} className="header">
            <span className='header__welcome'>Hello I'm</span>
            <h1 className='header__name'>Clariza Look</h1>
            <p className='header__position'>DevOps Engineer</p>
            <div className='header__links'>
                <Link label='Download CV' theme="outlined"/>
                <Link label="Let's Talk" theme="primary"/>
            </div>

            <div className='header__image'>
                <img src={image} alt='Clariza Look profile'/>
            </div>

            <span
                className='header__scroll js-header__scroll'
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
