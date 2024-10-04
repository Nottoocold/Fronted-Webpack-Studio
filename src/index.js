import _ from "lodash";
import printMe from "./print.js";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;
  
  // lodash 从 npm 包中导入 join 方法
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  
  element.appendChild(btn);
  
  
  return element;
}

document.body.appendChild(component());
