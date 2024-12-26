import React from "react";
import line from '../assets/line.png'
import banner from '../assets/frame1banner.jpg'
import blogo1 from '../assets/brandlogo1.png'
import blogo2 from '../assets/brandlogo2.png'
import blogo3 from '../assets/brandlogo3.png'
import blogo4 from '../assets/brandlogo4.png'
import blogo5 from '../assets/brandlogo5.png'
import blogo6 from '../assets/brandlogo6.png'

function Frame1(){

    return(
        <div className="frame1">
                <h1 className="l-font">DIGITAL</h1><img className="h-line" src={line}/><br/>
                <h1 className="xxxl-font">MARK</h1><br/>
                <p className="para-1">Static and dynamic secure code review can prevent a day before your product is even released. We can integrate with your dev environment</p>
                <h1 className="xxxl-font tab">ETING</h1><br/>
                <div className="banner1">
                    <img className="bannerimg" src={banner}/>
                </div>
                <div className="footer">
                    <h1 className="m-font inline">WE WORKED GLOBAL LARGEST BRAND</h1><br/>
                    <div className="brandlogo-div">
                        <img src={blogo1} className="blogo"/>
                        <img src={blogo2} className="blogo"/>
                        <img src={blogo3} className="blogo"/>
                        <img src={blogo4} className="blogo"/>
                        <img src={blogo5} className="blogo"/>
                        <img src={blogo6} className="blogo"/>
                    </div>
                </div>
        </div>
    )
}
export default Frame1;
