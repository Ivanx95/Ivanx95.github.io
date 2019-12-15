


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
  
    var mixValueProperties = [{selector:".canvas", property:"id", valueProperty:"inputCanvas"}];
    const card = await canvasCard("Input",mixFileInput,mixValueProperties);
    
    mixValueProperties = [{selector:".canvas", property:"id", valueProperty:"outputCanvas"}];
  

    const col2 = await column();
  
   	let openCvBanner =  fatherComponent.querySelector('#openCvBanner');
           
    openCvBanner.classList.toggle('is-loading');       
    const card2 = await canvasCard("Output",null,mixValueProperties);
  
    col2.appendChild(card2);
    col1.appendChild(card);
    loadScript("https://docs.opencv.org/3.3.1/opencv.js", function(){

        var introColumns =element.querySelector(".intro-columns");

		let progressBar =  fatherComponent.querySelectorAll('.progress');
		
         introColumns.appendChild(col1);
         introColumns.appendChild(col2);
         console.log('OpenCV fully loaded');

         if(openCvBanner!=null){
          // openCvBanner.classList.toggle('is-loading');    
           openCvBanner.innerHTML="OpenCV fully loaded";
          
          if(progressBar){
          	progressBar[0].setAttribute("value", "100");
          }
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

   // let src = cv.imread('inputCanvas');
   // let dstX = new cv.Mat();
  let src = cv.imread('inputCanvas');
  let dst = cv.Mat.zeros(src.rows, src.cols, cv.CV_8UC3);
  cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
  cv.threshold(src, src, 100, 200, cv.THRESH_BINARY);
  let contours = new cv.MatVector();
  let hierarchy = new cv.Mat();
  let hull = new cv.MatVector();
  cv.findContours(src, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
// approximates each contour to convex hull
  for (let i = 0; i < contours.size(); ++i) {
      let tmp = new cv.Mat();
      let cnt = contours.get(i);
    // You can try more different parameters
      cv.convexHull(cnt, tmp, false, true);
      hull.push_back(tmp);
      cnt.delete(); tmp.delete();
  }
// draw contours with random Scalar
  for (let i = 0; i < contours.size(); ++i) {
      let colorHull = new cv.Scalar(Math.round(Math.random() * 255), Math.round(Math.random() * 255),
                                    Math.round(Math.random() * 255));
      cv.drawContours(dst, hull, i, colorHull, 1, 8, hierarchy, 0);
  }
  cv.imshow('outputCanvas', dst);
  src.delete(); dst.delete(); hierarchy.delete(); contours.delete(); hull.delete();

  /*
    // To distinguish the input and output, we graying the image.
    // You can try different conversions.
    cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
    cv.Canny(src, dstx, 50, 100, 3, false);
    //cv.Laplacian(src, dstX, cv.CV_8U, 1, 1, 0, cv.BORDER_DEFAULT);
    cv.imshow('outputCanvas', dstX);
    src.delete();
    dstX.delete();*/
}
