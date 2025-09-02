import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Projects from "./pages/Projects.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Projects /> },
], {
  basename: "/portfolio",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
