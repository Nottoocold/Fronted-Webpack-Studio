import _ from "lodash";

function component() {
  const element = document.createElement("div");

  // lodash 从 npm 包中导入 join 方法
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
