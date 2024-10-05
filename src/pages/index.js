import './index.css';
import pic2 from '@/images/pic2.webp';
import printMe from '@/js/print.js';

function home(container) {
    const title = document.createElement('h1');
    title.textContent = 'Welcome to Webpack Studio';
    container.appendChild(title);
    const button = document.createElement('button');
    button.textContent = 'Click me to print';
    button.onclick = printMe;
    container.appendChild(button);

    const img = document.createElement('img');
    img.src = pic2;
    container.appendChild(img);
}

export default home;