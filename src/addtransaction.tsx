import React, { useState } from "react";

interface TransactionModalProps {
    onClose: () => void;
}

function TransactionModal({ onClose }: TransactionModalProps) {

    const [showModal, setShowModal]=useState(false);
    const [transactionType, setTransactionType] = useState("income"); 

    return (
        <div className="overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <h1>New Transaction</h1>
              <span className="modal-description">Add a new financial record to the ledger</span>

              <div className="transaction-section">
                 <span>TRANSACTION TITLE</span>
                 <input type="text" placeholder="Enter transaction title" />
              </div>
              <div className="top-part">
                    <div className="type-section">
                         <span>TYPE</span>
                        <div className ="type-toogle">
                            <button
                            className={`transactionType ${transactionType === "income" ? "active" : "" }` }
                            onClick={() => setTransactionType("income")}
                            >
                            Income
                            </button>
                            <button
                            className={`transactionType ${transactionType === "expenses" ? "active" : "" }` }
                            onClick={() => setTransactionType("expenses")}
                            >
                            Expense
                            </button>
                        </div>
                        {/* <select>
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </select> */}
                    </div>

                    <div className="amount-section">
                      <span>AMOUNT</span>
                       <input type="number" />
                    </div>
              </div>

              <div className="bottom-part">
                    <div className="date-section">
                      <span>DATE</span>
                      <input type="date" />
                    </div>

                    <div className="category-section">
                      <span>CATEGORY</span>
                      <input type="text" placeholder="Select category" />
                   </div>
              </div>
              <div className="button-container">
                    <div className="close-section">
                      <button className="close-button" onClick={() => setShowModal(false)}>
                          Close
                      </button>
                    </div>
              
                   <div className="add-transaction-section">
                       <button className="add-transaction-button" onClick={() => setShowModal(false)}>
                         Add Transaction
                       </button>
                   </div>
              </div>
            </div>
        </div>
    );
}

export default TransactionModal;