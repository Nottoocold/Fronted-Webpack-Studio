import { Link, Outlet } from "react-router-dom";
import "./index.less";

function Header() {
  return (
    <header>
      标题路由菜单项
      <ul className="nav">
        <li className="nav-item">
          <Link to="/">看板</Link>
        </li>
        <li className="nav-item">
          <Link to={`/article/${Math.round(Math.random() * 1000000)}`}>
            文章
          </Link>
        </li>
      </ul>
    </header>
  );
}

function Footer() {
  return <footer>Footer</footer>;
}

function Layout() {
  return (
    <div>
      <Header />
      <main className="main">
        <div>
          二级路由出口位置，由子路由决定
          <Outlet></Outlet>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default Layout;
