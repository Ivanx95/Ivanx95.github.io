

 import { route } from './Router.js';

window.onload = onInit;



function onInit(){

    window.onhashchange=route();

}




