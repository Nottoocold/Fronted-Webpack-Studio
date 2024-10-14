import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import Login from "@/pages/Login";

const routerConfig = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
];

const router = createBrowserRouter(routerConfig);

export default router;
