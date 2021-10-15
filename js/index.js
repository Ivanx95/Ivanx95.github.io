

 import { route } from './Router.js';

window.onload = onInit;



function onInit(){


    route();
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

	configureStaticHTML();
}


function configureStaticHTML(){
	let navBar=document.querySelector('#burguer');
	
	if(navBar){
	
		navBar.addEventListener('click', function(e){
		
			let target= navBar.dataset.target; 
			let navMenu=document.getElementById(target);
			
			if(navMenu){
			navBar.classList.toggle('is-active');
			navMenu.classList.toggle('is-active');
			}
		})
		
		
	}

}

