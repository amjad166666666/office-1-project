import React from "react";
import "./featureList.css";

const FeatureList = () => {
  return (
    <div className="fearure-main-Div">
      <div className="fearure-logo-div">
        <img className="featureLogose" src="images/logo1.png" alt="" />
        <img className="featureLogose" src="images/logo2.png" alt="" />
        <img className="featureLogose" src="images/logo3.png" alt="" />
        <img
          id="logofeature"
          className="featureLogose"
          src="images/logo4.png"
          alt=""
        />
        <img
          id="logofeature"
          className="featureLogose"
          src="images/logo5.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default FeatureList;
