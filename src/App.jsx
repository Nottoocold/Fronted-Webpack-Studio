import Home from "@/pages/Home";
import "./App.less"; // 全局样式
import { createBrowserRouter, RouterProvider, Router, Link } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <div>this is login page.</div> },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
