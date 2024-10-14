import "./App.less"; // 全局样式
import { RouterProvider } from "react-router-dom";
import router from './router'

function App() {
  return <RouterProvider router={router} />;
}

export default App;
