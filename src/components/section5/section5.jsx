import React from "react";
import "./section5.css"; 

function Section5() {
    return (
    
        <div className="main_section5">
            <div className="sectionH1">
                <h1>FamilyTime Parental Control App – Assisting 
                 <br /> Your Digital Parenting Journey</h1>
                 <p>Digital parenting is complex when you are doing it alone. FamilyTime parental monitoring app assists  <br /> on this journey, making it simple. </p>
            </div>

            <div className="picAndText">
              <div className="imgSec5">
                <img className="img5pc" src="images/Image (7).png" alt="" />
              </div>
              <div className="Textpic5">
                <h2>Smart Screen Time Controls</h2>
                <p className="sec5-p">Foster balanced and responsible device  usage among kids by using ultimate screen time controls to limit screen time,  set daily app limits, and schedule the internet.</p>

                <div className="smalltexts">
                  <div id="sec-5-btn" className="sec5buttons">
                  <img src="images/screen_time.png" alt="" />
                  <div>Schedule Screen Time</div>
                  </div>
                  <div id="sec-5-btn" className="sec5buttons">

                  <img src="images/daily_app.png" alt="" />
                  <div>Daily Usage Limits</div>
                  </div>
                  
                  <div className="sec5buttons">

                  <img src="images/individual_app.png" alt="" />
                  <div>Individual app limit </div>
                  </div>
                  <div className="sec5buttons">

                  <img width={25} src="images/internet_schedules.png" alt="" />
                  <div>Schedule internet </div>
                  </div>
                  
                </div>

                <div className="btnSec5">
                  <button id="btn-Sec5" className="btn-sec-5">View All Features</button>
                  <button  className="btn-sec-5">Start Free Trial</button>
                </div>
              </div>
            </div>

        </div>
      
    );
  }
  
  export default Section5;