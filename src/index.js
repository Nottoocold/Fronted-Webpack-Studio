import _ from "lodash";
import "./style.css";
import pic from './demo_pic.png';
import data from './data.csv';
import notes from './data.xml';

function component() {
  const element = document.createElement("div");

  // lodash 从 npm 包中导入 join 方法
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  const img = new Image();
  img.src = pic;
  img.width = 200;
  img.height = 200;
  element.appendChild(img);

  console.log('csv data',data);
  console.log('xml notes',notes);
  
  return element;
}

document.body.appendChild(component());
