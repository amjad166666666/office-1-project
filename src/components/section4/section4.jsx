import React from "react";
import "./section4.css"; 

function Section4() {
  return (
    <>
      <div className="section4">
        <div className="content">
          <h1 className="heding-erly">
            Best Parental Control App Tailored <br /> for Every Age Group 
          </h1>
          <p>
            FamilyTime – The best parental control app offers digital well-being
            solutions for every age <br />group to help you deal with the
            diverse challenges of digital parenting.
          </p>
        </div>

        <div className="sub-content">
          <span className="early_childhood">Early Childhood</span>
          <span className="early_child">Pre-teens</span>
          <span className="early_child">Teenagers</span>
        </div>

        <div className="early">
          <div className="early-text4">
            <h2 className="early-text">3–8 Years Old | Early Childhood</h2>
            <p className="early-text-dsc">
              Your little ones are attracted to digital screens and <br /> obsessed
              with watching them for hours, which calls <br /> for moderation.
            </p>
            <ul>
              <li className="early-texts">
                Set up schedules for screen time to limit their screen
                exposure. 
              </li>
              <li className="early-texts">
                Block unsafe apps and games to avoid accidental exposure to the
                wrong content.
              </li>
              <li className="early-texts">
                Enable Safe Search filters to block inappropriate content
                access.
              </li>
            </ul>
            <div className="mini-icon">
              <div className="icon1">
                <img src="images/icon1.png" alt="" />
                <div>Screen Time</div>
              </div>
              <div className="icon1">
                <img src="images/icon2.png" alt="" />
                <div>Apps & Game Blocker</div>
              </div>
              
              <div className="icon1">
                <img src="images/daily_app.png" alt="" />
                <div>SafeSearch</div>
              </div>
            </div>
          </div>
          <div className="img">
            <img src="images/familytime_app_blacker.png" alt="" />
          </div>
        </div>

        <div className="btns4">
          <button className="trial">Start Free Trial</button>
          <button className="liveChat">Live Chat</button>
        </div>

       <div className="apps-icon-main-div">

       <div>
        <img src="images/apps-icons.png" alt="" />
       </div>

       </div>
      </div>
    </>
  );
}

export default Section4;
