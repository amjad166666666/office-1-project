import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div>
      <nav className="main-Nav">
        <div className="logo-Div">
          <img className="logo-img" src="images/logo.png" alt="" />
        </div>
        <ul className="item-Ul">
          <li className="main-Li">Features</li>
          <li className="main-Li">Guides</li>
          <li className="main-Li">
            <button className="btn-1">Princing</button>
          </li>
          <li className="main-Li">
            <button className="btn-2">Try It Free</button>
          </li>
        </ul>
        <div className="humburgr-Div">
          <img
            className="humBurgr-img"
            src="https://www.svgrepo.com/show/390485/burger-list-menu-navigation.svg"
            alt=""
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;
