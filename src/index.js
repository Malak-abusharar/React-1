import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Basic from './pages/Basic';
import Framework from './pages/Framework';
import Tips from './pages/Tips';
import { HelmetProvider } from 'react-helmet-async';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Not Found</h1>,
  },
  {
    path: "/Basic",
    element: <Basic />,
  },
  {
    path: "/Framework",
    element: <Framework/>,
  },
  {
    path: "/Tips",
    element: <Tips />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <HelmetProvider>
         <RouterProvider router={router} />
         </HelmetProvider>
  </React.StrictMode>
);
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

