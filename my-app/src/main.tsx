import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from "./error-page"
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from "./routes/contacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: "",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
