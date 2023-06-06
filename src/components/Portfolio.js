import Heading from './Heading';
import Link from './Link';
import image from '../assets/images/portfolio-img.jpg';
import './Portfolio.css';

const Portfolio = () => {
    const list = [
        {
            image: image,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            links: [
                {
                    label: 'Github',
                    url: ''
                },
                {
                    label: 'Live Demo',
                    url: ''
                }
            ]
        },
        {
            image: image,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            links: [
                {
                    label: 'Github',
                    url: ''
                },
                {
                    label: 'Live Demo',
                    url: ''
                }
            ]
        },
        {
            image: image,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            links: [
                {
                    label: 'Github',
                    url: ''
                },
                {
                    label: 'Live Demo',
                    url: ''
                }
            ]
        },
        {
            image: image,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            links: [
                {
                    label: 'Github',
                    url: ''
                },
                {
                    label: 'Live Demo',
                    url: ''
                }
            ]
        },
        {
            image: image,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            links: [
                {
                    label: 'Github',
                    url: ''
                },
                {
                    label: 'Live Demo',
                    url: ''
                }
            ]
        },
        {
            image: image,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            links: [
                {
                    label: 'Github',
                    url: ''
                },
                {
                    label: 'Live Demo',
                    url: ''
                }
            ]
        }
    ];

    return (
        <section className='portfolio section-padding'>
            <div className='container'>
                <Heading heading='Portfolio' subheading='My Recent Work'/>
                <div className='portfolio__list'>
                    {list.map((item, key) => (
                    <div key={key} className='portfolio__item'>
                        <div className='portfolio__image'>
                            <img src={item.image} alt='portfolio 1'/>
                        </div>
                        <p className='portfolio__title'>{item.title}</p>
                        <div className='portfolio__buttons'>
                            {item.links.map((btn, subkey) => (
                            <Link 
                                key={subkey} 
                                href={btn.url} 
                                label={btn.label} 
                                theme={`${subkey === 0 ? 'outlined' : 'primary'}`}
                                isTargetBlank={true}
                            />
                            ))}
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio;
