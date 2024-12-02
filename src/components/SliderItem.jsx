import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';

const SliderItem = ({ currentIndex, index, image, name, title, quote }) => {
  return (
    <article
      className='slide '
      style={{
        transform: `translateX(${100 * (index - currentIndex)}%)`,
        opacity: index === currentIndex ? 1 : 0,
        visibility: index === currentIndex ? 'visible' : 'hidden',
      }}
    >
      <img className='person-img' src={image} alt={name} />
      <h5 className='name'>{name}</h5>
      <p className='title'>{title}</p>
      <p className='text'>{quote}</p>
      <FaQuoteRight className='icon' />
    </article>
  );
};

export default SliderItem;
