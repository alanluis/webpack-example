import cow from './cow'  
import './sass/main.scss'
import './sass/index.scss'

import icon from './img/icon.png'

document.querySelector('#icon').innerHTML = `<img src="${icon}" />`;

const message = 'is great' ;
document.querySelector('#box').innerText = cow.say(`Webpack with Babel ${message}!`);