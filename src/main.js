//Jquery + Plugins.
import {jQuery} from 'jquery';
window.$ = window.jQuery = jQuery;
import './js/plugins';

//BootStrap JS
import 'bootstrap';

//All global styles
import './scss/main.scss';

//Base assets for index.html
import './img/favicon.ico';
import './img/icon.png'
import './img/tile-wide.png';
import './img/tile.png';
import './browserconfig.xml';
import './site.webmanifest';
import './humans.txt';
import './robots.txt';


function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());

$(function(){
  $('body').text('youpi!');
});