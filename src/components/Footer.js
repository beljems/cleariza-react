import Menu from './Menu';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p className='footer__name'>Cleariza Look</p>
            <Menu/>
            <p className='footer__copyright'><small>&copy; Copyright 2023</small></p>
        </footer>
    )
}

export default Footer;
