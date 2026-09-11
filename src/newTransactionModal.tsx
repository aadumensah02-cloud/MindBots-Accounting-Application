import React, { useState } from "react";
import "./newTransactionModal.css";


interface Props {
    onClose: () => void;
}

const NewTransactionModal: React.FC<Props> = ({ onClose }) => {
    const [transactionType, setTransactionType] = useState<"Income" | "Expenses">("Income");
    const [category, setCategory] = useState("")

    return (
        <div className="overlay">
            <div className="modal" onClick ={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <h1>New Transaction</h1>
                <span className="modal-description">
                    Add a new financial record to the ledger
                </span>

                <div className="transaction-section">
                    <span>Transaction Title</span>
                    <input type="text" placeholder="e.g. Server Maintenance Oct" />
                </div>
                <div className="transaction-top-section">
                    <div className="type-section">
                        <span>Transaction Type</span>
                        <div className="type-buttons">
                            <button className={`type-btn ${transactionType === "Income" ? "active" : ""}`}
                                onClick={() => setTransactionType("Income")}
                                >
                                Income
                            </button>
                            <button className={`type-btn ${transactionType === "Expenses" ? "active" : ""}`}
                                onClick={() => setTransactionType("Expenses")}
                                >
                                Expenses
                            </button>
                        </div>
                    </div>
                    <div className="amount-section">
                        <span>Amount</span>
                        <input type="number" placeholder="GHS 0.00" />
                    </div>
                </div>
                <div className="transaction-bottom-section">
                    <div className="date-section">
                        <span>Date</span>
                        <input type="date" />
                    </div>
                    <div className="category-section">
                        <span>Category</span>
                        <select  value={category} onChange={(e) => setCategory(e.target.value)} >
                            <option value="">Select a category</option>
                            <option value="food">Food</option>
                            <option value="transport">Transport</option>
                            <option value="utilities">Utilities</option>
                            <option value="salary">Salary</option>
                            <option value="entertainment">Entertainment</option>
                        </select>
                    </div>
                </div>
                <div className="transaction-buttons">
                    <button className="transaction-button">Add Transaction</button>
                    <button className="close-btn" onClick={onClose}>
                        Cancel                
                    </button>
                </div>
                <span className="footer-text">@MindBots Accounting Application</span>
            </div>
        </div>
    );
};

export default NewTransactionModal;