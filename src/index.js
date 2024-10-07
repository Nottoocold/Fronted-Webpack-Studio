import "./index.less";
import { createRoot } from 'react-dom/client'; // react 18+ version of createRoot, else react-dom
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(<App />);
