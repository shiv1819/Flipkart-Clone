import './about-article.css'
import React from "react";
import Slider from "react-slick";

function Fade() {
const settings = {
dots: false,
fade: true,
infinite: true,
speed: 500,
slidesToShow: 1,
slidesToScroll: 1,
waitForAnimate: false
};
return (
    <div class="about-article-main">
    <div class="article-slider-title">Innovation at Flipkart Group</div>
    <div className="slider-container about-slider">
        <Slider {...settings}>
            <div>
                <img src={require('../images/about-slider-2.png')} alt="..."></img>
                <div class="about-slider-content">
                    Leveraging GenAI to redefine the future of Indian e-commerce: Q&amp;A with Mayur Datar
                </div>
            </div>
            <div class="bg-trans">
                <img src={require('../images/about-slider-1.png')} alt="..."></img>
                <div class="about-slider-content">
                    Embracing Innovation and Empowerment: Flipkart’s Journey in 2023 and the Road Ahead
                </div>
            </div>
        </Slider>
    </div>
</div>
);
}

export default Fade;