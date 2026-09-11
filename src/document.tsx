import React, { useState }from "react";

const Documents: React.FC = () => {
    interface Document {
        id: number;
        name: string;
        size: string;
        status: string;
        category?: string;
    }
    
    const DocumentManager: React.FC = () => {
       const [documents, setDocuments] = useState<Document[]>([
           {id: 1, name: "INV-2024-001.pdf", size: "2.1 MB", status: "Extracting Data"},
           {id: 1, name: "03-Chase_Statemant.pdf", size: "4.5 MB", status: "Verified"},
           {id: 1, name: "INV-2024-001.pdf", size: "2.1 MB", status: "Parsed (Review Needed)", category: "Travel"},
       ]);
    
       const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const newDocs = Array.from(event.target.files).map((file, index) => ({
                id:documents.length + index + 1,
                name: file.name,
                size: `${(file.size / 1024).toFixed(1)} KB}`,
                status: "Uploaded",
    
            }));
            setDocuments([...documents, ...newDocs]);
        }
       };
    
       return (
        <div className="document-manager">
            <div className="upload-area">
                <input type="file" multiple onChange={handleUpload}  />
                <p>Drop files here or click to uppload. Support: PDF, JPG, PNG,</p>
    
            <div className ="category-buttons">
                <button>Receipts</button>
                <button>Invoices</button>
                <button>Statements</button>
            </div>
            <div className="processing-queue">
                <h3>Processing Queue</h3>
                <ul>
                    {documents.map((doc) => (
                        <li key={doc.id}>
                            <strong>{doc.name}</strong> - {doc.size} - {doc.status}
                            {doc.category && <span> | Categroy: {doc.category}</span>}
                        </li>
                    ))}
                </ul>
            </div>
            </div>
           
        </div>
       );
    }; 
    
};

export default Documents;