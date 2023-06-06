import './Link.css';  

const Link = ({
    label = '',
    link = '',
    theme = '', // options: primary, outlined
    iconComponent = '',
    isTargetBlank = false,
    isActive = false,
    onClick = () => {}
}) => {
    return (
        <>
            <a 
                className={`link link--${iconComponent ? 'icon' : theme} ${isActive ? 'link--active' : ''}`} 
                href={link}
                target={`${isTargetBlank ? '_blank' : '_self'}`}
                onClick={onClick}
            >
                {iconComponent ? iconComponent : label}
            </a>
        </>
    )
}

export default Link;
