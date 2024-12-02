import React, { useEffect, useState } from 'react';
import SliderItem from './SliderItem';
import { longList } from '../data';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
const SliderCom = () => {
  const [people] = useState(longList);
  const [currentIndex, setCurrentIndex] = useState(0);
  const peoplesLength = people.length;

  const changePrev = () => {
    setCurrentIndex((oldPerson) => {
      const result = (oldPerson - 1 + peoplesLength) % peoplesLength;
      return result;
    });
  };
  const changeNext = () => {
    setCurrentIndex((oldPerson) => {
      const result = (oldPerson + 1) % peoplesLength;
      return result;
    });
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      changeNext();
    }, 2000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentIndex]);

  return (
    <section className='slider-container'>
      {people.map((person, index) => (
        <SliderItem
          key={people.id}
          index={index}
          currentIndex={currentIndex}
          {...person}
        />
      ))}
      <button type='button' onClick={changePrev} className='prev'>
        {' '}
        <FiChevronLeft />
      </button>
      <button type='button' onClick={changeNext} className='next'>
        {' '}
        <FiChevronRight />
      </button>
    </section>
  );
};

export default SliderCom;
