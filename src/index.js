

 import { route } from './Router.js';

window.onload = onInit;



function onInit(){

            let component = document.getElementById('mainComponent');
            route(window.location,component);

}




