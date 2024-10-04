import home from "./pages/index.js";
import "./index.css";

function component() {
  const element = document.createElement("div");
  element.classList.add("root");
  home(element);
  return element;
}

document.body.appendChild(component());
