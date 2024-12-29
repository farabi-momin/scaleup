import React from "react";
import ReactDOM from 'react-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import quotmark from '../assets/qm.png'
import ss1 from '../assets/ss1.png'
import ss2 from '../assets/ss2.png'
import ss3 from '../assets/ss3.png'
import ss4 from '../assets/ss4.png'
import ss5 from '../assets/ss5.png'
import ss6 from '../assets/ss6.png'
import slidebtnP from '../assets/slide-btn-l.png'
import slidebtN from '../assets/slide-btn-r.png'

function Frame5(){
    const settings = {
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
          };
          function SampleNextArrow(props) {
            const { className, style, onClick } = props;
            return (
                <div className="sliderBtnN" onClick={onClick}>&rarr;</div>  
            );
        }
          
        function SamplePrevArrow(props) {
            const { className, style, onClick } = props;
            return (
                <div className="sliderBtnP" onClick={onClick}>&larr;</div>
            );
        }
    return(
        <div className="frame5">
            <img src={ss1} className="ss1"/>
            <img src={ss2} className="ss2"/>
            <img src={ss3} className="ss3"/>
            <img src={ss4} className="ss4"/>
            <img src={ss5} className="ss5"/>
            <img src={ss6} className="ss6"/>
            <div className="slide-content">
                <img src={quotmark}/><br/>
                <Slider {...settings} className="slider">
                    <div className="container">
                        <p className="text">  When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!</p>
                        <p className="name l-font">MARIA D HALK</p>
                        <p className="title m-font">Managing Director</p>
                    </div>
                    <div className="container">
                        <p className="text">  When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!</p>
                        <p className="name l-font">MARIA D HALK</p>
                        <p className="title m-font">Managing Director</p>
                    </div>
                </Slider>
            </div>
        </div>
    )
}
export default Frame5;