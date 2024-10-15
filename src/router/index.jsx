import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Layout from "@/pages/Layout";
import Dashboard from "@/pages/Dashboard";
import Article from "@/pages/Article";
import NotFound from "@/pages/Error/404";

const routerConfig = [
  { path: "/", element: <Home /> },
  { path: "/login/:token", element: <Login /> },
  { path: "*", element: <NotFound /> },
];

// const router = createBrowserRouter(routerConfig);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // { path: "/dashboard", element: <Dashboard /> },
      { index: true, element: <Dashboard /> }, // default route
      { path: "/article/:id", element: <Article /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
