import "./index.less";
import { Clock } from "@/components";

export default function Home(props) {
  return (
    <div className="home-title">
      <h1>Home Page</h1>
      <Clock />
    </div>
  );
}
