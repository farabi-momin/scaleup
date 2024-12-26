import React from "react";
import banner from '../assets/frame2banner.jpg'

function Frame2(){
    return(
        <div className="frame2">
            <div className="container">
                <div className="col-1">
                        <div className="img-wrapper">
                            <img src={banner}/>
                        </div>
                </div>
                <div className="col-2">
                    <p>We're a team of strategic mdigital marketing working globally with largest brands, We believe that progress only happens when you refused to play things safe. We combine ideas and behaviours, and insights with design, technological data to produce brand experiences that customers love our services.</p><br/><br/><br/>
                    <div className="circle-div explore">
                            <p>Explore Us!</p>
                    </div>
                </div>
            </div>
            <div className="banner-1">
                <p className="m-font">WHO WE ARE?</p><br/>
                <h1 className="xl-font">WE ARE LEADING DIGITAL MARKETING AGENCY</h1>    
            </div>
        </div>
    )
}
export default Frame2;