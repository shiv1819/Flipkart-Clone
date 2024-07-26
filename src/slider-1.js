import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import './slider-1.css'

function MultipleItems() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
        
      <Slider {...settings}>
        <div>
          <img src={require('./images/category-1.jpg')} alt=''></img>
        </div>
        <div>
          <img src={require('./images/category-2.jpg')} alt=''></img>
        </div>
        <div>
          <img src={require('./images/category-3.jpg')} alt=''></img>
        </div>
        <div>
          <img src={require('./images/category-4.jpg')} alt=''></img>
        </div>
        <div>
          <img src={require('./images/category-5.jpg')} alt=''></img>
        </div>
        <div>
          <img src={require('./images/category-6.jpg')} alt=''></img>
        </div>
        <div>
          <img src={require('./images/category-7.jpg')} alt=''></img>
        </div>
        <div>
          <img src={require('./images/category-8.jpg')} alt=''></img>
        </div>
        <div>
          <img src={require('./images/category-9.jpg')} alt=''></img>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;
