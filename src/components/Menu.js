import { useState } from 'react';
import Link from './Link';
import './Menu.css';

const Menu = () => {
    const [isActive, setIsActive] = useState('Home');

    const handleClick = (e) => {
        e.preventDefault();
        const text = e.currentTarget.innerText;
        const href = e.currentTarget.getAttribute('href');
        isActive !== text && setIsActive(text);
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });
    }

    const list = ['Home', 'About', 'Experience', 'Services', 'Portfolio', 'Reviews', 'Contact'];

    return (
        <nav className="menu">
            {list.map((item, key) => (
                <Link 
                    key={key} 
                    label={item} 
                    link={`#${item.toLocaleLowerCase()}`}
                    isActive={isActive === item} 
                    onClick={(e) => handleClick(e)}
                />
            ))}
        </nav>
    )
}

export default Menu;
