import { BsFillEnvelopeFill, BsFillPinMapFill } from "react-icons/bs";
import Link from './Link';
import Heading from './Heading';
import './Contact.css';

const Contact = () => {
    const boxes = [
        {
            name: 'Email',
            user: 'contact@clariza.com',
            url: 'mailto:contact@clariza.com',
            icon: <BsFillEnvelopeFill/>
        },
        {
            name: 'Location',
            user: 'Perth, Western Australia',
            url: '',
            icon: <BsFillPinMapFill/>
        }
    ]

    return (
        <section className='contact section-padding' id="contact">
            <div className='container'>
                <Heading heading='Contact' subheading='Get In Touch'/>
                <div className='contact__content'>
                    <div className='contact__col contact__col--boxes'>
                        {boxes.map((box, key) => (
                        <div key={key} className='contact__box'>
                            {box.icon}
                            <h3>{box.name}</h3>
                            <span>{box.user}</span>
                            {/*
                            <div className='contact__box-link'>
                                <Link 
                                    label="Send a message" 
                                    link={`${box.url}`} 
                                    isTargetBlank={true}
                                />
                            </div>
                            */}
                        </div>
                        ))}
                    </div>
                    {/*
                    <div className='contact__col'>
                        <form className='contact__form'>
                            <div className='contact__form-group'>
                                <input type="text" name="name" placeholder='Your Name'/>
                            </div>
                            <div className='contact__form-group'>
                                <input type="email" name="email" placeholder='Your Email'/>
                            </div>
                            <div className='contact__form-group'>
                                <textarea name="message" placeholder='Message'/>
                            </div>
                            <Link isButtonTag={true} label="Submit" theme="primary"/>
                        </form>
                    </div>
                    */}
                </div>
            </div>
        </section>
    )
}

export default Contact;
