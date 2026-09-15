import React, { useState } from "react";
import "./searchbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { faGear, faBell } from "@fortawesome/free-solid-svg-icons";

const Searchbar: React.FC = () => {
    const [searchText, setSearchText] = useState("");

    return (
        <div className="search-box">
            <div className="searchbar-head1">
              <h2>MindBots</h2>
            </div>
            <div className="searchbar-head2">
                <h2>Dashboard</h2>
            </div>
            <div className="searchbar">
                <div className = "search-bar">
                    <input
                    type="text" 
                    className = "search-input"
                    placeholder = "search data"
                    value ={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
                <div className='searchbar-icons'>
                    <span className="material-icons"><FontAwesomeIcon  icon={faGear} /></span>
                    <span className="material-icons"><FontAwesomeIcon icon={faBell} /></span>
                    <div className="vertical-line1"></div>
                </div>
                <div className = "profile">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS46PBxfPpq3zIGSUZs1S67c1oKTEqBgKFBEp-WjdItgg&s=10" alt="a female profile picture" className = "profile-pic"/>
                    <div className="profile-text">
                        <span className="line-one">Hello, User</span>{" "}
                        <span className="line-two">Here to help you succeed financially</span>
                    </div>
                    <div className="vertical-line2"></div>
                </div>
                
                <FontAwesomeIcon className="three-dots-icon" icon={ faEllipsisH } />
            </div>
        </div>       
    ); 
};      

export default Searchbar;