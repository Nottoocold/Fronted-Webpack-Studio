import _ from "lodash";
import "./style.css";
import pic from './demo_pic.png';
import data from './data.csv';
import notes from './data.xml';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml.title); // 输出 `TOML Example`
console.log(toml.owner.name); // 输出 `Tom Preston-Werner`

console.log(yaml.title); // 输出 `YAML Example`
console.log(yaml.owner.name); // 输出 `Tom Preston-Werner`

console.log(json.title); // 输出 `JSON5 Example`
console.log(json.owner.name); // 输出 `Tom Preston-Werner

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
