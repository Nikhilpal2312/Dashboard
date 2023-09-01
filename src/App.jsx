import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from './compontents/pages/transctions/dashboard/Dashboard';
import Support from './compontents/pages/transctions/support/Support';
import TransactionsPage from './compontents/pages/transctions/Transactions';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>
  },
  {
    path: "transactions",
    element:<TransactionsPage/>
  },
  {
    path: "support",
    element:<Support/>
  },
]);


function App() {

  return (
    <>

<RouterProvider router={router} />
    
    </>
  )
}

export default App;
