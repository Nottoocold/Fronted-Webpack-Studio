import Home from '@/pages/index.js';
import "./index.css";
import _ from 'lodash';

function component() {
  const element = document.getElementById("root");
  element.classList.add("root");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  Home(element);
  return element;
}


Array.of(1,2,3,4,5).filter(item => item %2 === 0).forEach(item => console.log(item));
const ori = Array.of(1,2)
console.log([...ori, 3,4]);


document.body.appendChild(component());
