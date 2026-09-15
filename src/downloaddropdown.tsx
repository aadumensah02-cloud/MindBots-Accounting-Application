import React, { useState } from "react";
import type { DownloadItem } from "./downloadTypes";


interface DownloadDropdownProps {
    label: string;
    downloads: DownloadItem[];
    onDownload: (id: number) => void;
}

const DownloadDropdown: React.FC<DownloadDropdownProps> = ({ label, downloads, onDownload }) => {
    const [ isOpen,  setIsOpen ] = useState(false);

    return (
        <div className="download-dropdown">
            <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}> 
               {label}
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    {downloads.map((item) => (
                        <li key={item.id} onClick={() => onDownload(item.id)}>
                            <span>{item.name}</span>
                            <span className={`status ${item.status.toLowerCase()}`}>{item.status}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};


export default DownloadDropdown;