import './fashion-slider.css';
import React from "react";
import Slider from "react-slick";

function FashionSlider() {
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
<div className="slider-container fashion-container">
    <div class="top-deals-title">
        Top Selling Fashion Brands
    </div>
    <div class="fashion-main">

        <div class="fashion-slider">
            <Slider {...settings}>
                <div>
                    <div class="product-card fashion-card">
                        <div class="tshirt-img">
                            <img src={require('./images/tshirt-1.jpg')} alt=""></img>
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
                    <div class="product-card fashion-card">
                        <div class="tshirt-img">
                            <img src={require('./images/tshirt-2.jpg')} alt=""></img>
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
                    <div class="product-card fashion-card">
                        <div class="tshirt-img">
                            <img src={require('./images/tshirt-3.jpg')} alt=""></img>
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
                    <div class="product-card fashion-card">
                        <div class="tshirt-img">
                            <img src={require('./images/tshirt 4.jpg')} alt=""></img>
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
                    <div class="product-card fashion-card">
                        <div class="tshirt-img">
                            <img src={require('./images/tshirt-5.jpg')} alt=""></img>
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
                    <div class="product-card fashion-card">
                        <div class="tshirt-img">
                            <img src={require('./images/tshirt-6.jpg')} alt=""></img>
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
                    <div class="product-card fashion-card">
                        <div class="tshirt-img">
                            <img src={require('./images/tshirt-7.jpg')} alt=""></img>
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
                    <div class="product-card fashion-card">
                        <div class="tshirt-img">
                            <img src={require('./images/tshirt-8.jpg')} alt=""></img>
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
                    <div class="product-card fashion-card">
                        <div class="tshirt-img">
                            <img src={require('./images/tshirt-9.jpg')} alt=""></img>
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
                    <div class="product-card fashion-card">
                        <div class="tshirt-img">
                            <img src={require('./images/tshirt-10.jpg')} alt=""></img>
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

export default FashionSlider;