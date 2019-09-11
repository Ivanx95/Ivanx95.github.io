


import {column} from '../base/views/ColumnComponent.js';
import {createView} from '../base/views/BaseViewPromise.js';
import {loadScript} from './Utils/LoadScript.js';

import {CardComp} from './CardComponent2.js';

import {canvasCard} from './CanvasCardComponent.js';
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
  
    let mixFileInput = {".media-content":fileInput};
  
    const card = await canvasCard("Input",mixFileInput);
  
    const col2 = await column();
  
    const card2 = await canvasCard("Output");
  
    col2.appendChild(card2);
    col1.appendChild(card);
    loadScript("https://docs.opencv.org/3.3.1/opencv.js", function(){

        var introColumns =element.querySelector(".intro-columns");

         introColumns.appendChild(col1);
         introColumns.appendChild(col2);
         console.log('OpenCV fully loaded');
         let openCvBanner =  fatherComponent.querySelector('#openCvBanner');
         if(openCvBanner!=null){
           openCvBanner.innerHTML="OpenCV fully loaded";
          
           var imgElement = card.querySelector(".canvas");
   
           let inputFile =fileInput.querySelector('.file-input');

           inputFile.addEventListener("change", (e) => {

               var context = imgElement.getContext('2d');
 
               var imageObj = new Image();
 
               imageObj.onload = function() {
 
                  context.drawImage(imageObj, 69, 50);
 
               };
                imageObj.src = URL.createObjectURL(e.target.files[0]);
             }, false);
          
           let btnExecute = fileInput.querySelector('#btnAction');
           btnExecute.addEventListener("click", (e) =>{
             onExecuteOpenCV(imgElement);
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

function onExecuteOpenCV(imgElement,imageOutPut){
   
    console.log('execute');

    let src = cv.imread(imgElement);
    let dst = new cv.Mat();
    // To distinguish the input and output, we graying the image.
    // You can try different conversions.
    cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY);
    cv.imshow(imageOutPut, dst);
    src.delete();
    dst.delete();
}
