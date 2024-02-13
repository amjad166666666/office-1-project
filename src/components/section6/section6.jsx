import React from "react";
import "./section6.css"; 

function Section6() {
    return (
    
    <div className="mainsection6">
        <div className="content6">
            <div className="textsec6">
                <h2>Filter Content & Apps</h2>
                <p>Keep the age-inappropriate content, apps & games out of your child’s access. Block apps & games, filter websites, and enable safe searches with content safety tools.</p>
                <div className="icons6">
                    <img src="images/app blocker.png" alt="" />
                    <span>Apps & Games Blocker </span>
                    <img src="images/web blocker.png" alt="" />
                    <span>Websites Blocker</span>
                    <br />
                    <img src="images/safe_internet.png" alt="" />
                    <span>Web Filters & SafeSearch</span>
                    <img src="images/approved app.png" alt="" />
                    <span>Approve Apps & Games</span>

                    <div className="btn_sec6">
                        <button>View All Features</button>
                        <button>Start Free Trial</button>
                    </div>
                </div>
                <div className="imgsec6">
                    <img src="images/home_web_blocker.png" alt="" />
                </div>
            </div>
        </div>
    </div>
      
    );
  }
  
  export default Section6;