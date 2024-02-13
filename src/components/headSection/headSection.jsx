import React from "react";
import "./headSection.css";
import FeatureList from "../featureList/featureList";

function HeadSection() {
  return (
    <div className="HeadSection-main-Div">
      <div className="main-head-section-div">
        <div className="contant">
          <h2 className="heading-main">
            The Most Trusted <br />
            <span className="span-text">Parental Control App</span>
            <br /> for Families
          </h2>
          <h4 className="description">
            Over 4 million parents worldwide trust the FamilyTime <br />{" "}
            parental monitoring app for its integrated screen time <br />{" "}
            limits, digital safety, and parenting tools.
          </h4>
          <div className="main-btn-div">
            <button className="headSection-Btn">Start Fre Trial</button>
            <button id="btn-hedsection" className="headSection-Btn">
              Live Chat
            </button>
          </div>
          <div className="Awards-div">
            <img className="Awards-img" src="images/Awards.png" alt="" />
          </div>
        </div>
        <div className="home-baner-div">
          <img
            src="images/home_banner_image.png"
            alt=""
            className="home-banner-img"
          />
        </div>
      </div>
      <FeatureList/>
    </div>
  );
}

export default HeadSection;
