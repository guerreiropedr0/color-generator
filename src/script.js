import './style.css';
import populateColor from './modules/color.js';

populateColor();

document.querySelector('button').addEventListener('click', () => {
  populateColor();
});
