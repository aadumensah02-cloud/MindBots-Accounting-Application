import React from "react";
import "./uploadarea.css";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";


const UploadArea: React.FC = () => {
   

   

 return (
    <div>
       <div className="upload-header">
         <h1 className="upload-head">Document Management</h1>
         <p className="upload-description">Securely upload and automate your financial data extraction</p>
       </div>
        <div className="upload-area"> 
            <div className="text-under-upload-area">
               <FontAwesomeIcon className="download-icon" icon={faDownload} />
               <div className="upload-text">
                  <span className="upper-span">Drop files here or click to upload</span>
                  <span className="lower-span">Support for PDF, JPG, PNG, AND XLSX (Max 25MB)</span>
               </div>

              <div className="category-buttons">
                  <button>Receipts</button>
                  <button>Invoives</button>
                  <button>Statements</button>
            </div> 
            </div>
            
        </div>
     </div>
    );
};

export default UploadArea;