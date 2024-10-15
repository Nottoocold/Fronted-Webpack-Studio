import { Button } from "antd";
import "./index.less";
import { Clock } from "@/components";
import { useNavigate } from "react-router-dom";

export default function Home(props) {
  const navigate = useNavigate();

  function generateToken() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let token = "";
    for (let i = 0; i < 32; i++) {
      token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return token;
  }

  function goLogin() {
    // 1. 跳转到登录页面
    // navigate("/login");
    // 2. 跳转到登录页面，并带上参数，第一种方式
    // navigate(`/login?id=${Math.random() * 1000000000}&name=zhangsan`, { replace: false });
    // 3. 跳转到登录页面，并带上参数，第二种方式
    navigate(`/login/${generateToken()}`)
  }

  return (
    <div className="home-title">
      <h1>Home Page</h1>
      <Clock />
      <div><Button type='primary' onClick={goLogin}>Go to Login</Button></div>
    </div>
  );
}
