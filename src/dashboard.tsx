import React, { useState } from "react";
import Sidebar from "./sidebar";
import "./dashboard.css";
import Searchbar from "./searchbar"

const Dashboard: React.FC = () => {
    const [showModal,setShowModal] = useState(false);


    return (
      <div className = "Top-part">
          <Searchbar />
          <Sidebar onTransactionClick={() => setShowModal(true)}/>   
      </div>
    );
};


export default Dashboard;