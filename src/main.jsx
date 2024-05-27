import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/main.css'
import About from './components/specific/About';
import Home from './components/specific/Home';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Project from './components/specific/Project';
import Skills from './components/specific/Skills';
import Contact from './components/specific/Contact';
import Navigation from './components/specific/Navigation';
import Services from './components/specific/Services';
import App from './App';
import ErrorPage from './components/specific/Error';

const router = createBrowserRouter([
    {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
        {
        path: "/project",
        element: <Project />,
      },
        {
        path: "/skills",
        element: <Skills />,
      },
        {
        path: "/contact",
        element: <Contact />,
      },
          {
        path: "/services",
        element: <Services />,
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);