import Heading from './Heading';
import './Services.css';

const Services = () => {
    const list = [
        {
            heading: 'UI/UX Design',
            details: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            ]
        },
        {
            heading: 'Web Development',
            details: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            ]
        },
        {
            heading: 'SEO',
            details: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            ]
        }
    ];

    return (
        <section className='services section-padding' id="services">
            <div className='container'>
                <Heading heading='Services' subheading='What I Offer'/>
                <div className='services__content'>
                    {list.map((item, key) => (
                        <div key={key} className='services__col'>
                            <Heading h='3' heading={item.heading} size='small'/>
                            <ul className="services__list">
                                {item.details.map((detail, subkey) => (
                                <li key={subkey} className="services__item">
                                    {detail}
                                </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services;
