import React from "react";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faFileInvoice, faFileAlt, faRobot} from "@fortawesome/free-solid-svg-icons";
// import Searchbar from "./searchbar";


interface NewtransactionProps {
    onTransactionClick: () => void;
}

const Sidebar: React.FC<NewtransactionProps> = ({onTransactionClick}) => {
    const currentPath = window.location.pathname;

   return (
     <div>
        <div className  = "sidebar-header">
           
          <div className="sidebar-logo">
                <div className="sidebar-mindbots">
                   <h1>MindBots</h1>
                   <p>Accounting App</p>
                </div>
                {/* <div className="sidebar-head">
                    < Searchbar />
                </div> */}
          </div>
          
            <aside className = "sidebar">
                <nav className = "sidebar-nav">
                    <a href="/dashboard" className={currentPath === "/dashboard" ? "nav-link active" : "nav-link"}><FontAwesomeIcon icon = {faTachometerAlt} className = "icon" />Dashboard</a>
                    <a href="/transactions" className={currentPath === "/transactions" ? "nav-link active" : "nav-link"}> <FontAwesomeIcon icon = {faFileInvoice}  className = "icon" />Transactions</a>
                    <a href="/documents" className={currentPath === "/documents" ? "nav-link active" : "nav-link"}><FontAwesomeIcon icon = {faFileAlt}  className = "icon" />Documents</a>
                    <a href="/aiassistant" className={currentPath === "/aiassistant" ? "nav-link active" : "nav-link"}><FontAwesomeIcon icon = {faRobot} className = "icon" />AI Assistant</a>
                </nav>
                <div className = "bottom-part">
                     <button className = "sidebar-button" onClick={(e) => {
                        e.preventDefault();
                        onTransactionClick();
                    }}>
                        + New Transaction
                    </button> 
                    <a href="/loginpage">
                     <i className="fas fa-arrow-right-from-bracket"></i> Logout
                    </a>
                </div>
            </aside>
        </div>
        </div>
   );
};



export default Sidebar;
