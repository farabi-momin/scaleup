import React from "react";
import { useState } from "react";


function Frame7(){
    const [display, setDisplay] = useState(0);
    const showHideFunction = (e) =>{
        if(display == 0){
            setDisplay(e);
            document.getElementById('show-hide-icon').innerHTML = "-";
        }
        if (display > 0){
            setDisplay(0);
            document.getElementById('show-hide-icon').innerHTML = "+";
        }
    }
    return(
        <div className="frame7">
            <div className="grid-container">
                <div className="col">
                    <p className="m-font">PRICING TABLE</p><br/>
                    <p className="banner1 xl-font" style={{width:"70%", fontWeight:"500"}}>BE KIND TO YOUR MIND</p>
                    <br/><br/>
                    <div className="hide-show-tab">
                        <hr/>
                        <div className="tab">
                            <p onClick={()=>showHideFunction(1)} className="tab-title">Design should enrich our day<span className="show-hide-icon">+</span></p>
                            <p className={display===1? "tab-detail show":"tab-detail hide"}>ajofnoudfsandfsuofdsa</p>
                        </div>
                        <hr/>
                        <div className="tab">
                            <p onClick={()=>showHideFunction(2)} className="tab-title">Bring their individual experience and creative<span className="show-hide-icon">+</span></p>
                            <p className={display===2? "tab-detail show":"tab-detail hide"}>ajofnoudfsandfsuofdsa</p>
                        </div>
                        <hr/>
                        <div className="tab">
                            <p onClick={()=>showHideFunction(3)} className="tab-title">Human centered design to challanges<span className="show-hide-icon">+</span></p>
                            <p className={display===3? "tab-detail show":"tab-detail hide"}>ajofnoudfsandfsuofdsa</p>
                        </div>
                        <hr/>
                        <div className="tab">
                            <p onClick={()=>showHideFunction(4)} className="tab-title">Design should enrich our day<span className="show-hide-icon">+</span></p>
                            <p className={display===4? "tab-detail show":"tab-detail hide"}>ajofnoudfsandfsuofdsa</p>
                        </div>
                        <hr/>
                        <div className="tab">
                            <p onClick={()=>showHideFunction(5)} className="tab-title">Developing core web application<span className="show-hide-icon">+</span></p>
                            <p className={display===5? "tab-detail show":"tab-detail hide"}>ajofnoudfsandfsuofdsa</p>
                        </div>
                        <hr/>
                    </div>
                </div>
                <div className="col">
                    <div className="card black">
                        <p className="deal-span coral">Best Deal</p>
                        <p className="time-span">YEARLY</p>
                        <h1 className="price-span">$129.99</h1>
                        <h1 className="offer-span l-font">14 DAYS FREE</h1>
                        <p className="detail-span">Subscription fee is $129.99 USD and automatically renews each year.</p>
                        <p className="check-span coral">&#x2713;</p>
                    </div>
                    <div className="card white">
                        <p className="time-span">MONTHLY</p>
                        <h1 className="price-span">$12.99</h1>
                        <h1 className="offer-span l-font">7 DAYS FREE</h1>
                        <p className="detail-span">Subscription fee is $12.99 USD and automatically renews each month.</p>
                        <p className="check-span coral">&#x2713;</p>
                    </div>
                    <div className="circle-div try-span">
                        <p>Try it<br/>Free Now</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Frame7;