import { useState} from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import "./App.css";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import Dashboard from "./dashboard";
import Sidebar from "./sidebar";
import NewTransactionModal from "./newTransactionModal";
import Searchbar from "./searchbar";
import Transactions from "./transactions";
import Documents from "./documents";
import AiAssistant from "./aiassistant";



function AppLayout() {
  const [ showModal, setShowModal ] = useState(false);

  return (
    <div className="app-layout">
      <Sidebar onTransactionClick={() => setShowModal(true)} />
  
      <div className="right-panel">
        <Searchbar />
       <main className="main-content">
          {showModal && (
            <NewTransactionModal onClose={() => setShowModal(true)} />
          )}
          <Outlet />
       </main>
      </div>
    </div>
  );
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "transactions", element: <Transactions /> },
      { path: "documents", element: <Documents /> },
      { path: "aiassistant", element: <AiAssistant /> }
    ],
  },
  { path: "loginpage", element: <LoginPage /> },
  { path: "signuppage", element: <SignupPage /> },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
// function App() {
//   const [showModal, setShowModal] = useState(false);

//   const router = createBrowserRouter([

//     { path: "loginpage", element: <LoginPage /> },
//     { path: "signup", element: <SignupPage /> },

//     {
//       path: "/",
//       element: (
//       <main className="web-layout">
//         <Sidebar onTransactionClick={() => setShowModal(true)} />

//         <div className="main-content">
//           <Outlet />
        
//          {showModal && (
//           <>
//            <NewTransactionModal onClose={() => setShowModal(false)} />
//           </>
//           )}
//         </div>
//       </main>
//       ),
//       children: [
//         { path: "dashboard", element: <Dashboard /> },
//       { path: "dashboard", element: <Dashboard /> },
//       { path: "documentspage", element: <DocumentsPage />},
//       { path: "transactions", element: <Transactions />},
//       { path: "aiassistant", element: <AIassistant /> },
//       ],
//     },
//   ]);  

//   return <RouterProvider router = {router} />;
// };

// export default App;