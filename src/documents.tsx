import UploadArea from "./uploadarea";
import ProcessingQueue from "./processingqueue";
import "./documents.css";

const Documents: React.FC = () => {
    return (
        <div className="documents-page">
           <UploadArea />
           <ProcessingQueue />

        </div>
    );
};


export default Documents;