import {createView} from '../base/views/BaseViewPromise.js';


export async function canvasCard(title,childNodes,updateSelectors){



    let canvas = await  createView("js/components/CanvasCard.html");
    let titleEl = canvas.querySelector(".intro-title");
    titleEl.innerHTML=title;
    
     if(childNodes){
             const entries = Object.entries(childNodes);
             for (const [keyElement, child] of entries) {
                let auxElement = canvas.querySelector(keyElement);
                 if(auxElement){
                     auxElement.appendChild(child);
                 }
                
             }

        }
    if(updateSelectors){
           const entries = Object.entries(updateSelectors);

             for (const [keyElement, property,valueProperty] of entries) {

                let auxElement = canvas.querySelector(keyElement);

                 if(auxElement){
                      auxElement.[property]=valueProperty;
                 }
             }
         
          
    }

    return canvas;

}
