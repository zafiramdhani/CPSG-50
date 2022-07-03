/* eslint-disable import/no-extraneous-dependencies */
import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
// eslint-disable-next-line no-unused-vars
import swal from 'sweetalert';
import StartApp from './templates/template';

const home = new StartApp({
  home: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  home.renderPage();
});

window.addEventListener('load', () => {
  home.renderPage();
});
