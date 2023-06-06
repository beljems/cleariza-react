import { useState } from 'react';
import Link from './Link';
import './Menu.css';

const Menu = () => {
    const [isActive, setIsActive] = useState('Home');

    const handleClick = (e) => {
        e.preventDefault();
        const text = e.currentTarget.innerText;
        isActive !== text && setIsActive(text);
    }

    const list = ['Home', 'About', 'Experience', 'Services', 'Portfolio', 'Contact'];

    return (
        <nav className="menu">
            {list.map((item, key) => (
                <Link 
                    key={key} 
                    label={item} 
                    isActive={isActive === item} 
                    onClick={(e) => handleClick(e)}
                />
            ))}
        </nav>
    )
}

export default Menu;
