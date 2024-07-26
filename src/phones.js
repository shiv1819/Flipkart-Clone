import './phones.css';
import React from "react";
import Slider from "react-slick";

function Phone() {
var settings = {
dots: false,
infinite: false,
speed: 500,
slidesToShow: 7,
slidesToScroll: 3,
initialSlide: 0,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 4,
slidesToScroll: 2,
infinite: true,
dots: true
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 2,
slidesToScroll: 1,
initialSlide: 2
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 2,
slidesToScroll: 1
}
}
]
};
return (
<div className="slider-container phone-container">
    <div class="top-deals-title">
        Top Selling Smartphones
    </div>
    <div class="phone-main">

        <div class="mobile-slider">
            <Slider {...settings}>
                <div>
                    <div class="product-card mobile-card">
                        <div class="mobile-img">
                            <img src={require('./images/mobile-1.jpg')} alt=""></img>
                        </div>
                        <div class="product-title">
                            Realme narzo n53
                        </div>
                        <div class="product-price">
                            ₹19999 M.R.P.: <span><del>₹24999</del></span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="product-card mobile-card">
                        <div class="mobile-img">
                            <img src={require('./images/mobile-2.jpg')} alt=""></img>
                        </div>
                        <div class="product-title">
                            Realme narzo 60 5G
                        </div>
                        <div class="product-price">
                            ₹26999 M.R.P.: <span><del>₹29999</del></span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="product-card mobile-card">
                        <div class="mobile-img">
                            <img src={require('./images/mobile-3.jpg')} alt=""></img>
                        </div>
                        <div class="product-title">
                            iqoo neo 7 pro 5G
                        </div>
                        <div class="product-price">
                            ₹32999 M.R.P.: <span><del>₹36999</del></span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="product-card mobile-card">
                        <div class="mobile-img">
                            <img src={require('./images/mobile-4.jpg')} alt=""></img>
                        </div>
                        <div class="product-title">
                            iqoo z6 lite 5G
                        </div>
                        <div class="product-price">
                            ₹18999 M.R.P.: <span><del>₹20999</del></span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="product-card mobile-card">
                        <div class="mobile-img">
                            <img src={require('./images/mobile-5.jpg')} alt=""></img>
                        </div>
                        <div class="product-title">
                            Redmi 12 5G
                        </div>
                        <div class="product-price">
                            ₹19999 M.R.P.: <span><del>₹24999</del></span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="product-card mobile-card">
                        <div class="mobile-img">
                            <img src={require('./images/mobile-6.jpg')} alt=""></img>
                        </div>
                        <div class="product-title">
                            Apple iPhone 13 Pro Max
                        </div>
                        <div class="product-price">
                            ₹19999 M.R.P.: <span><del>₹24999</del></span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="product-card mobile-card">
                        <div class="mobile-img">
                            <img src={require('./images/mobile-7.jpg')} alt=""></img>
                        </div>
                        <div class="product-title">
                            Apple iPhone 13 Pro Max
                        </div>
                        <div class="product-price">
                            ₹19999 M.R.P.: <span><del>₹24999</del></span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="product-card mobile-card">
                        <div class="mobile-img">
                            <img src={require('./images/mobile-8.jpg')} alt=""></img>
                        </div>
                        <div class="product-title">
                            Apple iPhone 13 Pro Max
                        </div>
                        <div class="product-price">
                            ₹19999 M.R.P.: <span><del>₹24999</del></span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="product-card mobile-card">
                        <div class="mobile-img">
                            <img src={require('./images/mobile-9.jpg')} alt=""></img>
                        </div>
                        <div class="product-title">
                            Apple iPhone 13 Pro Max
                        </div>
                        <div class="product-price">
                            ₹19999 M.R.P.: <span><del>₹24999</del></span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="product-card mobile-card">
                        <div class="mobile-img">
                            <img src={require('./images/mobile-10.jpg')} alt=""></img>
                        </div>
                        <div class="product-title">
                            Apple iPhone 13 Pro Max
                        </div>
                        <div class="product-price">
                            ₹19999 M.R.P.: <span><del>₹24999</del></span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="product-card mobile-card">
                        <div class="mobile-img">
                            <img src={require('./images/mobile-11.jpg')} alt=""></img>
                        </div>
                        <div class="product-title">
                            Apple iPhone 13 Pro Max
                        </div>
                        <div class="product-price">
                            ₹19999 M.R.P.: <span><del>₹24999</del></span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="product-card mobile-card">
                        <div class="mobile-img">
                            <img src={require('./images/mobile-13.jpg')} alt=""></img>
                        </div>
                        <div class="product-title">
                            Apple iPhone 13 Pro Max
                        </div>
                        <div class="product-price">
                            ₹19999 M.R.P.: <span><del>₹24999</del></span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="product-card mobile-card">
                        <div class="mobile-img">
                            <img src={require('./images/mobile-14.jpg')} alt=""></img>
                        </div>
                        <div class="product-title">
                            Apple iPhone 13 Pro Max
                        </div>
                        <div class="product-price">
                            ₹19999 M.R.P.: <span><del>₹24999</del></span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="product-card mobile-card">
                        <div class="mobile-img">
                            <img src={require('./images/mobile-15.jpg')} alt=""></img>
                        </div>
                        <div class="product-title">
                            Apple iPhone 13 Pro Max
                        </div>
                        <div class="product-price">
                            ₹19999 M.R.P.: <span><del>₹24999</del></span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="product-card mobile-card">
                        <div class="mobile-img">
                            <img src={require('./images/mobile-16.jpg')} alt=""></img>
                        </div>
                        <div class="product-title">
                            Apple iPhone 13 Pro Max
                        </div>
                        <div class="product-price">
                            ₹19999 M.R.P.: <span><del>₹24999</del></span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="product-card mobile-card">
                        <div class="mobile-img">
                            <img src={require('./images/mobile-17.jpg')} alt=""></img>
                        </div>
                        <div class="product-title">
                            Apple iPhone 13 Pro Max
                        </div>
                        <div class="product-price">
                            ₹19999 M.R.P.: <span><del>₹24999</del></span>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
        
    </div>

</div>

);
}

export default Phone;