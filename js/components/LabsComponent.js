

import {prepareElement} from '../base/views/PrepareSwitch.js';



import {createView} from '../base/views/BaseViewPromise.js';


export async function labs(fatherComponent){
  
    prepareElement(fatherComponent);

    var element  = await createView("js/components/LabsComponent.html");

    


  
}
