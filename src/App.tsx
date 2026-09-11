import React, { useState} from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import "./App.css";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import Dashboard from "./dashboard";
import Sidebar from "./sidebar";
import Searchbar from "./searchbar";
import Documents from "./document";
import Transactions from "./transactions";
import TransactionModal from "./addtransaction";


function App() {
  const [showModal, setShowModal] = useState(false);
  
  const [transactionType, setTransactionType] = useState<"income" | "expenses" | null>(null);

  const router = createBrowserRouter([

    { path: "loginpage", element: <LoginPage /> },
    { path: "signup", element: <SignupPage /> },

    {
      path: "/",
      element: (
      <div className="web-layout">
        <Sidebar onTransactionClick={() => setShowModal(true)} />

        <main className="main-content">
          <Outlet />
        </main>
        {showModal && (
          <>
           <TransactionModal onClose={() => setShowModal(false)} />
          </>
          )}
      </div>
      ),
      children: [
      
      { path: "sidebar", element: <Sidebar onTransactionClick={() => setShowModal(true)} /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "searchbar", element: <Searchbar /> },
      { path: "document", element: <Documents />},
      { path: "transactions", element: <Transactions />},
      ],
    },
  ]);  
//     {showModal && (
//         <>
//           <div className="overlay" onClick={() => setShowModal(false)}></div>
//           <div className="modal">
//             <h1>New Transaction</h1>
//             <span className="modal-description">Add a new financial record to the ledger</span>

//             <div className="transaction-section">
//               <span>TRANSACTION TITLE</span>
//               <input type="text" placeholder="Enter transaction title" />
//             </div>
//             <div className="top-part">
//               <div className="type-section">
//                 <span>TYPE</span>
//                 <div className ="type-toogle">
//                   <button
//                     className={`transactionType ${transactionType === "income" ? "active" : "" }` }
//                     onClick={() => setTransactionType("income")}
//                   >
//                     Income
//                   </button>
//                   <button
//                     className={`transactionType ${transactionType === "expenses" ? "active" : "" }` }
//                     onClick={() => setTransactionType("expenses")}
//                   >
//                     Expense
//                   </button>
//                 </div>
//                 {/* <select>
//                   <option value="income">Income</option>
//                   <option value="expense">Expense</option>
//                 </select> */}
//               </div>

//               <div className="amount-section">
//                 <span>AMOUNT</span>
//                 <input type="number" />
//               </div>
//             </div>

//             <div className="bottom-part">
//               <div className="date-section">
//                 <span>DATE</span>
//                 <input type="date" />
//               </div>

//               <div className="category-section">
//                 <span>CATEGORY</span>
//                 <input type="text" placeholder="Select category" />
//               </div>
//             </div>
//             <div className="button-container">
//               <div className="close-section">
//                 <button className="close-button" onClick={() => setShowModal(false)}>
//                   Close
//                 </button>
//               </div>
            
//               <div className="add-transaction-section">
//                 <button className="add-transaction-button" onClick={() => setShowModal(false)}>
//                   Add Transaction
//                 </button>
//               </div>
//             </div>
//           </div>
//         </>
//       )};
// ]);


  // return (
  //   <Router>
  //     <Routes>
  //       <Route path="/loginpage" element={<LoginPage />} />
  //       <Route path="/signup" element={<SignupPage />} />
  //       <Route path="/sidebar" element={<Sidebar />} />
  //       <Route path="/dashboard" element={<Dashboard />} />
  //       <Route path="/searchbar" element={<Searchbar />} />
  //     </Routes>
  //   </Router>
  // );

  return <RouterProvider router = {router} />;
};

export default App;