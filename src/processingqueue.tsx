import DownloadDropdown from "./downloaddropdown";
import type { DownloadItem } from "./downloadTypes";

const ProcessingQueue = () => {
    const files = [
        { name: "INV-2024-001.pdf", size: "1.2 MB", vendor: "Microsoft", status: "Extracting data" },
        { name: "Q3_Chase_Statement.pdf", size: "842 KB", account: "...9021", status: "Verified" },
        { name: "Travel_Reimbursement_02.png", size: "842 KB", category: "Travel", status: "Parsed (Review Needed)" }
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
            <h2>Processing Queue</h2>
             <DownloadDropdown
                label="Downloads"
                downloads={downloads}
                onDownload={handleDownload}
            />
            <ul>
                {files.map((file, idx) => (
                    <li key={idx}>
                        <strong>{file.name}</strong> ({file.size} - {file.status})
                    </li>  
                ))}
            </ul>
        </div>
    );
};


export default ProcessingQueue;
