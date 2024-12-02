import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FaQuoteRight } from 'react-icons/fa';

import { longList } from './data';
const SlickCarousel = () => {
  const [people] = useState(longList);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
  };
  return (
    <section className='slick-container '>
      <Slider {...settings}>
        {people.map((person) => {
          const { id, image, name, title, quote } = person;
          return (
            <article key={id}>
              <img className='person-img' src={image} alt={name} />
              <h5 className='name'>{name}</h5>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}
      </Slider>
    </section>
  );
};

export default SlickCarousel;
