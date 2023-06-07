import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import image from '../assets/images/client-img.jpg';
import Heading from './Heading';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './Reviews.css';

const Reviews = () => {
    const reviews = [
        {
            image: image,
            name: 'Client Name',
            review: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
        },
        {
            image: image,
            name: 'Client Name',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
        },
        {
            image: image,
            name: 'Client Name',
            review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            image: image,
            name: 'Client Name',
            review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
            image: image,
            name: 'Client Name',
            review: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
    ];

    return (
        <section className='reviews section-padding' id="reviews">
            <div className='container'>
                <Heading heading='Testimonials' subheading='Review From Clients'/>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={true}
                    className='reviews__content'
                >
                    {reviews.map((item, key) => (
                    <SwiperSlide key={key} className='reviews__item'>
                        <div className='reviews__item-inner'>
                            <div className='reviews__image'>
                                <img src={item.image} alt='client name'/>
                            </div>
                            <h3 className='reviews__name'>{item.name}</h3>
                            <p className='reviews__desc'>{item.review}</p>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Reviews;
