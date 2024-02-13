import React from "react";
import "./section8.css"; 

function Section8() {
    return (
    
    <div className="mainsection8">
        <div className="content8">
            <div className="textsec6">
                <h2>Advanced Location Tracker</h2>
                <p>View your child’s live location and the places they visited to track their real-world activities. Also, set safer geo-fence limits and get alerts about their movements.</p>
                <div className="icons8">
                    <img src="images/family_map.png" alt="" />
                    <span>Family Locator  </span>
                    <img src="images/places.png" alt="" />
                    <span>Places (Geofence)</span>
                    <br />
                    <img src="images/location.png" alt="" />
                    <span>Location Tracking </span>
                    <img src="images/TeenSafe.png" alt="" />
                    <span>TeenSafe Drive </span>

                    <div className="btn_sec8">
                        <button>View All Features</button>
                        <button>Start Free Trial</button>
                    </div>
                </div>
                <div className="imgsec8">
                    <img src="images/Image8.png" alt="" />
                </div>
            </div>
        </div>
    </div>
      
    );
  }
  
  export default Section8;