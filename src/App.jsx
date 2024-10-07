import Home from "@/pages/Home";
import "./App.less"; // 全局样式
import { ConfigProvider } from "antd";

export default function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          // 更多详情，参考https://ant-design.antgroup.com/docs/react/customize-theme-cn
          // Seed Token，影响范围大
          colorPrimary: "#00b96b",
          
          // 派生变量，影响范围小
          colorBgContainer: "#f6ffed",
        },
      }}
    >
      <h1>Welcome to Fronted Webpack Studio</h1>
      <Home />
    </ConfigProvider>
  );
}
