import './Link.css';  

const Link = ({
    label = '',
    link = '',
    theme = '', // options: primary, outlined
    iconComponent = '',
    isTargetBlank = false,
    isActive = false,
    onClick = () => {},
    isButtonTag = false
}) => {
    const Buttontag = isButtonTag ? 'button' : 'a';

    return (
        <>
            <Buttontag 
                className={`link link--${iconComponent ? 'icon' : theme} ${isActive ? 'link--active' : ''} ${isButtonTag ? 'link--button' : ''}`} 
                href={link}
                target={`${isTargetBlank ? '_blank' : '_self'}`}
                onClick={onClick}
            >
                {iconComponent ? iconComponent : label}
            </Buttontag>
        </>
    )
}

export default Link;
