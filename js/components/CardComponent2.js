


import { render} from '../base/baseComponent.js';
import {createView} from '../base/views/BaseView.js';
import {localPath} from '../base/LocalPath.js';

export class CardComp{



	 constructor( fatherComponent, primaryImage, secondaryImage, title, content, childNodes) {
 		
 		var cardPromise  =createView("js/components/Card2.html", element=>{
    

        while (fatherComponent.firstChild) {
            fatherComponent.removeChild(fatherComponent.firstChild);
        }

         var figure2=element.querySelector(".is-48x48");

         var figure1=element.querySelector(".is-4by3");
         var img1 = figure1.childNodes[1];
         
         var url = [location.protocol, '//', location.host, location.pathname].join('');
         img1.src= url+localPath+"assets/"+primaryImage;
         this.img1 =img1;
        var titleNode=element.querySelector(".intro-title");
        titleNode.innerHTML=title;

        var contentNode=element.querySelector(".intro-content");

        let contentElement = document.createElement("p");

        contentElement.innerHTML=content;
        
        contentNode.innerHTML=null;

        contentNode.appendChild(contentElement);

        if(childNodes){
            
             const entries = Object.entries(childNodes);

            for (const [keyElement, child] of entries) {
                let auxElement = element.querySelector(keyElement);
                auxElement.appendChild(child);
            }
        }
       

        fatherComponent.appendChild(element);
    });  
  	}


  	getImg(){
  		return this.img;
  	}
}