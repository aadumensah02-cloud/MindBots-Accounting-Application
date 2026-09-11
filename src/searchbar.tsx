import React, { useState } from "react";
import "./searchbar.css";
import { Link } from "react-router-dom";
import Dashboard from "./dashboard";


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
                <span className="material-icons">settings</span>
                <span className="material-icons">notifications</span>
                <span className="material-icons">calender_today</span>
            </div>
            <div className = "profile">
                <img src="{profileImg}" alt="" className = "profile-pic"/>
            </div>
        </div>       
    ); 
};      

export default Searchbar;