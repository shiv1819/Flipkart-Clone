import './fashion.css';
import React from "react";
import Slider from "react-slick";

function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container fashion-container">
        <div class="fashion-container-title">
            fashion fiesta
        </div>
      <Slider {...settings}>
      <div>
          <img src={require('./images/fashion-banner-7.jpg')} alt=''></img>
        </div>
        <div>
          <img src={require('./images/fashion-banner-2.jpg')} alt=''></img>
        </div>
        <div>
          <img src={require('./images/fashion-banner-3.jpg')} alt=''></img>
        </div>
       
        <div>
          <img src={require('./images/fashion-banner-5.jpg')} alt=''></img>
        </div>
        <div>
          <img src={require('./images/fashion-banner-6.jpg')} alt=''></img>
        </div>
        <div>
          <img src={require('./images/fashion-banner-1.jpg')} alt=''></img>
        </div>
        
      </Slider>
    </div>
  );
}

export default SimpleSlider;
