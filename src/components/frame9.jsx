import React from "react";
import logo from '../assets/logo-white.webp'

function Frame9(){
    return(
        <div className="frame9">
            <div className="grid-container">
                <div className="col-1">
                    <img src={logo}/>
                    <p>When do they work well, and when do they on us and finally, when do we actually need how can we avoid them.</p>
                </div>
                <div className="col-2">
                    <p>FACEBOOK</p>
                    <p>TWITTER</p>
                    <p>LINKEDIN</p>
                    <p>INSTAGRAM</p>
                </div>
                <div className="col-3">
                    <p className="xl-font">LET'S TALK</p>
                </div>
            </div>
            <div className="footer">
            <div className="footer-nav-bar">
                    <span>ABOUT US</span>
                    <span>CONTACT US</span>
                    <span>CAREER</span>
                    <span>FAQS</span>
                </div>
                <p className="footer-text">2002-2025|Alrights reserved by Wealcoder</p>
            </div>
        </div>
    )
}
export default Frame9;