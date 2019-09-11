import {createView} from '../base/views/BaseViewPromise.js';


export async function canvasCard(title,childNodes){



    let canvas = await  createView("js/components/CanvasCard.html");
    let titleEl = canvas.querySelector(".intro-title");
    titleEl.innerHTML=title;
    
     if(childNodes){
             const entries = Object.entries(childNodes);
             for (const [keyElement, child] of entries) {
                let auxElement = element.querySelector(keyElement);
                auxElement.appendChild(child);
             }

        }

    return canvas;

}
