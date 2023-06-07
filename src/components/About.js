import Link from './Link';
import Heading from './Heading';
import image from '../assets/images/about-img.jpg';
import './About.css';

const About = () => {
    return (
        <section className='about section-padding' id="about">
            <div className='container'>
                <Heading heading='About Me' subheading='Get To Know' />
                <div className='about__content'>
                    <div className='about__col about__col--image'>
                        <img src={image} alt='About Cleariza Look' />
                    </div>
                    <div className='about__col about__col--desc'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className='about__col-button'>
                            <Link label="Let's Talk" theme="primary" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
