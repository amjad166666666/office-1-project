import React from "react";
import "./section7.css"; 

function Section7() {
    return (
    
        <div className="main_section7">
           

            <div className="picAndText7">
              <div className="imgSec7">
                <img src="images/home_text_messages.png" alt="" />
              </div>
              <div className="Textpic7">
                <h2>Monitor Kid’s Phone Activities </h2>
                <p>Stay up to date with your child’s digital activities by cell <br /> phone monitoring, reviewing web searches, social media <br /> chats, and more to set or change rules accordingly.</p>

                <div className="smalltexts7">
                  <img src="images/social_media.png" alt="" />
                  <span>Social Media Monitoring </span>
                  <img src="images/calls.png" alt="" />
                  <span>Calls</span>
                  <br />
                  <img src="images/sms.png" alt="" />
                  <span>Text Messages</span>
                  <img src="images/web.png" alt="" />
                  <span>Web History </span>
                  
                  <br />
                  <img src="images/youtube.png" alt="" />
                  <span>YouTube Watched History </span>
                  <img src="images/tiktok.png" alt="" />
                  <span>TikTok Watched History  </span>
                  
                </div>

                <div className="btnSec7">
                  <button>View All Features</button>
                  <button>Start Free Trial</button>
                </div>
              </div>
            </div>

        </div>
      
    );
  }
  
  export default Section7;