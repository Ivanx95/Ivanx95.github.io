



import { render} from '../base/baseComponent.js';
import {loadScript} from './Utils/LoadScript.js';



export async function labs(fatherComponent){
  
   
    
  render("js/components/LabsComponent.html", fatherComponent);

  loadScript("https://docs.opencv.org/3.3.1/opencv.js", function(){

        console.log('OpenCV fully loaded');
        let openCvBanner =  document.getElementById('openCvBanner');
        if(openCvBanner!== undefined){
          openCvBanner.innerHTML="OpenCV fully loaded";
          
        }
        onOpenCvLoaded();
    });
  
  
  
}

onOpenCvLoaded(){
}
