import React from 'react';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      style={{ height: '300px' }}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/4b65a8f74b3202bf.jpg?q=50"
          alt="First slide"
          height={'300'}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2015/06/28/23/44/carousel-825046__340.jpg"
          alt="Second slide"
          height={'300'}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/12/25/19/39/france-1930715__340.jpg"
          alt="Third slide"
          height={'300'}
        />
      </Carousel.Item>
    </Carousel>
  );
}
