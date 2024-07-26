import './article-slider.css'
import React from "react";

import Slider from "react-slick";

function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div class="article-slider-main">
            <div class="article-img">
              <img src={require('../images/article-1.jpg')} alt="..." class="phone-none"></img>
              <img src={require('../images/article-phone-1.png')} alt="..." class="phone-article"></img>
              <div class="article-img-content">
                <h1>Green win: How a Jeeves-F1 factory in Noida turned to solar power</h1>
                
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="article-slider-main">
            <div class="article-img">
            <img src={require('../images/article-2.jpg')} alt="..." class="phone-none"></img>
              <img src={require('../images/article-phone-2.png')} alt="..." class="phone-article"></img>
              <div class="article-img-content">
                <h1>Flipkart Group Companies Join Hands With Canopy To Advance Sustainability Efforts And Conserve Forests</h1>
                

              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="article-slider-main">
            <div class="article-img">
            <img src={require('../images/article-3.jpg')} alt="..." class="phone-none"></img>
              <img src={require('../images/article-phone-3.png')} alt="..." class="phone-article"></img>
              <div class="article-img-content">
                <h1>Making Sustainability Accessible #ForIndia</h1>
              </div>
            </div>
          </div>
        </div>

      </Slider>
    </div>
  );
}

export default AutoPlay;
