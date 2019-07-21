

 import { route } from './Router.js';

window.onload = onInit;



function onInit(){



    if ("onhashchange" in window) { // event supported?
        window.onhashchange = function () {
            route();
        }
    }
    else { // event not supported:
        var storedHash = window.location.hash;
        window.setInterval(function () {
            if (window.location.hash != storedHash) {
                route();
            }
        }, 100);
    }


}




