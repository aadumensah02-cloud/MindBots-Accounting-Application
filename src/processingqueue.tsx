import DownloadDropdown from "./downloaddropdown";
import type { DownloadItem } from "./downloadTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSync} from "@fortawesome/free-solid-svg-icons";
import './processingqueue.css'

const ProcessingQueue = () => {
    const files = [
        { name: "INV-2024-001.pdf", date: "2022-01-15", vendor: "Microsoft", status: "Extracting data" },
        { name: "Q3_Chase_Statement.pdf", date: "2022-03-10", account: "...9021", status: "Verified" },
        { name: "Travel_Reimbursement_02.png", date: "2022-04-05", category: "Travel", status: "Parsed (Review Needed" }
    ];

    const downloads: DownloadItem[] = [
        {id: 1, name: "Invoice #123", status: "Ready" },
        {id: 2, name: "Receipt #456", status: "Processing" },
        {id: 3, name: "Report Q3", status: "Failed" },
    ];

    const handleDownload = (id: number) => {
        console.log("Downloading the file with ID:", id);
    };


    return (
        <div className="processing-queue">
            <div className="processing-queue-header">
                <h2>Processing Queue</h2>
                <div className="header-buttons">
                    <div><button className="filter-button"><FontAwesomeIcon icon={faFilter} />Filter</button></div>
                    <div><button className="refresh-button"><FontAwesomeIcon icon={faSync} />Refresh</button></div>
    
                    <DownloadDropdown
                       label="Downloads"
                       downloads={downloads}
                       onDownload={handleDownload}
                    />
                </div>
            </div>

            <div className="processing-queue-table">
                <table>
                    <thead>
                        <tr>
                            <th>Document</th>
                            <th>Upload Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                          {files.map((file, idx) => (
                            <tr key={idx}>
                             <td><strong>{file.name}</strong></td> 
                             <td>{file.date}</td>
                             <td>{file.status}</td>
                          </tr>  
                            ))}    
                    </tbody>

                </table>
            </div>
            
             
            
        </div>
    );
};


export default ProcessingQueue;
