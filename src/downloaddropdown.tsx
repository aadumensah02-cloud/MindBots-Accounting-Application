import React, { useState } from "react";
import type { DownloadItem } from "./downloadTypes";
import './downloaddropdown.css'


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
                <tbody className="dropdown-menu">
                    {downloads.map((item) => (
                        <tr key={item.id} onClick={() => onDownload(item.id)}>
                            <span>{item.name}</span>
                            <span className={`status ${item.status.toLowerCase()}`}>{item.status}</span>
                        </tr>
                    ))}
                </tbody>
            )}
        </div>
    );
};


export default DownloadDropdown;