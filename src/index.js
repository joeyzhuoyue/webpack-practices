// src/index.js
import { greetings } from './utils';

greetings();
const appElement = document.getElementById('app');
appElement.innerHTML = `<p>This content is bundled with Webpack! ${greetings()}</p>`;
