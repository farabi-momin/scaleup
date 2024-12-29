import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function Frame6(){
    const panels = useRef([]);
    const panelsContainer = useRef();
  
    const createPanelsRefs = (panel, index) => {
      panels.current[index] = panel;
    };
  
    useEffect(() => {
      const totalPanels = panels.current.length;
  
      gsap.to(panels.current, {
        xPercent: -100 * (totalPanels - 1),
        ease: "none",
        scrollTrigger: {
          trigger: panelsContainer.current,
          pin: true,
          scrub: 1,
          snap: 1 / (totalPanels - 1),
          // base vertical scrolling on how wide the container is so it feels more natural.
          end: () => "+=" + panelsContainer.current.offsetWidth
        }
      });
    }, []);

    return(
        <>
        <div className="frame6" ref={panelsContainer}>
            <div ref={(e)=>createPanelsRefs(e, 0)} style={{backgroundColor:"red"}} className="panel">
                <p className="xxl-font">WHY CHOOSE US?</p>
            </div>
            <section ref={(e)=>createPanelsRefs(e, 1)} style={{backgroundColor:"red"}} className="panel">
                <p className="xxl-font">WHY CHOOSE US?</p>
            </section>
            <section ref={(e)=>createPanelsRefs(e, 2)} style={{backgroundColor:"red"}} className="panel">
                <p className="xxl-font">WHY CHOOSE US?</p>
            </section>
            <section ref={(e)=>createPanelsRefs(e, 3)} style={{backgroundColor:"red"}} className="panel">
                <p className="xxl-font">WHY CHOOSE US?</p>
            </section>
            <section ref={(e)=>createPanelsRefs(e, 4)} style={{backgroundColor:"red"}} className="panel">
                <p className="xxl-font">WHY CHOOSE US?</p>
            </section>
            <section ref={(e)=>createPanelsRefs(e, 5)} style={{backgroundColor:"red"}} className="panel">
                <p className="xxl-font">WHY CHOOSE US?</p>
            </section>
        </div>
        </>
        
    )
}
export default Frame6;