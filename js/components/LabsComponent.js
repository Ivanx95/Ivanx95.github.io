



import { render} from '../base/baseComponent.js';




export async function labs(fatherComponent){
  
   

    var element  = await createView("js/components/LabsComponent.html");

    
  render("js/components/LabsComponent.html", fatherComponent);

  
}
