
import { render} from '../base/baseComponent.js';
import {createView} from '../base/views/BaseView.js';

export function card( fatherComponent){

    var cardPromise  =createView("js/components/Card.html", element=>{
    
        while (fatherComponent.hasChildNodes()){
            fatherComponent.removeChild(fatherComponent.lastChild);
        }

        fatherComponent.appendChild(element);


    });


}