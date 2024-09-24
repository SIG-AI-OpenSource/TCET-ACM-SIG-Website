import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Events from "./pages/Events";
import Eventdetail from "./components/Eventdetail";
import Pubs from "./pages/Pubs";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/pubs",
        element: <Pubs />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/events/:id",
        element: <Eventdetail />,
      },
    ],
  },
]);

export default appRouter;
