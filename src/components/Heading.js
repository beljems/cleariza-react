import './Heading.css';

const Heading = ({
    h = '2',
    heading = '',
    subheading = '',
    size = '' // option: medium, small
}) => { 
    const CustomHeading = `h${h}`; // if wanted to change the tag, make it capital letter first
    return (
        <div className='heading-wrap'>
            <CustomHeading className={`heading ${
                size === 'medium' ? 'heading--medium' : 
                size === 'small' ? 'heading--small' : ''
            }`}>
                {subheading && (<span>{subheading}</span>)}{heading}
            </CustomHeading>
        </div>
    )
}

export default Heading;
