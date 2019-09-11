


import {column} from '../base/views/ColumnComponent.js';
import {createView} from '../base/views/BaseViewPromise.js';
import {loadScript} from './Utils/LoadScript.js';

import {CardComp} from './CardComponent2.js';
import {FileInput} from './FileInputComponent.js';
import {prepareElement} from '../base/views/PrepareSwitch.js';

export async function labs(fatherComponent){
  
try {
   prepareElement(fatherComponent);

  var element  = await createView("js/components/LabsComponent.html");

   fatherComponent.appendChild(element);
    
    const fileInputComp=  new FileInput();
    let fileInput = await fileInputComp.getFileInput();
    const col1 = await column();
    let mixFileInput = {".intro-content":fileInput};
    const card = new CardComp(col1,"","", "Image Search","",mixFileInput);
   

   const col2 = await column();

  const card2 = new CardComp(col2,"","", "Output","");
    loadScript("https://docs.opencv.org/3.3.1/opencv.js", function(){

        element=element.querySelector(".intro-columns");

         element.appendChild(col1);
         element.appendChild(col2);
        console.log('OpenCV fully loaded');
        let openCvBanner =  fatherComponent.querySelector('#openCvBanner');
        if(openCvBanner!=null){
          openCvBanner.innerHTML="OpenCV fully loaded";
          
          var imgElement = fatherComponent.querySelector(".is-4by3").childNodes[1];
   
        let inputFile =fileInput.querySelector('.file-input');

        inputFile.addEventListener("change", (e) => {
            imgElement.src = URL.createObjectURL(e.target.files[0]);
        }, false);
          
           let btnExecute = fileInput.querySelector('#btnAction');
           btnExecute.addEventListener("click", (e) =>{
             onExecuteOpenCV();
           });
        }

    });
}
catch(error) {
  console.error(error);
  let mainComponent = document.getElementById("mainComponent");
  mainComponent.innerHTML=error;
}
   
  
  
  
}

function onExecuteOpenCV(fileInput){
   
  console.log('execute');
}
