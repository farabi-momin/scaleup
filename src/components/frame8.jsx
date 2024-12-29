import React from "react";
import ss7 from '../assets/ss7.webp'
import ss8 from '../assets/ss8.webp'

function Frame8(){
    return(
        <div className="frame8">
            <div className="banner-1">
                <p className="m-font">RECENT BLOG</p><br/>
                <p className="xl-font">READ UPDATED JOURNAL</p>
            </div>
            <div className="grid-container">
                <div className="col-1">

                </div>
                <div className="col-2">
                    <p>Read our blog and try to see everything from every perspective. Our passion lies in making everything accessible and aesthetic for everyone.</p>
                </div>
            </div>
            <div className="container">
                <div className="content">
                    <div className="card">
                        <p className="head">UI Design. 02 May 2019</p>
                        <p className="body">How to bring fold to your startup company with Axtra</p>
                        <hr/>
                        <p className="foot">Read More</p>
                    </div>
                    <img src={ss7}/>
                </div>
                <div className="content">
                    <div className="card">
                        <p className="head">UI Design. 02 May 2019</p>
                        <p className="body">How to bring fold to your startup company with Axtra</p>
                        <hr/>
                        <p className="foot">Read More</p>
                    </div>
                    <img src={ss8}/>
                </div>
            </div>
        </div>
    )
}
export default Frame8;