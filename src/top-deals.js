import './topdeals.css';
import React from "react";
import Slider from "react-slick";

function Responsive() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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
        <div className="slider-container">
            <div class="banner-1">
                <img src={require('./images/img-hero-1.jpg')} class="d-block w-100" alt="..."></img>
            </div>
            <div class="top-deals-title">
                Bestselling smartphones
            </div>
            <div class="deals-main">
                <div class="deal-banner">
                    <img src={require('./images/poco.jpg')} alt=""></img>
                </div>
                <div class="product-slider">
                    <Slider {...settings}>
                        <div>
                            <div class="product-card">
                                <div class="product-img">
                                    <img src={require('./images/12r.jpg')} alt=""></img>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="product-card">
                                <div class="product-img">
                                    <img src={require('./images/phone-2.jpg')} alt=""></img>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="product-card">
                                <div class="product-img">
                                    <img src={require('./images/phone-3.jpg')} alt=""></img>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="product-card">
                                <div class="product-img">
                                    <img src={require('./images/phone-4.jpg')} alt=""></img>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="product-card">
                                <div class="product-img">
                                    <img src={require('./images/phone-5.jpg')} alt=""></img>
                                </div>
                            </div>
                        </div>

                    </Slider>
                </div>

            </div>

        </div>
    );
}

export default Responsive;