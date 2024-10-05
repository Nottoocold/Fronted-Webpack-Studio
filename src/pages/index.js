import './index.css';
import pic2 from '@/images/pic2.webp';
import printMe from '@/js/print.js';
import _ from 'lodash';

function home(container) {
    const title = document.createElement('h1');
    title.textContent = 'Welcome to Webpack Studio';
    container.appendChild(title);
    const button = document.createElement('button');
    button.textContent = 'Click me to print';
    button.onclick = printMe;
    container.appendChild(button);

    _.times(5, i => {
        const p = document.createElement('p');
        p.textContent = `This is paragraph ${i}`;
        container.appendChild(p);
    });

    const img = document.createElement('img');
    img.src = pic2;
    container.appendChild(img);
}

export default home;