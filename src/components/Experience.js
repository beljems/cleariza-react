import { BsFillPatchCheckFill } from "react-icons/bs";
import Heading from './Heading';
import './Experience.css';

const Experience = () => {
    const list = [
        {
            heading: 'Frontend Development',
            details: [
                {
                    name: 'HTML',
                    detail: 'Experienced'
                },
                {
                    name: 'JavaScript',
                    detail: 'Experienced'
                },
                {
                    name: 'CSS',
                    detail: 'Experienced'
                },
                {
                    name: 'Bootstrap',
                    detail: 'Experienced'
                },
                {
                    name: 'React',
                    detail: 'Experienced'
                }
            ]
        },
        {
            heading: 'Backend Development',
            details: [
                {
                    name: 'Node JS',
                    detail: 'Experienced'
                },
                {
                    name: 'PHP',
                    detail: 'Experienced'
                },
                {
                    name: 'Python',
                    detail: 'Experienced'
                },
                {
                    name: 'MongoDB',
                    detail: 'Experienced'
                },
                {
                    name: 'MySQL',
                    detail: 'Experienced'
                }
            ]
        }
    ];

    return (
        <section className='experience section-padding' id="experience">
            <div className='container'>
                <Heading heading='My Experience' subheading='Get To Know'/>
                <div className='experience__content'>
                    {list.map((item, key) => (
                    <div key={key} className='experience__col'>
                        <Heading h='3' heading={item.heading} size='medium'/>
                        <ul className="experience__list">
                            {item.details.map((value, subkey) => (
                            <li key={subkey} className="experience__item">
                                <span className="experience__item-icon">
                                    <BsFillPatchCheckFill/>
                                </span>
                                <p>
                                    {value.name}
                                    <span>{value.detail}</span>
                                </p>
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

export default Experience;
