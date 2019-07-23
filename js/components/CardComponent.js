
import { render} from '../base/baseComponent.js';
import {createView} from '../base/views/BaseView.js';
import {localPath} from '../base/LocalPath.js';
export function card( fatherComponent, primaryImage, secondaryImage, title, content){

    var cardPromise  =createView("js/components/Card.html", element=>{
    
        while (fatherComponent.hasChildNodes()){
            fatherComponent.removeChild(fatherComponent.lastChild);
        }

         var figure2=element.querySelector(".is-48x48");
         var img2 =figure2.childNodes[1];

         var figure1=element.querySelector(".is-4by3");
         var img1 = figure1.childNodes[1];
         
         var url = [location.protocol, '//', location.host, location.pathname].join('');
         img2.src= url+localPath+"assets/"+secondaryImage;
         img1.src= url+localPath+"assets/"+primaryImage;

         fatherComponent.appendChild(element);
    });


}