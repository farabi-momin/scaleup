import React from "react";
import ReactDOM from 'react-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import pic1 from '../assets/model1.png'
import pic2 from '../assets/model2.jpg'
import slidebtnP from '../assets/slide-btn-l.png'
import slidebtN from '../assets/slide-btn-r.png'

function Frame4(){
    const[activeSlide, setActiveSlide] = useState(1);
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        afterChange: current => setActiveSlide(current+1)
      };
      function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <img src={slidebtN} className="sliderBtnN" onClick={onClick}/>      
        );
    }
      
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <img src={slidebtnP} className="sliderBtnP" onClick={onClick}/>
        );
    }
    return(
        <div className="frame4">
            <p className="m-font">FEATURED WORK</p>
            <div className="slide-number">
                <h1>{activeSlide}/<sup>4</sup></h1>
            </div>
            <Slider {...settings} className="slider">
                <div className="container">
                    <div className="slide-text">
                        <h1 className="xxl-font">BENJON<br/>&emsp;WEBSITE<br/> 2012</h1>
                    </div>
                    <div className="slide-img-wrapper">
                        <img className="slide-img" src={pic1}/>
                    </div>
                </div>
                <div className="container">
                    <div className="slide-text">
                        <h1 className="xxl-font">BENJON<br/>&emsp;WEBSITE<br/> 2012</h1>
                    </div>
                    <div className="slide-img-wrapper">
                        <img className="slide-img" src={pic2}/>
                    </div>
                </div>
                <div className="container">
                    <div className="slide-text">
                        <h1 className="xxl-font">BENJON<br/>&emsp;WEBSITE<br/> 2012</h1>
                    </div>
                    <div className="slide-img-wrapper">
                        <img className="slide-img" src={pic1}/>
                    </div>
                </div>
                <div className="container">
                    <div className="slide-text">
                        <h1 className="xxl-font">BENJON<br/>&emsp;WEBSITE<br/> 2012</h1>
                    </div>
                    <div className="slide-img-wrapper">
                        <img className="slide-img" src={pic2}/>
                    </div>
                </div>
            </Slider>
        </div>
    )
}
export default Frame4;