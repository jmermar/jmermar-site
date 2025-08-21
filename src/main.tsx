import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Projects from "./pages/Projects.tsx";
import Home from "./pages/Home.tsx";
import Project from "./pages/Project.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/project/:id",
    element: <Project />,
  },
], {
  basename: "/jmermar-site"
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
