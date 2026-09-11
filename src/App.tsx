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
import NewTransactionModal from "./newTransactionModal";


function App() {
  const [showModal, setShowModal] = useState(false);

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
           <NewTransactionModal onClose={() => setShowModal(false)} />
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

  return <RouterProvider router = {router} />;
};

export default App;